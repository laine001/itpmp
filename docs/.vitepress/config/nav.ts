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
        text: '✏️计算题相关概念',
        link: '/summary/calc-concept'
      },
      {
        text: '📝资料整理收录',
        link: '/summary/learn-data'
      },
      {
        text: '🚚历年论文',
        link: '/summary/thesis-record'
      }
    ]
  },
  { text: '🌱关于', link: '/about/site' },
]
