import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/styles/main.css',
    'vuetify/lib/styles/main.sass',
    'vuetify/lib/styles/main.css',
    '@mdi/font/css/materialdesignicons.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  app: {
    head:{
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  compatibilityDate: '2025-03-04'
})
