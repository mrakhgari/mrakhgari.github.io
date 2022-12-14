<script setup lang="ts">
import { ref } from "vue";
const quiz = ref("../assets/quiz.jpg");
</script>

<template>
  <v-container>
    <v-card elevation="5" class="mx-auto px-2 rounded-lg" tile>
      <v-card-title class="text-h6">Work Experience </v-card-title>
      <v-timeline align="start">
        <v-timeline-item
          fill-dot
          class="mb-12 ms-3"
          dot-color="primary"
          size="large"
        >
          <template v-slot:icon>
            <v-icon icon="mdi-briefcase-outline"></v-icon>
          </template>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="large">
          <template v-slot:icon>
            <v-img src="src\assets\quiz.png"></v-img>
          </template>

          <div class="d-flex-column justify-space-between flex-grow-1">
            <div>Quiz of Kings</div>
            <div class="text-caption text-grey">Client Side Developer</div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-calendar-blank" /> 2019 - 2021
              <a target="_blank" href="https://quizofkings.com"
                ><v-icon
                  class="ms-2 text-grey"
                  icon="mdi-microsoft-internet-explorer"
              /></a>
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="large">
          <template v-slot:icon>
            <v-img src="src\assets\meghyas.jpg" class="rounded-circle"></v-img>
          </template>

          <div class="d-flex-column justify-space-between flex-grow-1">
            <div>Meghyas</div>
            <div class="text-caption text-grey">Telegram Bot Developer</div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-calendar-blank" /> 2020 - 2021
              <a target="_blank" href="https://meghyas.ir"
                ><v-icon
                  class="ms-2 text-grey"
                  icon="mdi-microsoft-internet-explorer"
              /></a>
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="large">
          <template v-slot:icon>
            <v-img src="src\assets\medadAi.png" class="rounded-circle" ></v-img>
          </template>

          <div class="d-flex-column justify-space-between flex-grow-1">
            <div>Medad AI</div>
            <div class="text-caption text-grey">NLP Engineer</div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-calendar-blank" /> 2021 - 2021
              <a target="_blank" href="https://medad-ai.ir/"
                ><v-icon
                  class="ms-2 text-grey"
                  icon="mdi-microsoft-internet-explorer"
              /></a>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>
