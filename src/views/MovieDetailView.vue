<template>
  <MovieDetail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "../components/MovieDetail.vue";

export default defineComponent({
  name: "MovieDetailView",
  components: { MovieDetail },
});
</script>