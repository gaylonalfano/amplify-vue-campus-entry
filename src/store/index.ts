// WITH Vuex
// import { createStore } from "vuex";
// import { auth } from "@/store/auth/auth";

// export default createStore({
//   state: {},
//   getters: {}, // Note included by default but should be...
//   mutations: {},
//   actions: {},
//   modules: {
//     auth
//   }
// });

// WITHOUT Vuex (just Composition API)
// https://youtu.be/_k4GM5cmm68?t=710
// NOTE I'm testing this out with the Home.vue component instead of Login.vue
import { reactive, readonly } from "vue";
import { Auth } from "aws-amplify";

const state = reactive({
  // user: async () => await Auth.currentUserInfo()
  user: "Gaylon",
  counter: 0,
  counterColor: "red"
});

const methods = {
  capitalize() {
    console.log("capitalize triggered");
    state.user = state.user.toUpperCase();
  },

  lowercase() {
    console.log("lowercase triggered");
    state.user = state.user.toLowerCase();
  },

  increaseCounter() {
    state.counter++;
  },

  decreaseCounter() {
    state.counter--;
  },

  setCounterColor(value: string) {
    state.counterColor = value;
  },

  setUser(value: any) {
    state.user = value;
  }
};

const getters = {
  counterSquared() {
    return state.counter * state.counter;
  },
  getUser() {
    return state.user;
  }
};

// Prevent state from being mutated by outside methods, etc. by using readonly()
export default { state: readonly(state), methods, getters };
