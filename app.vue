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
