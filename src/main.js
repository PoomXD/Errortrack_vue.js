import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Multiselect from 'vue-multiselect'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

//Core Custom Component
import ComponentPlugin from '@/components/_ComponentPlugin'
library.add(fas)
library.add(far)

/**
* plugin
**/
Vue.use(ComponentPlugin);
Vue.use(BootstrapVue);// Install BootstrapVue
Vue.use(IconsPlugin);// Optionally install the BootstrapVue icon components plugin


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('multiselect', Multiselect)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
