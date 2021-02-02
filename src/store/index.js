import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";
import {header} from "./header.module";
import project from "@/store/project.module.js";

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
    project,
  },
});

export default store;
