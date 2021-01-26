import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'

//Core Custom Component
import ComponentPlugin from '@/components/_ComponentPlugin'

/**
* plugin
**/
Vue.use(ComponentPlugin);
Vue.use(BootstrapVue);// Install BootstrapVue
Vue.use(IconsPlugin);// Optionally install the BootstrapVue icon components plugin


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
