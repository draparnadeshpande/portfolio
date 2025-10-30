<template>
  <div class="flex flex-col md:flex-row justify-center items-start gap-8 sm:mt-12">
    <!-- Bulletin Board -->
    <div
      class="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-t-4 border-[#111828] p-5 w-full"
      style="z-index:2"
    >
      <!-- Board header -->
      <div class="flex items-center gap-3 mb-4">
        <svg class="text-black-400 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <h3 class="font-bold text-xl text-gray-900 tracking-tight">
          STM Lab News Feed
        </h3>
      </div>

      <ul class="space-y-4 gap-2 sm:h-full h-50 overflow-y-scroll sm:overflow-y-hidden">
        <li class="bg-blue-50 rounded-lg shadow p-3">
          Congratulations to Vaibhav Walve for defending his PhD thesis successfully! 
        </li>
        <li class="bg-blue-50 rounded-lg shadow p-3">
          Congratulations to Vaibhav for receiving the prestigious <a href="https://anrfonline.in/ANRF/npdf" target="_blank" rel="noopener" class="transition text-blue-600 hover:underline">ANRF postdoctoral fellowship</a>.<br/> Vaibhav will carry out his postdoctoral research work at NCL
          under the mentorship of Dr. Kirandeep Singh at <a href="http://academic.ncl.res.in/kp.singh" target="_blank" rel="noopener" class="transition text-blue-600 hover:underline">NCL (Pune)</a>.
        </li>
        <li class="bg-blue-50 rounded-lg shadow p-3">
          Conversation in <a href="https://www.youtube.com/watch?v=1hkg2OmUc2A&t=14s" target="_blank" rel="noopener" class="transition text-blue-600 hover:underline">Dr. Pavan's podcast Pratidhvani Humanizing Science</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const bulletins = [
    {
      id: 1,
      title: "Our first paper on borophene in JPCC",
      link: "https://pubs.acs.org/doi/10.1021/acs.jpcc.4c00497"
    },
    {
      id: 2,
      title: "Our first paper on borophene in JPCC",
      link: "https://pubs.acs.org/doi/10.1021/acs.jpcc.4c00497"
    },

  ];


</script>
