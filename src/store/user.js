import firebase from "firebase";

import User from "./user_help";

export default {
  state: {
    user: undefined
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload ? payload.id : null;
    }
  },
  actions: {
    async registerUser({ commit }, { userMail, userPassword }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(userMail, userPassword);
        commit("setUser", new User(user.user.uid));

        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },

    async signIn({ commit }, { userMail, userPassword }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(userMail, userPassword);
        commit("setUser", new User(user.user.uid));

        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
    loggedUser({ commit }, payload) {
      commit("setUser", new User(payload.uid));
    },
    logoutUser({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    }
  }
};
