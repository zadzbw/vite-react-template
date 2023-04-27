import * as path from 'node:path'
import { defineConfig } from 'vite'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __DEV__: isDev,
  },
})
