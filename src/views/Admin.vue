<template>
  <h1>Admin Page</h1>
  <div class="container">
    <button @click="showCreatePersonForm">Create Person</button>
    <button>Create Family</button>
    <button>Create Division</button>
    <button>Create Category</button>
  </div>
  <CreatePersonForm />
  <!-- <div v-for="family in allFamilies" :key="person.id"> -->
  <!--   <h5>{{ person.firstName }} - {{ person.id }}</h5> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import CreatePersonForm from "@/components/CreatePersonForm.vue";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/queries";
import * as subscriptions from "@/graphql/queries";

export default defineComponent({
  name: "Admin",
  components: { CreatePersonForm },
  setup() {
    // Q: How to get refs working with API Types?
    //const allFamilies = ref(null);
    //const allFamilies = ref<GraphQLResult<object> | null>(null);
    // const allFamilies = ref<GraphQLResult<API.Family> | null>(null);
    async function queryListFamilies() {
      // const families = await API.graphql({ query: queries.listFamilys });
      // allFamilies.value = (await API.graphql({
      //   query: queries.listFamilys
      // })) as Promise<ListFamilysQuery>;
      // console.log(allFamilies.value);

      // Using the more verbose approach
      // const families = await API.graphql({ query: queries.listFamilys })

      // Use helper instead
      const families = await API.graphql(graphqlOperation(queries.listFamilys));
      console.log(families);
    }

    // Let's pull in all people on page load.
    watchEffect(async () => {
      await queryListFamilies();
    });

    return { queryListFamilies };
  }
});
</script>

<style></style>
