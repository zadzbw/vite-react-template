import * as path from 'node:path'
import reactSWC from '@vitejs/plugin-react-swc'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [reactSWC(), splitVendorChunkPlugin()],
  define: {
    __DEV__: isDev,
  },
})
