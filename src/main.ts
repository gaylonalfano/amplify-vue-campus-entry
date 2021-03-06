import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "@/assets/styles/index.css";

Amplify.configure(awsconfig);
// Add Logger for debugging
Amplify.Logger.LOG_LEVEL = "DEBUG";
// const logger = new Amplify.Logger("main");

// Amplify.Auth.currentAuthenticatedUser()
//   .then(user => logger.debug(user))
//   .catch(err => logger.debug(err));

import DashboardLayout from "@/components/DashboardLayout.vue";
import EmptyLayout from "@/components/EmptyLayout.vue";

const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(store);
app.use(router);
app.mount("#app");

// // === FAILED ATTEMPT: Try to create a Poor Man's Vuex using Provide/Inject
// // https://stackoverflow.com/questions/60202724/vue-3-composition-api-and-access-to-vue-instance
// // https://www.notion.so/Vue-Quick-Reference-82f52708fed240e5bf009d335fbe8194#d10b0c7a4c5441a4b54d603e424b30bb
// // 1. Instatiate the class/method/data
// // 2. Pass it to reactive() to make it a reactive instance
// async function getGlobalCurrentUserInfo() {
//   const userInfo = await Auth.currentUserInfo();
//   const globalCurrentUserInfo = reactive(userInfo);
//   console.log("globalCurrentUserInfo: ", globalCurrentUserInfo);
//   return globalCurrentUserInfo;
// }
// // 3. Provide it from the Root component using app.provide()
// const app = createApp(App);
// app.provide("getGlobalCurrentUserInfo", getGlobalCurrentUserInfo);
// app.use(store);
// app.use(router);
// app.mount("#app");
// // 4. Go and inject() into any component's setup() e.g., const user = inject("globalCurrentUser", default)
