import { createRouter, createWebHistory } from "vue-router";
import Characters from "../components/Characters.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Characters,
    },
  ],
});

export default router;
