import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";

const routes = [
  {
    path: "/login/callback",
    component: LoginCallback,
  },
  {
    path: "/Login",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/",
    component: () => import("@/components/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Dashboard",
    component: () => import("@/components/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(navigationGuard);

export default router;
