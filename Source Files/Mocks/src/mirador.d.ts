declare module 'mirador' {
  const Mirador: {
    viewer: (config: Record<string, unknown>, plugins?: unknown[]) => unknown
  }
  export default Mirador
}
