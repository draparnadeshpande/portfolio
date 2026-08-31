<script setup>
import ProfileInfo from '../components/ProfileInfo.vue';
import FootQuote from '../components/FootQuote.vue';
import BulletinBoard from '@/components/BulletinBoard.vue';
</script>

<template>
  <div class="mx-auto max-w-3xl pb-10 pt-16 sm:pb-16 sm:pt-24">
    <div class="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-14 sm:text-left">
      <img
        class="h-60 w-60 flex-shrink-0 rounded-full object-cover object-top shadow-md ring-4 ring-surface transition-all duration-300 hover:ring-accent sm:h-72 sm:w-72"
        src="../assets/profile.png"
        alt="propic"
      />
      <div class="w-full sm:w-auto">
        <ProfileInfo></ProfileInfo>
      </div>
    </div>

    <div class="mt-12">
      <BulletinBoard></BulletinBoard>
    </div>

    <div class="mt-12">
      <FootQuote></FootQuote>
    </div>
  </div>
</template>

<style>
    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }
</style>