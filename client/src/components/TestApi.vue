<template>
    <v-container>
      <v-form @submit.prevent="createUser">
        <v-text-field v-model="user.name" label="Name" required></v-text-field>
        <v-text-field v-model="user.email" label="Email" type="email" required></v-text-field>
        <v-text-field v-model="user.password" label="Password" type="password" required></v-text-field>
        <v-btn type="submit" color="primary">Create User</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const user = ref({
    name: '',
    email: '',
    password: '',
  });
  
  const createUser = async () => {
    try {
      const response = await fetch('https://inkgeist-production.up.railway.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user.value),
      });
      if (response.ok) {
        alert('User created successfully');
      } else {
        alert('Error creating user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating user');
    }
  };
  </script>
  
  <style scoped>
  /* Optional Styles */
  </style>