<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
* {
  overflow: hidden;
  max-width: 100%;
}
</style>
