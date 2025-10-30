<template>
  <div class="text-center mt-15 text-4xl font-bold">Sharing Science Beyond the Lab</div>
  <div class="w-30 h-0.5 bg-[#111828] mx-auto rounded mt-5 mb-5"></div>
  <div class="justify-content mt-10 sm:ml-15 sm:mr-15">
    Article 51A(h) in the constitution of India  lists "To develop the scientific temper, humanism, and the spirit of inquiry and reform"as one of the fundamental duties.
    In line with this IISER Pune has a dedicated International Relations and Outreach (IRO) department. Smt. Indrani Balan Science Activity Centre (SAC) is a part of IRO.
    Situated in the IISER Pune campus SAC is actively engaged in science outreach and teacher training workshops. Outside the campus SAC has also set up a community tinkering centre called "
    <a href="https://www.kalpakghar.org/" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">Kalpakghar</a>" in the <a href="https://www.pcsciencepark.org/" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">Pimpri Chinchwad Science Park</a>, in collaboration with the CSR initiative of Tata Technologies. 
    <br/><br/>
    SAC has a dedicated <a href="https://www.youtube.com/@IISERPuneScienceActivityCentre/featured" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">YouTube channel</a> which extends our outreach beyond campus! Recently the channel crossed 100,000 subscribers and received the <a href="https://x.com/ScienceActivity" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">Silver Button</a>!  
    <br/><br/>
    Currently, I am the Faculty Incharge of SAC, a role that aligns with my passion for teaching and outreach, and gives me immense satisfaction.
  </div>
  <div class="text-center text-bold text-2xl mt-15">My Talks</div>
  <div class="w-25 h-0.5 bg-[#111828] mx-auto rounded"></div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ml-1 sm:mr-10 mt-15 mb-20 gap-5 w-full">
    <div v-for="(tile, idx) in talks" :key="idx"
        class="max-w-full bg-white rounded-lg shadow-lg p-6 hover:shadow-lg transition-shadow duration-300 px-10 py-10 text-center flex flex-col border border-2 border-gray-200">
      <a :href="tile.link" target="_blank" rel="noopener" class="flex flex-col flex-grow">
        <h3 class="text-l font-semibold text-gray-900 mb-2 h-15">
          {{ tile.title }}
        </h3>
        <p class="text-gray-700 text-xs mt-5 text-center">
          {{ tile.description }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup>
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
