import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'

import '@/assets/base.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(createPinia())

app.mount('#app')

console.log(app, 'app')
