const state = {
  allLinkHeader: [
    {
      name: "Project Managemant",
      url: "#",
    },{
        name: "Project Managemant",
        url: "#",
      },
  ],
};
const actions = {
  setAllLinkHeader({ commit }, list) {
    commit("setlist", list);
  },
};
const mutations = {
  setlist(state, list) {
    console.log("mutation:", list);
    state.allLinkHeader = list;
  },
};
export const header = {
  namespaced: true,
  state,
  actions,
  mutations,
};
