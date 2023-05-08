import { createApp } from 'vue';
import 'normalize.css';
import App from './App.vue';
import router from './router/index';
import pinia from './store/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { registerIcons } from './global/register-icon';
createApp(App).use(registerIcons).use(router).use(pinia).use(ElementPlus).mount('#app');
