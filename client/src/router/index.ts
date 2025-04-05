import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        next();
      } else {
        next('/login');
      }
    },
  },
  // Weitere Routen hier...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
