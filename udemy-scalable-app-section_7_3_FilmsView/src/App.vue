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

    </v-app-bar>
    <header-component class="mt-15" :components="getAppHeaderComponents"/>

    <v-main class="pa-0">
      <v-container fluid>
        <router-view :key="$route.fullPath"/>
      </v-container>
    </v-main>
    <footer-component class="mt-15" :components="getAppFooterComponents"/>
  </v-app>
</template>

<script>
import {mapGetters} from "vuex";
import HeaderComponent from "@/components/header-component/header-component.vue";
import FooterComponent from "@/components/footer-component/footer-component.vue";

export default {
  name: "App",
  components: {HeaderComponent, FooterComponent},
  computed: {
    ...mapGetters("appSchema", ["getAppFooterComponents", "getAppHeaderComponents"])
  },
  data: () => ({
    //
  }),
};
</script>
