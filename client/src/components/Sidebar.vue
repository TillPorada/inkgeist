<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      :mini-variant="miniVariant"
      class="sidebar"
    >
      <v-list dense>
        <v-list-item link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profil</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Einstellungen</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const drawer = ref(true);
  const miniVariant = ref(false);
  
  const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };
  </script>
  
  <style scoped lang="scss">
  .sidebar {
    background-color: $primary-color;
    color: $text-color;
    .v-list-item {
      color: $text-color;
    }
    .v-list-item:hover {
      background-color: lighten($primary-color, 10%);
    }
  }
  </style>
  