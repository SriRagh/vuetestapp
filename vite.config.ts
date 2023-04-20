import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
const env = loadEnv(mode, process.cwd(), "")
console.log("sri", env)
  // plugins: [vue(), vueJsx()]
  // envDir: 'src'
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }

  return {}
})
// export default defineConfig(({ command, mode, ssrBuild }) => {
//   if (command === 'serve') {
//     return {
//       // dev specific config
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//     }
//   }
// })
