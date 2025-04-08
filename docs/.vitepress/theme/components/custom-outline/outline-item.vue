<script setup lang="ts">
// import type { MenuItem } from '../composables/outline'

const props = defineProps<{
  headers: any[]
  root?: boolean
}>()
// console.log("🚀 ~ props11:", props.headers)

function onClick({ target: el }: Event) {
  const id = (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.getElementById(decodeURIComponent(id))
  heading?.focus({ preventScroll: true })
}
const onToggleExpand = (el, Event) => {
  const node = Event.target.parentNode.parentNode
  // console.log("🚀 ~ onToggleExpand ~ node:", Event.target)
  const target = node.querySelector('.VPDocOutlineItem.nested')
  const currentDisplay = window.getComputedStyle(target).display
  // console.log("🚀 ~ onToggleExpand ~ currentDisplay:", currentDisplay)
  if (currentDisplay === 'none') {
    Event.target.style.transform = 'rotate(0deg)'
    target.style.display = 'block'
  } else {
    Event.target.style.transform = 'rotate(-90deg)'
    target.style.display = 'none'
  }
}
</script>

<template>
  <ul class="VPDocOutlineItem" :class="props.root ? 'root' : 'nested'">
    <li v-for="el in props.headers">
      <div style="display: flex; align-items: center; gap: 1px;">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
            <path
              d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
              fill="currentColor"></path>
          </svg> -->
        <!-- <svg class="expand-icon" v-if="el.children?.length" @click.stop="onToggleExpand(el, $event)"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <path
            d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 1 0-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"
            fill="currentColor"></path>
        </svg> -->
        <!-- vpi-chevron-down text-icon -->
        <span class="expand-icon " v-if="el.children?.length" @click.stop="onToggleExpand(el, $event)">
          ↓
        </span>
        <a class="outline-link" :href="el.link" @click="onClick" :title="el.title">
          {{ el.title }}
        </a >
      </div>
      <template v-if="el.children?.length">
        <outline-item :headers="el.children" :root="false" />
      </template>
    </li>
  </ul>
</template>

<style lang="scss">
.root {
  position: relative;
  z-index: 1;
}

.expand-icon {
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  transform: rotate(0deg);
  transition: all 0.12s;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}

.nested {
  padding-right: 16px;
  padding-left: 16px;
}

.outline-link {
  display: block;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.5s;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.outline-link.nested {
  padding-left: 13px;
}
</style>