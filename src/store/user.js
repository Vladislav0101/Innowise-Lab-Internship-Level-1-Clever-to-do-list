import firebase from "firebase";

import User from "../utils/user_help";

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
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(userMail, userPassword);
        commit("setUser", new User(user.user.uid));
      } catch (error) {
        throw error;
      }
    },
    async signIn({ commit }, { userMail, userPassword }) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(userMail, userPassword);
        commit("setUser", new User(user.user.uid));
      } catch (error) {
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
