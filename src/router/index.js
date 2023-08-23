import { createRouter, createWebHistory } from "vue-router";

const constRoutes = [
  {
    "path": "/",
    "redirect": "/page-index"
  },
  {
    "path": "/page-index",
    "name": "page-index",
    "redirect": "/page-index/projects",
    "component": () => import("@/views/page-index/index.vue"),
    "children": [
      {
        "path": "/page-index/projects",
        "component": () => import("@/views/page-index/components/page-projects.vue")
      },
      {
        "path": "/page-index/display",
        "component": () => import("@/views/page-index/components/page-display.vue")
      }
    ]
  },
  {
    "path": "/error-page/404",
    "name": "404",
    "component": () => import("@/views/error-page/page-404.vue")
  }
];

const WTKRoutes = [
  {
    "path": "/WTK",
    "redirect": "/WTK/display"
  },
  {
    "path": "/WTK/display",
    "name": "WTK-display",
    "component": () => import("@WTK/views/display/index.vue")
  },
  {
    "path": "/WTK/admin",
    "name": "WTK-admin",
    "component": () => import("@WTK/views/admin/index.vue")
  }
];

const lastRoutes = [
  {
    "path": "/:catchAll(.*)",
    "redirect": "/error-page/404"
  }
];

const finalRoutes = constRoutes.concat(WTKRoutes, lastRoutes);

const router = createRouter({
  "history": createWebHistory(),
  "routes": finalRoutes
});

export default router;
