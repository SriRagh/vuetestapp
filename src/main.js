import { createApp } from 'vue'
import { createPinia } from 'pinia'
console.log( import.meta.env )
import App from './App.vue'
import router from './router'
console.log("sri",process )
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
