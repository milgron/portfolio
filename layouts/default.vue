
import ReachMeHeader from '~/components/ReachMeHeader.vue';
<template>
    <section class="bg-white py-4 lg:py-0 relative">
      <section class="bg-white w-full lg:w-11/12 mx-auto z-0">
        <section>
          <ReachMeHeader />
          <slot />
        </section>
      </section>
    </section>
</template>