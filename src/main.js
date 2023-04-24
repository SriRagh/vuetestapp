import { createApp } from 'vue'
import { createPinia } from 'pinia'
console.log(__APP_VERSION__, import.meta.env )
import App from './App.vue'
import router from './router'
console.log("sri", )
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
