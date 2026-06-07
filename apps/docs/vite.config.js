import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const uiRoot = resolve(__dirname, '../../packages/ui')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@ui/lib': resolve(uiRoot, 'src/index.js'),
    },
  },
  server: {
    /** Varil uygulaması (`frontend`) varsayılan 5173 kullanır; kütüphane dokümantasyonu 5175. */
    port: 5175,
    fs: {
      allow: [uiRoot, __dirname],
    },
  },
})
