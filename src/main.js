import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

import "jquery/dist/jquery.slim.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/css/custom-bootstrap.css";

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
