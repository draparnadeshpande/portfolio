<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="mt-10 text-center">
    <h1 class="font-serif text-3xl font-semibold text-ink sm:text-4xl">{{ title }}</h1>
    <div class="section-rule"></div>
  </div>
</template>
