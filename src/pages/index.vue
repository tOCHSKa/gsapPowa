<template>
    <div class="h-screen w-screen bg-[#141915] overflow-hidden relative">
        <NavBar />
        <ProjectedLight :blur="50" :angle="75" :position="[-30, 30]" :size="[45, 30]" :duration="2"  :randomMode="false"/>
        <ProjectedLight :blur="50" :angle="110" :position="[-30, 10]" :size="[40, 30]" />
        <ProjectedLight :blur="50" :angle="82" :position="[-30, 86]" :size="[50, 30]" />
        <FooterLight />
        <div class="h-screen w-screen bg-black/80 z-[1000]">
        </div>
        <HeroBanner />
        <GlowParticlesEffect />
    </div>
</template>

<script setup>
import ProjectedLight from '../components/ProjectedLight.vue'
import FooterLight from '../components/FooterLight.vue'
import NavBar from '../components/NavBar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import GlowParticlesEffect from '../components/GlowParticlesEffect.vue'
</script>

<style scoped>
* {
    overflow: hidden;
}
</style>