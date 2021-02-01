import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";
import {header} from "./header.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

  },
  actions: {
  
  },
  mutations: {
    
  },
  modules: {
    account,
    header,
  },
});

export default store;
