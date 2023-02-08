<template>
  <div class="d-flex justify-center">
    <v-card
        v-for="(card, index) in cards"
        :key="`${card.id}_${index}`"
        elevation="2"
        outlined
        shaped
        class="mt-2 mr-2"
    >
      <v-card-title>{{ card.title }}</v-card-title>
      <v-card-subtitle>{{ card.value }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "report-component",
  props: {
    schema: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cards: this.schema,
    };
  },
};
</script>