import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
console.log(__APP_VERSION__,"console" )
console.log(import.meta.env.VITE_TEST,"console2")
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
