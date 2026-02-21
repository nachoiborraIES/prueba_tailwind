import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/prueba_tailwind/', 
  plugins: [
    tailwindcss(),
  ],
})