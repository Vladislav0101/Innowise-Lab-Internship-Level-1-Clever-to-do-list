import Vue from "vue";
import App from "@/App";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";

import router from "@/route/router";
import store from "@/store/index";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: process.env.VUE_APP_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_DATABASE_URL,
      projectId: process.env.VUE_APP_PROJECT_ID,
      storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_APPID
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("loggedUser", user);
        this.$store.dispatch("setMissions", user.uid);
        if (this.$route.name !== "main") this.$router.push({ name: "main" });
      } else {
        if (this.$route.name !== "sign") this.$router.push({ name: "sign" });
      }
    });
  },
  render: h => h(App)
}).$mount("#app");
