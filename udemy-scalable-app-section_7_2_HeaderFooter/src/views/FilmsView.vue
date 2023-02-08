<template>
  <v-container fluid class="d-flex pa-0">
    <aside class="px-2 white--text">Filters</aside>
    <v-container class="pa-0">
      <!--  ControlPanel    -->
      <v-row class="ml-2">
        <!--   SearchComponent  -->
        <v-col cols="9">
          <v-text-field
            label="Search Films"
            prepend-icon="mdi-magnify"
            clearable
          ></v-text-field>
        </v-col>
        <!--   PaginationComponent  -->
        <v-col cols="3" class="align-self-center">
          <v-pagination :length="4" circle></v-pagination>
        </v-col>
      </v-row>
      <!--  ListView    -->
      <v-row class="ml-2">
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "FilmsView",

  components: {},
};
</script>
<style scoped>
aside {
  width: 300px;
  background: gray;
  min-height: 90vh;
}
</style>
