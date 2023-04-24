import { fileURLToPath, URL } from 'node:url'
import envCompatible from 'vite-plugin-env-compatible'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {env} from './src/env'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    vueJsx(),
  envCompatible({
    vars:env
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// import { defineConfig, loadEnv } from 'vite';
// import vue from '@vitejs/plugin-vue';


// export default ({ mode }) => {
//   console.log(mode)
 
//   const env = loadEnv("mode", process.cwd(), "");
//   const processEnvValues = {
//     "process.env": Object.entries(env).reduce((prev, [key, val]) => {
//       console.log(key, val);
//       return {
//         ...prev,
//         [key]: val,
//       };
//     }, {}),
//   };
//     return defineConfig({
//           define: {

//       __APP_VERSION__: processEnvValues,
      
//    },
//       // define: processEnvValues,
//         plugins: [vue()],
//           resolve: {
//     alias : {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
//     });
  
// }