<template>
  <v-container fluid class="buttons-wrapper ma-0 pa-0">
    <v-btn
        v-for="(headerItem, index) in content"
        exact
        :to="{ name: headerItem.name }"
        text
        :key="`${headerItem.name}_${index}`"
    >
      <span class="mr-2">{{ headerItem.title }}</span>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "header-buttons-component",
  props: {
    schema: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      content: this.schema
    }
  }
}
</script>

<style scoped>
.buttons-wrapper {
  background-color: lightblue;
}
</style>