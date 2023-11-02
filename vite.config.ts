import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/E-Commerce-product-page-main/',
  plugins: [react()],
})
