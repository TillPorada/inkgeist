<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>Dashboard</v-card-title>
            <v-card-text>
              <p>Willkommen auf deinem Dashboard!</p>
              <p>Hier kannst du die Details deiner Anwendung sehen.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="logout" color="primary">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Dashboard',
    setup() {
      const logout = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Oder vue-router verwenden
      };
  
      return {
        logout,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Hier kannst du spezifische Styles für das Dashboard hinzufügen */
  </style>
  