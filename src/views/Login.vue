<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md">
      <div>
        <img
          class="w-auto h-40 mx-auto"
          src="../assets/images/concordia-logo.png"
          alt="Concordia Logo"
        />
        <!-- <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900"> -->
        <!--   Balance Tracker -->
        <!-- </h2> -->
      </div>
      <!-- <h3 class="mt-6 text-xl font-bold text-center text-gray-900">Log in</h3> -->
      <form @submit.prevent="login" class="mt-2 space-y-2">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              v-model="username"
              id="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <!-- <div> -->
          <!--   <label for="email-address" class="sr-only">Email address</label> -->
          <!--   <input -->
          <!--     v-model="email" -->
          <!--     id="email-address" -->
          <!--     name="email" -->
          <!--     type="email" -->
          <!--     autocomplete="email" -->
          <!--     required -->
          <!--     class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" -->
          <!--     placeholder="Email address" -->
          <!--   /> -->
          <!-- </div> -->
          <!-- <div> -->
          <!--   <label for="phone-number" class="sr-only">Phone number</label> -->
          <!--   <input -->
          <!--     v-model="phone" -->
          <!--     id="phone-number" -->
          <!--     name="phone" -->
          <!--     type="string" -->
          <!--     autocomplete="phone" -->
          <!--     required -->
          <!--     class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" -->
          <!--     placeholder="Phone number" -->
          <!--   /> -->
          <!-- </div> -->
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div v-if="error">
          <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
        </div>
        <div>
          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent group rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <!-- <span class="absolute inset-y-0 left-0 flex items-center pl-3"> -->
            <!--   <!-1- Heroicon name: lock-closed -1-> -->
            <!--   <svg -->
            <!--     class="w-5 h-5 text-blue-500 group-hover:text-blue-400" -->
            <!--     xmlns="http://www.w3.org/2000/svg" -->
            <!--     viewBox="0 0 20 20" -->
            <!--     fill="currentColor" -->
            <!--     aria-hidden="true" -->
            <!--   > -->
            <!--     <path -->
            <!--       fill-rule="evenodd" -->
            <!--       d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" -->
            <!--       clip-rule="evenodd" -->
            <!--     /> -->
            <!--   </svg> -->
            <!-- </span> -->
            Log in
          </button>
        </div>
      </form>
      <div class="py-4 text-sm text-center">
        <p>
          <span
            class="font-medium text-blue-600 cursor-pointer hover:text-blue-500"
            @click="showLogin = false"
          >
            Forgot password?</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Auth } from "aws-amplify";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
// import useLogin from "@/composables/useLogin";

export default defineComponent({
  name: "Login",
  setup() {
    // Composables
    // const { error, login } = useLogin();

    // Create Refs for our input data properties
    // NOTE For testing: mario@email.com Te$t1234
    const username = ref<string>("");
    // const email = ref<string>("");
    const password = ref<string>("");
    const phone = ref<string>("");
    const error = ref<string>("");

    // Router
    const router = useRouter();

    // // === Using COMPOSABLE
    // async function handleLogin() {
    //   console.log("Form submitted!");
    //   // WITHOUT trying to pass user along
    //   // const response = await login(email.value, password.value);
    //   // WITH trying to pass user along
    //   user.value = await login(email.value, password.value);

    //   if (!error.value) {
    //     console.log("Login:!error.value::SUCCESS");
    //     // console.log(
    //     //   "response: ",
    //     //   response?.challengeParam.userAttributes.email
    //     // ); // mario@email.com
    //     console.log("Login:handleLogin:user.value: ", user.value);
    //     console.log("REROUTING to /entrance");
    //     router.push({ name: "Entrance" });
    //   }
    // }

    // === Using AWS Auth Directly
    // https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-in
    // async function handleLogin() {
    //   try {
    //     user.value = await Auth.signIn(email.value, password.value);
    //     console.log(user.value); // Proxy {username, pool, ...}
    //   } catch (e) {
    //     console.log("error signing in", error);
    //     error.value = e;
    //   }

    //   if (!error.value) {
    //     console.log("REROUTING to /entrance");
    //     router.push({ name: "Entrance" });
    //   }
    // }

    // === Using VUEX
    // Let's get our Vuex Store for Composition API
    // https://next.vuex.vuejs.org/guide/composition-api.html#composition-api
    const store = useStore();
    // Q: How do I access store state user? My auth/login action should setUser()
    const user = ref(null); // undefined
    const userComputedStateUser = computed(() => store.state.user); // undefined
    const userComputedStateAuthUser = computed(() => store.state.auth.user); // Works! Proxy {id, username}
    //const userComputedGetter = computed(() => store.getters.user(store.state)); // Error: getters.user isn't a func
    const userComputedGetter = computed(() => store.getters["auth/user"]); // Works! Proxy {id, username}

    // Use computed() to access state or getters
    // Use regular functions for actions and mutations
    // NOTE Need to access our auth module in Vuex
    async function login() {
      try {
        await store.dispatch("auth/login", {
          username: username.value,
          password: password.value
        });
        // Check to see if user has been updated in store
        user.value = store.state.auth.user; // state.user is undefined. state.auth.user works Proxy { id, username}
        console.log("store.state.user: ", store.state.user); // undefined
        console.log("store.state.auth.user: ", store.state.auth.user); // Works! Proxy {id, username}
        console.log("userRef", user.value); // undefined
        console.log("userComputedStateUser: ", userComputedStateUser.value); // undefined
        console.log(
          "userComputedStateAuthUser: ",
          userComputedStateAuthUser.value
        ); // WORKS! Proxy {id, username, ...}
        console.log("userComputedGetter: ", userComputedGetter.value); // Works! Proxy {id, username, ...}
        // const authUserInfo = await Auth.currentUserInfo(); // Works! {id, username, ...}
        // console.log("authUserInfo: ", authUserInfo); // Works. See above
        // Reroute to Home/Entrance
        router.push({ name: "Home" });
      } catch (err) {
        console.log(err);
        error.value = err;
        // error.value = "Incorrect log in credentials. Please try again.";
      }
    }

    // function loginVue() {
    //   store.dispatch("auth/login", {
    //     // NOTE Depending on approach may need 'email' or 'username'
    //     username: username.value,
    //     password: password.value
    //   });
    // }
    // OR...
    // const loginVue = () => state.dispatch("auth/login")

    // Using VUEX - BROKEN
    // async function handleLogin() {
    //   try {
    //     await loginVue();
    //     console.log("loginVue:SUCCESS");
    //     const userInfo = await Auth.currentUserInfo();
    //     console.log("userInfo: ", userInfo); // null
    //   } catch (err) {
    //     console.log(err);
    //     error.value = err;
    //   }
    // }

    return {
      username,
      // email,
      phone,
      password,
      error,
      login
      //loginVue,
      // handleLogin
    };
  }
});
</script>

<style></style>
