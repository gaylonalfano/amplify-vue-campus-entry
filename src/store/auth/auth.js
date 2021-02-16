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
    async logout({ commit }) {
      // NOTE The first param to logout() is an object. We're destructuring
      // to get the commit property.
      // NOTE We always commit() mutations and reset to null
      commit("setUser", null);
      // Then return the Amplify Auth.signOut();
      return await Auth.signOut();
    },
    async login({ commit }, { username, password }) {
      try {
        await Auth.signIn({
          // Q: What about email?
          username,
          password
        });
        // If signIn() doesn't fail, we want to get the user info as well
        const userInfo = await Auth.currentUserInfo();
        // Now let's use/commit() our setUser() mutation to set our user
        commit("setUser", userInfo);
        // NOTE Erik likes to return a Promise here so that other components that are listening
        // to this, can use .then() to know when it succeeds in logging in the user etc.
        // NOTE He also likes to add some logic here so he doesn't return the whole await up at
        // the very top. Don't fully understand but going with it... hah!
        // "Successfully ran login() action and committed setUser() mutation."
        return Promise.resolve("actions:login:SUCCESS");
      } catch (error) {
        console.log(error);
        // Likes to return a Promise to let other components run .then()
        return Promise.reject("actions:login:FAILED");
      }
    },
    async signUp(_, { username, password, email }) {
      try {
        // Use AWS Auth.signUp() and pass in attributes property
        await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        });
        // If it's successful return a Promise
        return Promise.resolve("actions:signUp:SUCCESS");
      } catch (error) {
        console.log(error);
        return Promise.reject("actions:signUp:FAILED");
      }
    },
    async confirmSignUp(_, { username, code }) {
      try {
        // Use AWS Auth to confirm
        await Auth.confirmSignUp(username, code);
        // If it's successful return a Promise
        return Promise.resolve("actions:confirmSignup:SUCCESS");
      } catch (error) {
        console.log(error);
        return Promise.reject("actions:confirmSignup:FAILED");
      }
    }
  },
  async authAction({ commit }) {
    // This runs whenever the app loads essentially so it sort of initializes
    // the user state I believe.
    const userInfo = await Auth.currentUserInfo();
    // Let's now commit our setUser mutation
    commit("setUser", userInfo);
  },
  getters: {
    user(state) {
      return state.user;
    }
  } // OR...
  // getters: {
  //   user: state => state.user
  // }
};
