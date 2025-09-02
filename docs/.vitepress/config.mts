import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'
import nav from './config/nav'

const fileAndStyles: Record<string, string> = {}

import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './plugins/pwa'
import { genFeed } from './plugins/feed'
import { generateSitemap } from 'sitemap-ts'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  pwa,
  title: "信息系统项目管理师",
  description: "信息系统项目管理师、软考、高级信息系统项目管理、项目管理、ITPM、ITPMP",
  lang: 'zh-CN',
  markdown: {
    config: (md) => {
      // 添加自定义容器：details-open（默认展开的 details）markdown-it-container
      // md.use(container, 'details-open', {
      //   validate: function(params) {
      //     return params.trim().match(/^details-open\s+(.*)$/);
      //   },
      //   render: function (tokens, idx) {
      //     const m = tokens[idx].info.trim().match(/^details-open\s+(.*)$/);
      //     if (tokens[idx].nesting === 1) {
      //       // 开始标签 - 默认展开
      //       const title = m && m[1] ? md.utils.escapeHtml(m[1]) : '详情';
      //       return `<details class="details custom-block" open>\n<summary>${title}</summary>\n`;
      //     } else {
      //       // 结束标签
      //       return '</details>\n';
      //     }
      //   }
      // });
    }
  },
  head: [
    // Favicon
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
      'link',
      {
        rel: 'icon',
        href: '/images/site/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    // SEO Meta Tags
    [
      'meta',
      {
        name: 'keywords',
        content: '信息系统项目管理师,软考,高级信息系统项目管理,项目管理,ITPM,ITPMP,软件设计师,系统架构设计师,网络工程师,数据库系统工程师,信息安全工程师,软考高级,软考中级,软考初级,计算机技术与软件专业技术资格考试'
      }
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'laine001'
      }
    ],
    [
      'meta',
      {
        name: 'robots',
        content: 'index,follow'
      }
    ],
    [
      'meta',
      {
        name: 'googlebot',
        content: 'index,follow'
      }
    ],
    // Open Graph / Facebook
    [
      'meta',
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://itpmp.cc/'
      }
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: '信息系统项目管理师 - 软考高级认证学习指南'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: '专业的信息系统项目管理师学习平台，提供软考高级认证考试指南、项目管理知识体系、ITPM实战经验分享。助你轻松通过软考高级考试。'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://itpmp.cc/images/site/og-image.png'
      }
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: '信息系统项目管理师'
      }
    ],
    [
      'meta',
      {
        property: 'og:locale',
        content: 'zh_CN'
      }
    ],
    // Twitter Cards
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://itpmp.cc/'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: '信息系统项目管理师 - 软考高级认证学习指南'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: '专业的信息系统项目管理师学习平台，提供软考高级认证考试指南、项目管理知识体系、ITPM实战经验分享。'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://itpmp.cc/images/site/og-image.png'
      }
    ],
    // 搜索引擎验证
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
      'meta',
      {
        name: "google-adsense-account",
        content: "ca-pub-6697132875062696"
      }
    ],
    // [
    //   'meta',
    //   {
    //     content: '1ea92bc373b9a8d71c125b69d98ed225',
    //     name: 'baidu_union_verify'
    //   }
    // ],
    // 结构化数据
    [
      'script',
      {
        type: 'application/ld+json'
      },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "信息系统项目管理师",
        "description": "专业的信息系统项目管理师学习平台，提供软考高级认证考试指南、项目管理知识体系、ITPM实战经验分享。",
        "url": "https://itpmp.cc/",
        "author": {
          "@type": "Person",
          "name": "laine001"
        },
        "publisher": {
          "@type": "Organization",
          "name": "信息系统项目管理师",
          "logo": {
            "@type": "ImageObject",
            "url": "https://itpmp.cc/images/site/logo.svg"
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://itpmp.cc/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    ],
    // Google Analytics
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
    // Microsoft Clarity
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
    // 百度统计
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
      message: '一起学习信息系统项目管理师，轻松通过软考！',
      copyright: 'Copyright (c) 2023-present, laine001. All rights reserved.',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    lastUpdated: {
      text: '最后更新于',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // outline: {
    //   label: '页面导航',
    //   level: [2, 5]
    // },
    outline: false,
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
    socialLinks: [
      {
        icon: {
          svg: `<svg t="1748263018176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2632" width="64" height="64"><path d="M256 810.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m0 85.333333a128 128 0 1 1 0-256 128 128 0 0 1 0 256z m553.429333 0C788.181333 529.408 494.592 235.818667 128 214.570667V128c424.149333 0 768 343.850667 768 768h-86.570667z m-213.845333 0C575.061333 647.253333 376.704 448.938667 128 428.416V341.333333c306.346667 0 554.666667 248.32 554.666667 554.666667h-87.082667z" fill="#8a8a8a" p-id="2633"></path></svg>`
        },
        link: 'https://itpmp.cc/feed.xml'
      }
    ]
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
  },
  async buildEnd(config) {
    await generateSitemap({
      hostname: 'https://itpmp.cc',
      outDir: 'docs/.vitepress/dist'
    })
    await genFeed(config)
  }
}))
