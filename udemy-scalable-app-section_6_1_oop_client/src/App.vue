<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn exact :to="{ name: 'HomeView' }" text>
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn exact :to="{ name: 'FilmsView' }" text>
        <span class="mr-2">Films</span>
      </v-btn>

      <v-btn exact :to="{ name: 'AdminView' }" text>
        <span class="mr-2">Admin</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>
import OopClientLib from "@/data/libs/OopClient";
const _OopClient = new OopClientLib({baseURL:"http://localhost:3005"});
const _OopClient2 = new OopClientLib({baseURL:"http://localhost:3005"});
export default {
  name: "App",

  data: () => ({
    //
  }),
  async created() {
    const requestConfig = {url:"/products"}
    const response = await _OopClient.get(requestConfig);
    const response2 = await _OopClient2.get(requestConfig);
    console.log({response});
    console.log({response2});
  }
};
</script>
