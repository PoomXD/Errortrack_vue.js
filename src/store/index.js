import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";
import {header} from "./header.module";
import project from "@/store/project.module.js";
import user from "@/store/user.module.js";
import errorStatus from "@/store/errorStatus.module.js";

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
    user,
    errorStatus,
  },
});

export default store;
