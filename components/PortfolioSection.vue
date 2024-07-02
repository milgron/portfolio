<template>
  <section class="grid grid-cols-1 gap-12 px-8 lg:px-12">
    <PortfolioCell section="manifesto" :flip="true"/>
    <PortfolioCell section="ui-ux"/>
    <PortfolioCell section="front-end" :flip="true" />
    <PortfolioCell section="product-conception" />
  </section>
</template>