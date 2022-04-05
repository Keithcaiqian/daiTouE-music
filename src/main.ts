import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "@/router/index";
import './assets/reset.css'
import './assets/global.less'

import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
