// src/plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  ssr: true,
  theme: {
    defaultTheme: 'light', // Standardmäßig Lightmode
    themes: {
      light: {
        colors: {
          background: '#ffffff',
          surface: '#ffffff',
          primary: '#6200ea', // Deine Hauptfarbe
          secondary: '#03dac6', // Deine Sekundärfarbe
        },
      },
      dark: {
        colors: {
          background: '#121212',
          surface: '#121212',
          primary: '#bb86fc', // Deine Hauptfarbe im Darkmode
          secondary: '#03dac6', // Deine Sekundärfarbe im Darkmode
        },
      },
    },
  },
})
