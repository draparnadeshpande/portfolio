<template>
  <nav class="bg-white">
    <div class="px-2 sm:px-3 lg:px-5 sm:bg-[#111828]">
      <div class="flex justify-center h-16">
        <!-- Hamburger menu button (mobile) -->
        <div class="flex items-center sm:hidden absolute left-4 top-4 border border-3">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="color: #111828"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="color: #111828"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Nav Links (desktop) -->
        <div class="hidden sm:flex sm:space-x-6 items-center text-white">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'px-3 py-2 rounded-md text-l font-medium text-gray-300 hover:text-blue-400',
              $route.path === item.to
                ? 'bg-gray-700'
                : ''
            ]"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-200',
          ]"
          @click="isOpen = false"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);

import { useRoute } from 'vue-router';
const $route = useRoute();

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/About_Me', label: 'About Me' },
  { to: '/STM_Lab', label: 'STM Lab' },
  { to: '/ResearchAreas', label: 'Research Areas' },
  { to: '/ResearchGroup', label: 'Research Group' },
  { to: '/Publications', label: 'Publications' },
  { to: '/Outreach', label: 'Outreach' },
  { to: '/Science_Ed', label: 'Science Ed' }
];
</script>
