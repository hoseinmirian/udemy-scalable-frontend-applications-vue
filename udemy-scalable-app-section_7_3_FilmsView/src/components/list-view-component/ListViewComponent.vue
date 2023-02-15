<template>
  <!--  ListViewComponent single responsible component    -->
  <div>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div v-if="!loading">
      <product-template v-if="template === 'products'" :data="data" />
    </div>
  </div>
</template>

<script>
import api from "@/data/api";
import ProductTemplate from "@/components/list-view-component/components/products-template.vue";

export default {
  name: "ListViewComponent",
  components: { ProductTemplate },
  props: {
    service: {
      required: true,
      type: String,
    },
    template: {
      type: String,
      default: "products",
    },
  },
  data() {
    return {
      data: [],
      loading: true,
    };
  },
  async created() {
    // 1- Read the router...
    const config = {
      params: {
        ...this.$route.query,
      },
    };
    // 2- Call API corresponding service...
    this.loading = true;
    this.data = await api[this.service].getAll(config);
    this.loading = false;
  },
};
</script>

<style scoped></style>
