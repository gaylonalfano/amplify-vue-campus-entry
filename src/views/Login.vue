<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <div>
        <img
          class="mx-auto h-40 w-auto"
          src="../assets/images/concordia-logo.png"
          alt="Concordia Logo"
        />
        <!-- <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> -->
        <!--   Balance Tracker -->
        <!-- </h2> -->
      </div>
      <!-- <h3 class="mt-6 text-center text-xl font-bold text-gray-900">Log in</h3> -->
      <form @submit.prevent="handleLogin" class="mt-2 space-y-2">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <!-- <div v-if="error"> -->
        <!--   <h3 class="text-sm font-medium text-red-800">{{ error }}</h3> -->
        <!-- </div> -->
        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <!-- <span class="absolute left-0 inset-y-0 flex items-center pl-3"> -->
            <!--   <!-1- Heroicon name: lock-closed -1-> -->
            <!--   <svg -->
            <!--     class="h-5 w-5 text-blue-500 group-hover:text-blue-400" -->
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
      <div class="text-sm py-4 text-center">
        <p>
          <span
            class="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
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
import { defineComponent, ref } from "vue";
// import { auth } from "@/firebase/config";
// import useLogin from "@/composables/useLogin";

export default defineComponent({
  name: "Login",
  setup() {
    // Create Refs for our input data properties
    const email = ref<string>("");
    const password = ref<string>("");

    function handleSubmit() {
      console.log("Form submitted!");
    }

    return { email, password, handleSubmit };
  }
});
</script>

<style></style>
