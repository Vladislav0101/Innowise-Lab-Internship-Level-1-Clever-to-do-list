import Vue from "vue";
import App from "@/App";

import router from "@/route/router";
import store from "@/store/index";

Vue.config.productionTip = false;
store.dispatch("initializeApp");
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
