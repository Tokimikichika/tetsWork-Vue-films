<template>
  <div class="movie-detail">
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">Фильм не найден</div>
    <div v-else>
      <h1>{{ movie.name }}</h1>
      <img :src="movie.poster" alt="Movie poster" class="movie-poster" />
      <p>{{ movie.description }}</p>
      <div class="extra-details">
        <p>Длительность: {{ movie.duration }}</p>
        <p>Рейтинг: {{ movie.rating }}</p>
        <p>Жанр: {{ movie.genre }}</p>
      </div>
      <div v-if="movie.trivia">
        <h3>Интересные факты:</h3>
        <ul>
          <li v-for="(trivia, index) in movie.trivia" :key="index">{{ trivia }}</li>
        </ul>
      </div>
      <div v-if="movie.actors">
        <h3>Актеры:</h3>
        <ul>
          <li v-for="actor in movie.actors" :key="actor.imdb_id">{{ actor.name }}</li>
        </ul>
      </div>
      <router-link to="/" class="back-link">Назад</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "MovieDetail",
  data() {
    return {
      movie: null as any,
      loading: true,
      error: false,
    };
  },
  async created() {
    const route = useRoute();
    const movieId = route.params.id;
    try {
      const response = await fetch(`/movie-details.json`);
      const movieData = await response.json();
      if (movieData.id === Number(movieId)) {
        this.movie = movieData;
      } else {
        this.error = true;
      }
    } catch (error) {
      console.error("Ошибка загрузки данных о фильме:", error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
});
</script>

<style scoped>
.movie-detail {
  padding: 16px;
  color: white;
}
.movie-poster {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
}
.extra-details {
  margin-top: 12px;
  color: #ccc;
}
.back-link {
  display: inline-block;
  margin-top: 12px;
  color: #7c4dff;
  text-decoration: none;
}
.back-link:hover {
  text-decoration: underline;
}
</style>