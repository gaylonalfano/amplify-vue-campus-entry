import { createStore } from "vuex";
import { auth } from "@/store/auth/auth";

export default createStore({
  state: {},
  getters: {}, // Note included by default but should be...
  mutations: {},
  actions: {},
  modules: {
    auth
  }
});
