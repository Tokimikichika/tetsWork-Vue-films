<template>
  <div class="movie-card">
    <img :src="movie.poster" alt="Movie poster" class="movie-poster" />
    <h3 class="movie-title">{{ movie.name }}</h3>
    <p class="movie-description">{{ movie.description }}</p>

    <!-- Блоки Score, Genre, Duration -->
    <div class="info-blocks">
      <div class="info-block score">
        <span>Score</span>
        <span>{{ movie.rating }}</span>
      </div>
      <div class="info-block genre">
        <span>Genre</span>
        <span>{{ movie.genre }}</span>
      </div>
      <div class="info-block duration">
        <span>Duration</span>
        <span>{{ movie.duration }}</span>
      </div>
    </div>

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
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px; /* Ограничение ширины карточки */
  width: 100%; /* Карточка занимает всю доступную ширину */
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

.info-blocks {
  display: flex;
  justify-content: center; /* Выравнивание блоков по центру */
  gap: 8px; /* Отступ между блоками */
  width: 100%; /* Блоки занимают всю ширину карточки */
}

.info-block {
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden; /* Скрываем переполнение текста */
  white-space: nowrap; /* Текст не переносится на новую строку */
  text-overflow: ellipsis; /* Добавляем многоточие, если текст не помещается */
}

.info-block.score {
  background-color: rgb(25, 143, 78); /* Зеленый */
}

.info-block.genre {
  background-color: rgb(57, 109, 221); /* Синий */
}

.info-block.duration {
  background-color: rgb(121, 19, 189); /* Фиолетовый */
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