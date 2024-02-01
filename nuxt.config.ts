// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL:'/penida/'
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'G-VZVTYW25R3'
    }]
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  plugins: [
    {
      src: "~/plugins/main.js"
    }
  ],

})
