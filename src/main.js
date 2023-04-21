import { createApp } from 'vue'
import { createPinia } from 'pinia'
console.log(import.meta, "1", import.meta.env)
import App from './App.vue'
import router from './router'
const key = "VITE_TEST"
import.meta.env[key]
console.log("env filekey", import.meta.env[key])
console.log(__APP_VERSION__, "process.env var", __APP_VER__);
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
