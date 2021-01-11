const state = {
    info:{
        layout: "lr-layout",
		theme: "#04BEBD",
		title: "AWEB",
		logo: "public/img/logo.png",
		driverType: "pc"
    }
}
const mutations = {
   SET_PROJECT_INFO(state, info){
        state.info = info;
   }
}

const getters={
    
}
const actions={

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters

}