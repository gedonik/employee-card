import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue';
import App from './App.vue';
import components from './components/ui';
import '@/styles/index.scss';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
