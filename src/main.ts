import './assets/style.css'
import { createVfm } from 'vue-final-modal';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import VueElementLoading from 'vue-element-loading';
import 'element-plus/dist/index.css'
import 'vue-final-modal/style.css';

import App from './App.vue'
import router from './router'
const vfm = createVfm();

const app = createApp(App)

app.component('VueElementLoading', VueElementLoading);
app.use(vfm);

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
