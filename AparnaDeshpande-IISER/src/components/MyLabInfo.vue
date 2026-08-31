<template>
  <PageHeader title='"Visualizing, probing and manipulating matter at the atomic scale."'></PageHeader>
  <div class="m-10">
    <img class="rounded-xl" src="../assets/Lab.png" alt="STM Lab">
  </div>
  <div class="ml-5 mt-10 text-left font-serif text-2xl font-semibold text-ink">UHV-LT-STM</div>
  <div class="m-5 text-justify text-ink-muted sm:mt-7">
    Our STM Lab is located in the h-cross block of IISER campus. The h-cross block is specially designed to house all experimental physics labs. Utmost attention has been paid to details like uninterrupted power supply, vibration isolation areas, and custom built interiors for every lab.  The lab houses two major instruments:
  </div>
  <div class="m-5 mb-10 sm:mt-5">
      <ul class="flex list-outside list-disc flex-col gap-4 text-justify marker:text-accent">
          <li>Omicron STM operating in ultra high vacuum (UHV) and at low temperature (LT), 77 K and 4.2K (UHV-LT-STM) for dedicated STM, spectroscopy and atom and molecule manipulation experiments at 77 K and 4.2 K.</li>
          <li>Nanosurf atomic force microscope (AFM) and STM, table top models, for projects at room temperature (300 K) and in ambient environment</li>
          <li>Homebuilt 2D transfer system with Olympus Upright microscope</li>
      </ul>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
</script>