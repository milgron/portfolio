<script setup>
defineProps({
  flip: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="border border-gray-500 rounded bg-white h-full order-2 lg:order-1">
      {{ flip }}
    </div>
    <div class="grid gap-4 order-1 lg:order-2">
      <div
        :class="flip ? 'lg:order-2' : 'lg:order-1'"
        class="flex flex-col gap-4"
      >
        <h2 class="ff-imbue text-6xl">product conception</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere veritatis ad repellat fuga ullam necessitatibus obcaecati quae at? Ex quasi rerum cupiditate mollitia porro. Illum, facilis praesentium? Quod, soluta?</p>
      </div>
      <div 
        :class="flip ? 'lg:order-1' : 'lg:order-2'"
        class="border border-gray-500 h-48"
      ></div>
    </div>
  </section>
</template>