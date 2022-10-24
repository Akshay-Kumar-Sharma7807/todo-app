import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    /* other options */
    /* enable sw on development */
    devOptions: {
      enabled: true
      /* other options */
    }
  })]
})
