import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import TwikooComment from './components/twikoo-comment/index.vue'
import { NaiveUIProvider } from './libs/navive-ui-vp'
import { setup } from '@css-render/vue3-ssr'
import './styles/vp.css'
import './styles/override-vp.scss'
import './styles/my-style.scss'

import * as pkg from 'naive-ui';
const { NConfigProvider, NBackTop, NImage, NIcon } = pkg;

// 类型声明
declare global {
  interface ImportMeta {
    env: {
      SSR?: boolean
      [key: string]: any
    }
  }
  interface Window {
    _hmt: any[]
  }
}

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp({ app, router }) {
    if ((import.meta as any).env?.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch()
        if ((window as any)._hmt) {
          (window as any)._hmt.push(['_setAccount', '1a46a0f223c9af96b623437cd0065193']);
          (window as any)._hmt.push(['_trackPageview', location.pathname + location.search])
        }
      }
    }
    app.component('n-image', NImage)
    app.component('n-icon', NIcon)
    app.component('NBackTop', NBackTop)
    app.component('NConfigProvider', NConfigProvider)
    app.component('TwikooComment', TwikooComment)
  }
}