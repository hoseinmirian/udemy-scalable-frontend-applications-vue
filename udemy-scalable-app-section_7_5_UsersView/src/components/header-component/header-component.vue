<template>
  <v-container fluid class="ma-0 header-wrapper">
    <component
        v-for="(item,index) in componentsList"
        :is="item.component"
        :key="`${item.component}_${index}`"
        :schema="item.schema"
    />
  </v-container>
</template>

<script>
export default {
  name: "header-component",
  components: {
    AnnouncementComponent: () => import ("@/components/header-component/components/announcement-component.vue"),
    HeaderButtonsComponent: () => import ("@/components/header-component/components/header-buttons-component.vue"),
  },
  props: {
    components: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentsList: this.components,
    };
  },
}
</script>
<style scoped>
.header-wrapper {
  background-color: lightgoldenrodyellow;
}
</style>