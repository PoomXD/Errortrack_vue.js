import Vue from "vue";
import VueRouter from "vue-router";
import AuthLogin from "@/components/Auth/AuthLogin.vue";
import AppContent from "@/components/Content/AppContent.vue";

Vue.use(VueRouter);

const EmptyParentComponent = {
  template: "<router-view></router-view>"
};

const routes = [
  // {
  //   path: "",
  //   redirect: { name: "Login" }
  // },
  // {
  //   path: "*",
  //   redirect: { name: "Login" }
  // },
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
            path: "list",
            name: "MonitorList",
            component: () =>
              import("../views/MonitorError/ListError.vue"),
          },
          {
            path: "add",
            name: "MonitorAdd",
            component: () =>
              import("../views/MonitorError/AddList.vue"),
          },
          // {
          //   path: "detail",
          //   name: "ServiceError",
          //   component: () =>
          //     import("../views/MonitorError/ServiceError.vue"),
          // },
          {
            path: "detail",
            name: "Detail",
            meta :{
              showEdit : false,
              name: "Detail"
            },
            component: () =>
              import("../views/ProjectManagement/ProjectDetail.vue"),
          },
          {
            path: "task",
            name: "TaskError",
            component: () =>
              import("../views/MonitorError/Task.vue"),
          },
          {
            path: "modal",
            name: "ModalTest",
            component: () =>
              import("../views/MonitorError/ModalForTask.vue"),
          },
          {
            path: "fileUpload",
            name: "fileUploadTest",
            component: () =>
              import("../views/MonitorError/FileUpload.vue"),
          }
        ]
      },
      {
        path: "project",
        name: "ProjectManagement",
        component: EmptyParentComponent,
        children : [
          {
            path: "list",
            name: "ListProject",
            component: () =>
              import("../views/ProjectManagement/ListProject.vue"),
          },
          {
            path: "add",
            name: "ProjectAdd",
            component: () =>
              import("../views/ProjectManagement/ProjectAdd.vue"),
          },
          {
            path: "detail",
            name: "ProjectDetail",
            meta:{name: "ProjectDetail"},
            component: () =>
              import("../views/ProjectManagement/ProjectDetail.vue"),
          },
          {
            path: "edit",
            name: "ProjectEdit",
            component: () =>
              import("../views/ProjectManagement/ProjectEdit.vue"),
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
