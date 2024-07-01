<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-12">
    <PortfolioCell section="product-conception" />
    <PortfolioCell section="ui-ux" class="lg:translate-y-12" :flip="true"/>
    <PortfolioCell section="front-end" />
    <PortfolioCell section="bonus" class="lg:translate-y-12" :flip="true"/>
  </section>
</template>