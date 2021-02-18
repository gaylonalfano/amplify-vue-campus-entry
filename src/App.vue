<template>
  <router-view />
</template>

<!-- <script lang="ts"> -->
// import { defineComponent, provide } from "vue"; // import store from
"@/store/index"; // // import useState from "@/composables/useState"; // ERIK's
// // export default defineComponent({ // name: "App", // setup() { //
console.log("App setup() triggered"); // // USING DANNY's APPROACH
(store/index.ts) to make store globally available // // Use provide() and then
it's available to all child components. // // NOTE This is the same as in
main.ts using app.provide('store', store) // provide("store", store); // // //
// USING ERIK's APPROACH (composables/useState.ts) // // // Can access the
current internal instance // // const internalInstance = getCurrentInstance();
// // console.log("internalInstance: ", internalInstance); // // // Composables
// // // const { state, getCurrentUserInfo } = useState(); // // const { state }
= useState(); // // // const stateAsRefs = toRefs(state); // // // Let's get the
current user if available // // // NOTE This should update my state.user value
// // // stateAsRefs.user.value = getCurrentUserInfo(); // null // // //
onMounted(async () => await getCurrentUserInfo()); // null // // //
watchEffect(async () => await getCurrentUserInfo()); // null // // //
watchEffect(() => state.user); // null // // // Then, to make internal props on
state reactive use toRefs() to destructure // // // return { ...toRefs(state),
state, getCurrentUserInfo }; // // // return { stateAsRefs, state,
getCurrentUserInfo }; // // return { state }; // } // });
<!-- </script> -->
<style></style>
