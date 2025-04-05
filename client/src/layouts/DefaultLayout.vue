<template>
    <v-app>
      <Navbar />
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3">
              <Sidebar />
            </v-col>
            <v-col cols="12" md="9">
              <slot></slot>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script lang="ts" setup>
  import Navbar from '../components/Navbar.vue';
  import Sidebar from '../components/Sidebar.vue';
  </script>
  
  <style scoped>
  /* Layout Styles */
  </style>
  