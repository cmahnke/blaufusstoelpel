import { defineConfig, type PluginOption } from 'vite'
import { DynamicPublicDirectory } from 'vite-multiple-assets'

// Serve multiple static dirs at root:
// - public/**                        -> /catalina/manifest.json, ...
// - leaflet/**                       -> /leaflet/notes.txt
// - ../../content/post/catalina/**   -> /catalina/page001-01/info.json, ...
// - tify translations                -> /tify-translations/de.json, ...
export default defineConfig({
  plugins: [
    DynamicPublicDirectory(
      [
        'public/**',
        { input: 'leaflet/**', output: '/leaflet' },
        { input: '../../content/post/catalina/**', output: '/catalina' },
        { input: 'node_modules/tify/dist/translations/**', output: '/tify-translations' },
      ],
      { ignore: ['../../content/post/catalina/*.jxl'] }
    ) as PluginOption,
  ],
  publicDir: false,
})
