<template>
  <div class="twikoo-comment">
    <!-- <p class="comment-desc">🤗欢迎留下你的想法和建议~</p> -->
    <div id="tcomment" class="comment-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

interface TwikooConfig {
  envId: string
  el: string
  region?: string
  path?: string
  lang?: string
}

// Twikoo 配置
const twikooConfig: TwikooConfig = {
  envId: 'https://comment.itpmp.cc', // 请替换为你的腾讯云环境ID
  el: '#tcomment',
  region: 'ap-shanghai', // 腾讯云地域，可选
  path: location.pathname, // 用于区分不同页面的评论
  lang: 'zh-CN' // 语言设置
}

let twikooInstance: any = null

onMounted(() => {
  // 动态加载 Twikoo 脚本
  loadTwikoo()
})

onUnmounted(() => {
  // 清理 Twikoo 实例
  if (twikooInstance) {
    twikooInstance = null
  }
})

function loadTwikoo() {
  // 检查是否已经加载过 Twikoo
  if (window.twikoo) {
    initTwikoo()
    return
  }

  // 动态创建 script 标签加载 Twikoo
  const script = document.createElement('script')
  script.src = 'https://cdn.staticfile.org/twikoo/1.6.32/twikoo.all.min.js'
  script.async = true
  script.onload = () => {
    initTwikoo()
  }
  script.onerror = () => {
    console.error('Twikoo 加载失败')
    showErrorMessage()
  }
  document.head.appendChild(script)
}

function initTwikoo() {
  try {
    twikooInstance = window.twikoo.init(twikooConfig)
  } catch (error) {
    console.error('Twikoo 初始化失败:', error)
    showErrorMessage()
  }
}

function showErrorMessage() {
  const container = document.getElementById('tcomment')
  if (container) {
    container.innerHTML = `
      <div class="error-message">
        <p>😅 评论系统加载失败</p>
        <p>请检查网络连接或稍后再试</p>
      </div>
    `
  }
}

// 声明全局 twikoo 对象
declare global {
  interface Window {
    twikoo: any
  }
}
</script>

<style lang="scss">
#twikoo {
  border-radius: 6px;
  overflow: hidden;
}

.tk-comments-container {
  padding-left: 56px;

  .tk-comments-title {
    font-size: 14px;

    .__comments {
      display: none;
    }
  }

  .tk-action {
    gap: 4px;
    font-size: 14px;

    .tk-action-icon {
      color: var(--vp-c-brand);
    }
  }
}

.twikoo-comment {
  margin: 2rem 0;
  padding-top: 15px;
  border-top: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  overflow: hidden;
  /* background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider); */

  .el-input-group__prepend {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .el-input__inner {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    &:focus {
      border-color: var(--vp-c-brand) !important;
    }
  }

  .el-textarea__inner {
    border-radius: 6px;

    &:focus {
      border-color: var(--vp-c-brand) !important;
    }
  }

  .tk-preview-container {
    border-radius: 6px;
  }

  .el-button {
    border-radius: 6px;
    background-color: var(--vp-c-brand);
    border-color: var(--vp-c-brand);
  }

  .el-button--default {
    &:hover {
      background: none !important;
      color: var(--vp-c-brand) !important;
      border-color: var(--vp-c-brand) !important;
    }
  }

  .el-button--primary {
    &:active {
      background-color: var(--vp-c-brand);
    }

    &:hover {
      background-color: var(--vp-c-brand);
    }
  }
}

.comment-desc {
  margin: 0;
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.comment-container {
  min-height: 200px;
}

.error-message {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

.error-message p {
  margin: 0.5rem 0;
}

/* 深色模式适配 */
.dark .twikoo-comment {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .twikoo-comment {
    margin: 1rem -1rem;
    padding: 1rem;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}
</style>