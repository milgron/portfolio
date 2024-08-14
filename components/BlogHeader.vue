<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
<section class="flex justify-center flex-col items-center gap-4">
  <NuxtImg src="/profile.jpg" alt="A person in the beach, dressed as death, seeing to his/her right, under a red umbrella." class="w-48 rounded-full" preload />
<h1 class="text-2xl font-semibold mb-0 text-center">{{title}}</h1>
</section>
</template>