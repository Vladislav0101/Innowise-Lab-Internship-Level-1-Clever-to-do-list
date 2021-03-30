import Vue from "vue";
import Vuex from "vuex";

import edit from "./edit";
import user from "./user";
import main_page from "./main_page";
import init from "./init";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    init,
    edit,
    main_page,
    user
  }
});
