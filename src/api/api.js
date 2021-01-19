import { getToken} from '@/utils/user'
const axios=window.axios;
axios.defaults.headers.common["X-CSRF-TOKEN"] =getToken();

//登录
// export const requestLogin = params => {
//   return axios.post(
//     `${axios.server}/signIn.do`,
//     qs.stringify(params), {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     }
//   ).then(res => {
//     return res;
//   });
// };
export const requestLogin = params => {
  var formData = new FormData();

  formData.append('username',params.username);
  formData.append('password', params.password);
  formData.append('code', params.code);
  return  axios.post(`${axios.server}/WMS/login`,formData);

};
export const logout=params=>{
  //return axios.delete(`${axios.server}/signOut.do`, {params:params})
  return axios.get(`${axios.server}/logout`);
}

//菜单
// export const getRoutersList = params=>{
 
//   return axios.get(`${axios.server}/springmvc/menu/loadMenu.do`,{
//     params:params
//   })
// }
export const getRoutersList = params=>{
 

  return axios.get(`${axios.server}/WMS/current`);

}
//验证码
export const getVerifyImage=()=>{
  //return `${axios.server}/verifyImage.do`;
  return `${axios.server}/verify/jpgCode`;
}


//export  const requestLogin = params => {
//   return axios.post(`/mock/login`, params).then(res => res.data);
// };


// export const getRoutersList = params => {
//   return axios.get(`/mock/-/router/get`, {
//     params: params
//   });
// };

export const getUserList = params => {
  return axios.get(`/mock/-/user/list`, {
    params: params
  });
};

export const removeUser = params => {
  return axios.get(`/mock/-/user/remove`, {
    params: params
  });
};

export const editUser = params => {
  return axios.get(`/mock/-/user/edit`, {
    params: params
  });
};

export const addUser = params => {
  return axios.get(`/mock/-/user/add`, {
    params: params
  });
};

export const getUserListPage = params => {
  return axios.get(`/mock/-/user/listpage`, {
    params: params
  });
};

export const getMainList = params => {
  return axios.get(`/mock/-/getMainList`, {
    params: params
  });
};