<template>
  <v-row class="ml-2">
    <v-col
      cols="3"
      v-for="(value, index) in localData"
      :key="`${value.name}_${index}`"
    >
      <v-card class="mx-auto" max-width="374">
        <v-img height="250" :src="value.avatar_photo"></v-img>
        <v-card-text class="mt-0">{{ value.email }}</v-card-text>
        <v-card-text class="mt-0">{{ value.role }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UsersTemplate",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localData: this.data,
    };
  },
};
</script>

<style scoped></style>
