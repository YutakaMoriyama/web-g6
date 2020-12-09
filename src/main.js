import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

const domain = "http://127.0.0.1:5500";
axios.defaults.baseURL = domain;
store.commit("set_axios", axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
