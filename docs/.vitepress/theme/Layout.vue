<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide } from "vue";
// import CustomOutline from './components/custom-outline/index.vue'

const { isDark } = useData();

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});
</script>

<template>
  <NConfigProvider
    :theme-overrides="{
      common: {
        primaryColor: 'var(--vp-c-brand-3)',
        primaryColorHover: 'var(--vp-c-brand-1)',
        primaryColorPressed: 'var(--vp-c-brand-3)',
      },
    }"
  >
    <NBackTop />
    <DefaultTheme.Layout>
      <template #layout-bottom>
        <div class="pv-uv-count">
          本站总访问量 <span id="busuanzi_value_site_pv" /> 次 本站访客数
          <span id="busuanzi_value_site_uv" /> 人次
        </div>
      </template>
      <template #not-found>
        <NotFound />
      </template>
      <!-- <template #aside-outline-before>
        <CustomOutline />
      </template> -->
    </DefaultTheme.Layout>
  </NConfigProvider>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
