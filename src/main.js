import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import './main.css';
import router from './router';
import 'animate.css';

const pinia = createPinia();
const head = createHead();

createApp(App).use(router).use(pinia).use(head).mount('#app');
