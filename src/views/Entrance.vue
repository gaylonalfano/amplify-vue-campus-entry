<template>
  <Navbar />
  <!-- <button @click="getCurrentUserInfo">Get User</button> -->
  <div v-if="user">Welcome store.state.user: {{ store.state.user }}</div>
  <!-- <div v-if="error">{{ error }}</div> -->
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8"
  >
    <!-- This example requires Tailwind CSS v2.0+ -->
    <ul class="space-y-5">
      <router-link :to="{ name: 'Student' }">
        <li
          class="cursor-pointer text-center text-blue-900 bg-blue-50 border border-blue-900 shadow overflow-hidden rounded-md px-6 py-4"
        >
          Student Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'Employee' }">
        <li
          class="px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow cursor-pointer bg-blue-50 rounded-md"
        >
          Employee Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'Consultant' }">
        <li
          class="px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow cursor-pointer bg-blue-50 rounded-md"
        >
          Consultant Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'Visitor' }">
        <li
          class="px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow cursor-pointer bg-blue-50 rounded-md"
        >
          Visitor Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'QrCode' }">
        <li
          class="px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow cursor-pointer bg-blue-50 rounded-md"
        >
          Re Get QR Code
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, inject } from "vue";
import { Auth } from "aws-amplify";

// import getUser from "@/composables/getUser";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "Entrance",
  components: { Navbar },
  setup() {
    // Testing the inject('store') approach...
    const store = inject("store") as Record<string, any>;

    // Trying Inject getGlobalCurrentUserInfo that I provided inside main.ts
    const user = inject("getGlobalCurrentUserInfo", "default value for user");

    // // Let's use our composable to verify current auth user
    // // const { user, error, getCurrentAuthenticatedUser } = getUser();
    // const user = ref(null);

    // // async function getCurrentUserInfo() {
    // //   try {
    // //     user.value = await Auth.currentUserInfo();
    // //     console.log("getCurrentUserInfo:user: ", user.value);
    // //     return user.value;
    // //   } catch (error) {
    // //     console.log(error.message);
    // //   }
    // // }

    // watchEffect(async () => {
    //   user.value = await Auth.currentAuthenticatedUser();
    // });

    return { store, user };
  }
});
</script>

<style></style>
