import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/classes",
    name: "Classes",
    component: () => import("../views/classes.vue"),
  },
  {
    path: "/spells",
    name: "Spells",
    component: () => import("../views/spells.vue"),
  },
  {
    path: "/monsters",
    name: "Monsters",
    component: () => import("../views/monsters.vue"),
  },
  {
    path: "/myhero",
    name: "My Hero",
    component: () => import("../views/myHero.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
