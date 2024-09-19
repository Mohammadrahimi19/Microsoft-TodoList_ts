import { createApp } from 'vue'
const app = createApp(App)
import './assets/Tailwind.css'

import App from './App.vue'
import router from './router'


app.component('TodoList', TodoList)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
// تعریف دستور سفارشی

app.mount('#app')
