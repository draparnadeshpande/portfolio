<template>
  <div class="mx-auto max-w-4xl px-2 pt-2 sm:px-6">
    <Carousel v-bind="config" class="mb-5 overflow-hidden rounded-2xl shadow-md sm:h-96">
      <Slide v-for="image in images" :key="image.id" class="flex items-center justify-center bg-surface">
        <img
          :src="image.url"
          alt="image"
          class="h-full w-full object-contain"
        />
      </Slide>
      <template v-if="images.length > 1" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <!-- Current Members Section -->
    <div class="rounded-xl border border-line p-5 sm:p-6">
      <h2 class="pb-2 text-center font-serif text-2xl font-semibold text-ink">Current Members</h2>
      <div class="section-rule mb-6"></div>
      <div class="mb-5">
        <p class="subheading mb-3">BSMS Students</p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="person in currentBsms" :key="person.name" class="member-row">
            <span class="avatar">{{ initials(person.name) }}</span>
            <span>
              <span class="block text-sm font-medium text-ink">{{ person.name }}</span>
              <span class="block text-xs text-ink-muted">{{ person.period }}</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <p class="subheading mb-3">PhD Students</p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="person in currentPhd" :key="person.name" class="member-row">
            <span class="avatar">{{ initials(person.name) }}</span>
            <span>
              <span class="block text-sm font-medium text-ink">{{ person.name }}</span>
              <span class="block text-xs text-ink-muted">{{ person.period }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Alumni Section -->
    <div class="mt-4 rounded-xl border border-line p-5 sm:p-6">
      <h2 class="pb-2 text-center font-serif text-2xl font-semibold text-ink">Alumni</h2>
      <div class="section-rule mb-6"></div>
      <div class="mb-5">
        <p class="subheading mb-3">BSMS Students</p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          <a v-for="person in alumniBsms" :key="person.name" :href="person.href" target="_blank" rel="noopener" class="member-row member-row--link">
            <span class="avatar">{{ initials(person.name) }}</span>
            <span class="text-sm font-medium">{{ person.name }}</span>
          </a>
        </div>
      </div>
      <div class="mb-5">
        <p class="subheading mb-3">PhD Students</p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="name in alumniPhd" :key="name" class="member-row">
            <span class="avatar">{{ initials(name) }}</span>
            <span class="text-sm font-medium text-ink">{{ name }}</span>
          </div>
        </div>
      </div>
      <div>
        <p class="subheading mb-3">Post-Doc Fellows</p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="name in alumniPostDoc" :key="name" class="member-row">
            <span class="avatar">{{ initials(name) }}</span>
            <span class="text-sm font-medium text-ink">{{ name }}</span>
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
  height: 384,
  itemsToShow: 1,
  gap: 5,
}

const currentBsms = [
  { name: 'Parthiv Dixit', period: 'Jul 2025 - Present' },
];

const currentPhd = [
  { name: 'Nikhil Singh', period: 'Jul 2023 - Present' },
];

const alumniBsms = [
  { name: 'Pranjal Panwar', href: 'https://www.jyu.fi/en/people/pranjal-panwar' },
  { name: 'Subhrajit Dalai', href: 'https://www.linkedin.com/in/subhrajit-dalai-0364a11aa/?originalSubdomain=in' },
  { name: 'Piyush Uttam Parakh', href: 'https://superpuddles-lab.ifw-dresden.de/homepage/members' },
  { name: 'Hitesh Khanagwal', href: 'https://www.linkedin.com/in/hitesh-khanagwal-252271277/' },
  { name: 'Thasneem A', href: 'https://www.linkedin.com/in/thasneem-a-22005aa5' },
  { name: 'Navathej Ganesh', href: 'https://www.linkedin.com/in/navathej-preetha-genesh-6570015a' },
];

const alumniPhd = ['Dr. Vaibhav Walve', 'Dr. Umashankar Rajput', 'Dr. Imrankhan Mulani', 'Dr. Sk Rejaul'];

const alumniPostDoc = ['Dr. Sumati Patil', 'Dr. Giriraj Vyas'];

function initials(name) {
  const clean = name.replace(/^Dr\.\s*/, '');
  const parts = clean.split(' ').filter(Boolean);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase();
}
</script>

<style scoped>
.subheading {
  display: inline-block;
  border-radius: 9999px;
  border-bottom: 2px solid var(--color-accent);
  background-color: var(--color-accent-soft);
  padding: 0.3rem 0.85rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
}

.member-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.member-row--link {
  color: var(--color-ink);
  transition: color 0.2s;
}

.member-row--link:hover {
  color: var(--color-accent);
}

.member-row--link:hover .avatar {
  background-color: var(--color-accent);
  color: var(--color-surface);
}

.avatar {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: var(--color-accent-soft);
  color: var(--color-accent);
  font-family: var(--font-serif);
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.2s, color 0.2s;
}

.carousel {
  --vc-pgn-background-color: var(--color-line);
  --vc-pgn-active-color: var(--color-accent);
  --vc-nav-background: color-mix(in srgb, var(--color-surface) 70%, transparent);
  --vc-nav-border-radius: 100%;
}
</style>
