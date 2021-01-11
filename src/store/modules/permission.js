
import {_import} from '@v2-lib/vue.spa.plugin'

import AEmpty from '@v2-lib/vue.spa.plugin/components/empty.vue'
const filterAsyncRouter = (asyncRoutes) => {

    let res = asyncRoutes.map(route => {
        if (!route.component) {
            route.component = AEmpty;
        }
        if (typeof route.component === 'string') {
            // route.componentUrl = route.component;
            route.component = _import(route.component,route.deploy)
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return route;
    })

    return res;
}

const state = {
    routes: []
}
const mutations = {
    SET_ROUTES(state, routes) {
        state.routes = routes;
    }
}
const actions = {
    transformRoutes({ commit }, routes) {
        return new Promise((resolve, reject) => {
            let accessRoutes = filterAsyncRouter(routes, true);
            commit('SET_ROUTES', accessRoutes)
            resolve(accessRoutes)
        })


    }
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