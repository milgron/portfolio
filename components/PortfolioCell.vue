<script setup>
defineProps({
  flip: {
    type: Boolean,
    default: false
  },
  section: {
    type: String,
    default: null
  },
  mediaType: {
    type: [String, Boolean],
    default: null
  },
})
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8" :id="section">
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
      v-if="mediaType"
      :class="flip ? 'lg:order-2' : 'lg:order-1'"
      class="bg-gray-50 flex items-center justify-center"
    >
      <video v-if="mediaType == 'video'" src="/uiux.mp4" preload autoplay muted loop class="" />
    </div>
  </section>
</template>

<style>
video {
  width: 580px;
    height: 340px;
    object-fit: cover;
}
</style>