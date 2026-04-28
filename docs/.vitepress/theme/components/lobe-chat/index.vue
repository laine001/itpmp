<template>
  <div class="lobechat-container">
    <!-- 聊天按钮 -->
    <button 
      v-show="!isOpen" 
      class="lobechat-btn" 
      @click="toggleWindow"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </button>

    <!-- 聊天窗口 -->
    <transition name="slide-up">
      <div v-show="isOpen" class="lobechat-window">
        <!-- 头部 -->
        <div class="lobechat-header">
          <div class="header-content">
            <div class="avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h3>ITPMP AI 助手</h3>
          </div>
          <button class="lobechat-close" @click="closeWindow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- iframe 聊天内容 -->
        <iframe 
          class="lobechat-iframe"
          src="https://api-chat.itpmp.cc/" 
          frameborder="0"
          allow="microphone"
        ></iframe>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleWindow = () => {
  isOpen.value = !isOpen.value
}

const closeWindow = () => {
  isOpen.value = false
}
</script>

<style scoped>
.lobechat-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 聊天按钮 */
.lobechat-btn {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: linear-gradient(135deg, #722ed1 0%, #9254de 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 20px rgba(114, 46, 209, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.lobechat-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(114, 46, 209, 0.5);
}

.lobechat-btn:active {
  transform: scale(0.95);
}

/* 聊天窗口 */
.lobechat-window {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 400px;
  max-width: calc(100vw - 48px);
  height: 550px;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(114, 46, 209, 0.1);
}

/* 动画 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* 头部 */
.lobechat-header {
  background: linear-gradient(135deg, #722ed1 0%, #9254de 100%);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.lobechat-header h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: white;
}

.lobechat-close {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  padding: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.lobechat-close:hover {
  background: rgba(255, 255, 255, 0.25);
}

/* iframe */
.lobechat-iframe {
  flex: 1;
  width: 100%;
  border: none;
  background: #fff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lobechat-container {
    bottom: 16px;
    right: 16px;
  }

  .lobechat-btn {
    width: 52px;
    height: 52px;
  }

  .lobechat-window {
    width: calc(100vw - 32px);
    height: 65vh;
    bottom: 66px;
    right: 0;
  }
}

@media (max-width: 480px) {
  .lobechat-window {
    height: 60vh;
  }
}
</style>