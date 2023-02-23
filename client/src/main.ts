import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Can now modify main.css
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app') 
