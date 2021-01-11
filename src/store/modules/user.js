import {
    getToken,
    setToken,
    removeToken,
    getUser,
    removeUser,
    setUser,
    setUserInfo,
    getUserInfo,
    removeUserInfo,
    getAuth,
    setAuth,
    removeAuth
} from '@/utils/user'
import {
    requestLogin,
    logout,
    getRoutersList
} from "@/api/api"
import {
    caseRouter
} from "@/api/case.js";
import {
    resetRouter
} from '../../router';
const caseList = caseRouter;
let transformMenu = list => {
    let menuObj = {},
        result = list || [];

    if (result.length) {
        result
            .sort((a, b) => {
                return parseInt(a.order||-1, 10) - parseInt(b.order||-1, 10);
            })
            .map(i => {
                !i.parentId && (i.parentId = "");
                let p = menuObj[i.parentId];
                if (!p) {
                    p = menuObj[i.parentId] = {
                        id: i.parentId,
                        children: []
                    };
                } else {
                    !p.children && (p.children = []);
                }
                let item = menuObj[i.id] || {
                    id: i.id
                    //children:[]
                };
                item.parentId = i.parentId || "";
                item.name = i.id;
                item.path = i.id;
               
                item.deploy=i.deploy;

                i.path && (item.component = i.path);
                item.meta = {
                    title: i.title,
                    icon: i.icon
                };
                menuObj[i.id] = item;
                p.children.push(item);
            });

        Object.keys(menuObj)
            .filter(e => !menuObj[e].children)
            .map(e => delete menuObj[e]);

        menuObj[""].children[0].meta.icon = 'el-icon-user-solid'
        return menuObj[""].children;
    } else {
        return [];
    }
};
const state = {
    hasMenu: false,
    token: getToken(),
    userName: getUser(),
    avatar: './img/user.png',
    menus: [],
    userInfo: getUserInfo(),
    auth:getAuth()||{},
    item: 0,
    menusPath:''
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USER_NAME: (state, userName) => {
        state.userName = userName

    },
    SET_MENUS: (state, menus) => {
        state.hasMenu = true;
        state.menus = menus;
    },
    SET_MENUS_STATE(state, status) {
        state.hasMenu = status
    },
    SET_USER_INFO(state, info) {
        state.userInfo = info
    },
    SET_AUTH(state, auth) {
        state.auth = auth||{}
    },
    SET_ITEM(state, item) {
        state.item = item || 0
    },
    SET_MENUS_PATH(state, menusPath) {
        state.menusPath = menusPath || ''
    }
}

const actions = {
    logout({
        dispatch,
        commit
    }, params) {
        return new Promise((resolve, reject) => {
            logout(params).then(response => {
                if (response.status) {

                    dispatch('resetToken')
                    dispatch('resetUser')
                    dispatch('resetUserInfo')
                    dispatch('resetAuth')
                    commit('SET_MENUS_STATE', false);
                    commit('tabs/DELETE_ALL_TABS', [], {
                        root: true
                    });
                    resetRouter()
                    resolve()
                }
            }).catch(error => {
                console.log(error);
                reject(error)
            })

        })
    },
    login({
        commit
    }, params) {

        return new Promise((resolve, reject) => {
            requestLogin(params).then(response => {

                if (response.status && response.success) {
                    const userData = response.obj,
                        token = userData.token;

                    if (userData && token) {
                        commit('SET_TOKEN', token);
                        setToken(token);
                        window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
                    }
                    resolve(response);

                } else {
                    reject(response);
                }
            }).catch(error => {
                reject(error)
            })
        })
    },
    // getMenus({ commit }, params) {
    //     return new Promise((resolve, reject) => {
    //         getRoutersList(params).then(res => {
    //             if (res && res.status) {
    //                 var list = (res && res.content && res.content.menus) || [];
    //                 //转化后台的数据
    //                 let menus = transformMenu(list);
    //                 menus=[...menus,...caseList]
    //                 commit('SET_MENUS', menus);
    //                 resolve(menus)
    //             } else {
    //                 reject();
    //             }
    //         });
    //     });
    // },
    getMenus({
        commit
    }, params) {
        return new Promise((resolve, reject) => {
            getRoutersList(params).then(res => {
                if (res && res.status && res.success) {
                    var list = (res && res.obj && res.obj.menus) || [],
                        userData = res.obj || {};

                    setUser(userData.username);
                    commit('SET_USER_NAME', userData.username);
                    setUserInfo(userData);
                    commit('SET_USER_INFO', userData);
                    //转化后台的数据
                    let menus = transformMenu(list);
                    menus=[...menus,...caseList];
                    // menus=caseList;
                    commit('SET_MENUS', menus);
                    commit('SET_USER_INFO', res.obj);

                    //设置前端权限
                    commit('SET_AUTH',userData.permissions&&userData.permissions.permissions);
                    setAuth(userData.permissions&&userData.permissions.permissions);
                    
                    resolve(menus)
                } else {
                    reject(res.msg);
                }
            }).catch(error => {
                reject(error);
            })
        });
    },
    resetToken({
        commit
    }) {
        commit('SET_TOKEN', null)
        removeToken();

    },
    resetUser({
        commit
    }) {
        commit('SET_USER_NAME', '')
        removeUser();
    },
    resetUserInfo({
        commit
    }) {
        commit('SET_USER_INFO', '')
        removeUserInfo();
    },
    resetAuth({
        commit
    }) {
        commit('SET_AUTH',{})
        removeAuth();
    },

}
const getters = {
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters

}