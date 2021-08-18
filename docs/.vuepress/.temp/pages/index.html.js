export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
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
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Convenient and fast",
        "details": "Take the microservice framework as the central structure and focus on developing documents with the least configuration。"
      },
      {
        "title": "Vue/React",
        "details": "Support the rapid development of a variety of front-end frameworks。"
      },
      {
        "title": "High performance",
        "details": "The high performance of the microservice framework brings you a fast experience。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Swork"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
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
