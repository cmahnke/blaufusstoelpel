// triiiceratops 1.2.2 ships full types for its framework bindings but none
// for the custom-element bundle, so the element tag is declared here and the
// bundle import in main.ts carries a @ts-expect-error (which fails once
// upstream adds types — the signal to remove it).

interface TriiiceratopsViewerElement extends HTMLElement {
  manifestId: string
}

declare global {
  interface HTMLElementTagNameMap {
    'triiiceratops-viewer': TriiiceratopsViewerElement
  }
}

export {}
