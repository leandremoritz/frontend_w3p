import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import swal from 'sweetalert';

createApp(App).use(store).use(swal).use(router).mount('#app')
