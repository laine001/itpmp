<script setup>
import { NTooltip } from 'naive-ui'
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  tip: {
    type: String,
    default: "",
  },
});
// console.log(props, 'ppp')
</script>
<template>
  <n-tooltip trigger="hover" placement="top">
    <template #trigger>
      <code style="cursor: pointer;">{{ props.text }}</code>
    </template>
    <div style="display: flex; max-width: 380px">
      {{ props.tip }}
    </div>
    <!-- <template v-if="Array.isArray(props.tip)" v-for="item in props.tip">
      {{item}}
    </template>
    <template v-else>{{ props.tip }}</template> -->
  </n-tooltip>
</template>
