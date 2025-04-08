<script setup lang="ts">
import { NMenu } from "naive-ui";
import { onContentUpdated } from "vitepress";
import { ref, h } from "vue";
// import OutlineItem from './outline-item.vue';
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const headers = ref([]);
const activeKey = ref("");
const resolvedHeaders: any = [];
console.log(NMenu);
onContentUpdated(() => {
  // const nodeList = document.querySelectorAll('.expand-icon')
  // Array.from(nodeList).forEach((el: any) => {
  //   el.style.transform = 'rotate(0deg)'
  // })
  const list = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)"),
  ]
    .filter((el) => el.id && el.hasChildNodes())
    .map((el) => {
      const level = Number(el.tagName[1]);
      return {
        element: el,
        title: serializeHeader(el),
        // label: serializeHeader(el),
        // label: '123',
        link: "#" + el.id,
        key: el.id,
        icon: null,
        level,
      };
    });
  headers.value = resolveHeaders(list, [2, 5]);
  // console.log("🚀 ~ onMounted ~ headers:", headers.value)
});

function serializeHeader(h) {
  let ret = "";
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className)) continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange =
    (typeof range === "object" && !Array.isArray(range)
      ? range.level
      : range) || 2;
  const [high, low] =
    typeof levelsRange === "number"
      ? [levelsRange, levelsRange]
      : levelsRange === "deep"
      ? [2, 6]
      : levelsRange;
  const tree = buildTree(headers, high, low);
  console.log("🚀 ~ resolveHeaders ~ tree:", tree);
  return tree;
}
function buildTree(data, min, max) {
  resolvedHeaders.length = 0;
  const result: any = [];
  const stack: any = [];
  data.forEach((item) => {
    const node = { ...item };
    let parent: any = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (
      node.element.classList.contains("ignore-header") ||
      (parent && "shouldIgnore" in parent)
    ) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min) return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    } else {
      result.push(node);
    }
    stack.push(node);
  });
  return result;
}
const renderMenuIcon = (option) => {
  return h('span', null, { default: () => null });
};
const expandIcon = () => {
  return h('span', null, { default: () => null });
};
</script>
<template>
  <nav
    aria-labelledby="doc-outline-aria-label"
    class="VPDocAsideOutline"
    :class="{ 'has-outline': headers.length > 0 }"
    ref="container"
  >
    <div class="content">
      <div class="outline-marker" ref="marker" />

      <div
        aria-level="2"
        class="outline-title"
        id="doc-outline-aria-label"
        role="heading"
      >
        页面导航
      </div>

      <NMenu
        :icon-size="1"
        :watch-props="['defaultExpandedKeys']"
        default-expand-all
        style="width: 200px"
        :indent="12"
        :options="headers"
        :render-icon="renderMenuIcon"
        :expand-icon="expandIcon"
        :default-open-keys="['/']"
      />
      <!-- <OutlineItem :headers="headers" :root="true" /> -->
    </div>
  </nav>
</template>
<style>
.n-menu-item-content__icon {
  width: 0 !important;
}
/* .n-menu-item-content {
  padding-left: 6px !important;
} */
</style>
<style scoped>
/* .VPDocAsideOutline {
  display: none;
} */

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
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s,
    opacity 0.25s;
}

.outline-title {
  line-height: 32px;
  font-size: 14px;
  font-weight: 600;
}
</style>
