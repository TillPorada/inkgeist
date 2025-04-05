<template>
    <v-app :dark="darkMode">
      <!-- Navbar -->
      <Navbar :dark="darkMode" @toggle-darkmode="toggleDarkMode">
        <!-- Button für die Sidebar-Darstellung (Ein-/Ausklappen) -->
        <v-btn @click="toggleSidebarState" class="sidebar-toggle-btn" icon>
          <v-icon>mdi-menu</v-icon> <!-- Burgermenü Icon -->
        </v-btn>
  
        <!-- Avatar für den User (oben rechts neben Darkmode Toggle) -->
        <v-avatar size="40" @click="toggleMenu" class="avatar">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
        </v-avatar>
      </Navbar>
  
      <!-- Sidebar -->
      <Sidebar></Sidebar>
  
      <v-main>
        <!-- Router-View, um Seiten-Inhalte zu laden -->
        <router-view />
      </v-main>
    </v-app>
  </template>
  
  <script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import Sidebar from '@/components/Sidebar.vue';
  import { useAppStore } from "@/store/appStore";  // Store importieren
  import { useRouter } from "vue-router";

  const { isSidebarOpen, toggleSidebar } = useAppStore();
  
  const darkMode = ref(localStorage.getItem('darkMode') === 'true');
  const sidebarOpen = ref(true); // Zustand für Sidebar öffnen/schließen
  const menu = ref(false); // Zustand für Avatar Dropdown-Menü
  const router = useRouter();
  
  // Darkmode umschalten
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem('darkMode', darkMode.value.toString());
  };
  
  // WatchEffect, um den Darkmode in localStorage zu beobachten
  watchEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode.value);
  });
  
  // Sidebar ein-/ausklappen
  const toggleSidebarState = () => {
    toggleSidebar();
  };
  
  // Avatar-Menü umschalten
  const toggleMenu = () => {
    menu.value = !menu.value;
  };
  </script>
  
  <style scoped lang="scss">
  .sidebar-toggle-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
  }
  
  /* Avatar-Button oben rechts */
  .avatar {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  /* Optional: Weitere Styles für Navbar und Sidebar */
  </style>
  