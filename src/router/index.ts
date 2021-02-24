// My Approach
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext
} from "vue-router";
import { Auth } from "aws-amplify";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
// import Store from "@/views/Store.vue";
// import Entrance from "@/views/Entrance.vue";
import StudentForm from "@/views/StudentForm.vue";
import EmployeeForm from "@/views/EmployeeForm.vue";
import ConsultantForm from "@/views/ConsultantForm.vue";
import VisitorForm from "@/views/ConsultantForm.vue";
import QrCode from "@/views/QrCode.vue";

async function requireNoAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // Grab current user if logged in
  const user = await Auth.currentUserInfo();
  console.log("RouterGuard:requireNoAuth:user ", user);

  if (user) {
    // Redirect to Home/Entrance route
    next({ name: "Home" });
  } else {
    // Let them through/continue to Login page
    next();
  }
}

// Create a Route Guard (Auth Guard) function
// NOTE Going to use AWS Auth to grab currentUser (if available)
// NOTE Need to register this Auth Guard to Entrance route
// NOTE We add to, from, next because it aligns with beforeEnter method
// Q: How to add vue-router types so I don't have to use ts-ignore?
// A: Import from vue-router. Note difference btw expression vs. declaration syntax
async function requireAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // Grab current user if logged in
  const user = await Auth.currentUserInfo();
  console.log("RouterGuard:requireAuth:user: ", user);

  if (!user) {
    // Unauthorized (user is null) so send back to Login page
    next({ name: "Login" });
  } else {
    // Need to invoke next() to move forward
    next();
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: requireNoAuth
  },
  {
    path: "/student",
    name: "Student",
    component: StudentForm,
    beforeEnter: requireAuth
  },
  {
    path: "/employee",
    name: "Employee",
    component: EmployeeForm,
    beforeEnter: requireAuth
  },
  {
    path: "/consultant",
    name: "Consultant",
    component: ConsultantForm,
    beforeEnter: requireAuth
  },
  {
    path: "/visitor",
    name: "Visitor",
    component: VisitorForm,
    beforeEnter: requireAuth
  },
  {
    path: "/qrcode",
    name: "QrCode",
    component: QrCode,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

// === Erik's Approach
// import {
//   createRouter,
//   createWebHistory,
//   RouteRecordRaw,
//   RouteLocationNormalized,
//   NavigationGuardNext
// } from "vue-router";
// import { Auth } from "aws-amplify";
// import Login from "@/views/Login.vue";
// import Entrance from "@/views/Entrance.vue";
// import StudentForm from "@/views/StudentForm.vue";
// import EmployeeForm from "@/views/EmployeeForm.vue";
// import ConsultantForm from "@/views/ConsultantForm.vue";
// import VisitorForm from "@/views/ConsultantForm.vue";
// import QrCode from "@/views/QrCode.vue";

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Login",
//     component: Login
//   },
//   {
//     path: "/entrance",
//     name: "Entrance",
//     component: Entrance,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/student",
//     name: "Student",
//     component: StudentForm,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/employee",
//     name: "Employee",
//     component: EmployeeForm,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/consultant",
//     name: "Consultant",
//     component: ConsultantForm,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/visitor",
//     name: "Visitor",
//     component: VisitorForm,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/qrcode",
//     name: "QrCode",
//     component: QrCode,
//     meta: { requiresAuth: true }
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// });

// router.beforeEach(
//   async (
//     to: RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext
//   ) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     const isAuthenticated = await Auth.currentUserInfo();
//     console.log("RouterGuard:requireAuth:isAuthenticated: ", isAuthenticated); // null

//     if (requiresAuth && !isAuthenticated) {
//       // Route requires auth but current user isn't authenticated.
//       next("/");
//     } else {
//       next();
//     }
//   }
// );

// export default router;
