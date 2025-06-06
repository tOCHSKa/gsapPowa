<template>
  <div
    class="spotlight-container"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div ref="spotlight" class="spotlight"></div>
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const spotlight = ref(null)
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

function onMouseMove(event) {
  // On anime la position du spotlight vers la position de la souris
  gsap.to(pos, {
    duration: 0.3,
    x: event.clientX,
    y: event.clientY,
    onUpdate: () => {
      gsap.set(spotlight.value, {
        x: pos.x - spotlight.value.offsetWidth / 2,
        y: pos.y - spotlight.value.offsetHeight / 2,
      })
    },
    ease: 'power3.out',
  })
}

function onMouseLeave() {
  // Quand on sort, on peut cacher le spotlight en le centrant hors écran ou le rendre transparent
  gsap.to(spotlight.value, {
    duration: 0.5,
    opacity: 0,
  })
}

onMounted(() => {
  // Spotlight visible au départ
  gsap.set(spotlight.value, { opacity: 1 })
})
</script>

<style scoped>
.spotlight-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #111;
  overflow: hidden;
  cursor: none;
}

.spotlight {
  position: fixed;
  pointer-events: none;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
  will-change: transform, opacity;
}
</style>
