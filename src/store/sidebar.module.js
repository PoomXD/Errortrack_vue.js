const state = {
    sidebarProject: false,
    sidebarMonitor: false,
}

const actions = {
    setActiveNav({ commit }, str) {
        console.log('Nav Active : ', str);

        commit('SET_ACTIVE', str);

    }
}

const mutations = {
    SET_ACTIVE(state, str) {
        if(str === 'project'){
            state.sidebarProject = true;
            state.sidebarMonitor = false;
        }else if (str === 'monitor'){
            state.sidebarProject = false;
            state.sidebarMonitor = true;
        }
        console.log('project = ', state.sidebarProject);
        console.log('monitor = ', state.sidebarMonitor);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}