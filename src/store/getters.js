export default {
    getActiveTab(state){
        return state.tabs.activeTab
    },
    theme(state){
        return state.project.info.theme
    },
    title(state){
        return state.project.info.title
    },
    layout(state){
        return state.project.info.layout
    },
    logo(state){
        return state.project.info.logo
    },
    driverType(state){
        return state.project.info.driverType
    }
}