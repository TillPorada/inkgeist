import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // MDI CSS importieren
import '@/assets/styles/_global.scss';  // Importiere die globalen Styles

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // MDI als Standard
  },
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
