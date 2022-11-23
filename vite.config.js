import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TechAndBeer',
        short_name: 'TechAndBeer',
        description: 'TechAndBeer',
        theme_color: '#f5f5f5',
        icons: [
          {
            "src": "logo192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "logo512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
