// https://vitepress.dev/guide/custom-theme
// import { h, defineComponent, inject } from 'vue'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
// import Layout from './Layout.vue'
import MyTooltip from './components/my-tooltip/index.vue'
import { NaiveUIProvider } from './libs/navive-ui-vp'
import { setup } from '@css-render/vue3-ssr'
// import OutlineCollapsePlugin from './components/custom-outline/outline-collapse.plugin'
import './style.css'
import './my-style.scss'

import * as pkg from 'naive-ui';
const { NConfigProvider, NBackTop, NImage, NTooltip, NIcon, NMenu } = pkg;

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp({ app, router, siteData }) {
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        // setTimeout(() => {
        //   OutlineCollapsePlugin()
        // }, 0);
        busuanzi.fetch()
        if (window._hmt) {
          window._hmt.push(['_setAccount', '1a46a0f223c9af96b623437cd0065193'])
          window._hmt.push(['_trackPageview', location.pathname + location.search])
        }
      }
    }
    app.component('n-image', NImage)
    app.component('n-icon', NIcon)
    app.component('n-menu', NMenu)
    app.component('NBackTop', NBackTop)
    app.component('n-tooltip', NTooltip)
    app.component('NConfigProvider', NConfigProvider)
    app.component('m-tooltip', MyTooltip)
  }
}
