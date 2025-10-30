<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import img1 from '@/assets/team/1.png';

const images = [
  { id: 1, url: img1 },
];

const config = {
  height: 500,
  itemsToShow: 1,
  gap: 5,
}
</script>

<template>
  <Carousel v-bind="config" class="h-64 sm:h-[500px]">
    <Slide v-for="image in images" :key="image.id" class="flex justify-center items-center">
      <div class="aspect-[1.3] w-full h-64 sm:h-[500px] flex justify-center items-center rounded-lg">
        <img
          :src="image.url"
          alt="image"
          class="object-contain w-full h-full rounded-lg"
        />
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
:root {
  background-color: #242424;
}

.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
