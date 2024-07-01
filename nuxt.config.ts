// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  googleFonts: {
    families: {
      'Imbue': [200, 300, 500],
      'Inter': [400,600]
    }
  },
  css: [
    '~/assets/main.scss'
  ]
})