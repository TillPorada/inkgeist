<template>
    <div>
      <button @click="fetchTest">Test API Endpoint</button>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const message = ref('')
  
  const fetchTest = async () => {
    try {
      // Ersetze diese URL mit der öffentlichen URL deines Railway-Backends
      const response = await fetch('https://dein-backend-url/api/test')
      const data = await response.json()
      message.value = data.message
    } catch (error) {
      message.value = 'Error fetching API'
      console.error(error)
    }
  }
  </script>
  
  <style scoped>
  button {
    padding: 8px 16px;
    font-size: 16px;
  }
  </style>  