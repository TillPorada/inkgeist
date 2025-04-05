<template>
    <v-form @submit.prevent="registerUser">
      <v-text-field
        v-model="name"
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        label="Email"
        required
        type="email"
      ></v-text-field>
  
      <v-text-field
        v-model="password"
        label="Password"
        required
        type="password"
      ></v-text-field>
  
      <v-btn type="submit" color="primary">Register</v-btn>
    </v-form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  const registerUser = async () => {
    try {
      const response = await axios.post('https://your-backend-url.com/api/users', { // API-Route zur Erstellung des Benutzers
        name: name.value,
        email: email.value,
        password: password.value,
      });
  
      // Erfolgreiche Registrierung -> Weiterleitung zur Login-Seite
      if (response.status === 201) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  </script>
  