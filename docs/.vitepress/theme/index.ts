import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import TwikooComment from './components/twikoo-comment/index.vue'
import { NaiveUIProvider } from './libs/navive-ui-vp'
import { setup } from '@css-render/vue3-ssr'
import './styles/vp.css'
import './styles/override-vp.scss'
import './styles/my-style.scss'

import * as pkg from 'naive-ui';
const { NConfigProvider, NBackTop, NImage, NIcon } = pkg;

// 类型声明
declare global {
  interface ImportMeta {
    env: {
      SSR?: boolean
      [key: string]: any
    }
  }
  interface Window {
    _hmt: any[]
  }
}

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp({ app, router }) {
    if ((import.meta as any).env?.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch()
        if ((window as any)._hmt) {
          (window as any)._hmt.push(['_setAccount', '1a46a0f223c9af96b623437cd0065193']);
          (window as any)._hmt.push(['_trackPageview', location.pathname + location.search])
        }
      }
    }
    app.component('n-image', NImage)
    app.component('n-icon', NIcon)
    app.component('NBackTop', NBackTop)
    app.component('NConfigProvider', NConfigProvider)
    app.component('TwikooComment', TwikooComment)
    
    // 添加 AI 聊天功能
    setTimeout(() => {
      const lobechatButton = document.createElement('div');
      lobechatButton.id = 'lobechat-button';
      lobechatButton.innerHTML = `
        <button class="lobechat-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>
        <div class="lobechat-window">
          <div class="lobechat-header">
            <h3>AI 助手</h3>
            <button class="lobechat-close">×</button>
          </div>
          <div class="lobechat-messages"></div>
          <div class="lobechat-input-area">
            <textarea placeholder="输入消息..." rows="1"></textarea>
            <button class="send-btn">发送</button>
          </div>
        </div>
      `;
      
      const style = document.createElement('style');
      style.textContent = `
        #lobechat-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .lobechat-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #3eaf7c;
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s ease;
        }
        .lobechat-btn:hover {
          background: #369f70;
          transform: scale(1.05);
        }
        .lobechat-window {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 380px;
          height: 550px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          background: #fff;
          overflow: hidden;
          display: none;
          flex-direction: column;
        }
        .lobechat-window.open {
          display: flex;
        }
        .lobechat-header {
          background: #f8f9fa;
          padding: 12px 16px;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .lobechat-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
        .lobechat-close {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lobechat-close:hover {
          color: #333;
        }
        .lobechat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .message {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
          word-break: break-word;
        }
        .message.user {
          align-self: flex-end;
          background: #3eaf7c;
          color: white;
          border-bottom-right-radius: 4px;
        }
        .message.assistant {
          align-self: flex-start;
          background: #f1f1f1;
          color: #333;
          border-bottom-left-radius: 4px;
        }
        .message.error {
          background: #fee;
          color: #c00;
          font-size: 13px;
        }
        .message.loading {
          background: #f1f1f1;
          color: #666;
          font-style: italic;
        }
        .lobechat-input-area {
          padding: 12px 16px;
          border-top: 1px solid #e9ecef;
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }
        .lobechat-input-area textarea {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #ddd;
          border-radius: 20px;
          resize: none;
          font-size: 14px;
          font-family: inherit;
          max-height: 100px;
          overflow-y: auto;
        }
        .lobechat-input-area textarea:focus {
          outline: none;
          border-color: #3eaf7c;
        }
        .send-btn {
          padding: 10px 20px;
          background: #3eaf7c;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        .send-btn:hover {
          background: #369f70;
        }
        .send-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .lobechat-window {
            width: 90vw;
            height: 70vh;
            bottom: 80px;
            right: 5vw;
          }
        }
      `;
      
      document.body.appendChild(style);
      document.body.appendChild(lobechatButton);
      
      const btn = lobechatButton.querySelector('.lobechat-btn');
      const chatWindow = lobechatButton.querySelector('.lobechat-window');
      const closeBtn = lobechatButton.querySelector('.lobechat-close');
      const messagesContainer = lobechatButton.querySelector('.lobechat-messages');
      const textarea = lobechatButton.querySelector('.lobechat-input-area textarea');
      const sendBtn = lobechatButton.querySelector('.send-btn');
      
      const conversationHistory: { role: string; content: string }[] = [];
      
      function addMessage(content: string, type: 'user' | 'assistant' | 'error' | 'loading') {
        const msg = document.createElement('div');
        msg.className = `message ${type}`;
        msg.textContent = type === 'loading' ? '正在思考...' : content;
        messagesContainer.appendChild(msg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msg;
      }
      
      async function sendMessage() {
        const content = textarea.value.trim();
        if (!content) return;
        
        textarea.value = '';
        textarea.style.height = 'auto';
        addMessage(content, 'user');
        conversationHistory.push({ role: 'user', content });
        
        const loadingMsg = addMessage('', 'loading');
        sendBtn.disabled = true;
        
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              messages: conversationHistory
            })
          });
          
          if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || '请求失败');
          }
          
          const data = await response.json();
          const reply = data.choices[0]?.message?.content || '未收到回复';
          
          loadingMsg.remove();
          addMessage(reply, 'assistant');
          conversationHistory.push({ role: 'assistant', content: reply });
        } catch (error: any) {
          loadingMsg.remove();
          addMessage(error.message || '发生错误', 'error');
          conversationHistory.pop();
        }
        
        sendBtn.disabled = false;
      }
      
      if (btn && chatWindow) {
        btn.addEventListener('click', () => {
          chatWindow.classList.toggle('open');
        });
      }
      
      if (closeBtn && chatWindow) {
        closeBtn.addEventListener('click', () => {
          chatWindow.classList.remove('open');
        });
      }
      
      if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
      }
      
      if (textarea) {
        textarea.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        });
        textarea.addEventListener('input', () => {
          textarea.style.height = 'auto';
          textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';
        });
      }
    }, 1000);
  }
}