<template>
  <div
    ref="beam"
    class="beam"
    :style="beamStyles"
  ></div>
</template>

<script setup>
import { onMounted, ref, computed, defineProps } from 'vue'
import { gsap } from 'gsap'

// 🔧 Props : personnalisables depuis l'extérieur
const props = defineProps({
  angle: { type: Number, default: 70 },           // Angle final
  startAngle: { type: Number, default: 20 },       // Angle de départ
  position: { type: Array, default: () => [30, 30] }, // position top/left en %
  size: { type: Array, default: () => [40, 40] },  // taille width/height en %
  blur: { type: Number, default: 25 },             // flou de l'effet
  duration: { type: Number, default: 2 },          // durée de l'animation
  randomMode: { type: Boolean, default: false }    // active un angle aléatoire
})

const beam = ref(null)

// 🎨 Styles dynamiques basés sur les props
const beamStyles = computed(() => ({
  '--top': `${props.position[0]}%`,
  '--left': `${props.position[1]}%`,
  '--width': `${props.size[0]}%`,
  '--height': `${props.size[1]}%`,
  '--angle': `${props.angle}deg`,
  '--blur': `${props.blur}px`,
}))

onMounted(() => {

  const randomAngle = Math.floor(Math.random() * 181)
  const finalAngle = props.randomMode ? randomAngle : props.angle

  gsap.fromTo(
    beam.value,
    {
      opacity: 0,
      scaleX: 0,
      rotate: props.startAngle,
    },
    {
      opacity: 1,
      scaleX: 1,
      rotate: finalAngle,
      duration: props.duration,
      ease: 'power3.out',
      transformOrigin: 'left center',
    }
  )
})
</script>

<style scoped>
.beam {
  position: absolute;
  z-index: 1000;
  top: var(--top);
  left: var(--left);
  width: var(--width);
  height: var(--height);
  border-radius: 30%;

  background: radial-gradient(
    ellipse at center,
    rgba(61, 182, 111, 0.25) 0%,
    rgba(255, 255, 200, 0.1) 60%,
    rgba(200, 255, 227, 0.02) 90%,
    transparent 100%
  );

  transform: rotate(var(--angle));
  pointer-events: none;
  will-change: transform, opacity;
  mix-blend-mode: screen;
  filter: blur(var(--blur));
  overflow: hidden;
}

@media (max-width: 768px) {
  .beam {
    display: none;
  }
}
</style>
