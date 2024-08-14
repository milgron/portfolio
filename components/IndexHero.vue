<template>
  <section class="hero lg:h-screen flex lg:justify-center lg:items-center lg:text-center flex-col relative px-8 lg:px-0 py-48 lg:py-0">
    <div class="relative">
      <h1 class="font-extralight z-10 ff-imbue text-6xl lg:text-8xl relative">
        Almost a decade <br />
        <span class="font-light relative ff-imbue">
          crafting experiences.
          <NuxtImg
            src="/underline.png"
            alt="underline sketch"
            class="absolute bottom-0 mx-auto"
            preload
          />
        </span>
      </h1>
      <NuxtImg
        src="/hero_cell.png"
        alt="abstract cell sketch"
        class="absolute left-0 lg:left-0 lg:right-0 lg:mx-auto -top-24 w-48 z-0"
        preload
      />
      <NuxtImg
        src="/hero_gif.gif"
        alt="abstract sketches gif"
        class="absolute w-96 -top-48 -left-24 lg:-left-12 z-0"
        preload
      />
    </div>
    <h2 class="mt-8">
      From <a href="#product" class="underline">product conception,</a><br>
      to <a href="#ui-ux" class="underline">UI/UX design</a>, and <a href="#front-end" class="underline">front-end.</a> <br>
      <span class="font-bold">A designer who codes. <NuxtLink to="/" class="text-blue-400">And blogs.</NuxtLink></span> 
    </h2>
  </section>
</template>

<style>
@keyframes heroOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hero {
  from {
    translate: scale(120%);
    filter: blur(4px);
  }
  to {
    translate: scale(100%);
    filter: blur(0);
  }
}

.hero {
  opacity: 0;
  translate: scale(120%);
  filter: blur(4px);
  animation-name: hero, heroOpacity;
  animation-duration: 2s, 1s;
  animation-delay: 0s, 500ms;
  transition-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>