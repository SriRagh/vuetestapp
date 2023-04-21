
import { fileURLToPath, URL } from 'node:url'

import dotenv from 'dotenv';

dotenv.config();
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
    envDir: 'src',
    define: {

      __APP_VERSION__: JSON.stringify(process.env),
      
   },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    define: {
      __APP_VER__: JSON.stringify(process.env),
      // add more variables as needed
    },
  },
})