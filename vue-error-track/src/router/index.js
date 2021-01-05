import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthLogin from "@/components/Auth/AuthLogin.vue";
import AppContent from "@/components/Content/AppContent.vue";

Vue.use(VueRouter);

// const EmptyParentComponent = {
//   template: "<router-view></router-view>"
// };

const routes = [
  {
    path: "/login",
    component: AuthLogin,
    // meta: {
    //   login: true
    // },
    children: [
      {
        name: "Login",
        path: "",
        component: () => import("../views/Auth/Login.vue")
      }
    ]
  },
  {
    path: "/",
    name: "app-content",
    component: AppContent,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
