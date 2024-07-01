<template>
  <section class="reachme flex lg:justify-center text-xs py-3 px-8">
    <span>Reach me at
      <a href="mailto:tomas@mate.computer" class="text-blue-500">
        tomas@mate.computer
      </a>
    </span>
  </section>
</template>

<style>
@keyframes reachme {
  from { 
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.reachme {
  opacity: 0;
  animation: reachme 2s ease-in-out forwards;
  animation-delay: 1.75s;
}
</style>