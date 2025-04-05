<template>
  <v-navigation-drawer
    v-model="isSidebarOpen"
    app
    :mini-variant="!isSidebarOpen"
    color="primary"
    dark
  >
    <!-- Links in der Sidebar -->
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.name"
        @click="goToPage(link.route)"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useAppStore } from '@/store/appStore';
import { useRouter } from 'vue-router';

// Zugriff auf den Store
const appStore = useAppStore();

// Lokale Kopie für v-model (muss ref sein)
const isSidebarOpen = ref(appStore.isSidebarOpen.value);

// Synchronisierung: Store -> lokale Kopie
watch(() => appStore.isSidebarOpen, (newVal) => {
  isSidebarOpen.value = newVal;
});

// Synchronisierung: lokale Kopie -> Store
watch(isSidebarOpen, (newVal) => {
  appStore.isSidebarOpen = newVal;
});

const router = useRouter();
const links = [
  { name: "Chat", route: "/chat", icon: "mdi-message" },
  { name: "Grafik", route: "/graphics", icon: "mdi-palette" },
  { name: "Audio", route: "/audio", icon: "mdi-volume-high" },
  { name: "Übersetzer", route: "/translator", icon: "mdi-translate" },
  { name: "Konvertieren", route: "/converter", icon: "mdi-arrow-right" },
];

const goToPage = (route: string) => {
  router.push(route);
};
</script>


<style scoped lang="scss">
.avatar {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Darkmode spezifische Styles */
.v-navigation-drawer.dark-mode {
  background-color: #333; /* Dunkler Hintergrund im Darkmode */
}

.v-list-item-title {
  color: var(
    --v-text-primary
  ); /* Sicherstellen, dass der Text im Darkmode gut sichtbar ist */
}
</style>
