import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    component: () => import("../modules/pokemon/pages/BienvenidoPage"),
  },
  {
    path: "/juego",
    component: () => import("../modules/pokemon/pages/JuegoPage"),
  },
  {
    path: "/premios",
    component: () => import("../modules/pokemon/pages/PremiosPage"),
  },
  {
    path: "/poke",
    component: () => import("../modules/pokemon/pages/PokemonPage"),
  },
  
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../modules/pokemon/pages/NoEncontradoPage"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
