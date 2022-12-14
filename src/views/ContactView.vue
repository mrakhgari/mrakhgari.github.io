<script setup lang="ts"></script>

<template>
  <v-container>
    <v-card elevation="5" class="mx-auto px-2 rounded-lg" tile>
      <v-card-title class="text-h6">Contact Me</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" sm="5" md="6">
            <v-card
              class="mx-auto my-2 pb-3"
              max-width="400"
              elevation="0"
              variant="outlined"
            >
              <template v-slot:prepend>
                <v-icon
                  class="text-primary"
                  size="large"
                  icon="mdi-email"
                ></v-icon>
              </template>

              <template v-slot:title> Email </template>

              <v-card-subtitle
                ><a href="mailto:mra.akhgari@gmail.com"
                  >mra.akhgari@gmail.com</a
                ></v-card-subtitle
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card
              class="mx-auto my-2 pb-3"
              max-width="400"
              elevation="0"
              variant="outlined"
            >
              <template v-slot:prepend>
                <v-icon
                  class="text-primary"
                  size="large"
                  icon="mdi-phone"
                ></v-icon>
              </template>

              <template v-slot:title> Phone </template>

              <v-card-subtitle> (+98) 902-518-7338 </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" sm="5" md="6">
            <v-card
              class="mx-auto my-2 pb-3"
              max-width="400"
              elevation="0"
              variant="outlined"
            >
              <template v-slot:prepend>
                <v-icon
                  class="text-primary"
                  size="large"
                  icon="mdi-skype-business"
                ></v-icon>
              </template>

              <template v-slot:title> Skype </template>

              <v-card-subtitle
                ><a href="skype:mra.akhgari?userinfo"
                  >mra.akhgari</a
                ></v-card-subtitle
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card
              class="mx-auto my-2 pb-3"
              max-width="400"
              elevation="0"
              variant="outlined"
            >
              <template v-slot:prepend>
                <v-icon
                  class="text-primary"
                  size="large"
                  icon="mdi-github"
                ></v-icon>
              </template>

              <template v-slot:title> Github </template>

              <v-card-subtitle>
                <a href="https://github.com/mrakhgari" target="_blank"
                  >mrakhgari</a
                >
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="5" md="6">
            <v-card
              class="mx-auto my-2 pb-3"
              max-width="400"
              elevation="0"
              variant="outlined"
            >
              <template v-slot:prepend>
                <v-icon
                  class="text-primary"
                  size="large"
                  icon="mdi-twitter"
                ></v-icon>
              </template>

              <template v-slot:title> Twitter </template>

              <v-card-subtitle
                ><a href="https://twitter.com/muhmdreza2" target="_blank"
                  >muhmdreza2</a
                ></v-card-subtitle
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card
              class="mx-auto my-2 pb-3"
              max-width="400"
              elevation="0"
              variant="outlined"
            >
              <template v-slot:prepend>
                <v-icon
                  class="text-primary"
                  size="large"
                  icon="mdi-instagram"
                ></v-icon>
              </template>

              <template v-slot:title> Instagram </template>

              <v-card-subtitle>
                <a href="https://instagram.com/_muhmdreza" target="_blank"
                  >_muhmdreza</a
                >
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
