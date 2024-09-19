import './assets/Tailwind.css'
import TodoList from './components/TodoList.vue'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)
library.add(fas)
import { createApp } from 'vue'
const app = createApp(App)
app.component('TodoList', TodoList)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
// تعریف دستور سفارشی

app.mount('#app')
