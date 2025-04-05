<template>
    <v-app-bar app>
      <v-btn icon @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on" size="40">
            <v-img src="https://www.example.com/avatar.png" alt="User Avatar" />
          </v-avatar>
        </template>
        <v-list>
          <v-list-item @click="goToProfile">
            <v-list-item-title>Profil ansehen</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToSettings">
            <v-list-item-title>Einstellungen</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Ausloggen</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToProfile = () => {
    router.push('/profile');
  };
  
  const goToSettings = () => {
    router.push('/settings');
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };
  
  const toggleSidebar = () => {
    // Hier wird das Sidebar-Management umgeschaltet
  };
  </script>
  
  <style scoped>
  /* Navbar Styles */
  </style>
  