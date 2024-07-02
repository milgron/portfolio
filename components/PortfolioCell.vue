<script setup>
defineProps({
  flip: {
    type: Boolean,
    default: false
  },
  section: {
    type: String,
    default: null
  }
})
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8" :id="section">
    <div
      :class="flip ? 'lg:order-1' : 'lg:order-2'"
      class="grid gap-4"
    >
      <div class="flex flex-col gap-4">
        <h2 class="ff-imbue text-6xl">{{ section }}</h2>
        <ContentDoc
          :path="`/en/${section}`"
          class="text-sm leading-7"
        />
      </div>
    </div>
    <div
      :class="flip ? 'lg:order-2' : 'lg:order-1'"
      class="border border-gray-500 rounded bg-white h-96"
    >
      {{ section }}
    </div>
  </section>
</template>