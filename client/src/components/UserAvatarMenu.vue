<template>
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
  </script>
  
  <style scoped>
  /* Avatar-Menü-Stile */
  </style>
  