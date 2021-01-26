import Vue from "vue";
import Vuex from "vuex";
import { account } from "./account.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    account
  }
});

export default store;