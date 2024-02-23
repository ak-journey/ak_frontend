// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css",
        },      
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/4f53dfc02f.js",
          crossorigin: "anonymous",
        }
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
})
