<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";

const theme = ref("light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<template>
  <v-app :theme="theme">
    <navbar :theme="theme" @toggleTheme="toggleTheme" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style></style>
