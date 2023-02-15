<template>
  <!--  ListViewComponent single responsible component    -->
  <div>
    <div v-if="!loading">
      <component :is="template" :data="data" />
      <jumbotron-component/>
      <modal-window v-if="showModalComponent" :data="data" />
    </div>
  </div>
</template>

<script>
import api from "@/data/api";
import {loadWidgets} from "@/utilities";
import JumbotronComponent from "@/components/jumbotron-component/jumbotron-component.vue";
import LoadingProgressbarComponent from "@/components/loading-progress-component/loading-progressbar-component.vue";
import ErrorIndicatorComponent from "@/components/error-indicator-component/error-indicator-component.vue";
const lazyComponents = ["products-template","users-template"]
// add as much as you want different template component. one of them based on the template prop always loads lazily

const ModalWindow = () => ({
  component: import('@/components/carousel-component/carousel-component.vue'),
  loading: LoadingProgressbarComponent,
  error: ErrorIndicatorComponent,
  delay:200,
  // timeout:1 to get error
})
// it can be checked on very slow internet using firefox or chrome dev tool

export default {
  name: "ListViewComponent",
  components: {
    JumbotronComponent,
    ...loadWidgets(lazyComponents,"components/list-view-component/components/"),
    ModalWindow
  },
  props: {
    service: {
      required: true,
      type: String,
    },
    template: {
      type: String,
      default: "products-template",
    },
  },
  data() {
    return {
      data: [],
      loading: true,
      showModalComponent:false
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
