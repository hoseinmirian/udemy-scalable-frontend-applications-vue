<template>
  <div class="d-flex">
    <!--  FiltersComponent  -->
    <aside class="px-2 white--text">
      <!--  filter-component almost-dumb component    -->
      <filter-component :schema="getUsersFilterComponentsSchema" />
    </aside>
    <!--  list container  -->
    <v-container class="pa-0">
      <v-row class="ml-2">
        <v-col cols="9">
          <!--  search-component almost-dumb component    -->
          <search-component />
        </v-col>
        <v-col cols="3" class="align-self-center">
        <!--   Pagination   todo- please do pagination. it as an assignment  -->
          <v-pagination :length="4" circle ></v-pagination>
        </v-col>
      </v-row>
      <!--  ListViewComponent single-responsible component    -->
      <list-view-component service="users" template="users" />
    </v-container>
  </div>
</template>

<script>
import ListViewComponent from "@/components/list-view-component/ListViewComponent.vue";
import SearchComponent from "@/components/search-component/SearchComponent.vue";
import FilterComponent from "@/components/filter-component/FilterComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "UsersView",
  components: { FilterComponent, SearchComponent, ListViewComponent },
  computed: {
    ...mapGetters("appSchema", ["getUsersFilterComponentsSchema"]),
  },
};
</script>
<style>
aside {
  width: 300px;
  background: gray;
  min-height: 90vh;
}
</style>
