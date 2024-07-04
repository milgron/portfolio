<script setup>
useHead({
  title: 'tomas.mate.computer'
})

useSeoMeta
({
  title: 'tomas.mate.computer',
  ogTitle: 'tomas.mate.computer',
  description: 'Welcome to my portfolio site :)',
  ogDescription: 'Welcome to my portfolio site :)',
  ogImage: 'https://tomas.mate.computer/hero_cell.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
