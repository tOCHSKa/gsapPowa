<template>
    <div ref="container" class="overflow-hidden inline-block w-full DMsans gradient-text">
      <span
        v-for="(word, index) in words"
        :key="index"
        class="overflow-visible inline-block opacity-0 translate-y-full text-[clamp(2rem,6vw,5rem)]
         text-white/80 leading-none tracking-[-.025em] glow-gradient-text "
      >
        {{ word }}&nbsp;
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const props = defineProps({
    text: String,
  });
  
  const container = ref(null);
  const words = props.text.split(' ');
  
  onMounted(() => {
    gsap.to(container.value.children, {
      opacity: 1,
      y: 0,
      duration: 1.6,
      ease: 'power3.out',
      stagger: 0.2,
    });
  });
  </script>
  <style scoped>
  .DMsans {
    font-family: "DM Sans", sans-serif;
  }

  .glow-text {
  text-shadow:
    0 0 3px #5AE986,
    0 0 6px #5AE986,
    0 0 10px #2fdd92;
}
.gradient-text {
    background: #ffffff;
    background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(90, 233, 134, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.glow-gradient-text {
  background: linear-gradient(90deg, #000 0%, #5AE986 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 0 1px #ffffff,
    0 0 1px #5AE986,
    0 0 10px #2fdd92;
}
  </style>