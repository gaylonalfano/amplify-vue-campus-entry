<template>
  <div class="home">
    <h3>Campus Entry Home</h3>
    <button @click="createPerson">Create Person</button>
    <button @click="queryPerson">Query Person</button>
    <!-- <button @click="createDivision">Create Division</button> -->
    <!-- <button @click="createCategory">Create Category</button> -->
    <div v-if="people">
      <div v-for="person in people" :key="person.id">
        <h4>{{ person.firstName }}</h4>
        <p>{{ person.categoryID }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { DataStore } from "@aws-amplify/datastore";
import { Person } from "@/models";
// import { Family } from "@/models";
// import { Division } from "@/models";
// import { Category } from "@/models";

export default defineComponent({
  name: "Home",
  setup() {
    const person = ref<Person | null>(null);
    const people = ref<Person[] | null>(null);
    // const family = ref<Family | null>(null);
    // const division = ref<Division | null>(null);
    // const category = ref<Category | null>(null);

    async function queryPerson() {
      people.value = await DataStore.query(Person);
      console.log(people.value);
    }

    async function createPerson() {
      person.value = await DataStore.save(
        new Person({
          firstName: "Lorem ipsum dolor sit amet",
          lastName: "Lorem ipsum dolor sit amet",
          phone: "Lorem ipsum dolor sit amet",
          studentID: "Lorem ipsum dolor sit amet",
          divisionID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
          categoryID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
          familyID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
          submissions: [],
          createdAt: "Lorem ipsum dolor sit amet"
        })
      );
    }

    // async function queryFamily() {
    //   family.value = await DataStore.save(
    //     new Family({
    //       people: []
    //     })
    //   );
    // }

    // async function createDivision() {
    //   division.value = await DataStore.save(
    //     new Division({
    //       name: window.prompt("Division name: ") as string,
    //       people: []
    //     })
    //   );
    // }

    // async function createCategory() {
    //   category.value = await DataStore.save(
    //     new Category({
    //       name: window.prompt("Category name: ") as string,
    //       people: []
    //     })
    //   );
    // }

    watchEffect(async () => {
      await queryPerson();
    });

    return {
      createPerson,
      queryPerson,
      // createDivision,
      // createCategory,
      people
    };
  }
});
</script>
