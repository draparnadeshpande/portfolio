<template>
  <div class="min-h-screen p-4">
    <div class="container mx-auto pt-12 pb-20">
        <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
            Current Research Topics
        </h1>
        <div class="w-30 h-0.5 bg-[#111828] mx-auto rounded mt-5 mb-5"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div v-for="(tile, idx) in topics" :key="idx" class="rounded-lg shadow-lg p-8 border border-2 border-gray-100">
                <h2 class="text-xl font-bold text-gray-800 mb-4 text-center">{{tile.title}}</h2>
                <div class="mx-auto w-24 h-[3px] brounded-full mb-6 transition-all duration-500 group-hover:w-36"></div>
                <p class="text-gray-700 text-sm"> {{tile.description}} </p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
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
  }
];

</script> 
