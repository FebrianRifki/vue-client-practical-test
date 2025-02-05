import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS Global di sini
import './assets/css/adminlte.min.css';
import './assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import './assets/plugins/fontawesome-free/css/all.min.css';


createApp(App).use(router).mount('#app')
