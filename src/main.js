import Notifications from '@kyvg/vue3-notification'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'

createApp(App)
.use(router)
.use(Notifications)
.component(VueFeather.name, VueFeather)
.mount('#app')