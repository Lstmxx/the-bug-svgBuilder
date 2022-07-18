import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './config/svgBuilder'

export default defineConfig({
  base: './',
  plugins: [
    vue({
      reactivityTransform: true
    }),
    svgBuilder('./src/svg/')
  ]
})
