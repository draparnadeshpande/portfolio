<script setup>
  import ProfileInfo from '../components/ProfileInfo.vue';
  import FootQuote from '../components/FootQuote.vue';
  import BulletinBoard from '@/components/BulletinBoard.vue';
</script>

<template class="h-screen overflow-hidden m-0 p-0">
  <div class="flex items-center justify-center min-w-full bg-transparent mt-2">
    <div class="ml-2 mr-2 sm:ml-12 sm:mr-12">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="grid grid-cols-1 mt-10">
          <div class="ml-18 sm:ml-0 h-62 w-65 sm:h-100 sm:w-140 sm:mt-5 flex justify-center">
            <img class="rounded-2xl sm:h-[420px] sm:w-[420px] object-contain" src="../assets/profile.png" alt="propic" />
          </div>
          <div class="flex items-center justify-center">
            <ProfileInfo></ProfileInfo>
          </div>
        </div>
        <div class="mt-10 sm:mt-2">
          <BulletinBoard></BulletinBoard>
        </div>
      </div>
      <div class="sm:mt-10 my-auto mb-10">
        <FootQuote></FootQuote>
      </div>
    </div>
  </div>
</template>

<style>
    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    .img-frame img {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 100%;
    }
</style>