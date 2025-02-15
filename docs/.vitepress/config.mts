import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'
import nav from './config/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "信息系统项目管理师",
  description: "信息系统项目管理师、软考、高级信息系统项目管理、项目管理、ITPM、ITPMP",
  head: [
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/images/site/favicon.ico',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
  ],
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索。例：EV或挣值',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laine001/itpmp' }
    ]
  }
})
