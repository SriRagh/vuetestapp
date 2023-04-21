import { createApp } from 'vue'
import { createPinia } from 'pinia'
console.log(import.meta, "1", import.meta.env.__APP_ENV__, import.meta.__APP_ENV__)
import App from './App.vue'
import router from './router'
console.log("sri", __APP_VERSION__)
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
