<template>
  <div class="movie-card">
    <img :src="movie.poster" alt="Movie poster" class="movie-poster" />
    <h3 class="movie-title">{{ movie.name }}</h3>
    <p class="movie-description">{{ movie.description }}</p>
    <router-link :to="`/movie/${movie.id}`" class="details-link">Подробнее</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.movie-card {
  border: 2px solid #7c4dff;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #1e1e1e;
  color: white;
}
.movie-poster {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
}
.movie-title {
  font-size: 18px;
  margin: 8px 0;
}
.movie-description {
  font-size: 14px;
  color: #ccc;
}
.details-link {
  display: inline-block;
  margin-top: 12px;
  color: #7c4dff;
  text-decoration: none;
}
.details-link:hover {
  text-decoration: underline;
}
</style>