import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import "./assets/css/tailwind.css"

const app = createApp(App)

app.use(store).mount('#app')
