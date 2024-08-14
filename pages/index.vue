<script setup>
definePageMeta({
  layout: 'blog'
})
</script>

<template>
  <NuxtLink to="/work" class="text-xs underline mb-12 text-center">
    work
  </NuxtLink>
  <section class="flex flex-col justify-center gap-8">
    <BlogHeader title="Blog index"/>
  <ContentList path="/es/blog" v-slot="{ list }">
    <ul v-for="(article, index) in list" :key="article._path">
      <NuxtLink :to="`/blog/${article.slug}`" class="underline">
        <li class="list-none">{{index}} - {{ article.title }}</li>
      </NuxtLink>
    </ul>
  </ContentList>
  </section>
</template>