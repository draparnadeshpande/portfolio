<script setup>
import ProfileInfo from '../components/ProfileInfo.vue';
import FootQuote from '../components/FootQuote.vue';
import BulletinBoard from '@/components/BulletinBoard.vue';
</script>

<template>
  <div class="mx-auto max-w-3xl py-10 sm:py-16">
    <div class="flex flex-col items-center text-center">
      <img
        class="h-32 w-32 rounded-full object-cover object-top shadow ring-4 ring-surface sm:h-40 sm:w-40"
        src="../assets/profile.png"
        alt="propic"
      />
      <div class="mt-6 w-full">
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