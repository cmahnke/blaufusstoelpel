#!/usr/bin/env python3
"""Generate a IIIF Presentation 3 manifest modelling a two-sided leaflet.

Scans an input directory for immediate subdirectories containing an
``info.json`` (IIIF Image API, static level-0 tiles as produced for
``content/post/catalina``), groups them into a front side (``page001*``)
and a back side (``page002*``), and emits a single manifest with exactly
two canvases. Each canvas composes its side's panels left-to-right via
multiple ``painting`` annotations with ``#xywh`` fragment targets
(IIIF cookbook recipe 0036).

Usage:
    python3 generate_iiif_manifest.py --base-url URL [--input-dir DIR]
        [--output FILE] [--manifest-id ID] [--id-base URL] [--label LABEL]
        [--rewrite-info-ids | --no-rewrite-info-ids]
        [--continuous-ranges | --no-continuous-ranges]
        [--validate | --no-validate]

The script also rewrites @id in each discovered info.json to its absolute
service URL (disable with --no-rewrite-info-ids), and aborts if any emitted
manifest id/@id is not absolute.

Defaults resolve relative to this script so it works from any CWD:
    input:  <repo-root>/content/post/catalina
    output: <mocks-root>/public/catalina/manifest.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
MOCKS_ROOT = SCRIPT_DIR.parent
# .../Mocks/scripts -> .../Mocks -> .../Source Files -> .../blaufusstoelpel
REPO_ROOT = SCRIPT_DIR.parents[2]

DEFAULT_INPUT_DIR = REPO_ROOT / "content" / "post" / "catalina"
DEFAULT_OUTPUT = MOCKS_ROOT / "public" / "catalina" / "manifest.json"
DEFAULT_BASE_URL = "http://localhost:5173/catalina"

FRONT_PREFIX = "page001"
BACK_PREFIX = "page002"


def is_absolute_url(value: str) -> bool:
    return value.startswith("http://") or value.startswith("https://")


def assert_absolute_urls(node: object, *, context: str) -> None:
    """Recursively assert every id/@id in a JSON structure is absolute."""
    bad: list[str] = []

    def walk(o: object) -> None:
        if isinstance(o, dict):
            for key, value in o.items():
                if key in ("id", "@id") and isinstance(value, str) and not is_absolute_url(value):
                    bad.append(f"{context}: {key}={value!r}")
                walk(value)
        elif isinstance(o, list):
            for item in o:
                walk(item)

    walk(node)
    if bad:
        raise SystemExit("non-absolute URL(s) found:\n" + "\n".join(bad))


def validate_manifest(manifest: dict) -> list[str]:
    """Validate the manifest against the IIIF Presentation 3 data model.

    Returns a list of findings (empty when valid). Never raises for
    validation problems — the caller decides how to report them.
    """
    try:
        from iiif_prezi3 import Manifest
    except ImportError:
        return [
            "skipped: iiif-prezi3 not installed "
            "(pip install -r scripts/requirements.txt to enable validation)"
        ]
    try:
        Manifest.model_validate(manifest)
    except Exception as exc:  # pydantic ValidationError (kept broad for forward compat)
        findings = []
        errors = getattr(exc, "errors", lambda: [])()
        for error in errors:
            loc = ".".join(str(part) for part in error.get("loc", ()))
            findings.append(f"{loc}: {error.get('msg', exc)}")
        return findings or [str(exc)]
    return []


def find_service_dirs(input_dir: Path) -> list[Path]:
    """Return immediate subdirs of input_dir containing an info.json, sorted."""
    if not input_dir.is_dir():
        raise SystemExit(f"input dir not found: {input_dir}")
    found = [p for p in sorted(input_dir.iterdir()) if p.is_dir() and (p / "info.json").is_file()]
    if not found:
        raise SystemExit(f"no subdirectories with info.json in {input_dir}")
    return found


def load_panel(service_dir: Path) -> tuple[str, int, int]:
    """Return (name, width, height) from a service dir's info.json."""
    with open(service_dir / "info.json", encoding="utf-8") as fh:
        info = json.load(fh)
    try:
        width = int(info["width"])
        height = int(info["height"])
    except (KeyError, TypeError, ValueError) as exc:
        raise SystemExit(f"{service_dir}/info.json missing width/height: {exc}") from exc
    return service_dir.name, width, height


def rewrite_info_ids(service_dirs: list[Path], base_url: str) -> int:
    """Set absolute @id in each service dir's info.json. Returns rewrite count."""
    rewritten = 0
    for service_dir in service_dirs:
        info_path = service_dir / "info.json"
        with open(info_path, encoding="utf-8") as fh:
            info = json.load(fh)
        absolute_id = f"{base_url}/{service_dir.name}"
        if info.get("@id") != absolute_id:
            info["@id"] = absolute_id
            with open(info_path, "w", encoding="utf-8") as fh:
                json.dump(info, fh, indent=2, ensure_ascii=False)
                fh.write("\n")
            rewritten += 1
    return rewritten


def build_side_canvas(
    *,
    base_url: str,
    id_base: str,
    side: str,
    canvas_id: str,
    label: str,
    panels: list[tuple[str, int, int]],
) -> tuple[dict, list[dict]]:
    """Build one canvas composing panels left-to-right.

    Returns (canvas, page_ranges): one nested Range per panel addressing its
    xywh region, so each page is individually addressable/navigable.
    """
    canvas_width = sum(w for _, w, _ in panels)
    canvas_height = max(h for _, _, h in panels)
    annotations = []
    page_ranges = []
    x_offset = 0
    for index, (name, width, height) in enumerate(panels, start=1):
        service_id = f"{base_url}/{name}"
        fragment = f"{x_offset},0,{width},{height}"
        annotations.append(
            {
                "id": f"{canvas_id}/annotation/p{index:03d}",
                "type": "Annotation",
                "motivation": "painting",
                "label": {"none": [name]},
                "body": {
                    "id": f"{service_id}/full/full/0/default.jpg",
                    "type": "Image",
                    "format": "image/jpeg",
                    "width": width,
                    "height": height,
                    "service": [
                        {
                            "id": service_id,
                            "type": "ImageService2",
                            "profile": "http://iiif.io/api/image/2/level0.json",
                        }
                    ],
                },
                "target": f"{canvas_id}#xywh={fragment}",
            }
        )
        page_ranges.append(
            {
                "id": f"{id_base}/range/page/{name}",
                "type": "Range",
                "label": {"en": [f"Page {index}"]},
                "items": [{"id": f"{canvas_id}#xywh={fragment}", "type": "Canvas"}],
            }
        )
        x_offset += width
    canvas = {
        "id": canvas_id,
        "type": "Canvas",
        "label": {"en": [label]},
        "width": canvas_width,
        "height": canvas_height,
        "items": [
            {
                "id": f"{canvas_id}/page/1",
                "type": "AnnotationPage",
                "items": annotations,
            }
        ],
    }
    # Attach a thumbnail from the first panel (156px static rendition exists).
    first_name = panels[0][0]
    canvas["thumbnail"] = [
        {
            "id": f"{base_url}/{first_name}/full/156,/0/default.jpg",
            "type": "Image",
            "format": "image/jpeg",
            "service": [
                {
                    "id": f"{base_url}/{first_name}",
                    "type": "ImageService2",
                    "profile": "http://iiif.io/api/image/2/level0.json",
                }
            ],
        }
    ]
    _ = side  # reserved for future per-side behaviour
    return canvas, page_ranges


def build_manifest(
    *,
    manifest_id: str,
    id_base: str,
    base_url: str,
    label: str,
    front: list[tuple[str, int, int]],
    back: list[tuple[str, int, int]],
    continuous_ranges: bool = False,
) -> dict:
    front_canvas, front_pages = build_side_canvas(
        base_url=base_url,
        id_base=id_base,
        side="front",
        canvas_id=f"{id_base}/canvas/front",
        label="Front",
        panels=front,
    )
    back_canvas, back_pages = build_side_canvas(
        base_url=base_url,
        id_base=id_base,
        side="back",
        canvas_id=f"{id_base}/canvas/back",
        label="Back",
        panels=back,
    )
    return {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        "id": manifest_id,
        "type": "Manifest",
        "label": {"en": [label]},
        "viewingDirection": "left-to-right",
        "items": [front_canvas, back_canvas],
        "structures": [
            {
                "id": f"{id_base}/range/front",
                "type": "Range",
                "label": {"en": ["Front (outside)"]},
                **({"behavior": ["continuous"]} if continuous_ranges else {}),
                "items": front_pages,
            },
            {
                "id": f"{id_base}/range/back",
                "type": "Range",
                "label": {"en": ["Back (inside)"]},
                **({"behavior": ["continuous"]} if continuous_ranges else {}),
                "items": back_pages,
            },
        ],
    }


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--input-dir",
        type=Path,
        default=DEFAULT_INPUT_DIR,
        help=f"directory with per-panel subdirs containing info.json (default: {DEFAULT_INPUT_DIR})",
    )
    parser.add_argument(
        "--base-url",
        default=DEFAULT_BASE_URL,
        help=f"public base URL of the static Image API endpoints (default: {DEFAULT_BASE_URL})",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"where to write the manifest (default: {DEFAULT_OUTPUT})",
    )
    parser.add_argument(
        "--manifest-id",
        default=None,
        help="manifest id (default: <base-url>/manifest.json)",
    )
    parser.add_argument(
        "--id-base",
        default=None,
        help="base for canvas/annotation/range ids (default: <base-url>)",
    )
    parser.add_argument("--label", default="Catalina Leaflet", help="manifest label")
    parser.add_argument(
        "--rewrite-info-ids",
        action=argparse.BooleanOptionalAction,
        default=True,
        help="rewrite @id in each info.json to its absolute service URL (default: on)",
    )
    parser.add_argument(
        "--continuous-ranges",
        action=argparse.BooleanOptionalAction,
        default=False,
        help="declare behavior continuous on the two side ranges (default: off)",
    )
    parser.add_argument(
        "--validate",
        action=argparse.BooleanOptionalAction,
        default=True,
        help="validate the manifest with iiif-prezi3; findings are warnings only (default: on)",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    base_url = str(args.base_url).rstrip("/")
    if not is_absolute_url(base_url):
        raise SystemExit(f"--base-url must be absolute, got: {args.base_url!r}")
    manifest_id = args.manifest_id or f"{base_url}/manifest.json"
    id_base = (str(args.id_base).rstrip("/") if args.id_base else base_url)

    service_dirs = find_service_dirs(args.input_dir)
    if args.rewrite_info_ids:
        rewritten = rewrite_info_ids(service_dirs, base_url)
        print(f"rewrote @id in {rewritten}/{len(service_dirs)} info.json")
    panels = [load_panel(d) for d in service_dirs]
    front = [p for p in panels if p[0].startswith(FRONT_PREFIX)]
    back = [p for p in panels if p[0].startswith(BACK_PREFIX)]
    if not front:
        raise SystemExit(f"no {FRONT_PREFIX}* panels found in {args.input_dir}")
    if not back:
        raise SystemExit(f"no {BACK_PREFIX}* panels found in {args.input_dir}")
    stray = [n for n, _, _ in panels if n not in {n for n, _, _ in front + back}]
    if stray:
        print(f"warning: ignoring non-leaflet dirs: {', '.join(stray)}", file=sys.stderr)

    manifest = build_manifest(
        manifest_id=manifest_id,
        id_base=id_base,
        base_url=base_url,
        label=args.label,
        front=front,
        back=back,
        continuous_ranges=args.continuous_ranges,
    )
    assert_absolute_urls(manifest, context="manifest")
    if args.validate:
        findings = validate_manifest(manifest)
        if findings:
            for finding in findings:
                print(f"warning: IIIF validation: {finding}", file=sys.stderr)
        else:
            print("IIIF Presentation 3 validation passed (iiif-prezi3)")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with open(args.output, "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, indent=2, ensure_ascii=False)
        fh.write("\n")
    print(f"wrote {args.output} ({len(front)} front + {len(back)} back panels)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
