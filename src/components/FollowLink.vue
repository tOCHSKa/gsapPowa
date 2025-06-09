<template>
    <div class="hidden lg:flex items-center gap-2 absolute md:bottom-5 md:left-1/10 lg:left-[4rem] transform -translate-x-1/2 z-[9999] follow-link">
      <p class="text-white DMSans font-bold cursor-default">Follow Me</p>
      <ul class="flex items-center gap-2">
        <li class="cursor-pointer hover:scale-110 transition ease-in-out duration-300">
            <a href="https://discord.gg/ZcSvkPFB3a" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <Icon icon="ant-design:discord-filled" width="1.2em" height="1.2em" style="color: #fff" />
            </a>
        </li>
        <li class="cursor-pointer hover:scale-110 transition ease-in-out duration-300">
            <a href="https://github.com/TOCHSka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon icon="ant-design:github-filled" width="1.2em" height="1.2em" style="color: #fff" />
            </a>
        </li>
        <li class="cursor-pointer hover:scale-110 transition ease-in-out duration-300">
            <a href="https://www.linkedin.com/in/kevin-ubeda-400045292/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon icon="ant-design:linkedin-filled" width="1.2em" height="1.2em" style="color: #fff" />
            </a>
        </li>
      </ul>
    </div>
  </template>
  

<script setup>
import { Icon } from '@iconify/vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
onMounted(() => {
    gsap.fromTo(
      ".follow-link",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        delay: 1,
        ease: "power3.out",
      }
    );
  });
</script>

<style scoped>
.DMSans {
    font-family: "DM Sans", sans-serif;
}
</style>