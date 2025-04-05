<template>
    <v-app-bar app color="primary" dark :class="{ 'dark-theme': dark }">
      <!-- Button zum Ein- und Ausklappen der Sidebar -->
      <v-btn @click="toggleSidebar" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
  
      <v-toolbar-title>Mein Dashboard</v-toolbar-title>
      <v-spacer />
  
      <!-- Darkmode-Toggle -->
      <v-btn @click="toggleDarkMode" color="white">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
  
      <!-- Avatar für den User -->
      <v-avatar size="40" class="avatar" @click="toggleMenu">
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-avatar>
  
      <!-- Dropdown-Menü für Avatar -->
      <v-menu v-model="menu" offset-y :nudge-width="40">
        <v-list>
          <v-list-item @click="goToProfile">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToSettings">
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useAppStore } from "@/store/appStore"; // Store importieren
  
  const menu = ref(false); // Dropdown für Avatar
  const router = useRouter();
  
  const { toggleSidebar, toggleDarkMode, darkMode } = useAppStore(); // Store-Methoden verwenden
  
  // Avatar-Menü umschalten
  const toggleMenu = () => {
    menu.value = !menu.value;
  };
  
  const goToProfile = () => {
    router.push("/profile");
  };
  
  const goToSettings = () => {
    router.push("/settings");
  };
  
  const logout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };
  </script>
  
  <style scoped lang="scss">
  .dark-theme {
    background-color: #333 !important;
  }
  .avatar {
    cursor: pointer; /* Avatar als klickbar kennzeichnen */
  }
  </style>
  