import Vue from "vue";
import vueRouter from "vue-router";

Vue.use(vueRouter);

import _ from "lodash";
const appearanceConfig = require("../../config/appearance.json");
let layout = "lr-layout";
let mainPage = "/main/main.vue";
if (appearanceConfig && appearanceConfig.layout) {
  layout = appearanceConfig.layout;
}

if (appearanceConfig && appearanceConfig.mainPage) {
  mainPage = appearanceConfig.mainPage;
}

import Login from "@/views/Login";
import noFound from "@/views/error/404";

//3.1版本 在路由跳转的时候两次push replace 的path地址相同
const routerPush = vueRouter.prototype.push;
vueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};
const routerReplace = vueRouter.prototype.replace;
vueRouter.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch((error) => error);
};

//基本的路由页面，不需要通过后台返回的
export const mainRouter = [
  {
    path: "/",
    component: () => import(`@/layout/pages/${layout}/index.vue`),
    redirect: "main",
    // isLayout: true,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("@/layout/components/redirect"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import(`@/views${mainPage}`),
        meta: {
          title: "首页",
          icon: "el-icon-goods",
        },
      },
      {
        path: "/404",
        component: noFound,
        hidden: true,
        meta: {
          title: "404",
        },
      },
      {
        path: "/getCustomerInfo",
        component: () => import(`@/views/GRP/customerInfo.vue`),
        meta: {
          title: "客户信息",
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "*",
    redirect: "/404",
    component: noFound,
    hidden: true,
  },
  
];

const createRouter = () => {
  return new vueRouter({
    routes: _.cloneDeep(mainRouter),
  });
};

const router = createRouter();

// 退出登录或者更改角色或者重新addroutes 需要resetRouter
export function resetRouter() {
  const newRouter = createRouter();
  router.options.routes = _.cloneDeep(mainRouter);

  router.matcher = newRouter.matcher; // reset router
}

window.router = router;
export default router;
