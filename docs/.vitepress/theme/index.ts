// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import './my-style.scss'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch()
      }
    }
  }
} satisfies Theme
