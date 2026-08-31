<template>
  <div>
    <PageHeader title="Sharing Science Beyond the Lab"></PageHeader>
    <div class="mt-10 justify-content text-ink sm:ml-15 sm:mr-15">
      Article 51A(h) in the constitution of India  lists "To develop the scientific temper, humanism, and the spirit of inquiry and reform"as one of the fundamental duties.
      In line with this IISER Pune has a dedicated International Relations and Outreach (IRO) department. Smt. Indrani Balan Science Activity Centre (SAC) is a part of IRO.
      Situated in the IISER Pune campus SAC is actively engaged in science outreach and teacher training workshops. Outside the campus SAC has also set up a community tinkering centre called "
      <a href="https://www.kalpakghar.org/" target="_blank" rel="noopener">Kalpakghar</a>" in the <a href="https://www.pcsciencepark.org/" target="_blank" rel="noopener">Pimpri Chinchwad Science Park</a>, in collaboration with the CSR initiative of Tata Technologies.
      <br/><br/>
      SAC has a dedicated <a href="https://www.youtube.com/@IISERPuneScienceActivityCentre/featured" target="_blank" rel="noopener">YouTube channel</a> which extends our outreach beyond campus! Recently the channel crossed 100,000 subscribers and received the <a href="https://x.com/ScienceActivity" target="_blank" rel="noopener">Silver Button</a>!
      <br/><br/>
    </div>
    <h2 class="mt-15 text-center font-serif text-2xl font-semibold text-ink">My Talks</h2>
    <div class="section-rule"></div>
    <div class="ml-1 mb-20 mt-15 grid w-full grid-cols-1 gap-5 sm:mr-10 sm:grid-cols-2 lg:grid-cols-2">
      <div v-for="(tile, idx) in talks" :key="idx" class="card flex max-w-full flex-col text-center">
        <a :href="tile.link" target="_blank" rel="noopener" class="flex flex-grow flex-col">
          <h3 class="mb-2 h-15 text-base font-semibold text-ink">
            {{ tile.title }}
          </h3>
          <p class="mt-5 text-center text-xs text-ink-muted">
            {{ tile.description }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';

const talks = [
  {
    title: "The Exciting Science of 2D Materials",
    link: "https://drive.google.com/file/d/1BHk9Et7sjb90O9z51I_Naz6exVhNA3dm/view",
    description: "This lecture was a part of Jidnyasa Virtual Lecture Series at Praj Matrix. "
  },
  {
    title: "Reaching out to atoms, molecules and surfaces using scanning tunneling microscopy",
    link: "https://www.youtube.com/watch?v=x2zSeHxMkoE",
    description: "This lecture was a part of the Science Gappa Series at Dr. Abasaheb Garware College Pune."
  }
];
</script>
