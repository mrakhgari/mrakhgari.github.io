<script setup lang="ts">

const emit = defineEmits<{
  (e: 'toggleTheme'): void
}>()

const { theme } = defineProps<{
  theme: string
}>()


function toggleTheme() {
  emit('toggleTheme');
}


</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:append>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        @click="toggleTheme"
      ></v-btn>
    </template>
    <!-- <v-spacer></v-spacer> -->

    <!-- <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      > -->
  </v-app-bar>
</template>

<style scoped></style>
