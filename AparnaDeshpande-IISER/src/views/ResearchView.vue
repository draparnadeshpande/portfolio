<template>
  <div class="min-h-screen p-4">
    <div class="container mx-auto pb-20 pt-12">
        <PageHeader title="Current Research Topics"></PageHeader>
        <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(tile, idx) in topics" :key="idx" class="card group">
                <h2 class="mb-4 text-center font-serif text-xl font-semibold text-ink">{{tile.title}}</h2>
                <div class="mx-auto mb-6 h-[3px] w-24 rounded-full bg-accent transition-all duration-500 group-hover:w-36"></div>
                <p class="text-sm text-ink-muted"> {{tile.description}} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';

const topics = [
  {
    title: "Borophene",
    description: "The world of 2D materials, also known as flatland, that emerged with the disovery of graphene not too long ago, has a new entrant named BOROPHENE which is the 2D network of boron atoms. Borophene can host vacancy-mediated superstructural motifs that induce structural polymorphism."
  },
  {
    title: "Heterostructures of 2D materials",
    description: "The family of exfoliable materials like graphene, and transition metal dichalcogenides like MoS2, WS2, WSe2 and so on, are amenable to a vertical and lateral stacking in the form of single layers due to the weak Van der Waals interaction between the layers. Such an assembly yields emergent properties."
  },
  {
    title: "Charge density waves",
    description: "Charge density waves (CDWs) are a periodic modulation of electronic density concomitant with lattice distortion. The origin of CDWs in TiSe2 and VSe2 is still an open and an interesting question."
  },
  {
    title: "2D Van der Waals magnetic materials",
    description: "The isolation of a monolayer of magnetic material has opened an exciting subfield to probe stable magnetism in 2D. Understanding bulk magnetic materials also can have long standing implications in the world of spintronics."
  },
  {
    title: "Spin-polarised STM measurements",
    description: ""
  },
  {
    title: "Instrumentation :- setting up probe station",
    description: ""
  }
];
</script>
