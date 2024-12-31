import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetail from "../components/MovieDetail.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movie/:id", component: MovieDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;