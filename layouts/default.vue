
import ReachMeHeader from '~/components/ReachMeHeader.vue';
<template>
    <section class="bg-gray-50 py-8 lg:py-12 relative">
      <section class="bg-gray-50 w-full lg:w-11/12 mx-auto z-0">
        <section>
          <ReachMeHeader />
          <slot />
        </section>
      </section>
    </section>
</template>