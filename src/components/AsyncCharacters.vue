<script setup>
import { ref } from "vue";
import axios from "axios";

const error = ref(false);

const getCharactersData = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/people");
    return data.results;
  } catch {
    error.value = true;
  }
};

const characters = await getCharactersData();
debugger;
</script>

<template>
  <ul data-cy="star-wars-chars">
    <li v-for="character in characters">
      <h3>{{ character.name }}</h3>
    </li>
  </ul>
  <p v-if="error" data-cy="error-message">
    Network error, please try again later...
  </p>
</template>

<style scoped></style>
