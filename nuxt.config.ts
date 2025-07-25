import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head:{
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  },

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
    ['@nuxtjs/google-fonts', {
      families: {
        //'Dancing Script': true,
        'Caveat': true,
        'Philosopher': true,
        //'Satisfy': true,
        'Courgette': true,
        download: true,
        inject: true
      }
    }]

  ],
  

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2025-03-04'
})
