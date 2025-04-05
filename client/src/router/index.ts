import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; // Importiere Login View
import Dashboard from '../views/Dashboard.vue'; // Importiere Dashboard View

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,  // Login View
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,  // Dashboard View
  },
  {
    path: '/',
    redirect: '/login',  // Standardroute auf Login
  },
];

const router = createRouter({
  history: createWebHistory(), // Verwendet HTML5 History Mode
  routes,
});

export default router;
