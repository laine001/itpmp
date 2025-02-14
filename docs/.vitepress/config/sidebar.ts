const sidebar = {
  '/summary/': [
    {
      text: '记录总结',
      // collapsed: true,
      items: [
        {
          text: '10大管理',
          link: '/summary/top-ten-management',
        },
        {
          text: '计算题相关概念',
          link: '/summary/calc-concept'
        },
        {
          text: '资料整理',
          link: '/summary/learn-data'
        }
      ],
    },
  ],
  '/about/': [
    {
      text: "",
      items: [
        {
          text: '🌱关于本站',
          link: '/about/site'
        },
        {
          text: '🧐信息系统项目管理师',
          link: '/about/itpmp'
        },
      ]
    }
  ]
}

export default sidebar