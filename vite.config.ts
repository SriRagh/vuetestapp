import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//     envDir: 'src',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
export default defineConfig(({ command, mode, ssrBuild }) => {

    if (command === 'serve') {
      const env = loadEnv(mode, process.cwd(), "")
// console.log("sri if", mode, command, ssrBuild, env, process.env.VITE_TEST)
      return {
        plugins: [vue(), vueJsx()],
        envDir: 'src',
        define: {

          __APP_VERSION__: JSON.stringify(process.env),
          
       },
        resolve: {
              alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
              }
            }
        // dev specific config
      }
    } else {
      const env = loadEnv(mode, process.cwd(), "")
      console.log("sri else", mode, command, ssrBuild, env)
      // command === 'build'
      return {
        plugins: [vue(), vueJsx()],
        envDir: 'src',
        define: {

          __APP_VERSION__: JSON.stringify(process.env),
          
       },
        resolve: {
              alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
              }
            }
        // dev specific config
        // build specific config
      }
    }
  })