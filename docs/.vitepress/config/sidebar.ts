import { managementMenuList, performanceDomainList } from './const'

const sidebar = {
  "/book/": [
    {
      text: "指引",
      items: [
        {
          text: "知识域导读",
          link: "/book/guide",
        },
      ],
    },
    {
      text: "10大管理",
      items: managementMenuList,
    },
    {
      text: "绩效域",
      // collapsed: true,
      items: [
        {
          text: "8大绩效域",
          link: "/book/performance",
        },
      ],
    },
  ],
  "/summary/": [
    {
      text: "记录总结",
      // collapsed: true,
      items: [
        {
          text: "名词/常见图表",
          link: "/summary/concept",
        },
        {
          text: "计算题相关",
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
        {
          text: "项目绩效域",
          link: "/summary/performance",
        },
      ],
    },
  ],
  "/about/": [
    {
      text: "",
      items: [
        {
          text: "关于本站",
          link: "/about/site",
        },
        {
          text: "信息系统项目管理师",
          link: "/about/itpmp",
        },
      ],
    },
  ],
};

export default sidebar;
