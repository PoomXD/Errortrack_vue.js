import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allLinkHeader: [],
  },
  actions: {
    setAllLinkHeader( {commit},list){
      commit("setlist",list)
    },
  },
  mutations: {
    setlist(state,list){
      state.allLinkHeader = list
    }
  },
  modules: {
    account,
  },
});

export default store;
