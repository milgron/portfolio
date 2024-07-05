<template>
  <section class="py-12 flex lg:justify-center lg:items-center flex-col px-8 lg:px-12 mx-auto lg:text-center gap-2 max-w-6xl">
    <div class="relative flex w-fit">
      <h2 class="ff-imbue text-7xl">
        Thanks
      </h2>
      <NuxtImg
        src="/exclamation.png"
        alt="exclamation mark"
        class="absolute -right-6 -top-4 lg:top-1 -bottom-2 lg:bottom-2 my-auto h-full"
        preload
        loading="lazy"
      />
    </div>
    <p>
      You can see
      <a href="https://github.com/milgron/portfolio" class="text-blue-700"> the source code of this project here</a>, and you can reach me at <a href="mailto:tomas@mate.computer" class="text-blue-700"> tomas@mate.computer</a>.
    </p>
  </section>
</template>