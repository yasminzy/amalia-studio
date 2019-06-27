import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/js/bootstrap.min";

import "typicons.font/src/font/typicons.css";

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
