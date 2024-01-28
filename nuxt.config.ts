// https://nuxt.com/docs/api/configuration/nuxt-config
import { GlobalSettings } from "./environmentsettings"
const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
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
  ]

})
