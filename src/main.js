import { createApp } from 'vue'
import { createPinia } from 'pinia'
console.log( import.meta.env )
import App from './App.vue'
import router from './router'
import env from './env';
import './assets/main.css'
console.log("env",env, import.meta.env);
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
