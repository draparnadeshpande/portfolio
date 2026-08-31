<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="min-h-screen bg-bg font-sans text-ink">
    <NavigationBar></NavigationBar>
    <main class="mx-auto max-w-7xl px-4 sm:px-6">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
