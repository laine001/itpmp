<template>
  <div class="not-found">
    <div class="error-container">
      <div class="error-icon">
        💢
        <!-- <svg viewBox="0 0 24 24" class="icon">
          <path fill="url(#gradient)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:var(--vp-c-brand);stop-opacity:1"/>
              <stop offset="100%" style="stop-color:var(--vp-c-brand-light);stop-opacity:1"/>
            </linearGradient>
          </defs>
        </svg> -->
      </div>
      <!-- <h1 class="error-code">404</h1> -->
      <!-- <p class="error-message">页面迷路啦～</p> -->
      <p class="error-subtitle">哎呀，您访问的页面不见了</p>
      <a href="/" class="home-button">
        <n-button type="primary">
          回首页
        </n-button>
      </a>
    </div>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
</script>

<style scoped>
.not-found {
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.error-icon {
  font-size: 66px;
  height: 80px;
}

/* .icon {
  width: 120px;
  height: 120px;
  animation: float 3s ease-in-out infinite;
  color: var(--vp-c-brand);
} */

.error-code {
  font-size: 5rem;
  color: var(--vp-c-brand);
}

.error-message {
  font-size: 1.5rem;
  margin: 1rem 0;
  color: var(--vp-c-text-1);
}

.error-subtitle {
  color: var(--vp-c-text-2);
  /* margin-bottom: 0.5rem; */
}

.home-button {
  margin-top: 2rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 640px) {
  .icon {
    width: 80px;
    height: 80px;
  }
  
  .error-code {
    font-size: 3.5rem;
  }
}
</style>
