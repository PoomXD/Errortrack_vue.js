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
          url: { name: "ProjectDetail", query: { projectId: 0 } },
          
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
          url: { name: "ListProject" },
        },
        {
          name: "Project Detail",
          url: "#",
        },
      ],
    },
    {
      name: "MonitorList",
      data: [
        {
          name: "Monitor Error",
          url: "#",
        },
      ],
    },
    {
      name: "Detail",
      data: [
        {
          name: "Monitor Error",
          url: {name: "MonitorList"},
        },
        {
          name: "Detail",
          url: "#",
        },

      ],
    },
    {
      name: "Task",
      data: [
        {
          name: "Monitor Error",
          url: {name: "MonitorList"},
        },
        {
          name: "Detail",
          url: { name: "Detail", query: { projectId: 0 } },

        },
        {
          name: "Task",
          url: "#",
        },
      ],
    },
  ],
  allLinkHeader: [],
};
const actions = {
  setAllLinkHeader({ commit, state }, list) {
    
    state.listHeader.find((f) => {
      if (f.name === list) {
        commit("setlist", f.data);
      }
    });
  },
  setQueryLinkHeader({ commit, state }, data) {
    var list = data.split(' ')[0]
    var query = data.split(' ')[1]
    console.log('setQueryLinkHeader: ', data.split(' '))
    state.listHeader.find((f) => {
      if (f.name === list) {
        var listLink = {data: f.data, query: query}
        commit("setlistQueryId", listLink);
      }
    });
  },
};
const mutations = {
  setlist(state, list) {
    state.allLinkHeader = list;
  },
  setlistQueryId(state, list){
    list.data.find(f => {
      if(f.name === 'Project Detail' || f.name === 'Detail'){
        console.log("query",list.query)
        f.url.query.projectId = list.query
        console.log(f)
    }
  })
    state.allLinkHeader = list.data
  }
};
export const header = {
  namespaced: true,
  state,
  actions,
  mutations,
};
