<template>
    <DefaultLayout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" offset-md="3">
            <v-card>
              <v-card-title>Dashboard</v-card-title>
              <v-card-text>
                <p>Willkommen auf deinem Dashboard!</p>
                <p>Hier kannst du die Details deiner Anwendung sehen.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </DefaultLayout>
  </template>
  
  <script lang="ts" setup>
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  </script>
  