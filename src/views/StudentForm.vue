<template>
  <Navbar />
  <h1>StudentForm</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "StudentForm",
  components: { Navbar }
});
</script>

<style></style>
