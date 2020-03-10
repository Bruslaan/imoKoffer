<template>
  <div>
    <!-- header -->
    <section id="hero">
      <v-row no-gutters>
        <div class="header">
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1" lg="6">
                  <span
                    class="font-weight-light"
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  >WELCOME TO</span>

                  <br />

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >ImoKoffer</span>
                </v-col>
                <v-col cols="12" xs="12" lg="6" class="hidden-md-and-down">
                  <img src="https://colorlib.com/preview/theme/apps/img/header-img.png" alt />
                </v-col>

                <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </div>
      </v-row>
    </section>
    <!-- header -->

    <!-- second Section -->

    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">...</h2>

        <v-layout>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">OVERLINE</div>
                    <v-list-item-title class="headline mb-1">Mietvertrag</v-list-item-title>
                    <v-list-item-subtitle>Hier steht ein Text über den Mietvertrag</v-list-item-subtitle>
                  </v-list-item-content>

                  <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>

                <v-card-actions>
                
                  <v-btn text @click="$router.push({name:'mietvertrag'})">Generieren</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">Coming Soon</div>
                    <v-list-item-title class="headline mb-1">Energie Ausweis</v-list-item-title>
                    <v-list-item-subtitle>Not ready jet</v-list-item-subtitle>
                  </v-list-item-content>

                  <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>

                <v-card-actions>
                  <v-btn text disabled="">Generieren</v-btn>
                 
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>

      <div class="py-12"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  background-image: -webkit-linear-gradient(0deg, #3ea7ff 0%, #42d1ff 100%);
  /* height: 80vh; */
  min-height: 80vh;
  width: 100%;
}
</style>