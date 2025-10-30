<template>
  <div class="min-h-screen p-2">
    <div class="container mx-auto pt-12 pb-20">
        <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
            Key Publications
        </h1>
        <div class="w-30 h-0.5 bg-[#111828] mx-auto rounded mt-5 mb-5"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div v-for="(tile, idx) in publications" :key="idx" class="rounded-lg shadow-lg p-8 border border-2 border-gray-100">
                <h2 class="text-l font-bold text-gray-800 mb-4 text-center">{{tile.title}}</h2>
                <div class="mx-auto w-24 h-[3px] brounded-full mb-6 transition-all duration-500 group-hover:w-36"></div>
                <p class="text-gray-700 text-xs"> {{tile.description}} </p>
            </div>
        </div>
    </div>
  </div>
</template>


<script setup>
const publications = [
  {
    title: "Oxidation Behavior of ZrTe2: Insights into Stability for Applications in Sensors",
    description: "Pranjal Panwar, Vaibhav Walve, Nikhil Singh, Luminita Harnagea, Aparna Deshpande, J. Phys. Chem. C, 129, 22, 10304–10312 (2025)"
  },
  {
    title: "Evolution of Atomistic Boron Clusters on Borophene Monolayers on Au(111)",
    description: "Umashankar Rajput, Md Faiz Akhtar, Giriraj Vyas, Somnath Bhowmick, Prashant Kumar, Aparna Deshpande, J. Phys. Chem. C, 129, 15, 7485–7492 (2025)"
  },
  {
    title: "Adsorption of FePc on Bi2Se3",
    description: "Rejaul Sk, Bijoy Nharangatt, Imrankhan Mulani, Priya Mahadevan, and Aparna Deshpande, J. Phys. Chem. C, 128, 41, 17651–17657 (2024)"
  },
  {
    title: "Unveiling different structural orderings in Fe 5-xGeTe2",
    description: "Vaibhav Walve, Piyush Parakh, Umashankar Rajput, Akash S. Mhase, Kirandeep Singh, and Aparna Deshpande, Phys. Rev. B 110, 075119 (2024)"
  },
  {
    title: "Liquid phase exfoliated borophene on Au(111)",
    description: "Umashankar Rajput, Md Faiz Akhtar, Vaibhav Walve, Imrankhan Mulani, Giriraj Vyas, Somnath Bhowmick, Prashant Kumar and Aparna Deshpande, J. Phys. Chem. C 128 (9), 4104-4110, (February 2024)"
  },
  {
    title: "Emergent Negative Differential Resistance with an Undisturbed Topological Surface State",
    description: "Rejaul Sk, Debayan Mondal, Imrankhan Mulani, Priya Mahadevan, and Aparna Deshpande. J. Phys. Chem. C 2022, 126, 39, 16744."
  },
  {
    title: "Perturbation of charge density waves in 1T-TiSe2",
    description: "Imrankhan Mulani, Umashankar Rajput, Luminita Harnagea, and Aparna Deshpande. Phys. Rev. B 103, 125430 (2021)"
  },
  {
    title: "Growth, properties, and applications of nanolaminate Ti3AlC2 thin films",
    description: "Abhijit Biswas, Arundhati Sengupta, Umashankar Rajput, Sachin Kumar Singh, Vivek Antad, Sk Mujaffar Hossain, Swati Parmar, Dibyata Rout, Aparna Deshpande, Sunil Nair, and Satishchandra Ogale. Phys. Rev. Applied 13, 044075(2020)."
  },
  {
    title: "Unveiling the emergence of functional materials with STM: metal phthalocyanine on surface architectures",
    description: "Rejaul Sk and Aparna Deshpande, invited review article for Molecular Systems Design & Engineering, 4, 471 (2019)."
  },
  {
    title: "Emergent Properties of Organic Molecule-Topological Insulator Hybrid Interface: Cu-Phthalocyanine on Bi2Se3",
    description: "Rejaul Sk, Imrankhan Mulani, and Aparna Deshpande. J. Phys. Chem. C 122, 40, 22996 (2018)."
  },
  {
    title: "Effect of Cyano Substitution on the Step-Edge Adsorption of Copper Phthalocyanine on Au(111)",
    description: "Rejaul Sk, Srilatha Arra, Barun Dhara, Joel S. Miller, Mukul Kabir, and Aparna Deshpande, Phys. Chem. C 122, 22, 11848 (2018)."
  },
  {
    title: "Enhancing the Intermolecular Interaction by Cyano Substitution in CuPc",
    description: "Rejaul Sk, Srilatha Arra, Barun Dhara, Joel S. Miller, Mukul Kabir, and Aparna Deshpande, Phys. Chem. C 122, 1, 429 (2018)."
  },
  {
    title: "Revisiting HOPG superlattices: Structure and conductance properties",
    description: "Sumati Patil, Sadhu Kolekar, Aparna Deshpande, Surface Science, 658, 55-60, (2017)."
  },
  {
    title: "Enhancing the thermopower and tuning the resistivity in Bi2Se3 with Fe-doping",
    description: "Rejaul Sk, Mandar Shirolkar, Barun Dhara, Sulabha Kulkarni, and Aparna Deshpande, Chemical Physics Letters, 638, 94 (2015)."
  },
  {
    title: "Self-Assembly and Photopolymerization of Sub‑2 nm One-Dimensional Organic Nanostructures on Graphene",
    description: "Aparna Deshpande, Chun-Hong Sham, Justice M. P. Alaboson, Jonathan M. Mullin, George C. Schatz, and Mark C. Hersam, J. Am. Chem. Soc., 134, 16759 (2012)."
  },
  {
    title: "Scanning probe microscopy of graphene",
    description: "Aparna Deshpande and Brian LeRoy, Physica E, 44, 743 (2012) (invited review article)."
  },
  {
    title: "Spatially resolved spectroscopy of monolayer graphene on SiO2",
    description: "Aparna Deshpande, Wenzhong Bao, Feng Miao, Chun Ning Lau, and Brian LeRoy, Phys. Rev. B, 79, 205411 (2009). Accompanying synopsis in Physics."
  },
  {
    title: "Atom-by-atom extraction using scanning tunneling microscope tip-cluster interaction",
    description: "Aparna Deshpande, Dandapani Acharya, Joel Vaughn, Saw-Wai Hla, Handan Yildirim, Abdelkader Kara, and Talat Rahman, Phys. Rev. Lett., 98, 028304 (2007)."
  },
  {
    title: "Manipulating Kondo Resonance in Two-Dimensional Molecular Self-Assembly",
    description: "Violeta Iancu, Aparna Deshpande and Saw-Wai Hla, Phys. Rev. Lett., 97, 266603 (2006)."
  }
];

</script>