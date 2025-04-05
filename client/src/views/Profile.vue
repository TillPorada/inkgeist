<template>
    <DefaultLayout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" offset-md="3">
            <v-card>
              <v-card-title>Benutzerprofil</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="name" label="Name" />
                  <v-text-field v-model="email" label="Email" type="email" />
                  <v-btn @click="updateProfile" color="primary">Profil aktualisieren</v-btn>
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
  
  const name = ref('');
  const email = ref('');
  
  const updateProfile = () => {
    // Logik zum Aktualisieren des Profils
    alert('Profil aktualisiert!');
  };
  </script>
  
  <style scoped>
  /* Profil-Stile */
  </style>
  