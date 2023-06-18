import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "noLogged",
    redirect: "/home",
    component: () => import("../components/navbarNoLogged.vue"),
    beforeEnter: (to, from, next) => {
      const role = localStorage.getItem("@Role");
      if (role) next("/logged");
      else next();
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: HomeView,
      },
      {
        path: "classes",
        name: "Classes",
        component: () => import("../views/classes.vue"),
      },
      {
        path: "spells",
        name: "Spells",
        component: () => import("../views/spells.vue"),
      },
      {
        path: "monsters",
        name: "Monsters",
        component: () => import("../views/monsters.vue"),
      },
      {
        path: "myhero",
        name: "My Hero",
        component: () => import("../views/myHero.vue"),
      },
    ],
  },
  {
    path: "/logged",
    redirect: "/logged/home",
    name: "My Hero Logged",
    component: () => import("../components/navbarLogged.vue"),
    beforeEnter: (to, from, next) => {
      const role = localStorage.getItem("@Role");
      if (role !== "simple-user") next("/myhero");
      else next();
    },
    children: [
      {
        path: "myhero",
        name: "My Hero-logged",
        component: () => import("../views/user/myHero.vue"),
      },
      {
        path: "home",
        name: "Home-logged",
        component: () => import("../views/user/home.vue"),
      },
      {
        path: "classes",
        name: "Classes-logged",
        component: () => import("../views/user/classes.vue"),
      },
      {
        path: "spells",
        name: "Spells-logged",
        component: () => import("../views/user/spells.vue"),
      },
      {
        path: "monsters",
        name: "Monsters-logged",
        component: () => import("../views/user/monsters.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
