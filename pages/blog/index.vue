<script setup>
definePageMeta({
  layout: 'blog'
})
</script>

<template>
  <NuxtLink to="/" class="text-xs underline mb-12">
    Return to Home
  </NuxtLink>
  <h1 class="text-2xl font-semibold">Blog index</h1>
  <ContentList path="/es/blog" v-slot="{ list }">
    <ul v-for="(article, index) in list" :key="article._path">
      <NuxtLink :to="`/blog/${article.slug}`" class="underline">
        <li class="list-none">{{index}} - {{ article.title }}</li>
      </NuxtLink>
    </ul>
  </ContentList>
</template>