import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; // Importiere Login View
import Dashboard from '../views/Dashboard.vue'; // Importiere Dashboard View
import RegisterView from '../views/Register.vue';  // Importiere die RegisterView
import Profile from '../views/Profile.vue'; // Importiere die Profil-Seite
import Settings from '../views/Settings.vue'; // Importiere die Einstellungs-Seite
import Chat from '../views/Chat.vue'; // Importiere die Chat-Seite
import Graphics from '../views/Grafik.vue'; // Importiere die Grafik-Seite
import Audio from '../views/Audio.vue'; // Importiere die Audio-Seite
import Translator from '../views/Translator.vue'; // Importiere die Übersetzer-Seite
import Converter from '../views/Converter.vue'; // Importiere die Konvertieren-Seite

const requireAuth = (to: any, from: any, next: any) => {
  if (!localStorage.getItem('authToken')) {
    next({ name: 'login' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,  // Login View
  },
  {
    path: '/register',  // Route für Registration
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,  // Dashboard View
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/profile',  // Neue Route für Profil
    name: 'profile',
    component: Profile,  // Profil View
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/settings',  // Neue Route für Einstellungen
    name: 'settings',
    component: Settings,  // Settings View
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/chat',  // Neue Route für Chat
    name: 'chat',
    component: Chat,
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/graphics',  // Neue Route für Grafik
    name: 'graphics',
    component: Graphics,
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/audio',  // Neue Route für Audio
    name: 'audio',
    component: Audio,
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/translator',  // Neue Route für Übersetzer
    name: 'translator',
    component: Translator,
    beforeEnter: requireAuth,  // Schütze die Route
  },
  {
    path: '/converter',  // Neue Route für Konvertieren
    name: 'converter',
    component: Converter,
    beforeEnter: requireAuth,  // Schütze die Route
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
