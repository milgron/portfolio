<script setup>
import { AUTHORS } from '@/constants/authors.js'
definePageMeta({
  layout: 'blog'
})

const route = useRoute()

const { title, author } = await queryContent('es', 'blog').where({ slug: route.params.slug}).findOne()
</script>

<template>
  <NuxtLink to="/blog" class="text-xs underline mb-12">
    Return to Blog index
  </NuxtLink>
  <h1 class="mb-0">{{ title }}</h1>
  <p class="mb-12">{{ AUTHORS[author].name }}</p>
  <NuxtImg
    :src="`/blog/${$route.params.slug}/main.jpg`"
    alt="underline sketch"
    class="w-full rounded  mb-8"
    preload
  />
  <ContentDoc
    :path="`/es/blog/${$route.params.slug}`"
    :head="false"
  />
</template>

<style>
h1 { 
  @apply text-4xl mb-12 font-semibold;
}
</style>