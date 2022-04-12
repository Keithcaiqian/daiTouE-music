<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { usePlayerStoreInit } from './store/player';
import { initTheme } from './theme';
import Home from './views/Home.vue';
initTheme();
usePlayerStoreInit();
</script>

<template>
  <Home />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
