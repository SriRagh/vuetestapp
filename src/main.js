import { createApp } from 'vue'
import { createPinia } from 'pinia'
console.log(import.meta, "1", import.meta.env)
import App from './App.vue'
import router from './router'
console.log("sri", __APP_VERSION__);
console.log(process.env.VARIABLE_NAME, "process.env var");
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
