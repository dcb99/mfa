<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <nav-bar />
  <RouterView />
</template>

<style scoped>
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

#nav-bar {
  height: 6rem;
}
</style>
