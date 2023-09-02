export default [
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
