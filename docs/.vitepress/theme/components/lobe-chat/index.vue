<template>
  <div class="lobechat-container">
    <button class="lobechat-btn" @click="toggleWindow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </button>
    <div v-if="isOpen" class="lobechat-window">
      <div class="lobechat-header">
        <h3>AI 助手</h3>
        <button class="lobechat-close" @click="closeWindow">×</button>
      </div>
      <div ref="messagesContainer" class="lobechat-messages">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="['message', msg.type]"
        >
          <template v-if="msg.type === 'loading'">正在思考...</template>
          <template v-else>{{ msg.content }}</template>
        </div>
      </div>
      <div class="lobechat-input-area">
        <textarea
          ref="textareaRef"
          v-model="inputMessage"
          placeholder="输入消息..."
          rows="1"
          @keydown="handleKeydown"
          @input="autoResize"
        ></textarea>
        <button class="send-btn" :disabled="isLoading" @click="sendMessage">
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

interface Message {
  content: string
  type: 'user' | 'assistant' | 'error' | 'loading'
}

const isOpen = ref(false)
const inputMessage = ref('')
const messages = ref<Message[]>([])
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const conversationHistory: { role: string; content: string }[] = []

const toggleWindow = () => {
  isOpen.value = !isOpen.value
}

const closeWindow = () => {
  isOpen.value = false
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const addMessage = (content: string, type: Message['type']) => {
  messages.value.push({ content, type })
  scrollToBottom()
}

const autoResize = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = Math.min(textareaRef.value.scrollHeight, 100) + 'px'
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

const sendMessage = async () => {
  const content = inputMessage.value.trim()
  if (!content || isLoading.value) return

  inputMessage.value = ''
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
  }
  addMessage(content, 'user')
  conversationHistory.push({ role: 'user', content })

  isLoading.value = true
  addMessage('', 'loading')

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: conversationHistory
      })
    })

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.error || '请求失败')
    }

    const data = await response.json()
    const reply = data.choices[0]?.message?.content || '未收到回复'

    messages.value.pop()
    addMessage(reply, 'assistant')
    conversationHistory.push({ role: 'assistant', content: reply })
  } catch (error: any) {
    messages.value.pop()
    addMessage(error.message || '发生错误', 'error')
    conversationHistory.pop()
  }

  isLoading.value = false
}
</script>

<style scoped>
.lobechat-container {
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
  display: flex;
  flex-direction: column;
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
</style>
