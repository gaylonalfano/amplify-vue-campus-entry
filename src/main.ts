import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import {
//   applyPolyfills,
//   defineCustomElements
// } from "@aws-amplify/ui-components/loader";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "@/assets/styles/index.css";

Amplify.configure(awsconfig);
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

const app = createApp(App);
// app.config.isCustomElement = tag => tag.startsWith("amplify-");
app.use(router);
app.mount("#app");

// DEFAULT
// createApp(App)
//   .use(router)
//   .mount("#app");
