<script setup>
useHead({
  title: 'tomás milgron',
  script: {
    'src': "https://plausible.io/js/script.js",
    'defer': true,
    'data-domain': "tomas.mate.computer"
  }
})

useSeoMeta({
  title: 'tomás milgron',
  ogTitle: 'tomás milgron',
  description: 'Welcome to tomas.mate.computer',
  ogDescription: 'Welcome to tomas.mate.computer',
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
