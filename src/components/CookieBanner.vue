<template>
    <div class="absolute bottom-15 left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] md:max-w-2xl">
      <div
        class="cookiebanner DMsans w-full rounded-3xl h-16 px-3 gap-4 flex items-center justify-between md:justify-center bg-white/5 backdrop-blur-md"
      >
        <div class="bg-white/10 backdrop-blur-md  rounded-tl-2xl rounded-bl-2xl rounded-r-2xl p-2 ">
          <img class="w-8 h-8" src="../assets/image2vector 1.svg" alt="">
        </div>
        <div class="hidden md:block">
          <p class="text-white">
            This website uses cookies to ensure you get the best experience on our
            website.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <div>
            <button
              class="hover:scale-105 transition ease-in-out duration-300 
              hover:bg-white hover:text-black cursor-pointer bg-transparent backdrop-blur-md border border-white text-white rounded-2xl px-4 py-2"
            >
              Decline
            </button>
          </div>
          <div>
            <button class="hover:scale-105 transition ease-in-out duration-300 border border-white
            hover:bg-transparent hover:text-white cursor-pointer bg-white text-black rounded-2xl px-4 py-2">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  


<script setup>
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    onMounted(() => {
  gsap.fromTo(
    ".cookiebanner",
    {
      opacity: 0,
      scale: 0,
      transformOrigin: "center",
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay: 1,
      ease: "power3.out"
    }
  );
});
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  .DMsans {
    font-family: "DM Sans", sans-serif;
  }

</style>