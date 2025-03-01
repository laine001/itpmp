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
      text: 🚀学习记录
      link: /summary/top-ten-management

features:
  - title: 🎨 资料收录
    details: 收集一些关于高级信息系统项目管理师的资料，例如教材、工具书/图片/表格等。
    link: /summary/learn-data
    linkText: 去看看
  - title: ⚡️ 记录总结
    details: 学习过程中遇到的需要特别记住的点/概念/公式，以及一些总结。
    link: /summary/calc-concept
    linkText: 去看看
  # - title: 🎉Feature C
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  #   link: /life/medicine.html
  #   linkText: 去看看
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