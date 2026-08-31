<script setup>
import HomePage from './components/BulletinBoard.vue';
import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
  <!-- // bg-[#111828] -->
  <div class="max-w-7xl mx-auto">
    <NavigationBar></NavigationBar>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
