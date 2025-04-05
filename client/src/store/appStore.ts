import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  // Der Zustand der Sidebar
  const isSidebarOpen = ref(true);
  
  // Der Zustand für DarkMode
  const darkMode = ref(false);

  // Funktion zum Umschalten der Sidebar
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  // Funktion zum Umschalten des DarkMode
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    saveDarkMode(darkMode.value); // DarkMode im localStorage speichern
  };

  // Hilfsfunktion, um den DarkMode-Wert aus localStorage zu laden
  const loadDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    darkMode.value = savedMode ? JSON.parse(savedMode) : false;
  };

  // Funktion, um den DarkMode in localStorage zu speichern
  const saveDarkMode = (isDarkMode: boolean) => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  };

  // Initialisiere den DarkMode beim Laden der App
  loadDarkMode();

  return {
    isSidebarOpen,
    darkMode,
    toggleSidebar,
    toggleDarkMode,
  };
});
