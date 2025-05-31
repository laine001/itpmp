<script lang="ts" setup>
import { ref } from 'vue';

const showModal = ref(false);
const formData = ref({
  email: '',
  feedbackType: 'suggestion',
  content: ''
});

const handleSubmit = () => {
  console.log('Feedback submitted:', formData.value);
  // showModal.value = false;
  // // window.$message.success('反馈已提交，感谢您的支持！');
  // // 这里可以添加API调用
  // formData.value = { email: '', feedbackType: 'suggestion', content: '' };
  // const a = document.createElement('a');
  // a.href = `mailto:${formData.value.email}?subject=网站反馈&body=${encodeURIComponent(formData.value.content)}`;
  // a.click();
  // a.remove();
  // window.$message.success('反馈已提交，感谢您的支持！');
};
</script>

<template>
  <div class="feedback-entrance" @click="showModal = true">
    <n-icon size="24" color="#fff">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"/>
      </svg>
    </n-icon>
  </div>

  <n-modal v-model:show="showModal" preset="card" title="网站反馈" style="width: 90%; max-width: 600px">
    <n-form :model="formData">
      <n-form-item label="联系邮箱" required>
        <n-input v-model:value="formData.email" placeholder="请输入邮箱(选填)"/>
      </n-form-item>
      
      <n-form-item label="反馈类型" required>
        <n-radio-group v-model:value="formData.feedbackType">
          <n-radio value="bug">错误报告</n-radio>
          <n-radio value="suggestion">功能建议</n-radio>
          <n-radio value="other">其他</n-radio>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="反馈内容" required>
        <n-input
          v-model:value="formData.content"
          type="textarea"
          placeholder="请输入您的宝贵意见..."
          :autosize="{ minRows: 4 }"
        />
      </n-form-item>

      <n-button type="primary" @click="handleSubmit" block>发送邮件</n-button>
    </n-form>
  </n-modal>
</template>

<style lang="scss" scoped>
.feedback-entrance {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: #18a058;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.2s;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background-color: #129652;
  }
}

.dark .feedback-entrance {
  background-color: #63e2b7;
  &:hover {
    background-color: #7fe7c4;
  }
}
</style>
<style lang="scss" scoped>
.email-sender {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  position: fixed;
  bottom: 100px;
  right: 100px;
}
</style>
