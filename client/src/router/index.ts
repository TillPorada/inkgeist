import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue'; // Du musst dieses Layout erstellen
import Login from '@/views/Login.vue';
import RegisterView from '@/views/Register.vue';

import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import Settings from '@/views/Settings.vue';
import Chat from '@/views/Chat.vue';
import Graphics from '@/views/Grafik.vue';
import Audio from '@/views/Audio.vue';
import Translator from '@/views/Translator.vue';
import Converter from '@/views/Converter.vue';

const requireAuth = (to: any, from: any, next: any) => {
  if (!localStorage.getItem('authToken')) {
    next({ name: 'login' });
  } else {
    next();
  }
};

const routes = [
  // Seiten ohne Layout (z.B. Login & Register)
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },

  // Layout mit geschützten Seiten
  {
    path: '/',
    component: DefaultLayout,
    beforeEnter: requireAuth,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings,
      },
      {
        path: 'chat',
        name: 'chat',
        component: Chat,
      },
      {
        path: 'graphics',
        name: 'graphics',
        component: Graphics,
      },
      {
        path: 'audio',
        name: 'audio',
        component: Audio,
      },
      {
        path: 'translator',
        name: 'translator',
        component: Translator,
      },
      {
        path: 'converter',
        name: 'converter',
        component: Converter,
      },
      {
        path: '',
        redirect: '/dashboard',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
