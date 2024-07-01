<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-12">
    <PortfolioCell />
    <PortfolioCell class="lg:translate-y-12" :flip="true"/>
    <PortfolioCell />
    <PortfolioCell class="lg:translate-y-12" :flip="true"/>
  </section>
</template>