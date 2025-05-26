import { name, short_name } from '../config/meta'

export const pwa:Partial<any> = {
  // mode: 'development',
  registerType: 'autoUpdate',
  injectRegister: 'script-defer',
  includeAssets: ['favicon.svg'],
  manifest: {
    name,
    short_name,
    theme_color: '#ffffff',
    icons: [
      {
        src: '/images/site/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/site/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      // {
      //   src: 'pwa-512x512.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      //   purpose: 'any maskable',
      // },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
  },
  experimental: {
    includeAllowlist: true,
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: '/',
  },
}
