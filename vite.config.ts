import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['cbc7-2804-7f0-9602-1553-d436-3a14-5cd-20a7.ngrok-free.app']
  }
})