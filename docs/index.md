---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "信息系统项目管理师"
  text: "学习记录和总结"
  # tagline: 随手记
  image: 
    src: /images/site/logo.svg
  actions:
    - theme: brand
      text: ✨开始
      link: /about/itpmp
    - theme: alt
      text: 🚀导读
      link: /book/guide

features:
  - title: 🔥 十大知识领域
    details: 整理十大管理中的重点、各个过程和输入、工具技术、输出，助你速查知识点
    link: /book/guide
    linkText: 去看看
  - title: ✨ 八大绩效域
    details: 各绩效域的重点提取，助你快速理解绩效域
    link: /book/performance
    linkText: 去看看
  - title: 🎨 资料收录
    details: 收集一些关于高级信息系统项目管理师的资料，例如教材、工具书/图片/表格，助你随时随地阅读学习
    link: /summary/learn-data
    linkText: 去看看
  - title: 📝 记录总结
    details: 个人学习过程中遇到的需要特别记住的名词/概念/公式，以及一些总结
    link: /summary/concept
    linkText: 去看看
  - title: ⚡️ 记忆协助
    details: 在各个记录过程中，提炼记忆点，输出记忆协助，助你快速理解和记忆知识点
    link: /summary/concept
    linkText: 去看看
  - title: 🎉 论文相关
    details: 记录历年论文主题，提供部分论文模板
    link: /summary/thesis-record
    linkText: 去看看
---

<script setup lang="ts">
  import { onMounted } from 'vue'
  import confetti from 'canvas-confetti'
  onMounted(() => {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 170,
        origin: { y: 0.6 },
      })
    }, 200)
  })

// const end = Date.now() + (1 * 260);
// const colors = ['#3451b2', '#6f42c1', '#299764'];
// (function frame() {
//   confetti({
//     particleCount: 2,
//     angle: 60,
//     spread: 55,
//     origin: { x: 0 },
//     // colors: colors ?? []
//   });
//   confetti({
//     particleCount: 2,
//     angle: 120,
//     spread: 55,
//     origin: { x: 1 },
//     // colors: colors ?? []
//   });

//   if (Date.now() < end) {
//     requestAnimationFrame(frame);
//   }
// }());
</script>
