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

const beam = ref(null)

const props = defineProps({
  angle: { type: Number, default: 70 },
  position: { type: Array, default: () => [30, 30] },
  size: { type: Array, default: () => [40, 40] },
  blur: { type: Number, default: 25 },
})

const beamStyles = computed(() => ({
  '--top': `${props.position[0]}%`,
  '--left': `${props.position[1]}%`,
  '--width': `${props.size[0]}%`,
  '--height': `${props.size[1]}%`,
  '--angle': `${props.angle}deg`,
  '--blur': `${props.blur}px`,
}))

onMounted(() => {
  gsap.fromTo(
    beam.value,
    { opacity: 0, scaleX: 0 },
    {
      opacity: 1,
      scaleX: 1,
      duration: 2,
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
    rgba(255, 255, 200, 0.25) 0%,
    rgba(255, 255, 200, 0.1) 60%,
    rgba(255, 255, 200, 0.02) 90%,
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
  .light-wrapper {
    display: none;
  }
}
</style>
