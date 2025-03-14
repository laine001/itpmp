// https://vitepress.dev/guide/custom-theme
import { h, defineComponent } from 'vue'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import MyTooltip from './components/my-tooltip/index.vue'
import './style.css'
import './my-style.scss'

import * as pkg from 'naive-ui';
const { NImage, NBackTop, NTooltip, NConfigProvider } = pkg;

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch()
      }
    }
    app.component('n-image', NImage)
    app.component('n-back-top', NBackTop)
    app.component('n-tooltip', NTooltip)
    app.component('NConfigProvider', NConfigProvider)
    app.component('m-tooltip', MyTooltip)
  }
} satisfies Theme
