<template>
  <v-app>
    <v-app-bar app fixed color="white" elevate-on-scroll>
      <v-toolbar-title @click="$router.push({name:'home'})">ImoKoffer</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content app>
      <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view :key="key" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    key() {
      return this.$route.path;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>

<style>
</style>