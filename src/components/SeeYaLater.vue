<template>
    <div class="mt-[100vh] relative z-[995]">
      <div class="textadqzdqz c1 gradient-text">
        <h1>More Effects <span class="cursor-default
         text-white leading-tight tracking-[-.025em] glow-gradient-text">Coming Soon ;)</span></h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { gsap } from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  // ⚠️ Enregistrer ScrollTrigger avant usage
  gsap.registerPlugin(ScrollTrigger)
  
  onMounted(() => {
    // 💡 Attendre que le DOM soit monté avant de cibler les éléments
    gsap.to(".c1 h1", {
      duration: 2,
      ease: "expo.in",
      x: "-75%",
      scrollTrigger: {
        trigger: ".c1",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
        // markers: true
      }
    })
  })
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  
  .textadqzdqz {
    position: relative;
    background: #000;
    width: 100%;
    height: 100dvh;
    display: grid;
    place-items: center;
    z-index: 995;
  }
  
  .c1 {
    width: 100%;
    overflow: hidden;
  }
  
  .c1 h1 {
    font-family: 'DM Sans', sans-serif;
    font-size: 30vw;
    color: #fff;
    white-space: nowrap;
  }

  .c1 h1 span {
    color: #5AE986;
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
  