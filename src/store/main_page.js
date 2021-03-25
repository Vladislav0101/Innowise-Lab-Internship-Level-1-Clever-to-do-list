import firebase from "firebase";
export default {
  state: {
    daysArray: [],
    activeDay: null,
    missions: null,
    months: null,
    keyToGetMission: null,
    arrDaysActiveMissions: [],
    arrDaysDoneMissions: []
  },
  getters: {
    daysArray(state) {
      return state.daysArray;
    },
    activeDay(state) {
      return state.activeDay;
    },
    activeDayInDF(state) {
      return new Date(state.activeDay);
    },
    missions(state) {
      return state.missions;
    },
    missionsForActiveDay(state) {
      return state.missions && state.activeDay
        ? state.missions[state.activeDay]
        : null;
    },
    months(state) {
      return state.months;
    },
    arrDaysActiveMissions(state) {
      return state.arrDaysActiveMissions;
    },
    arrDaysDoneMissions(state) {
      return state.arrDaysDoneMissions;
    }
  },
  mutations: {
    setDaysArray(state, daysInMonth) {
      for (let i = 0; i < daysInMonth; i++) {
        state.daysArray.push(i);
      }
    },
    setActiveDay(state, chosenDay) {
      let day = !state.activeDay ? new Date() : new Date(chosenDay);
      state.activeDay =
        day.getMonth() + 1 + "-" + day.getDate() + "-" + day.getFullYear();
    },
    setCurrentDayTasks(state) {
      state.activeDay = new Date();
    },
    getMissions(state, missions) {
      state.missions = missions;
    },
    setMonths(state) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      state.months = months;
    },
    setArrDaysActiveMissions(state, arr) {
      state.arrDaysActiveMissions = arr;
    },
    setArrDaysDoneMissions(state, arr) {
      state.arrDaysDoneMissions = arr;
    }
  },
  actions: {
    setDaysArray({ commit }, daysInMonth) {
      commit("setDaysArray", daysInMonth);
    },
    setActiveDay({ commit }, chosenDay) {
      commit("setActiveDay", chosenDay);
    },
    setCurrentDayTasks({ commit }) {
      commit("setCurrentDayTasks");
    },
    getMissions({ commit }, uid) {
      firebase
        .database()
        .ref("users/" + uid)
        .on("value", snapshot => {
          commit("getMissions", snapshot.val());
        });
    },
    setMonths({ commit }) {
      commit("setMonths");
    },
    setArrDaysActiveMissions({ commit }, arr) {
      commit("setArrDaysActiveMissions", arr);
    },
    setArrDaysDoneMissions({ commit }, arr) {
      commit("setArrDaysDoneMissions", arr);
    }
  }
};
