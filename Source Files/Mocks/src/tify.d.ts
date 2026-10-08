declare module 'tify' {
  export interface TifyOptions {
    container: string | HTMLElement
    manifestUrl: string
    translationsDirUrl?: string
    [key: string]: unknown
  }

  export default class Tify {
    constructor(options: TifyOptions)
    mount(container: string | HTMLElement): void
    destroy(): void
    readonly ready: Promise<void>
  }
}
