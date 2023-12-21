import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UI from './UI/index'
import { createPinia } from 'pinia'

const app = createApp(App)

UI.forEach((component) => app.component(component.__name, component))
  app
    .use(createPinia())
      .mount('#app')
