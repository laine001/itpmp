import { managementMenuList } from './const'

export default [
  { text: '✨首页', link: '/' },
  { text: '🍉导读', link: '/book/top-ten-management' },
  {
    text: '🔨10大管理',
    items: managementMenuList
  },
  {
    text: '🚩记录总结',
    items: [
      {
        text: '一些名词概念',
        link: '/summary/concept'
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
        text: '绩效域',
        link: '/summary/performance'
      }
    ]
  },
  { text: '🌱关于', link: '/about/site' },
]
