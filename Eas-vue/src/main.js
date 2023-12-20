import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import TheWelcome from './components/TheWelcome.vue';
import CekStatus from './AuthPage/CekStatus.vue';

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TheWelcome },
    { path: '/CekStatus', component: CekStatus },
    // Add more routes as needed
  ],
});

// Create the Vue app instance and use the router
const app = createApp(App);
app.use(router);

// Mount the app to the DOM
app.mount('#app');

