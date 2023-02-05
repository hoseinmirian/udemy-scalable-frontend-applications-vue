<template>
  <div>
    <!-- JumbotronComponent -->
    <div class="jumbotron">This is the static text of Jumbotron</div>
    <!-- CarouselComponent -->
    <v-carousel v-model="carousel_model" class="mt-2" height="300">
      <v-carousel-item v-for="(color, i) in slides" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- ReportComponent -->
    <div class="d-flex justify-center">
      <v-card elevation="2" outlined shaped class="mt-2 mr-2">
        <v-card-title>card subtitle</v-card-title>
        <v-card-subtitle>some text</v-card-subtitle>
      </v-card>
      <v-card elevation="2" outlined shaped class="mt-2 mr-2">
        <v-card-title>card subtitle</v-card-title>
        <v-card-subtitle>some text</v-card-subtitle>
      </v-card>
      <v-card elevation="2" outlined shaped class="mt-2 mr-2">
        <v-card-title>card subtitle</v-card-title>
        <v-card-subtitle>some text</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    carousel_model: 0,
    slides: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  components: {},
};
</script>
<style lang="scss">
.jumbotron {
  height: 150px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: cadetblue;
  color: white;
}
</style>
