import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login.vue";
import Entrance from "@/views/Entrance.vue";
import StudentForm from "@/views/StudentForm.vue";
import EmployeeForm from "@/views/EmployeeForm.vue";
import ConsultantForm from "@/views/ConsultantForm.vue";
import VisitorForm from "@/views/ConsultantForm.vue";
import QrCode from "@/views/QrCode.vue";

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
    path: "/student",
    name: "Student",
    component: StudentForm
  },
  {
    path: "/employee",
    name: "Employee",
    component: EmployeeForm
  },
  {
    path: "/consultant",
    name: "Consultant",
    component: ConsultantForm
  },
  {
    path: "/visitor",
    name: "Visitor",
    component: VisitorForm
  },
  {
    path: "/qrcode",
    name: "QrCode",
    component: QrCode
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
