<template>
  <div class="m-2 sm:m-5">
    <Carousel v-bind="config" class="h-64 sm:h-[500px]">
      <Slide v-for="image in images" :key="image.id" class="flex items-center justify-center">
        <div class="flex aspect-[1.3] h-64 w-full items-center justify-center rounded-lg sm:h-[500px]">
          <img
            :src="image.url"
            alt="image"
            class="h-full w-full rounded-lg object-contain"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
  <div class="mx-auto max-w-6xl p-2 pt-0 sm:space-y-12 sm:p-6">
    <!-- Current Members Section -->
    <div>
      <h2 class="pb-2 text-center font-serif text-2xl font-semibold text-ink">Current Members</h2>
      <div class="section-rule mb-10"></div>
      <div>
        <h3 class="mb-6 text-xl font-semibold text-ink">BSMS Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Parthiv Dixit</p>
            <p class="text-ink-muted">Jul 2025 - Present</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-6 mt-10 text-xl font-semibold text-ink">PhD Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Nikhil Singh</p>
            <p class="text-ink-muted">Jul 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Alumni Section -->
    <div>
      <h2 class="pb-2 text-center font-serif text-2xl font-semibold text-ink">Alumni</h2>
      <div class="section-rule mb-10"></div>
      <div>
        <h3 class="mb-6 text-xl font-semibold text-ink">BSMS Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a href="https://www.jyu.fi/en/people/pranjal-panwar" target="_blank" rel="noopener" class="card block">
            Pranjal Panwar
          </a>
          <a href="https://www.linkedin.com/in/subhrajit-dalai-0364a11aa/?originalSubdomain=in" target="_blank" rel="noopener" class="card block">
            Subhrajit Dalai
          </a>
          <a href="https://superpuddles-lab.ifw-dresden.de/homepage/members" target="_blank" rel="noopener" class="card block">
            Piyush Uttam Parakh
          </a>
          <a href="https://www.linkedin.com/in/hitesh-khanagwal-252271277/" target="_blank" rel="noopener" class="card block">
            Hitesh Khanagwal
          </a>
          <a href="https://www.linkedin.com/in/thasneem-a-22005aa5" target="_blank" rel="noopener" class="card block">
            Thasneem A
          </a>
          <a href="https://www.linkedin.com/in/navathej-preetha-genesh-6570015a" target="_blank" rel="noopener" class="card block">
            Navathej Ganesh
          </a>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="mb-6 text-xl font-semibold text-ink">PhD Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Vaibhav Walve</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Umashankar Rajput</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Imrankhan Mulani</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Sk Rejaul</p>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="mb-6 text-xl font-semibold text-ink">Post-Doc Fellows</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Sumati Patil</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Giriraj Vyas</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

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

<style scoped>
.carousel {
  --vc-pgn-background-color: var(--color-line);
  --vc-pgn-active-color: var(--color-accent);
  --vc-nav-background: color-mix(in srgb, var(--color-surface) 70%, transparent);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
