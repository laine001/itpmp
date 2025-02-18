// https://vitepress.dev/guide/custom-theme
import { h, defineComponent } from 'vue'
import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import './my-style.scss'

// import { NImage, NBackTop, NIcon, NTag, NTooltip } from 'naive-ui'
// import { CafeOutline } from '@vicons/ionicons5'
import * as pkg from 'naive-ui';
const { NImage, NBackTop, NIcon, NTag, NTooltip } = pkg;

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
    // app.component('CafeOutline', CafeOutline)
    app.component('n-back-top', NBackTop)
    app.component('n-icon', NIcon)
    app.component('n-tag', NTag)
    app.component('n-tooltip', NTooltip)
  }
} satisfies Theme
