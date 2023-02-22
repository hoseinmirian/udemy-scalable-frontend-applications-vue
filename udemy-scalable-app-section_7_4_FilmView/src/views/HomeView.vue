<template>
  <div>
    <component
    v-for="(item,index) in getHomePageComponentsSchema"
    :is="item.component"
    :key="`${item.component}_${index}`"
    :schema="item.schema"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HomeView",
  components: {
    JumbotronComponent: () => import ("@/components/jumbotron-component/jumbotron-component.vue"),
    CarouselComponent: () => import ("@/components/carousel-component/carousel-component.vue"),
    ReportComponent: () => import ("@/components/report-component/report-component.vue"),
  },
  computed:{
    ...mapGetters("appSchema",["getHomePageComponentsSchema"])
  }
};
</script>
