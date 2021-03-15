import UserService from '@/services/api/user.service';
import httpClient from "@/services/httpClient.js";
const state = {
    users:[]
};
const actions = {
  async getUser({ commit }) {
    // return UserService.getListUser().then(
    //     res => {
        
    //         commit("setUser", res);
    //         return Promise.resolve(res);
    //     }
    // )
    const config = {
      method: "get",
      url: `/GetName?id=${localStorage.getItem("userId")}`,
      
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await httpClient(config);
    console.log(response);
    return response.data;

  },
};
const mutations = {
  setUser(state, list) {
    list.forEach(data => {
      if(data.lastName == null){
        data.lastName = ''
      }
    });
    state.users = list;

  },
};

export default{
    namespaced: true,
    state,
    actions,
    mutations
  };