// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  googleFonts: {
    families: {
      'Imbue': [200, 300, 500],
      'Inter': [400,600]
    },
    preload: true
  },
  css: [
    '~/assets/main.scss'
  ]
})