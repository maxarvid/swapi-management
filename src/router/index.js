import { createRouter, createWebHistory } from "vue-router";
import Characters from "../components/Characters.vue";
// import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Characters,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
