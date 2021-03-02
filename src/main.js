import Vue from "vue";
import App from "@/App";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";

import router from "@/route/router";
import store from "@/store/store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyD2sBTvHMOtqsfVQjL8V05CjBTr07Em1Yk",
      authDomain: "to-do-892f0.firebaseapp.com",
      databaseURL: "https://to-do-892f0-default-rtdb.firebaseio.com",
      projectId: "to-do-892f0",
      storageBucket: "to-do-892f0.appspot.com",
      messagingSenderId: "697908940823",
      appId: "1:697908940823:web:609404e1b1f69a543dcc52"
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
