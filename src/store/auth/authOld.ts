import { Auth } from "aws-amplify";

// Q: Do I need to use createStore() again?
// A: Nope! Only need that for the main Store.
// These modules we simply register inside it.
export const auth = {
  namespace: true,
  state: { user: null },
  mutations: {
    setUser(state, payload) {
      // When you commit() setUser() it's going to payload
      // and set to state.user
      state.user = payload;
    }
  },
  actions: {
    // NOTE actions are similar to mutations but they handle
    // ASYNC actions eg call API, waiting for Promise, etc.
    // We're going to put our login/logout as actions here.
    // Q: How to add Types to commit?
    // A: ({ commit }: { commit: Function}) --https://stackoverflow.com/questions/62937216/vue-vuex-with-typescript-vuex-object-not-known-type
    async logout({ commit }: { commit: Function }) {
      // NOTE The first param to logout() is an object. We're destructuring
      // to get the commit property.
      // NOTE We always commit() mutations and reset to null
      commit("setUser", null);
      // Then return the Amplify Auth.signOut();
      return await Auth.signOut();
    }
  },
  getters: {}
};
