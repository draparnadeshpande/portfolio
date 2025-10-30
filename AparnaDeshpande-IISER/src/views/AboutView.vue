<template class="max-w-7xl mx-auto">
  <div class="text-center text-bold text-2xl mt-5">Who is Dr. Aparna Deshpande ..?</div>
  <div class="w-25 h-0.5 bg-[#111828] mx-auto rounded mt-2"></div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="h-100 w-100 flex justify-center align-center w-full">
        <img class="mt-5" src="../assets/propic.png" alt="">
      </div>
      <div>
        <PastTrajectory></PastTrajectory>
      </div>
    </div>
    <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700">
    <div class="mr-2 ml-2 mt-2">
      <div class="mr-1 ml-1 sm:mr-10 sm:ml-10 mt-5 text-l text-justify">
        As a physics faculty member of <a href="https://www.iiserpune.ac.in/">IISER Pune.</a>. I welcome you here. 
        The research in my lab involves exploration of surfaces and interfaces of 2D materials and strongly correlated materials using scanning tunneling microscopy (STM) and spectroscopy (STS). 
        I am also motivated by teaching and learning of physics in particular and science in general. Connecting to lay persons about what I teach and research is also very special to me.  
        The <a href="https://www.iiserpune.ac.in/engage/outreach-and-training/science-activity-centre">Smt. Indrani Balan Science Activity center</a> on our IISER campus is the hub of outreach activities and teacher training projects.
        <p>
          <br/>My teaching at IISER Pune covers UG lab courses and ditigal electronics course. During the pandemic I coordinated the introductory physics lab course where, in an unprecedented effort at IISER Pune across all disciplines, low cost physics lab kits were sent to the students to carry out experiments at home. Vivas and exams were then conducted in the online mode.
        </p>
      </div>
    </div>
</template>

<script setup>
import PastTrajectory from '@/components/PastTrajectory.vue';

</script>

<style scoped>
/* Base link styles */
a {
  color: #1a73e8; /* Soft blue */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

/* Visited links */
a:visited {
  color: #6a5acd; /* Medium purple */
}

/* Hover state */
a:hover,
a:focus {
  color: #d93025; /* Vibrant red */
  text-decoration: underline;
  outline: none;
}

/* Active (clicked) state */
a:active {
  color: #b22222; /* Dark red */
  text-decoration: underline;
}

/* Focus visible for accessibility */
a:focus-visible {
  outline: 2px solid #d93025;
  outline-offset: 2px;
}
</style>