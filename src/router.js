import Home from "./views/home";
import Router from "vue-router";

import Vue from "vue";
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: () => import("./views/about") },
    { path: "/contact", component: () => import("./views/contact") },
    { path: "/hire", component: () => import("./views/hire") },
    { path: "/projects", component: () => import("./views/projects") },
    { path: "/sent", component: () => import("./views/sent") },
    {
      path: "/posts",
      component: () => import("./components/post-layout"),
      children: [
        { path: "", component: () => import("./views/posts") },
        { path: ":title", component: () => import("./components/post-item") }
      ]
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
