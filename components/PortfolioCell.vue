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
  }
})
</script>

<template>
  <section
    class="grid gap-8 pt-8 grid-cols-1 lg:grid-cols-2" :id="section"
  >
    <div
      :class="flip ? 'lg:order-1' : 'lg:order-2'"
      class="grid gap-4 px-8"
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
      class="bg-gray-50 flex overflow-hidden h-[450px] md:h-[600px] lg:h-[450px]"
    >
      <video 
        v-if="mediaType == 'video'" 
        :src="`/${section}.mp4`" 
        preload 
        autoplay 
        muted 
        loop 
        class="border border-red-500"
        :class="`video-${section}`" 
      />
    </div>
  </section>
</template>

<style>   
.video-ui-ux {
  transform: scale(1.54);
}
.video-front-end {
  transform: scale(1.7);
  border: 1px solid blue;
}
</style>