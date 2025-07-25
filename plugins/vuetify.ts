// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'customTheme',
      options: {
        customProperties: true
      },
      themes: {
        customTheme: {
          colors: {
            background: '#FFFFFF',
            primary: '#FFFCF5',
            text: '#3A3D51',
            secondary: '#3A3D51',
            black: '#000000',
            error: '#992525'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})