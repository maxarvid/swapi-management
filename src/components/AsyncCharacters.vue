<script setup>
import axios from "axios";

const getCharactersData = async () => {
  const { data } = await axios.get("https://swapi.dev/api/people");
  return data.results;
};

const characters = await getCharactersData();
</script>

<template>
  <ul data-cy="star-wars-chars">
    <li v-for="character in characters">
      <h3>{{ character.name }}</h3>
    </li>
  </ul>
</template>

<style scoped></style>
