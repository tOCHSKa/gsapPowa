<template>
    <nav
      class="w-full flex items-center justify-between md:px-5 md:py-4  max-h-22 DMsans relative z-1000 py-4 pl-5 pr-1"
      aria-label="Main Navigation">
        <div class="flex items-center justify-between w-full">
            <div class="flex items-center">
                <div class="logo flex items-center cursor-pointer">
                    <a href="/" class="relative text-lg font-bold text-white " aria-label="Home">
                        <p class="text-white bg-[#5AE986] rounded-lg px-1">Ku</p>
                    </a>
                    <p class="DMsans text-white text-lg">devology</p>
                </div>
                <ul
                class="ullist flex ml-3 flex items-center gap-1 text-white text-md font-medium bg-white/3 backdrop-blur-md rounded-xl px-1 py-1 hidden xl:flex"
                >
                    <li class="flex items-center cursor-pointer"><a href="#test" aria-label="Home" class="bg-white/10 backdrop-blur-md  hover:bg-white/20 transition ease-in-out duration-300 rounded-lg px-3 py-2">Home</a></li>
                    <li class="flex items-center cursor-pointer"><a href="#how" aria-label="About Me" class="hover:bg-white/20 px-3 py-2 rounded-lg transition ease-in-out duration-300">About Me</a></li>
                    <li class="flex items-center cursor-pointer"><a href="#programs" aria-label="Projects" class="hover:bg-white/20 px-3 py-2 rounded-lg transition ease-in-out duration-300">Projects</a></li>
                    <li class="flex items-center cursor-pointer"><a href="#support" aria-label="Resume" class="hover:bg-white/20 px-3 py-2 rounded-lg transition ease-in-out duration-300">Resume</a></li>
                    <li class="flex items-center cursor-pointer"><a href="#partners" aria-label="Contact Me" class="hover:bg-white/20 px-3 py-2 rounded-lg transition ease-in-out duration-300">Contact Me</a></li>
                    <li class="flex items-center border border-white border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-white/20 transition ease-in-out duration-300"><a href="#login" aria-label="Login / Register">Login / Register</a></li>
                </ul>
            </div>
            <div class="flex items-center gap-4 hidden xl:flex">
                <div class="relative">
                    <button @click="toggleLanguage" id="lang"
                    aria-label="Select language"
                    class="cursor-pointer flex items-center gap-2 text-white text-sm p-3 rounded-md bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl"
                    >
                    <Icon icon="fluent-mdl2:world" width="1.2em" height="1.2em"  style="color: #fff" />
                    <span class="DMsans hover:scale-105 transition ease-in-out duration-300">English</span>
                    <div v-if="isOpen" class="transition ease-in-out duration-300">
                      <Icon icon="oui:arrow-down" width="1.2em" height="1.2em"  style="color: #fff" />
                    </div>
                    <div v-else class="transition ease-in-out duration-300">
                      <Icon icon="oui:arrow-up" width="1.2em" height="1.2em"  style="color: #fff" />
                    </div>
                    </button>
                    <ul @mouseleave="isOpen = false" v-if="isOpen" class="absolute top-10 left-0 w-full bg-white/5 backdrop-blur-md rounded-2xl text-white py-2 px-3 mt-2 transition ease-in-out duration-300">
                        <li class="cursor-pointer flex items-center gap-2">
                          <Icon icon="emojione:flag-for-france" width="1.2em" height="1.2em" />
                          <span class="DMsans hover:scale-105 transition ease-in-out duration-300">French</span>
                        </li>
                        <li class="cursor-pointer flex items-center gap-2">
                          <Icon icon="emojione:flag-for-united-states" width="1.2em" height="1.2em" />
                          <span class="DMsans hover:scale-105 transition ease-in-out duration-300">English</span>
                        </li>
                        <li class="cursor-pointer flex items-center gap-2">
                          <Icon icon="emojione:flag-for-spain" width="1.2em" height="1.2em" />
                          <span class="DMsans hover:scale-105 transition ease-in-out duration-300">Spanish</span>
                        </li>
                        <li class="cursor-pointer flex items-center gap-2">
                          <Icon icon="emojione:flag-for-germany" width="1.2em" height="1.2em" />
                          <span class="DMsans hover:scale-105 transition ease-in-out duration-300">German</span>
                        </li>
                        <li class="cursor-pointer flex items-center gap-2">
                          <Icon icon="emojione:flag-for-italy" width="1.2em" height="1.2em" />
                          <span class="DMsans hover:scale-105 transition ease-in-out duration-300">Italian</span>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-1">
                <button
                    class=" buttons1 cursor-pointer border-2 flex items-center justify-center gap-1 px-2 py-2 border border-white bg-white
                     text-black rounded-xl font-semibold hover:bg-white/20 hover:text-white"
                    aria-label="View Projects"
                >
                    View Projects
                    <span class="bg-[#5AE986] rounded-lg p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    </span>
                </button>

                <button
                    class="buttons2 cursor-pointer px-4 py-2 rounded text-white text-md
                    font-semibold border border-white border-2 rounded-xl hover:bg-white hover:text-black"
                    aria-label="Contact Me"
                >
                    Contact Me
                </button>

            </div>
        </div>
    </div>
    <button
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isOpen.toString()"
        aria-controls="mobile-menu"
        class=" xl:hidden flex items-center p-2 rounded-md text-white hover:bg-white/20 cursor-pointer duration-300 transition ease-in-out"
        >
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </nav>
    <transition name="slide-down">
    <ul
      v-if="isOpen"
      id="mobile-menu"
      class="h-full relative z-[10001] DMsans xl:hidden mt-[72px] bg-[#141915]/50 backdrop-blur-lg rounded-b-xl p-5 text-white text-md font-medium flex flex-col gap-4 fixed top-0 left-0 right-0 z-30"
      role="menu"
      aria-label="Mobile Primary Links"
    >
      <li><a href="#home" role="menuitem" @click="closeMenu" class="cursor-pointer">Home</a></li>
      <li><a href="#how" role="menuitem" @click="closeMenu" class="cursor-pointer">About Me</a></li>
      <li><a href="#programs" role="menuitem" @click="closeMenu" class="cursor-pointer">Projects</a></li>
      <li><a href="#support" role="menuitem" @click="closeMenu" class="cursor-pointer">Resume</a></li>
      <li><a href="#partners" role="menuitem" @click="closeMenu" class="cursor-pointer">Contact Me</a></li>
      <li class="border border-white rounded-xl px-4 py-2 cursor-pointer w-[165px]">
        <a href="#login" role="menuitem" @click="closeMenu" class="cursor-pointer">Login / Register</a>
      </li>
      <li class="flex items-center flex-start gap-5 mt-2 ">
        <button
          class="cursor-pointer border-2 flex items-center justify-center gap-1
          px-2 py-2 border-white bg-white text-black rounded-xl font-semibold"
          aria-label="View Projects"
          @click="closeMenu"
        >
          View Projects
          <span class="bg-[#5AE986] rounded-lg p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
        <button
          class=" cursor-pointer px-4 py-2 rounded text-white text-md font-semibold border border-white rounded-xl"
          aria-label="Contact Me"
          @click="closeMenu"
        >
          Contact Me
        </button>
      </li>
    </ul>
  </transition>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import AnimatedWords from './AnimatedWords.vue';
    import { Icon } from '@iconify/vue';
    const isOpen = ref(false)

    const isScrolled = ref(false)
    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }
    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          isScrolled.value = true
          isOpen.value = false
        } else {
          isScrolled.value = false
        }
      })
  gsap.fromTo(
    ".ullist",
    {
      opacity: 0,
      x: "-100%",
    },
    {
      opacity: 1,
      x: "0%",
      duration: 1.2,
      delay: 1,
      ease: "power3.out",
    }
  );

  gsap.fromTo(
    ".logo",
    {
      opacity: 0,
      x: "-100%",
    },
    {
      opacity: 1,
      x: "0%",
      duration: 1.2,
      delay: 2,
      ease: "power3.out",
    }
  );
  gsap.fromTo(
  ".buttons1",
  {
    opacity: 0,
    scale: "0",
  },
  {
    opacity: 1,
    scale: "1.0",
    duration: 1.2,
    delay: 1.3,
    ease: "power3.out",
  }
);
gsap.fromTo(
  ".buttons2",
  {
    opacity: 0,
    scale: "0",
  },
  {
    opacity: 1,
    scale: "1.0",
    duration: 1.2,
    delay: 1.4,
    ease: "power3.out",
  }
);
gsap.fromTo(
  "#lang",
  {
    opacity: 0,
    scale: "0",
  },
  {
    opacity: 1,
    scale: "1.0",
    duration: 1.2,
    delay: 1.2,
    ease: "power3.out",
  }
);
});

const toggleLanguage = () => {
  isOpen.value = !isOpen.value
}
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  .DMsans {
    font-family: "DM Sans", sans-serif;
  }

  /* Animation slide down simple */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 100%;
  opacity: 1;
  overflow: hidden;
}
  </style>
  