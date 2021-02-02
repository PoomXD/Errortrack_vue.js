const state = {
  listHeader: [
    {
      name: "ListProject",
      data: [
        {
          name: "Project Managemant",
          url: "#",
        },
      ],
    },
    {
      name: "ProjectAdd",
      data: [
        {
          name: "Project Managemant",
          url: { name: "ListProject" },
        },
      
        {
          name: "Add",
          url: "#",
        },
      ],
    },
    {
      name: "ProjectEdit",
      data: [
        {
          name: "Project Managemant",
          url: { name: "ListProject" },
        },
        {
          name: "Project Detail",
          url: { name: "ProjectDetail" },
        },
        {
          name: "Edit",
          url: "#",
        },
      ],
    },
    {
      name: "ProjectDetail",
      data: [
        {
          name: "Project Managemant",
          url: { name: "ProjectDetail" },
        },
        {
          name: "Project Detail",
          url: "#",
        },
      ],
    },
  ],
  allLinkHeader: [],
};
const actions = {
  setAllLinkHeader({ commit,state }, list) {
    console.log(list)
    state.listHeader.find(f =>{
      if(f.name === list){
        commit("setlist",f.data)
      }
    })
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
