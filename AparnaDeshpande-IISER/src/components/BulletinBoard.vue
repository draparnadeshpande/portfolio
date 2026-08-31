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

      <ul class="h-50 divide-y divide-line overflow-y-scroll sm:h-full sm:overflow-y-hidden">
        <li class="flex gap-2 py-3 text-ink">
          <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent"></span>
          <span>
            Welcome to 3 iPhD students - Ritika, Pratyush, Priyash!
          </span>
        </li>
        <li class="flex gap-2 py-3 text-ink">
          <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent"></span>
          <span>
            Congratulations to Vaibhav Walve for defending his PhD thesis successfully!
          </span>
        </li>
        <li class="flex gap-2 py-3 text-ink">
          <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent"></span>
          <span>
            Congratulations to Vaibhav for receiving the prestigious <a href="https://anrfonline.in/ANRF/npdf" target="_blank" rel="noopener" class="transition hover:underline">ANRF postdoctoral fellowship</a>.<br/> Vaibhav will carry out his postdoctoral research work at NCL
            under the mentorship of Dr. Kirandeep Singh at <a href="http://academic.ncl.res.in/kp.singh" target="_blank" rel="noopener" class="transition hover:underline">NCL (Pune)</a>.
          </span>
        </li>
        <li class="flex gap-2 py-3 text-ink">
          <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent"></span>
          <span>
            Conversation in <a href="https://www.youtube.com/watch?v=1hkg2OmUc2A&t=14s" target="_blank" rel="noopener" class="transition hover:underline">Dr. Pavan's podcast Pratidhvani Humanizing Science</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>
