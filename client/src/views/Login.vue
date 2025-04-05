<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  :rules="[emailRule as any]"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  :rules="[passwordRule as any]"
                  required
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="login" :disabled="!valid" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'Login',
    setup() {
      const email = ref('');
      const password = ref('');
      const valid = ref(false);
  
      const emailRule = [(v: string) => !!v || 'Email is required'];
      const passwordRule = [(v: string) => !!v || 'Password is required'];
  
      const login = async () => {
        try {
          const response = await axios.post('https://deine-backend-url/api/login', {
            email: email.value,
            password: password.value,
          });
  
          // JWT speichern
          localStorage.setItem('authToken', response.data.token);
  
          // Weiterleitung nach erfolgreichem Login
          window.location.href = '/dashboard'; // oder vue-router verwenden
        } catch (error) {
          alert('Login failed!');
        }
      };
  
      return {
        email,
        password,
        valid,
        emailRule,
        passwordRule,
        login,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Hier kannst du spezifische Styles für das Login-Formular hinzufügen */
  </style>
  