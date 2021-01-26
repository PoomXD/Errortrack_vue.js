import Vue from "vue";
import VueRouter from "vue-router";
import AuthLogin from "@/components/Auth/AuthLogin.vue";
import AppContent from "@/components/Content/AppContent.vue";

Vue.use(VueRouter);

const EmptyParentComponent = {
  template: "<router-view></router-view>"
};

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
        path: "monitor",
        name: "Monitor",
        component: EmptyParentComponent,
        children : [
          {
            path: "all",
            name: "MonitorList",
            component: () =>
              import("../views/MonitorError/ListError.vue"),
          },
          {
            path: "add",
            name: "MonitorAdd",
            component: () =>
              import("../views/MonitorError/AddList.vue"),
          }
        ]
      },
      {
        path: "project",
        name: "Project",
        component: EmptyParentComponent,
        children : [
          {
            path: "list",
            name: "ListProject",
            component: () =>
              import("../views/MonitorError/ListError.vue"),
          },
          {
            path: "project",
            name: "ProjectAdd",
            component: () =>
              import("../views/MonitorError/AddList.vue"),
          },
          {
            path: "project",
            name: "ProjectEdit",
            component: () =>
              import("../views/MonitorError/AddList.vue"),
          },
          {
            path: "project",
            name: "ProjectDetail",
            component: () =>
              import("../views/MonitorError/AddList.vue"),
          }
        ]
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

// router.beforeEach(async (to, from, next) => {
  
// });

// router.afterEach(async (to, from, next) => {
 
// });

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};


export default router;
