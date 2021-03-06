<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="w-full bg-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/">
            <img
              class="mx-auto h-16 w-auto"
              src="../assets/images/concordia-logo.png"
              alt="Concordia Logo"
            />
          </router-link>
        </div>
        <div
          v-if="user"
          class="hidden md:ml-6 md:flex md:items-center md:space-x-4"
        >
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <h1 class="text-blue-900 px-3 py-2 rounded-md text-2xl font-medium">
            {{ user.username }}
            <!-- <router-link to="/"> Balance Tracker</router-link> -->
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <button
              @click="toggleLanguage"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent shadow-sm rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0">
            <router-link
              to="/"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent shadow-sm rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </router-link>
          </div>
          <div class="flex-shrink-0">
            <button
              @click="logout"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent shadow-sm rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import useLogout from "@/composables/useLogout";
// import getUser from "@/composables/getUser";

export default defineComponent({
  name: "Navbar",
  // Q: How to validate a boolean payload (showChinese)?
  // NOTE: The below code throws Vue warnings: event validation failed for event "language"
  // emits: {
  //   language(payload) {
  //     if (payload) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // },
  setup(props, context) {
    // Use store
    const store = useStore();
    const user = computed(() => store.state.auth.user);

    const router = useRouter();

    async function logout() {
      console.log(
        "Logging out: store.state.auth.user: ",
        store.state.auth.user
      ); // Works! Proxy {id, username}
      await store.dispatch("auth/logout");
      // Reroute back to /login
      // Q: Reroute back to /login or will Route Guard do this?
      // A: Need to reroute. Logout will leave user on Home page
      router.push({ name: "Login" });
    }

    // Handle Chinese toggle
    const showChinese = ref<boolean>(false);
    function toggleLanguage() {
      // Q: Should I context.emit('language', showChinese) back to parent Home?
      showChinese.value = !showChinese.value;
      console.log("toggleLanguage:showChinese: ", showChinese.value);
      context.emit("language", showChinese.value);
    }

    return { logout, user, showChinese, toggleLanguage };
  }
});
</script>

<style></style>
