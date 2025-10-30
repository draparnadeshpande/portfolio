<template>
  <div class="m-2 sm:m-5">
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
  </div>
  <div class="max-w-6xl mx-auto p-2 pt-0 sm:p-6 sm:space-y-12">
    <!-- Current Members Section -->
    <div>
      <h2 class="text-2xl font-bold pb-2 text-center">Current Members</h2>
      <div class="w-25 h-0.5 bg-[#111828] mx-auto rounded mt-2 mb-10"></div>
      <div>
        <h3 class="text-xl font-semibold mb-6">BSMS Students</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Parthiv Dixit</p>
            <p class="text-gray-600 dark:text-gray-400">Jul 2025 - Present</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Gaurav Lal</p>
            <p class="text-gray-600 dark:text-gray-400">Jul 2025 - Present</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Ajay Kasaudhan</p>
            <p class="text-gray-600 dark:text-gray-400">Jul 2025 - Present</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-6 mt-10">PhD Students</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Nikhil Singh</p>
            <p class="text-gray-600 dark:text-gray-400">Jul 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Alumni Section -->
    <div>
      <h2 class="text-2xl font-bold pb-2 text-center">Alumni</h2>
      <div class="w-25 h-0.5 bg-[#111828] mx-auto rounded mt-2 mb-10"></div>
      <div>
        <h3 class="text-xl font-semibold mb-6">BSMS Students</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="https://www.jyu.fi/en/people/pranjal-panwar" target="_blank" rel="noopener" class="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-blue-600 dark:text-blue-400 hover:underline border border-2 border-gray-400">
            Pranjal Panwar
          </a>
          <a href="https://www.linkedin.com/in/subhrajit-dalai-0364a11aa/?originalSubdomain=in" target="_blank" rel="noopener" class="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-blue-600 dark:text-blue-400 hover:underline border border-2 border-gray-400">
            Subhrajit Dalai
          </a>
          <a href="https://superpuddles-lab.ifw-dresden.de/homepage/members" target="_blank" rel="noopener" class="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-blue-600 dark:text-blue-400 hover:underline border border-2 border-gray-400">
            Piyush Uttam Parakh
          </a>
          <a href="https://www.linkedin.com/in/hitesh-khanagwal-252271277/" target="_blank" rel="noopener" class="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-blue-600 dark:text-blue-400 hover:underline border border-2 border-gray-400">
            Hitesh Khanagwal
          </a>
          <a href="https://www.linkedin.com/in/thasneem-a-22005aa5" target="_blank" rel="noopener" class="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-blue-600 dark:text-blue-400 hover:underline border border-2 border-gray-400">
            Thasneem A
          </a>
          <a href="https://www.linkedin.com/in/navathej-preetha-genesh-6570015a" target="_blank" rel="noopener" class="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-blue-600 dark:text-blue-400 hover:underline border border-2 border-gray-400">
            Navathej Ganesh
          </a>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="text-xl font-semibold mb-6">PhD Students</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Vaibhav Walve</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Dr. Umashankar Rajput</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Dr. Imrankhan Mulani</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Dr. Sk Rejaul</p>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="text-xl font-semibold mb-6">Post-Doc Fellows</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border broder-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Dr. Sumati Patil</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border broder-2 border-gray-400">
            <p class="text-lg font-medium text-gray-900">Dr. Giriraj Vyas</p>
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
