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
import JumbotronComponent from "@/components/jumbotron-component/jumbotron-component.vue";
import CarouselComponent from "@/components/carousel-component/carousel-component.vue";
import ReportComponent from "@/components/report-component/report-component.vue";
import {mapGetters} from "vuex";

export default {
  name: "HomeView",
  components: {JumbotronComponent, CarouselComponent, ReportComponent},
  computed:{
    ...mapGetters("appSchema",["getHomePageComponentsSchema"])
  }
};
</script>
