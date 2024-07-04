<template>
  <section class="grid grid-cols-1 gap-12 px-8 lg:px-12">
    <PortfolioCell section="manifesto" />
    <PortfolioCell section="ui-ux" media-type="video" />
    <PortfolioCell section="front-end" media-type="video" :flip="true" />
    <PortfolioCell section="product-conception" />
  </section>
</template>