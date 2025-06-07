<template>
    <div class=" absolute top-0 left-0 z-[1001] bg-[#141915] glow"></div>
    <div class="w-screen h-screen grid grid-cols-4 grid-rows-4 gap-1 bg-transparent z-[1002]">
      <div
        v-for="i in 16"
        :key="i"
        class="bg-black flex items-center justify-center text-white text-xl"
      >
      </div>
      <div class="absolute top-0 left-0 z-[1003] w-screen h-screen bg-black opacity-100"></div>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const lightStyle = ref({})

const updateMousePosition = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY

  lightStyle.value = {
    background: `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, rgba(0,255,204,0.15), transparent 200px)`
  }
}

window.addEventListener('mousemove', updateMousePosition)
  </script>
  
  <style scoped>
  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    pointer-events: none;
    box-shadow:
      0 0 120px 40px #00ffcc,
      0 0 220px 80px #00ffcc,
      0 0 1300px 1300px #00ffcc;
    /* animation: glow 3s ease-in-out infinite alternate; */
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 40px 10px #00ffcc;
    }
    to {
      box-shadow: 0 0 100px 50px #00ffcc;
    }
  }
  </style>
  