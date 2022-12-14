<script setup lang="ts">
import { useDisplay } from "vuetify";

const { smAndUp, smAndDown } = useDisplay();
</script>

<template>
  <v-container>
    <v-card elevation="5" class="mx-auto px-2 rounded-lg" tile>
      <v-card-title class="text-h6">About Me </v-card-title>
      <v-row>
        <v-col cols="12" md="5" class="mb-6">
          <div class="d-flex justify-center">
            <svg
              class="blob"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M44.9,-24.5C52,-13.5,47.5,5.7,38.1,27.6C28.7,49.6,14.3,74.3,-1.8,75.4C-18,76.4,-35.9,53.8,-48.9,29.7C-62,5.7,-70,-19.7,-61,-31.7C-52.1,-43.8,-26,-42.4,-3.6,-40.4C18.9,-38.3,37.7,-35.5,44.9,-24.5Z"
                  transform="translate(100 100)"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M44.9,-24.5C52,-13.5,47.5,5.7,38.1,27.6C28.7,49.6,14.3,74.3,-1.8,75.4C-18,76.4,-35.9,53.8,-48.9,29.7C-62,5.7,-70,-19.7,-61,-31.7C-52.1,-43.8,-26,-42.4,-3.6,-40.4C18.9,-38.3,37.7,-35.5,44.9,-24.5Z"
                  transform="translate(100 100)"
                />
                <image
                  class="blob-img"
                  x="12"
                  y="58"
                  xlink:href="/src/assets/marcus-removebg-preview.png"
                />
              </g>
            </svg>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="my-4 me-4">
          <v-card-title class="text-h6">
            <p :class="{ inline: !smAndDown }">Hi, I'm</p>

            <span> Muhammadreza Akhgari Ziri!</span>

            <!-- <p> -->
            <v-img
              width="25px"
              class="inline"
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
            >
            </v-img>
            <!-- </p> -->
          </v-card-title>
          <v-card-subtitle>Call me Mr.Ziri!</v-card-subtitle>
          <v-card-text>
            <p align="justify">
              After the world lost its good player (Cal Ripken Sr), I was born
              in Tehran on the same day (march 25, 1999) to try to reduce the
              sadness. I've passed my Bachelor's in computer engineering at the
              AmirKabir University of Technology.
            </p>
            <br />
            <p align="justify">
              I'm interested in learning new things and currently working on
              computer vision and natural language processing. But it can be
              changed in the future, nobody knows! I also have experience with
              Frontend development.
            </p>
            <br />
            <p align="justify">
              Also, I play DotA as a hobby in my free time (Nobody can play
              Shadow Shaman and Dazzle like me 😉) and I really love reading
              books.
            </p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn class="bg-primary mb-3 me-1" to="/contact" router
          >Download CV <v-icon class="ms-2" icon="mdi-download-outline"></v-icon
        ></v-btn>

        <v-btn v-if="smAndUp" class="bg-primary mb-3 me-2" to="/contact" router
          >Contact me <v-icon class="ms-2" icon="mdi-send-outline"></v-icon
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
.blob {
  fill: rgba(var(--v-theme-primary));
  max-width: 400px;
}

.blob-img {
  width: 170px;
}

.inline {
  display: inline-block;
}
</style>
