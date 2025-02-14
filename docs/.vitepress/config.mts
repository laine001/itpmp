import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "信息系统项目管理师",
  description: "study record",
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '✨首页', link: '/' },
      {
        text: '🚩记录总结',
        items: [
          {
            text: '🔨10大管理',
            link: '/summary/top-ten-management'
          },
          {
            text: '✏️计算题相关概念',
            link: '/summary/calc-concept'
          }
        ]
      },
      { text: '🌱关于', link: '/about/site' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/laine001/itpmp' }
    ]
  }
})
