<template>
    <div
      class="flex items-center gap-2 absolute bottom-4 lg:bottom-5 left-1/2 lg:left-auto right-auto lg:right-16 transform -translate-x-1/2 lg:translate-x-0 DMSans scroll-to-explore"
    >
      <div class="text-white">
        <p class="font-bold">
          Scroll <span class="font-normal">to-explore</span>
        </p>
      </div>
      <div>
        <Icon icon="fa-solid:arrow-down" width="22" height="22" style="color: #5AE986" />
      </div>
    </div>
  </template>
  

<script setup>
import { Icon } from '@iconify/vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

</script>

<style scoped>
@import '../assets/main.css';

.DMSans {
    font-family: "DM Sans", sans-serif;
}
.scroll-to-explore {
    opacity: 0;
    animation: scroll-to-explore 1.2s ease-in-out forwards;
    animation-delay: 1s;
}
@keyframes scroll-to-explore {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}


</style>