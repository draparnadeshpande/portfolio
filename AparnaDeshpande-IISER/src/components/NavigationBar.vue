<template>
  <header class="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
      <router-link to="/" class="font-serif text-lg font-semibold text-ink">
        Dr. &nbsp; Aparna Deshpande
      </router-link>

      <!-- Nav Links (desktop) -->
      <nav class="hidden items-center gap-1 sm:flex">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition hover:text-accent"
          :class="$route.path === item.to ? 'text-accent' : ''"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Hamburger menu button (mobile) -->
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-ink sm:hidden"
        aria-controls="mobile-menu"
        :aria-expanded="isOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          v-if="!isOpen"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 8h16M4 16h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav v-if="isOpen" id="mobile-menu" class="space-y-1 border-t border-line px-4 pb-4 pt-2 sm:hidden">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="block rounded-md px-3 py-2 text-base font-medium text-ink-muted hover:text-accent"
        :class="$route.path === item.to ? 'text-accent' : ''"
        @click="isOpen = false"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </header>
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
