<template>
    <section
      class="z-[1001] DMsans absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5 py-16 bg-white/0 backdrop-blur-md text-gray-900 flex flex-col items-start gap-2 sm:items-center sm:text-center"
      aria-label="Hero section promoting the prop trading firm features"
    >
      <!-- Slogan -->
      <p class="text-lg font-medium flex items-center gap-2 text-white" aria-label="Our capital, your success">
        Our Capital, Your
        <!-- Chart Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17l6-6 4 4 8-8" />
        </svg>
        Success
      </p>

        <div class="max-w-[800px] overflow-hidden">
        <AnimatedWords text="No Time Limit Prop Firm" />
        <AnimatedWords text="Conquer the Market" :delay="1"/>
        </div>
      <!-- Feature list -->
      <ul class="m-6 text-left sm:text-center flex justify-center gap-4  md:flex-row flex-col " role="list" aria-label="Key benefits">
        <li class="flex items-center gap-2">
          <!-- Lightning Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p class="text-md text-white">Fast progress</p>
        </li>
        <li class="flex items-center gap-2">
          <!-- Monitor Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17h4.5m-9.5-3.75h14.5v-7a1.75 1.75 0 00-1.75-1.75H6.5A1.75 1.75 0 004.75 6.25v7z" />
          </svg>
          <p class="text-md text-white">The Lab Native platform</p>
        </li>
        <li class="flex items-center gap-2">
          <!-- Infinity Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12c1.5-2 3-2 4.5 0s3 2 4.5 0M3 12c1.5-2 3-2 4.5 0s3 2 4.5 0" />
          </svg>
          <p class="text-md text-white">No time limit Prop firm</p>
        </li>
        <li class="flex items-center gap-2">
          <!-- Flask Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 2v2m6-2v2m-9 4h12l-1.5 12.5a2 2 0 01-2 1.5h-5a2 2 0 01-2-1.5L6 8z" />
          </svg>
          <p class="text-md text-white ">Unique programs</p>
        </li>
      </ul>
      <div class="flex items-center justify-center gap-4">
                <div class="flex items-center gap-2">
                <button 
                    class="relative z-[1000] cursor-pointer flex items-center justify-center gap-1 px-2 py-2 border border-white bg-white text-black rounded-xl font-semibold hover:scale-105 transition ease-in-out duration-300"
                    aria-label="Start a challenge"
                >
                    Start a challenge
                    <span class="bg-[#5AE986] rounded-lg p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    </span>
                </button>

                <button
                    class="cursor-pointer px-4 py-2 rounded text-white text-md font-semibold border border-white rounded-xl hover:scale-105 transition ease-in-out duration-300"
                    aria-label="Start free trial"
                >
                    Free Trial
                </button>
            </div>
        </div>
    </section>
  </template>
  
  <script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import AnimatedWords from './AnimatedWords.vue';
    onMounted(() => {
  gsap.fromTo(
    ".firsth1",
    {
      opacity: 0,
      y: "100%",
    },
    {
      opacity: 1,
      y: "0%",
      duration: 1.2,
      ease: "power3.out",
    }
  );

  gsap.fromTo(
    ".secondh1",
    {
      opacity: 0,
      y: "100%",
    },
    {
      opacity: 1,
      y: "0%",
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    }
  );
});


  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  .DMsans {
    font-family: "DM Sans", sans-serif;
  }
  </style>
  