
// import 'babel-polyfill'   //如果需要兼容到IE9就打开
import Vue from 'vue'
import App from './App'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import "element-ui/packages/theme-chalk/src/index.scss";

import { getToken } from '@/utils/user'

import Lib, { _import, _preview } from '@v2-lib/vue.spa.plugin'
import webideSupport from '@v2-lib/webide.support.fusion'

//axios全局拦截
import './api/index.js';

//路由
import router from './router'

//状态管理
import store from './store'

import CryptoJS from 'crypto-js';

Vue.use(webideSupport)
Vue.use(ElementUI)
Vue.use(Lib)
window.store = store;
window.Vue = Vue;
Vue.prototype.$AUTH = function (path, wid) {
  var widgetMap = store.state.user.auth || {};


  return path && wid && widgetMap[path] && (widgetMap[path].indexOf(wid) !== -1);


}
Vue.config.productionTip = false;

const whiteList = ['/404']
router.beforeEach(async (to, from, next) => {

  NProgress.start();
  let wpath = window.location.hash.split('?')[0].replace('#/', '');
  let routes = router.options.routes

  //WEBIDE预览
  if (_preview(router, to, next)) {
    return;
  }

  //打开新窗口
  if (localStorage.getItem('openWindow') && localStorage.getItem('openWindow') === wpath) {
    routes.push({
      path: '/' + wpath,
      component: _import(wpath),
      hidden: true
    });
    router.addRoutes(routes);
  }

  const token = getToken()
  if (token) {

    if (to.path === '/login') {
      next({ path: '/' })
    } else {

      //是否已经获取菜单
      const hasMenu = store.state.user.hasMenu;
      if (hasMenu) {
        next()
      } else {
        try {
          //获取菜单
          const menus = await store.dispatch('user/getMenus', { ctoken: token })
          // const menus = await store.dispatch('user/getMenus')
          //把菜单转化为路由
          const accessRoutes = await store.dispatch('permission/transformRoutes', menus)


          //把菜单加入到路由
          router.options.routes.forEach(element => {
            if (element.isLayout) {
              if (!element.children) element.children = [];
              element.children.push(...accessRoutes);
              return;
            }
          });
          router.addRoutes(router.options.routes)

          next({ path: to.redirectedFrom || to.path, replace: true, query: to.query })
        } catch (error) {

          // 删除token 并跳转到登录页
          console.log(error);
          await store.dispatch('user/resetToken')
          next(`/login`)
        }
      }
    }
  } else {

    //不需要登录的页面
    if (whiteList.indexOf(to.path) !== -1 || to.path === '/login') {
      next()
    } else {
      next(`/login`)
    }
  }



})

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

new Vue({
  router,
  store,
  methods: {
    closeTab(path) {
      this.$store.commit("tabs/DELETE_TABS", path || this.$store.getters.getActiveTab);
    },
    close(path) {
      this.closeTab(path)
    },
    encryptByDES(message) {
      const keyHex = CryptoJS.enc.Utf8.parse('awebskey');
      const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
    },
    decryptByDES(ciphertext) {
      const keyHex = CryptoJS.enc.Utf8.parse('awebskey');
      const decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
      }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    }
  },
  render: h => h(App)
}).$mount('#app')