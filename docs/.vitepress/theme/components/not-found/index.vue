<template>
  <div class="not-found">
    <div class="background-decoration">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>

    <div class="error-container">
      <div class="error-icon">
        <div class="icon-wrapper">
          <svg viewBox="0 0 200 200" class="error-svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#c8a2c8;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#b19cd9;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#dda0dd;stop-opacity:1" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#gradient)" opacity="0.1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="url(#gradient)" stroke-width="2" opacity="0.3" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="url(#gradient)" stroke-width="3" opacity="0.5" />
            <text x="100" y="120" text-anchor="middle" font-size="48" font-weight="bold"
              fill="url(#gradient)">404</text>
          </svg>
        </div>
      </div>

      <h1 class="error-title">页面走丢了~</h1>

      <div class="action-buttons">
        <a href="/" class="home-button primary-btn">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          回到首页
        </a>

        <button @click="goBack" class="back-button secondary-btn">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          返回上页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.href = '/'
  }
}
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 177px);
  background: linear-gradient(135deg,
      var(--vp-c-bg) 0%,
      var(--vp-c-bg-soft) 50%,
      var(--vp-c-bg-alt) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg,
      rgba(200, 162, 200, 0.1),
      rgba(177, 156, 217, 0.1),
      rgba(221, 160, 221, 0.1));
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 30%;
  animation-delay: 1s;
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-icon {
  margin-bottom: 2rem;
}

.icon-wrapper {
  position: relative;
  display: inline-block;
}

.error-svg {
  width: 200px;
  height: 200px;
  animation: pulse 2s ease-in-out infinite;
}

.error-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: linear-gradient(135deg, #c8a2c8, #b19cd9, #dda0dd);
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  /* background-clip: text; */
  margin: -50px 0 1rem 0;
  animation: slideInUp 0.6s ease-out;
}


.action-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: slideInUp 0.8s ease-out 0.6s both;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.primary-btn {
  background-color: var(--vp-c-brand);
  /* background: linear-gradient(135deg, #ff6b6b, #4ecdc4); */
  color: white;
  /* box-shadow: 0 4px 15px rgba(173, 123, 237, 0.3); */
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(163, 124, 234, 0.4);
}

.secondary-btn {
  background: transparent;
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
}

.secondary-btn:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.5;
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.8;
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .not-found {
    padding: 1rem;
  }

  .error-container {
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error-svg {
    width: 150px;
    height: 150px;
  }

  .error-title {
    font-size: 2.5rem;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    justify-content: center;
  }

  .shape {
    display: none;
  }
}

@media (max-width: 480px) {
  .error-title {
    font-size: 2rem;
  }

  .error-svg {
    width: 120px;
    height: 120px;
  }
}
</style>
