<script setup>
import AsyncCharacters from "./AsyncCharacters.vue";
</script>

<template>
  <Suspense>
    <AsyncCharacters />
    <template #fallback>
      <div data-cy="loading-message">Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped></style>
