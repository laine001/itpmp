<template>
  <nav aria-labelledby="doc-outline-aria-label" class="VPDocAsideOutline custom-outline"
    :class="{ 'has-outline': headers.length > 0 }">
    <div class="content">
      <div class="outline-marker" ref="marker"></div>

      <!-- 标题和控制按钮 -->
      <div class="outline-header">
        <div aria-level="2" class="outline-title" id="doc-outline-aria-label" role="heading">
          页面导航
        </div>

        <div class="outline-controls" v-if="hasCollapsibleItems">
          <button class="control-btn" @click="expandAll" :disabled="allExpanded" title="全部展开">
            展开
          </button>
          <button class="control-btn" @click="collapseAll" :disabled="allCollapsed" title="全部折叠">
            折叠
          </button>
        </div>
      </div>

      <!-- 大纲列表 -->
      <div class="outline-list" v-if="headers.length > 0">
        <template v-for="header in headers" :key="header.anchor">
          <div class="VPDocOutlineItem" :class="{ root: header.level === 2, nested: header.level > 2 }">
            <!-- 标题链接和折叠按钮 -->
            <div class="outline-item-header">
              <!-- 折叠/展开按钮 - 只有h2级别且有子项才显示 -->
              <button v-if="header.children && header.children.length > 0 && header.level === 2" class="toggle-btn"
                :class="{ expanded: expandedKeys.has(header.anchor) }" @click="handleToggle(header.anchor)"
                :aria-expanded="expandedKeys.has(header.anchor)"
                :aria-label="expandedKeys.has(header.anchor) ? '折叠' : '展开'">
                <svg class="toggle-icon" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
                </svg>
              </button>

              <!-- 标题链接 -->
              <a class="outline-link" :class="{
                active: activeAnchor === header.anchor,
                nested: header.level > 2
              }" :href="`#${header.anchor}`" @click="handleClick($event, header.anchor)" :title="header.title">
                {{ header.title }}
              </a>
            </div>

            <!-- 子项目 - 只有h2级别才支持折叠，其他级别始终显示 -->
            <div v-if="header.children && header.children.length > 0" class="VPDocOutlineItem nested" :class="{
              collapsed: header.level === 2 && !expandedKeys.has(header.anchor),
              'always-visible': header.level > 2
            }">
              <template v-for="child in header.children" :key="child.anchor">
                <div class="VPDocOutlineItem" :class="{ root: child.level === 2, nested: child.level > 2 }">
                  <div class="outline-item-header">
                    <!-- 子项的折叠按钮 - 只有h2级别且有子项才显示 -->
                    <button v-if="child.children && child.children.length > 0 && child.level === 2" class="toggle-btn"
                      :class="{ expanded: expandedKeys.has(child.anchor) }" @click="handleToggle(child.anchor)"
                      :aria-expanded="expandedKeys.has(child.anchor)"
                      :aria-label="expandedKeys.has(child.anchor) ? '折叠' : '展开'">
                      <svg class="toggle-icon" viewBox="0 0 24 24" width="12" height="12">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
                      </svg>
                    </button>

                    <a class="outline-link" :class="{
                      active: activeAnchor === child.anchor,
                      nested: child.level > 2
                    }" :href="`#${child.anchor}`" @click="handleClick($event, child.anchor)" :title="child.title">
                      {{ child.title }}
                    </a>
                  </div>

                  <!-- 递归渲染更深层级的子项 -->
                  <div v-if="child.children && child.children.length > 0" class="VPDocOutlineItem nested" :class="{
                    collapsed: child.level === 2 && !expandedKeys.has(child.anchor),
                    'always-visible': child.level > 2
                  }">
                    <template v-for="grandChild in child.children" :key="grandChild.anchor">
                      <div class="VPDocOutlineItem nested">
                        <div class="outline-item-header">
                          <a class="outline-link nested" :class="{ active: activeAnchor === grandChild.anchor }"
                            :href="`#${grandChild.anchor}`" @click="handleClick($event, grandChild.anchor)"
                            :title="grandChild.title">
                            {{ grandChild.title }}
                          </a>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { onContentUpdated } from 'vitepress'

interface Header {
  level: number
  title: string
  anchor: string
  children?: Header[]
}

const headers = ref<Header[]>([])
const expandedKeys = ref<Set<string>>(new Set())
const activeAnchor = ref<string>('')
const marker = ref<HTMLElement>()
const isManualClick = ref<boolean>(false) // 添加手动点击标记

// 计算属性
const hasCollapsibleItems = computed(() => {
  return headers.value.some(header => header.children && header.children.length > 0)
})

const allExpanded = computed(() => {
  const collapsibleKeys = getCollapsibleKeys(headers.value)
  return collapsibleKeys.every(key => expandedKeys.value.has(key))
})

const allCollapsed = computed(() => {
  const collapsibleKeys = getCollapsibleKeys(headers.value)
  return collapsibleKeys.every(key => !expandedKeys.value.has(key))
})

// 获取可折叠的键
function getCollapsibleKeys(headerList: Header[]): string[] {
  const keys: string[] = []
  function traverse(items: Header[]) {
    items.forEach(item => {
      if (item.children && item.children.length > 0) {
        keys.push(item.anchor)
      }
      if (item.children) {
        traverse(item.children)
      }
    })
  }
  traverse(headerList)
  return keys
}

// 解析标题 - 过滤掉h1
function parseHeaders(): Header[] {
  const headings = Array.from(
    document.querySelectorAll('.VPDoc :where(h2,h3,h4,h5,h6)')
  ).filter((el): el is HTMLHeadingElement => {
    return el.id && el.hasChildNodes() && !isIgnored(el)
  })

  const headerList: Header[] = headings.map(el => ({
    level: Number(el.tagName[1]),
    title: getHeaderTitle(el),
    anchor: el.id,
    children: []
  }))

  return buildHeaderTree(headerList)
}

// 检查是否应该忽略的标题
function isIgnored(el: HTMLElement): boolean {
  const ignoreClasses = ['VPBadge', 'header-anchor', 'footnote-ref', 'ignore-header']
  return ignoreClasses.some(cls => el.classList.contains(cls))
}

// 获取标题文本
function getHeaderTitle(el: HTMLElement): string {
  let title = ''
  for (const node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      title += node.textContent || ''
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement
      if (!isIgnored(element)) {
        title += element.textContent || ''
      }
    }
  }
  return title.trim()
}

// 构建标题树结构
function buildHeaderTree(flatHeaders: Header[]): Header[] {
  const result: Header[] = []
  const stack: Header[] = []

  flatHeaders.forEach(header => {
    // 找到合适的父级
    while (stack.length > 0 && stack[stack.length - 1].level >= header.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      result.push(header)
    } else {
      const parent = stack[stack.length - 1]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(header)
    }

    stack.push(header)
  })

  return result
}

// 展开所有
function expandAll() {
  const collapsibleKeys = getCollapsibleKeys(headers.value)
  expandedKeys.value = new Set(collapsibleKeys)
}

// 折叠所有
function collapseAll() {
  expandedKeys.value = new Set()
}

// 处理折叠/展开切换
function handleToggle(anchor: string) {
  if (expandedKeys.value.has(anchor)) {
    expandedKeys.value.delete(anchor)
  } else {
    expandedKeys.value.add(anchor)
  }
  // 触发响应式更新
  expandedKeys.value = new Set(expandedKeys.value)
}

// 处理点击 - 使用 element.scrollIntoView
function handleClick(event: Event, anchor: string) {
  event.preventDefault()

  const element = document.getElementById(anchor)
  if (element) {
    // 立即设置 activeAnchor 和手动点击标记
    isManualClick.value = true
    activeAnchor.value = anchor

    // 立即更新标记位置
    nextTick(() => {
      updateMarker()
    })

    // 使用 scrollIntoView 进行平滑滚动
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // 更新URL hash
    window.history.replaceState(null, '', `#${anchor}`)

    // 延迟重置手动点击标记，给滚动动画足够时间完成
    setTimeout(() => {
      isManualClick.value = false
    }, 1000)
  }
}

// 更新活跃锚点和标记位置
function updateActiveAnchor() {
  // 如果是手动点击，不执行自动更新
  if (isManualClick.value) {
    return
  }

  const headings = Array.from(
    document.querySelectorAll('.VPDoc :where(h2,h3,h4,h5,h6)')
  ).filter((el): el is HTMLHeadingElement => el.id)

  let active = ''
  const scrollY = window.scrollY
  const innerHeight = window.innerHeight
  const offsetHeight = document.body.offsetHeight

  // 如果接近页面底部，激活最后一个标题
  if (scrollY + innerHeight >= offsetHeight - 100) {
    active = headings[headings.length - 1]?.id || ''
  } else {
    // 找到当前可见区域的标题
    for (const heading of headings) {
      const rect = heading.getBoundingClientRect()
      if (rect.top <= 100) {
        active = heading.id
      } else {
        break
      }
    }
  }

  // 只有当检测到的 active 与当前不同时才更新
  if (active && active !== activeAnchor.value) {
    activeAnchor.value = active
    updateMarker()
  }
}

// 更新标记位置
function updateMarker() {
  if (!marker.value) return

  // 检查是否有任何展开的项目
  const hasAnyExpanded = expandedKeys.value.size > 0

  // 如果全部折叠，隐藏标记
  if (!hasAnyExpanded) {
    marker.value.style.opacity = '0'
    return
  }

  const activeLink = document.querySelector(`.custom-outline .outline-link[href="#${activeAnchor.value}"]`)
  if (activeLink) {
    // 检查activeLink是否在可见的区域内
    const linkItem = activeLink.closest('.VPDocOutlineItem')
    const parentNested = linkItem?.closest('.VPDocOutlineItem.nested')

    // 如果链接在折叠的区域内，隐藏标记
    if (parentNested && parentNested.classList.contains('collapsed')) {
      marker.value.style.opacity = '0'
      return
    }

    // 检查是否是h2级别的标题，如果是且没有展开，也隐藏标记
    const isH2WithChildren = headers.value.find(h => h.anchor === activeAnchor.value && h.level === 2 && h.children && h.children.length > 0)
    if (isH2WithChildren && !expandedKeys.value.has(activeAnchor.value)) {
      marker.value.style.opacity = '0'
      return
    }

    // 检查是否是子项目中的标题，如果其父级h2被折叠，也隐藏标记
    let isInCollapsedSection = false
    headers.value.forEach(header => {
      if (header.level === 2 && header.children && header.children.length > 0) {
        const isChildOfThisHeader = findInChildren(header.children, activeAnchor.value)
        if (isChildOfThisHeader && !expandedKeys.value.has(header.anchor)) {
          isInCollapsedSection = true
        }
      }
    })

    if (isInCollapsedSection) {
      marker.value.style.opacity = '0'
      return
    }

    const rect = activeLink.getBoundingClientRect()
    const containerRect = marker.value.parentElement?.getBoundingClientRect()
    if (containerRect) {
      const top = rect.top - containerRect.top + rect.height / 2 - 9
      marker.value.style.top = `${Math.max(32, top)}px`
      marker.value.style.opacity = '1'
    }
  } else {
    marker.value.style.opacity = '0'
  }
}

// 辅助函数：在子项目中查找指定的anchor
function findInChildren(children: Header[], targetAnchor: string): boolean {
  for (const child of children) {
    if (child.anchor === targetAnchor) {
      return true
    }
    if (child.children && child.children.length > 0) {
      if (findInChildren(child.children, targetAnchor)) {
        return true
      }
    }
  }
  return false
}

// 初始化
onContentUpdated(() => {
  headers.value = parseHeaders()
  // 默认展开所有h2级别的标题
  const h2Keys = headers.value
    .filter(h => h.level === 2 && h.children && h.children.length > 0)
    .map(h => h.anchor)
  expandedKeys.value = new Set(h2Keys)

  // 更新活跃锚点
  setTimeout(() => {
    updateActiveAnchor()
    updateMarker()
  }, 100)
})

onMounted(() => {
  window.addEventListener('scroll', updateActiveAnchor, { passive: true })
  updateActiveAnchor()
  updateMarker()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveAnchor)
})
</script>

<style scoped>
.VPDocAsideOutline {
  display: none;
}

.VPDocAsideOutline.has-outline {
  display: block;
}

.content {
  position: relative;
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
  font-size: 13px;
  font-weight: 500;
}

.outline-marker {
  position: absolute;
  top: 32px;
  left: -1px;
  z-index: 0;
  opacity: 0;
  width: 2px;
  border-radius: 2px;
  height: 18px;
  background-color: var(--vp-c-brand-1);
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s;
}

.outline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;
}

.outline-title {
  line-height: 32px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.outline-controls {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.control-btn {
  padding: 0 10px;
  font-size: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.control-btn:hover:not(:disabled) {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.outline-list {
  font-size: 13px;
}

.VPDocOutlineItem {
  position: relative;
}

.VPDocOutlineItem.root {
  position: relative;
  z-index: 1;
}

.VPDocOutlineItem.nested {
  padding-right: 16px;
  padding-left: 10px;
  overflow: hidden;
  transition: all 0.25s ease;
}

/* h2级别的折叠效果 */
.VPDocOutlineItem.nested.collapsed {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.VPDocOutlineItem.nested:not(.collapsed) {
  max-height: 1000px;
  opacity: 1;
}

/* h3及以下级别始终可见 */
.VPDocOutlineItem.nested.always-visible {
  max-height: none !important;
  opacity: 1 !important;
  padding-top: inherit !important;
  padding-bottom: inherit !important;
}

.outline-item-header {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 32px;
}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: none;
  background: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin-right: 2px;
}

.toggle-btn:hover {
  color: var(--vp-c-brand-1);
  background-color: #eaeaea;
}

.toggle-icon {
  transition: transform 0.2s ease;
}

.toggle-btn.expanded .toggle-icon {
  transform: rotate(90deg);
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
  text-decoration: none;
  flex: 1;
  cursor: pointer;
}

.outline-link:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.outline-link.active {
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}

.outline-link.nested {
  padding-left: 13px;
}
</style>
