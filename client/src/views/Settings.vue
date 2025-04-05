<template>
    <DefaultLayout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" offset-md="3">
            <v-card>
              <v-card-title>Einstellungen</v-card-title>
              <v-card-text>
                <v-form>
                  <v-switch v-model="notificationsEnabled" label="Benachrichtigungen aktivieren" />
                  <v-btn @click="saveSettings" color="primary">Einstellungen speichern</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </DefaultLayout>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  
  const notificationsEnabled = ref(true);
  
  const saveSettings = () => {
    // Logik zum Speichern der Einstellungen
    alert('Einstellungen gespeichert!');
  };
  </script>
  
  <style scoped>
  /* Einstellungs-Stile */
  </style>
  