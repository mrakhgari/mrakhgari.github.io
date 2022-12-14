<script setup lang="ts"></script>

<template>
  <v-container>
    <v-card elevation="5" class="mx-auto px-2 rounded-lg" tile>
      <v-card-title class="text-h6">Education </v-card-title>
      <v-timeline density="compact" side="end">
        <v-timeline-item
          fill-dot
          class="mb-12 ms-3"
          dot-color="primary"
          size="large"
        >
          <template v-slot:icon>
            <v-icon icon="mdi-school-outline"></v-icon>
          </template>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div class="d-flex-column justify-space-between flex-grow-1">
            <div>B.Sc. Computer Engineering</div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-calendar-blank" /> 2017 - 2022
            </div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-map-marker-outline" /><a
                href="https://aut.ac.ir/"
                target="_blank"
                >Amirkabir University of Technology</a
              >, Tehran, Iran
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div class="d-flex-column justify-space-between flex-grow-1">
            <div>High School Diploma in Mathematics and Physics</div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-calendar-blank" /> 2013 - 2017
            </div>
            <div class="text-caption">
              <v-icon class="text-grey" icon="mdi-map-marker-outline" />Hemmat
              High School, Tehran, Iran
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>
