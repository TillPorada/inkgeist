import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import UserList from '@/components/UserLIst.vue'; // Beispiel für die User List

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        next();
      } else {
        next('/login'); // Redirect to login if no token found
      }
    },
  },
  {
    path: '/userList',
    name: 'userList',
    component: UserList,
  },
  {
    path: '/',
    redirect: '/login', // Standardroute, die beim Start auf den Login-View führt
  },
  // Weitere Routen hier...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
