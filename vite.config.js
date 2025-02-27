import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Cette ligne permet de résoudre le problème d'importation de CSS de slick-carousel
        additionalData: `@import "~slick-carousel/slick/slick.css"; @import "~slick-carousel/slick/slick-theme.css";`,
      },
    },
  },
})
