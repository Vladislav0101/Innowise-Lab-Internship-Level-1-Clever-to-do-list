import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";
export default {
  state: {
    isInit: false
  },
  getters: {
    isInit(state) {
      return state.isInit;
    }
  },
  mutations: {
    setIsInit(state, value) {
      state.isInit = value;
    }
  },
  actions: {
    async initializeApp({ commit, dispatch }) {
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
      commit("setIsInit", true);
      return new Promise((res, rej) => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            dispatch("loggedUser", user);
          }
          res(user);
        }, rej);
      });
    }
  }
};
