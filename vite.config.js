// import { fileURLToPath, URL } from 'url'
// import dotenv from 'dotenv';
// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// // https://vitejs.dev/config/
// dotenv.config({
//   path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
// });

// export default defineConfig({
//   plugins: [vue(), 
//     vueJsx(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

import { defineConfig } from 'vite';

export default defineConfig({
  //   plugins: [vue(), 
  //   vueJsx(),
  // ],
  build: {
    target: 'es2020',
    brotliSize: false,
  },
});
