<template>
  <div class="movie-list">
    <h1>Список фильмов</h1>
    <div class="movies-grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieCard from "../components/MovieCard.vue";

export default defineComponent({
  name: "HomeView",
  components: { MovieCard },
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    try {
      const response = await fetch("/movies-list.json");
      const data = await response.json();
      this.movies = data.items; // Загружаем фильмы из поля "items"
    } catch (error) {
      console.error("Ошибка загрузки списка фильмов:", error);
    }
  },
});
</script>

<style scoped>
.movie-list {
  padding: 16px;
}
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>