
import axios from 'axios';
import source from './source.js';
import { Loading } from 'element-ui';
for (let i in source) {
  axios[i] = source[i];
}
var loading,
    startLoading = function(loadingText,customClass) {

      loading = Loading.service({
        customClass:customClass||"axios-loading",
        lock: true,
        text: loadingText||'加载中……',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.5)'
      })
    },
    endLoading = function() {
      if (loading) {
        loading.close();
      }
    };
// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.withCredentials = true;
//axios.defaults.headers["Content-Type"] = `application/x-www-form-urlencoded`; //如果所有请求都是这种形式可以打开统一配置，如果不是就要修改以下拦截加判断

//拦截器为了适配AWEB后台，这里给每个接口统一加上token，并配置对应的请求头
axios.interceptors.request.use(config=>{
    // startLoading(config.loadingText,config.customClass);      //添加遮罩
    return config;
  }, error => {
    // endLoading();
    return Promise.reject(error);
  }
)
// axios.interceptors.request.use(
//   config => {

//     let ctoken = global.ctoken||'';
//     if (ctoken) {
//       config.data = qs.stringify({
//         ...config.data,
//         ctoken
//       })     
//       config.headers["Content-Type"] = `application/x-www-form-urlencoded`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });
// 拦截器为了适配AWEB后台，这里是当token过期是，页面跳转到登陆页
axios.interceptors.response.use(
  (response) => {

    // if (!response) {
    //   Notification.error({
    //     title: '错误',
    //     message: '系统错误0X08:后台服务报错'
    //   })
    //   return false;
    // }
    endLoading();
    let data = response.data;
    if (data.status) {
      return data
    } else {
      // switch (data.errorCode) {
      //   case '100001':
      //     MessageBox.confirm('会话超时，请重新登录！')
      //       .then(() => {
      //         removeToken();
      //         window.location.href = './';

      //       })
      //       .catch(() => { });
      //     break;
      //   case '100002':
      //     Notification.error({
      //       title: '错误',
      //       message: '系统错误0X06:' + data.errorMsg || '字段校验失败'
      //     })
      //     break;
      //   default:
      //     return data;
      // }
      return data;

    }
  },
  error => {
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 401:
    //       // 401 清除token信息并跳转到登录页面
    //       localStorage.removeItem('ctoken');
    //       window.location.href = './';
    //   }
    // }
    endLoading();
    return Promise.reject(error.response && error.response.data)
  });


window.axios = axios;