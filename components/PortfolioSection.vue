<template>
  <section class="grid grid-cols-1 gap-4 lg:px-12 max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <PortfolioCell section="manifesto" media-type="just-text" />
      <PortfolioCell section="product" media-type="just-text" />
    </div>
    <PortfolioCell section="front-end" media-type="video" />
    <PortfolioCell section="ui-ux" media-type="video" :flip="true" />
  </section>
</template>