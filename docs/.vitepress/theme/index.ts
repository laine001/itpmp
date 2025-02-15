// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import './my-style.scss'

import { ImageViewer } from 'tdesign-vue-next'
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch()
      }
    }
    app.component('i-image', ImageViewer)
  }
} satisfies Theme
