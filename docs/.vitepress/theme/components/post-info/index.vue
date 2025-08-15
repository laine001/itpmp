---
lastUpdated: false
---

<script setup>
import { useData } from 'vitepress';

const { page } = useData();
// console.log(page.value, 'page.value')

const lastUpdateTime = new Date(page.value.lastUpdated).toLocaleString('zh-CN')

const getDaysFromNow = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays >= 365) {
    const diffYears = Math.ceil(diffDays / 365);
    return diffYears + '年前';
  }
  if (diffDays >= 31) {
    const diffMonths = Math.ceil(diffDays / 30);
    return diffMonths + '个月前';
  }
  return `${diffDays}天前`;
}
const props = defineProps({
  readTime: {
    // type: Number || String,
    default: 0,
  },
  words: {
    type: String,
    default: '0',
  },
});
console.log(props, 'props')
</script>

<template>
  <div class="post-info-card">
    <span>本章字数: {{ props.words }}</span>
    <span>阅读时长: {{ props.readTime }} 分钟</span>
    <span>最后更新于: {{ getDaysFromNow(lastUpdateTime) }}</span>
  </div>
</template>

<style scoped>
.post-info-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  /* border-radius: 12px; */
  padding: 1.1rem 0 0.2rem;
  border-bottom: 1px solid rgba(209, 201, 201, 0.637);
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1); */
  display: flex;
  gap: 1rem;
  font-size: 12px;
  color: #666;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon {
  font-size: 1.5rem;
  width: 40px;
  text-align: center;
}

label {
  color: #666;
  font-size: 0.9rem;
}

.value {
  font-weight: 600;
  color: #2c3e50;
  margin-top: 0.25rem;
}

.dark .post-info-card {
  background: rgba(30, 30, 30, 0.8);
}

.dark .value {
  color: #e5e7eb;
}
</style>
