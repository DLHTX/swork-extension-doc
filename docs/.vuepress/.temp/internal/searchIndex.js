export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "快速上手",
    "headers": [],
    "path": "/guide/getting-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "介绍",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/zh/",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "介绍",
    "headers": [],
    "path": "/zh/guide/getting-started.html",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "介绍",
    "headers": [],
    "path": "/zh/guide/",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
