import './style.css'

const manifestUrl = `${window.location.origin}/catalina/manifest.json`

type ViewerId = 'mirador' | 'tify' | 'triiiceratops'

const VIEWERS: readonly ViewerId[] = ['mirador', 'tify', 'triiiceratops']

const STORAGE_KEY = 'catalina-viewer'
const initialized = new Set<ViewerId>()
const instances = new Map<ViewerId, unknown>()

function sectionFor(id: ViewerId): HTMLElement {
  const section = document.getElementById(`view-${id}`)
  if (!(section instanceof HTMLElement)) {
    throw new Error(`Missing viewer section for ${id}`)
  }
  return section
}

async function initViewer(id: ViewerId): Promise<void> {
  if (initialized.has(id)) return
  if (id === 'mirador') {
    const { default: Mirador } = await import('mirador')
    instances.set(id, Mirador.viewer({ id: 'mirador', windows: [{ manifestId: manifestUrl }] }))
  } else if (id === 'tify') {
    await import('tify/dist/tify.css')
    const { default: Tify } = await import('tify')
    instances.set(
      id,
      new Tify({
        container: '#tify',
        manifestUrl,
        translationsDirUrl: '/tify-translations',
      })
    )
  } else {
    // @ts-expect-error: triiiceratops 1.2.2 provides no types for its element bundle
    await import('triiiceratops/element/register')
    await import('triiiceratops/style.css')
    const element = document.createElement('triiiceratops-viewer')
    element.manifestId = manifestUrl
    sectionFor(id).append(element)
    instances.set(id, element)
  }
  initialized.add(id)
}

function showViewer(id: ViewerId): void {
  for (const other of VIEWERS) {
    sectionFor(other).hidden = other !== id
    document
      .querySelector(`[data-viewer="${other}"]`)
      ?.setAttribute('aria-pressed', String(other === id))
  }
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // Private browsing etc. — selection simply won't persist.
  }
}

async function switchViewer(id: ViewerId): Promise<void> {
  showViewer(id)
  try {
    await initViewer(id)
  } catch (error) {
    console.error(`Failed to initialise the ${id} viewer`, error)
    sectionFor(id).textContent = `Could not load the ${id} viewer. See console for details.`
  }
}

function initialViewer(): ViewerId {
  let stored: string | null = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch {
    // Private browsing etc. — fall through to the default viewer.
  }
  return VIEWERS.includes(stored as ViewerId) ? (stored as ViewerId) : 'mirador'
}

for (const id of VIEWERS) {
  document.querySelector(`[data-viewer="${id}"]`)?.addEventListener('click', () => {
    void switchViewer(id)
  })
}

void switchViewer(initialViewer())
