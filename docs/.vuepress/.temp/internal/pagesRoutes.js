import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html","快速上手",["/guide/getting-started","/guide/getting-started.md"]],
  ["v-fffb8e28","/guide/","介绍",["/guide/index.html","/guide/README.md"]],
  ["v-2d0ad528","/zh/","",["/zh/index.html","/zh/README.md"]],
  ["v-37781588","/zh/guide/getting-started.html","介绍",["/zh/guide/getting-started","/zh/guide/getting-started.md"]],
  ["v-47357bdb","/zh/guide/","介绍",["/zh/guide/index.html","/zh/guide/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
