import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/Desktop/swork-extension-doc/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/Desktop/swork-extension-doc/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
