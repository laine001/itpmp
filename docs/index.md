---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "信息系统项目管理师"
  text: "学习笔记 · 备考记录"
  tagline: "整理学习过程中的笔记和心得，希望对你也有帮助"
  image: 
    src: /images/site/logo.svg
  actions:
    - theme: brand
      text: 🎯 开始阅读
      link: /about/itpmp
    - theme: alt
      text: 📚 学习指南
      link: /book/guide
    - theme: alt
      text: 🌈 关于本站
      link: /about/site

features:
  - title: 🎯 十大知识领域
    details: 整理了项目管理十大知识领域的重点内容，包括各个过程和输入输出，方便随时查阅
    link: /book/guide
    linkText: 去看看
  - title: 🚀 八大绩效域
    details: 梳理了PMBOK第七版的八大绩效域要点，帮助理解现代项目管理的核心思路
    link: /book/performance
    linkText: 了解一下
  - title: 📖 学习资料
    details: 收集了一些有用的学习资源，包括教材、参考书、图表等，都是学习过程中觉得不错的
    link: /summary/learn-data
    linkText: 看看资料
  - title: 💡 重点概念
    details: 记录了学习中遇到的重要概念、公式和容易混淆的知识点，加上一些记忆小技巧
    link: /summary/concept
    linkText: 查看笔记
  - title: 🧠 记忆方法
    details: 分享一些个人觉得有效的记忆方法和学习技巧，让复杂的知识点更好记住
    link: /summary/concept
    linkText: 学习技巧
  - title: ✍️ 论文相关
    details: 整理了历年论文题目和一些写作思路，还有几个论文模板可以参考
    link: /summary/thesis-record
    linkText: 论文资料
  - title: 📊 练习题目
    details: 收录了一些练习题和历年真题，按知识点整理，可以用来检验学习效果
    link: /exam/questions
    linkText: 做做题目
  - title: 🎓 学习计划
    details: 分享一下个人的学习安排和进度规划，可以作为制定学习计划的参考
    link: /study/roadmap
    linkText: 参考计划
  - title: 🔥 行业动态
    details: 偶尔会分享一些项目管理相关的新动态和有趣的内容，拓展一下视野
    link: /news/trends
    linkText: 看看动态
---

<!-- 简单的学习提示 -->
<div class="study-tips">
  <h3>💡 学习小提示</h3>
  <div class="tips-list">
    <div class="tip-item">📅 建议提前3-6个月开始准备</div>
    <div class="tip-item">📝 论文是重点，要多练习写作</div>
    <div class="tip-item">🔄 定期复习，温故而知新</div>
    <div class="tip-item">👥 计算题多做真题</div>
  </div>
</div>

<!-- 简单的鼓励语 -->
<div class="encouragement">
  <p>🌟 每天进步一点点，考试就不会太难 🌟</p>
</div>

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
</script>

<style scoped>

/* 学习提示样式 */
.study-tips {
  max-width: 600px;
  margin: 3rem auto;
  padding: 0 1rem;
  text-align: center;
}

.study-tips h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
}

.tips-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.8rem;
}

.tip-item {
  background: var(--vp-c-bg-soft);
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* 鼓励语样式 */
.encouragement {
  text-align: center;
  margin: 2rem 0 0;
  padding: 1rem;
}

.encouragement p {
  font-size: 1.1rem;
  color: var(--vp-c-brand-1);
  margin: 0;
  font-weight: 500;
}

/* 响应式 */
@media (max-width: 768px) {
  .simple-stats {
    gap: 1rem;
  }
  
  .stat-box {
    min-width: 80px;
    padding: 0.8rem;
  }
  
  .stat-box .number {
    font-size: 1.5rem;
  }
  
  .tips-list {
    grid-template-columns: 1fr;
  }
}
</style>
