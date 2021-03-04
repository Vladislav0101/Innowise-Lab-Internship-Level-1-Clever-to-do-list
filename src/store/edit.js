export default {
  state: {
    titleToEdit: null,
    descriptionToEdit: null,
    keyValueToEdit: null,
    isEdit: false
  },
  getters: {
    titleToEdit(state) {
      return state.titleToEdit;
    },
    descriptionToEdit(state) {
      return state.descriptionToEdit;
    },
    keyValueToEdit(state) {
      return state.keyValueToEdit;
    },
    isEdit(state) {
      return state.isEdit;
    }
  },
  mutations: {
    isEdit(state, value) {
      state.isEdit = value;
    },
    titleToEdit(state, title) {
      state.titleToEdit = title;
    },
    descriptionToEdit(state, description) {
      state.descriptionToEdit = description;
    },
    keyValueToEdit(state, keyValue) {
      state.keyValueToEdit = keyValue;
    }
  },
  actions: {
    setIsEdit({ commit }, value) {
      commit("isEdit", value);
    },
    setTitleToEdit({ commit }, title) {
      commit("titleToEdit", title);
    },
    setDescriptionToEdit({ commit }, description) {
      commit("descriptionToEdit", description);
    },
    setKeyValueToEdit({ commit }, keyValue) {
      commit("keyValueToEdit", keyValue);
    }
  }
};
