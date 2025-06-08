<template>
    <div class="h-screen w-screen bg-[#141915] overflow-hidden fixed">
      <NavBar />
      <ProjectedLight :blur="50" :angle="75" :position="[-30, 30]" :size="[45, 30]" :duration="2" :randomMode="false" />
      <ProjectedLight :blur="50" :angle="110" :position="[-30, 10]" :size="[40, 30]" />
      <ProjectedLight :blur="50" :angle="82" :position="[-30, 86]" :size="[50, 30]" />
      <FooterLight />
      <HeroBanner />
      <GlowParticlesEffect />
      <MyParticleComponent
        :showGlow="false"
        particlesTop="10%"
        particlesLeft="0%"
      />
      <CookieBanner />
    </div>
    <SeeYaLater />
  </template>
  
  <script setup>
  import ProjectedLight from '../components/ProjectedLight.vue'
  import FooterLight from '../components/FooterLight.vue'
  import NavBar from '../components/NavBar.vue'
  import HeroBanner from '../components/HeroBanner.vue'
  import GlowParticlesEffect from '../components/GlowParticlesEffect.vue'
  import MyParticleComponent from '../components/ReusableGlow.vue'
  import FullGrid from '../components/FullGrid.vue'
  import CookieBanner from '../components/CookieBanner.vue'
  import SeeYaLater from '../components/SeeYaLater.vue'
  
  import { onMounted } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  onMounted(() => {
    // Positionner la div .test en dehors de l'écran au début
    gsap.set(".test", {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 1)",
      y: "100%",
      zIndex: 1001  
    });
  
    // Animation au scroll
    gsap.to(".test", {
      y: "0%",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".test",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  });
  </script>
  
  <style scoped>
  * {
    overflow-x: hidden;
  }
  </style>
  