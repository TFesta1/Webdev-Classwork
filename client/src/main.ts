import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import 'bulma/css/bulma.css' // Can now modify bulma.css

// Can now modify main.css
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app') 
