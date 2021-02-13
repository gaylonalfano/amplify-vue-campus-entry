import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login.vue";
import Entrance from "@/views/Login.vue";
import Admin from "@/views/Admin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/entrance",
    name: "Entrance",
    component: Entrance
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
