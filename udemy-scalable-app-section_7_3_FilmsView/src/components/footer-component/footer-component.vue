<template>
  <v-container fluid>
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
  name: "footer-component",
  components: {
    FooterDefaultComponent: () => import ("@/components/footer-component/components/footer-default-component.vue"),
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