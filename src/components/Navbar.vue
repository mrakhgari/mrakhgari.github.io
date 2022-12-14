<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
const { mdAndUp, smAndDown } = useDisplay();

const drawer = ref(false);

const emit = defineEmits<{
  (e: "toggleTheme"): void;
}>();

const { theme } = defineProps<{
  theme: string;
}>();

function toggleTheme() {
  emit("toggleTheme");
}
</script>

<template>
  <v-app-bar v-if="mdAndUp" :elevation="2">
    <v-app-bar-title>Mr.Ziri</v-app-bar-title>
    <template v-slot:append>
      <router-link to="/about" custom v-slot="{ navigate }">
        <v-btn @click="navigate" role="link">About Me</v-btn>
      </router-link>

      <router-link to="/education" custom v-slot="{ navigate }">
        <v-btn @click="navigate" role="link">Education</v-btn>
      </router-link>

      <router-link to="/work" custom v-slot="{ navigate }">
        <v-btn @click="navigate" role="link">Work</v-btn>
      </router-link>

      <router-link to="/contact" custom v-slot="{ navigate }">
        <v-btn @click="navigate" role="link">Contact</v-btn>
      </router-link>

      <router-link to="/about" custom v-slot="{ navigate }">
        <v-btn @click="navigate" role="link">Skills</v-btn>
      </router-link>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        @click="emit('toggleTheme')"
      ></v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer location="bottom" v-model="drawer" v-if="smAndDown">
    <v-list nav>
      <v-list-item
        nav
        prepend-icon="mdi-account-outline"
        title="About Me"
        value="about"
        to="/about"
        router
      ></v-list-item>

      <v-list-item
        nav
        prepend-icon="mdi-school-outline"
        title="Education"
        to="/education"
        value="education"
        router
      ></v-list-item>

      <v-list-item
        nav
        prepend-icon="mdi-briefcase-outline"
        title="Work"
        to="/work"
        value="work"
        router
      ></v-list-item>

      <v-list-item
        nav
        prepend-icon="mdi-send-outline"
        title="Contact"
        to="/contact"
        value="contact"
        router
      ></v-list-item>

      <v-list-item
        nav
        prepend-icon="mdi-file-document-multiple-outline"
        title="Skills"
        to="/skills"
        value="skills"
        router
      ></v-list-item>

      <v-list-item> </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-spacer />

      <v-btn
        variant="text"
        icon="mdi-chevron-double-down"
        @click.stop="drawer = !drawer"
      ></v-btn>
    </template>
  </v-navigation-drawer>

  <v-bottom-navigation v-if="smAndDown">
    <v-app-bar-title class="my-2 ms-2">Mr.Ziri</v-app-bar-title>
    <v-app-bar-nav-icon
      :icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      @click="toggleTheme"
    >
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon
      icon="mdi-apps"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-bottom-navigation>
</template>

<style scoped></style>
