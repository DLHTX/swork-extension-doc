export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo-black.png",
    "heroText": "Swork Extension",
    "tagline": "Official documentation for swork plug-in development",
    "actions": [
      {
        "text": "Get Started →",
        "link": "/en/guide/",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "方便快速",
        "details": "以微服务框架为中心结构，用最少的配置专注开发文档。"
      },
      {
        "title": "Vue/React",
        "details": "支持多种前端框架的快速开发。"
      },
      {
        "title": "高性能",
        "details": "微服务框架的高性能，给你带来快速的体验。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Swork"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
