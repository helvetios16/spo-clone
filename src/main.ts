import '@/assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { PrimeVue } from '@primevue/core';
import Lara from '@primeuix/themes/lara';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
});

app.mount('#app');
