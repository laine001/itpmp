import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'
import nav from './config/nav'

const fileAndStyles: Record<string, string> = {}

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
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'tEoeYv9IDXWj8H1q_-ZfisEOOsvVmj8TDF3QDg1wssw'
      }
    ],
    [
      'meta',
      {
        name: 'msvalidate.01',
        content: '2D1814F64604C599D231358157EE60ED'
      }
    ],
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-NVZ7WX3XRN'
      }
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-NVZ7WX3XRN');
      `
    ],
    [
      'script',
      {},
      `
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qd63ndsdgn");
      `
    ],
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?1a46a0f223c9af96b623437cd0065193";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/images/site/logo.svg',
    footer: {
      message: '巴拉巴拉哈哈哈',
      copyright: '©xxx',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航',
      level: [2, 5]
    },
    // outline: false,
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
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
                  // closeKeyAriaLabel: 'esa',
                  closeText: '关闭',
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    // socialLinks: [
    //   // { icon: 'github', link: 'https://github.com/laine001/itpmp' }
    // ]
  },
  vite: {
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc']
    }
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  }
})
