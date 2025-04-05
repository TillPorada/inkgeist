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
                  :rules="[emailRule]"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  :rules="[passwordRule]"
                  required
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="login" :disabled="!valid" color="primary">Login</v-btn>
              <v-btn @click="goToRegister">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  
  // Reactive variables
  const email = ref("");
  const password = ref("");
  const valid = ref(false);
  
  // Router instance
  const router = useRouter();
  
  // Validation rules
  const emailRule = [(v: string) => !!v || "Email is required"];
  const passwordRule = [(v: string) => !!v || "Password is required"];
  
  // Navigate to the register page
  const goToRegister = () => {
    router.push("/register");
  };
  
  // Login function
  const login = async () => {
    try {
      const response = await axios.post(
        "https://deine-backend-url/api/login", // Passe die URL deines Backends an
        {
          email: email.value,
          password: password.value,
        }
      );
  
      // JWT speichern
      localStorage.setItem("authToken", response.data.token);
  
      // Weiterleitung nach erfolgreichem Login
      router.push("/dashboard"); // Verwendung von vue-router statt window.location.href
    } catch (error) {
      alert("Login failed!");
    }
  };
  </script>
  
  <style scoped>
  /* Hier kannst du spezifische Styles für das Login-Formular hinzufügen */
  </style>
  