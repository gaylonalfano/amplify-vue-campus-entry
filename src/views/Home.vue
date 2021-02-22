<template>
  <Navbar />
  <!-- <div v-if="user">Hello, {{ user.username }}</div> -->
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8"
  >
    <!-- This example requires Tailwind CSS v2.0+ -->
    <ul class="space-y-5">
      <router-link :to="{ name: 'Student' }">
        <li
          class="my-6 px-6 py-4 text-center text-blue-900 bg-blue-50 border border-blue-900 shadow overflow-hidden rounded-md"
        >
          Student Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'Employee' }">
        <li
          class="my-6 px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow bg-blue-50 rounded-md"
        >
          Employee Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'Consultant' }">
        <li
          class="my-6 px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow bg-blue-50 rounded-md"
        >
          Consultant Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'Visitor' }">
        <li
          class="my-6 px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow bg-blue-50 rounded-md"
        >
          Visitor Entrance
        </li>
      </router-link>
      <router-link :to="{ name: 'QrCode' }">
        <li
          class="my-6 px-6 py-4 overflow-hidden text-center text-blue-900 border border-blue-900 shadow bg-blue-50 rounded-md"
        >
          Re Get QR Code
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { Auth } from "aws-amplify";

// import getUser from "@/composables/getUser";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "Home",
  components: { Navbar },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.auth.user); // Works!

    return { user };
  }
});
</script>

<style></style>
