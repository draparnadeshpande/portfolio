<template>
  <div>
    <PageHeader title="Who is Dr. Aparna Deshpande ..?"></PageHeader>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2">
      <div class="flex w-full items-center justify-center">
        <img class="rounded-xl" src="../assets/propic.png" alt="">
      </div>
      <div>
        <PastTrajectory></PastTrajectory>
      </div>
    </div>
    <hr class="my-10 h-px border-0 bg-line">
    <div class="mx-2 mt-2">
      <div class="mx-1 mt-5 text-justify text-ink sm:mx-10">
        As a physics faculty member of <a href="https://www.iiserpune.ac.in/">IISER Pune.</a>. I welcome you here.
        The research in my lab involves exploration of surfaces and interfaces of 2D materials and strongly correlated materials using scanning tunneling microscopy (STM) and spectroscopy (STS).
        I am also motivated by teaching and learning of physics in particular and science in general. Connecting to lay persons about what I teach and research is also very special to me.
        The <a href="https://www.iiserpune.ac.in/engage/outreach-and-training/science-activity-centre">Smt. Indrani Balan Science Activity center</a> on our IISER campus is the hub of outreach activities and teacher training projects.
        <p>
          <br/>My teaching at IISER Pune covers UG lab courses and ditigal electronics course. During the pandemic I coordinated the introductory physics lab course where, in an unprecedented effort at IISER Pune across all disciplines, low cost physics lab kits were sent to the students to carry out experiments at home. Vivas and exams were then conducted in the online mode.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import PastTrajectory from '@/components/PastTrajectory.vue';
</script>
