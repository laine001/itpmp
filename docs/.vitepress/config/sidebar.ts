import { managementMenuList } from './const'

const sidebar = {
  "/book/": [
    {
      text: "指引",
      items: [
        {
          text: "知识域导读",
          link: "/book/top-ten-management",
        },
        // {
        //   text: "一些名词概念",
        //   link: "/book/concept",
        // },
      ],
    },
    {
      text: "10大管理",
      items: managementMenuList,
    },
  ],
  "/summary/": [
    {
      text: "记录总结",
      // collapsed: true,
      items: [
        {
          text: "一些名词概念",
          link: "/summary/calc-concept",
        },
        {
          text: "132个工具与技术",
          link: "/summary/all-tt",
        },
        {
          text: "资料整理收录",
          link: "/summary/learn-data",
        },
        {
          text: "历年论文",
          link: "/summary/thesis-record",
        },
      ],
    },
  ],
  "/about/": [
    {
      text: "",
      items: [
        {
          text: "🌱关于本站",
          link: "/about/site",
        },
        {
          text: "🧐信息系统项目管理师",
          link: "/about/itpmp",
        },
      ],
    },
  ],
};

export default sidebar;
