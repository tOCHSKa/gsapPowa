<template>
    <div class="glow z-[999]"></div>
    <div class="particles z-[999]">
      <div
        v-for="n in 5"
        :key="n"
        class="particle"
        :style="randomStyle(n)"
      ></div>
    </div>
  </template>
  
  <script setup>
  const randomStyle = (index) => {
    const rand = (min, max) => Math.random() * (max - min) + min
  
    const x = rand(-100, 100)
    const y = rand(-100, 100)
    const delay = rand(0, 3).toFixed(2)
    const duration = rand(3, 6).toFixed(2)
    const size = rand(4, 10).toFixed(1)
  
    return {
      left: '50%',
      top: '50%',
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      '--move-x': `${x}px`,
      '--move-y': `${y}px`,
    }
  }
  </script>
  
  <style scoped>

  
  .glow {
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    box-shadow:
    0 0 120px 40px #00ffcc,
    0 0 220px 80px #00ffcc,
    0 0 300px 120px #00ffcc;
    animation: glow 3s ease-in-out infinite alternate;
  }
  
  .particles {
    position: absolute;
    top: -10%;
    left: -15%;
    width: 100%;
    height: 100%;
  }
  
  .particle {
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #00ffcc;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ffcc, 0 0 30px #00ffcc;
    animation: floatParticle ease-in-out infinite;
    animation-delay: 2s;
  }
  
  @keyframes floatParticle {
    0% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    50% {
      transform: translate(calc(-50% + var(--move-x)), calc(-50% + var(--move-y)));
      opacity: 0.6;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
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
  