// https://vitepress.dev/guide/custom-theme
import { h, defineComponent } from 'vue'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import MyTooltip from './components/my-tooltip/index.vue'
// import OutlineCollapsePlugin from './components/custom-outline/outline-collapse.plugin'
import './style.css'
import './my-style.scss'

import * as pkg from 'naive-ui';
const { NConfigProvider, NBackTop, NImage, NTooltip, NIcon, NMenu } = pkg;

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        // setTimeout(() => {
        //   OutlineCollapsePlugin()
        // }, 0);
        busuanzi.fetch()
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
