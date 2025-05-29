import { managementMenuList, performanceDomainList } from './const'

export default [
  { text: '✨首页', link: '/' },
  { text: '🍉导读', link: '/book/top-ten-management' },
  {
    text: '🔥10大管理',
    items: managementMenuList
  },
  {
    text: '🔥8大绩效域',
    link: '/book/performance'
  },
  {
    text: '🚩记录总结',
    items: [
      {
        text: '名词/常见图表',
        link: '/summary/concept'
      },
      {
        text: '计算题相关',
        link: '/summary/calc-concept'
      },
      {
        text: '132个工具与技术',
        link: '/summary/all-tt'
      },
      {
        text: '资料整理收录',
        link: '/summary/learn-data'
      },
      {
        text: '历年论文',
        link: '/summary/thesis-record'
      },
      {
        text: '项目绩效域',
        link: '/summary/performance'
      }
    ]
  },
  { text: '🌱关于', link: '/about/site' },
]
