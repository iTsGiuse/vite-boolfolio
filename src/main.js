import { createApp } from 'vue'
import './style.css'
import * as bootstrap from 'bootstrap';
import App from './App.vue'
import { router } from './router';

createApp(App).use(router).mount('#app')
