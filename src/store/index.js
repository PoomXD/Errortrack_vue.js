import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";
import {header} from "./header.module";
import project from "@/store/project.module.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    errorStatus: [
      { value : 1, text : "Waiting"},
      { value : 2, text : "To Do"},
      { value : 3, text : "Doing"},
      { value : 4, text : "Testing"},
      { value : 5, text : "Done"}
    ]
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
