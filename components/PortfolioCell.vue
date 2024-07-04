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
    :class="mediaType == 'just-text' ? 'lg:grid-cols-1' : 'lg:grid-cols-2'"
    class="grid pt-6 grid-cols-1" 
    :id="section"
  >
    <div
      :class="flip ? 'lg:order-1' : 'lg:order-2'"
      class="grid gap-4 px-8"
    >
      <div class="flex flex-col gap-4">
        <div class="relative w-fit">
          <h2 class="ff-imbue text-6xl z-10 relative">{{ section }}</h2>
          <NuxtImg
            :src="`/bg-${section}.png`"
            :alt="`Background image for ${section}`"
            class="absolute top-0 z-0 bottom-0 my-auto left-0 right-0 w-full"
            preload
            loading="lazy"
          />
        </div>
        <ContentDoc
          :path="`/en/${section}`"
          :head="false"
          class="text-sm leading-7"
        />
      </div>
    </div>
    <div
      v-if="mediaType == 'video'"
      :class="flip ? 'lg:order-2' : 'lg:order-1'"
      class="bg-white flex overflow-hidden h-[450px] md:h-[600px] lg:h-[450px] p-4 justify-center lg:justify-start"
    >
      <video 
        v-if="mediaType == 'video'" 
        :src="`/${section}-bgwhite.mp4`" 
        preload 
        autoplay 
        muted 
        loop
      />
    </div>
  </section>
</template>
