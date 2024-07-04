<template>
  <section class="grid grid-cols-1 gap-12 px-8 lg:px-12 max-w-6xl mx-auto">
    <div class="grid grid-cols-2">
      <PortfolioCell section="manifesto" media-type="just-text" />
      <PortfolioCell section="product-conception" media-type="just-text" />
    </div>
    <PortfolioCell section="ui-ux" media-type="video" />
    <PortfolioCell section="front-end" media-type="video" :flip="true" />
  </section>
</template>