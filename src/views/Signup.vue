<template>
  <div
    v-if="!confirmPassword"
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
      <form @submit.prevent="signup" class="mt-2 space-y-2">
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
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
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
            Sign up
          </button>
        </div>
      </form>
      <div class="py-4 text-sm text-center">
        <p>
          Already have an account?
          <router-link
            class="font-medium text-blue-600 cursor-pointer hover:text-blue-500"
            :to="{ name: 'Login' }"
          >
            Log in here.</router-link
          >
        </p>
      </div>
    </div>
  </div>
  <div
    v-if="confirmPassword"
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
      <form @submit.prevent="confirmSignup" class="mt-2 space-y-2">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="confirmation-code" class="sr-only"
              >Confirmation code</label
            >
            <input
              v-model="confirmationCode"
              id="confirmation-code"
              name="confirmation-code"
              type="text"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Confirmation code"
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
            Confirm
          </button>
        </div>
      </form>
      <div class="py-4 text-sm text-center">
        <p>
          Didn't receive an email?
          <router-link
            class="font-medium text-blue-600 cursor-pointer hover:text-blue-500"
            :to="{ name: 'Login' }"
          >
            Resend code.</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
// import { Auth } from "aws-amplify";
// import useLogin from "@/composables/useLogin";

export default defineComponent({
  name: "Signup",
  setup() {
    // Bring in Vuex store
    const store = useStore();

    // Create Refs for our input data properties
    // NOTE For testing:
    const username = ref<string>("");
    const email = ref<string>("");
    const password = ref<string>("");
    const error = ref<string>("");
    const confirmPassword = ref<boolean>(false);
    const confirmationCode = ref<string>("");
    // const user = ref(null);

    // Router
    const router = useRouter();

    async function signup() {
      // Reset error
      error.value = "";
      // Confirm that we have valid inputs
      if (!email.value || !password.value) {
        // Invalid inputs
        console.log("Invalid submission. Please confirm details.");
        return;
      }
      try {
        // NOTE Always DISPATCH Actions, COMMIT Mutations
        // Align with my store "auth/signUp" action signature
        await store.dispatch("auth/signUp", {
          username: username.value,
          password: password.value,
          email: email.value,
          // eslint-disable-next-line
          preferred_username: username.value,
          // eslint-disable-next-line
          // phone_number: +8615618200321, // Error: NUMBER_VALUE cannot be converted to String
          // eslint-disable-next-line
          // phone_number: "+8615618200321", // Works!
        });

        // Toggle confirmPassword to true so we can display
        // confirmation code submit form
        confirmPassword.value = true;
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    }

    async function confirmSignup() {
      // Reset error
      error.value = "";

      // Make sure the user has entered username and confirmation code values
      if (!username.value || !confirmationCode.value) {
        console.log("confirmSignup: Invalid submission.");
        return;
      }

      try {
        // Dispatch our "auth/confirmSignUp" action with username and code payload
        await store.dispatch("auth/confirmSignUp", {
          username: username.value,
          code: confirmationCode.value
        });

        // Once confirmed, we can log in the user
        await store.dispatch("auth/login", {
          username: username.value,
          password: password.value
        });

        // Reroute to the Home page now that user is signed in
        router.push({ name: "Home" });
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    }

    // Use computed() to access state or getters
    // Use regular functions for actions and mutations
    // NOTE Need to access our auth module in Vuex
    return {
      username,
      email,
      // phone,
      password,
      error,
      confirmPassword,
      confirmationCode,
      signup,
      confirmSignup
      //loginVue,
    };
  }
});
</script>

<style></style>
