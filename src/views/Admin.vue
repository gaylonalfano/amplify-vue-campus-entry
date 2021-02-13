<template>
  <h1>Admin Page</h1>
  <div class="container">
    <button>Create Person</button>
    <button>Create Family</button>
    <button>Create Division</button>
    <button>Create Category</button>
  </div>
  <div v-for="person in people" :key="person.id">
    <h5>{{ person.firstName }} - {{ person.id }}</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { DataStore } from "@aws-amplify/datastore";
import { Person } from "@/models";

export default defineComponent({
  name: "Admin",
  setup() {
    const people = ref<Person[] | null>(null);

    async function queryPerson() {
      people.value = await DataStore.query(Person);
      console.log(people.value);
    }

    // Let's pull in all people
    watchEffect(async () => {
      await queryPerson();
    });

    return { people };
  }
});
</script>

<style></style>
