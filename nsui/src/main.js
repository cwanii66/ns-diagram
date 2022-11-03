import { createApp } from 'vue'
import App from './App.vue'
import routes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(router)
app.mount('#app')
