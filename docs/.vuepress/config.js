module.exports = {
  lang: 'zh-CN',
  // title: 'Swork Extension',
  description: 'Swork Extension Offical Development Doc',
  base:"https://github.com/sworkofficial/swork-app",
  themeConfig: {
    logo: '/images/logo-black.png',
    editLink: true,
    lastUpdated: true,
    sidebarDepth: 2,
    repo: "https://github.com/sworkofficial/swork-app",
    locales: {
      '/': {
        sidebarDepth: 2,
        selectLanguageName: 'English',
        navbar: [
          {
            text: 'Guide',
            link: '/guide/',
          },
        ],
        sidebar: [
          {
            text: '指南',
            children: [
              {
                text: '介绍',
                link: '/guide/',
              },
              {
                text: '快速上手',
                link: '/guide/getting-started.html/',
              },
              {
                text: '目录结构',
                link: '/directory-structure/',
              },
              {
                text: '基本配置',
                link: '/basic-config/',
              },
              {
                text: '插件类型',
                link: '/extension-type/',
              },
              {
                text: '通用API与参数',
                link: '/extension-type/',
              },
            ],
          }
        ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '指南',
            link: '/guide/',
          },
        ],
      }
    },

  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      // title: 'Development Docment',
      description: 'Official documentation for swork plug-in development',
    },
    '/zh/': {
      lang: 'zh-CN',
      description: 'Swork插件开发官方文档',
    }
  },
  themePlugins: {
    activeHeaderLinks: true,
    backToTop: true,
    nprogress: true
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ]
  ]
}