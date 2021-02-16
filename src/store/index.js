import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";
import {header} from "./header.module";
import user from "@/store/user.module.js";
import errorStatus from "@/store/errorStatus.module.js";
import sidebar from "@/store/sidebar.module.js";

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
    user,
    errorStatus,
    sidebar
  },
});

export default store;
