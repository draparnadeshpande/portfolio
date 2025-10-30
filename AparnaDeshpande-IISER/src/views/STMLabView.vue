<template class="max-w-7xl mx-auto">
    <div class="sm:ml-20 sm:mr-20">
      <MyLabInfo></MyLabInfo>
    </div>
</template>

<script setup>
import MyLabInfo from '@/components/MyLabInfo.vue';

</script>

<style scoped>
/* Base link styles */
a {
  color: #1a73e8; /* Soft blue */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

/* Visited links */
a:visited {
  color: #6a5acd; /* Medium purple */
}

/* Hover state */
a:hover,
a:focus {
  color: #d93025; /* Vibrant red */
  text-decoration: underline;
  outline: none;
}

/* Active (clicked) state */
a:active {
  color: #b22222; /* Dark red */
  text-decoration: underline;
}

/* Focus visible for accessibility */
a:focus-visible {
  outline: 2px solid #d93025;
  outline-offset: 2px;
}
</style>