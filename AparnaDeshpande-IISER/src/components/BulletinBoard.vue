<template>
  <div class="flex flex-col items-start justify-center gap-8 sm:mt-12 md:flex-row">
    <!-- Bulletin Board -->
    <div class="card w-full border-t-4 border-t-accent">
      <!-- Board header -->
      <div class="mb-4 flex items-center gap-3">
        <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <h3 class="font-serif text-xl font-semibold tracking-tight text-ink">
          STM Lab News Feed
        </h3>
      </div>

      <ul class="h-50 gap-2 space-y-4 overflow-y-scroll sm:h-full sm:overflow-y-hidden">
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Vacancies for 2 PhD and 2 iPhD Students.<br/>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7452325477958021120/" class="transition hover:underline">Enquire Here !</a>
        </li>
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Congratulations to Vaibhav Walve for defending his PhD thesis successfully! 
        </li>
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Congratulations to Vaibhav for receiving the prestigious <a href="https://anrfonline.in/ANRF/npdf" target="_blank" rel="noopener" class="transition hover:underline">ANRF postdoctoral fellowship</a>.<br/> Vaibhav will carry out his postdoctoral research work at NCL
          under the mentorship of Dr. Kirandeep Singh at <a href="http://academic.ncl.res.in/kp.singh" target="_blank" rel="noopener" class="transition hover:underline">NCL (Pune)</a>.
        </li>
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Conversation in <a href="https://www.youtube.com/watch?v=1hkg2OmUc2A&t=14s" target="_blank" rel="noopener" class="transition hover:underline">Dr. Pavan's podcast Pratidhvani Humanizing Science</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>
