export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "",
  "description": "Swork Extension Offical Development Doc",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "description": "Official documentation for swork plug-in development"
    },
    "/zh/": {
      "lang": "zh-CN",
      "description": "Swork插件开发官方文档"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
