import Vue from "vue";
import App from "@/App";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/messaging";
// import "firebase/storage";

import router from "@/route/router";
import store from "@/store/index";
import getCurrentUser from "./utils/firebaseInit";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created() {
    getCurrentUser().then(res => {
      if (res) {
        this.$store.dispatch("loggedUser", res);
        this.$store.dispatch("getMissions", res.uid);
      }
    });
  },
  render: h => h(App)
}).$mount("#app");
