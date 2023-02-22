<template>
  <v-container class="pa-0" fluid v-if="!loading">
    <!--  AvatarComponent  -->
    <avatar-component :avatar="data.image" :film-name="data.name" class="mb-5"/>
    <!--  DescriptionComponent  -->
    <description-component :description="data.description"/>
    <!--  ReviewComponent  -->
    <review-component v-for="(review,index) in reviews" :rate="review.rating" :comment="review.comment" :key="index"/>
  </v-container>
</template>

<script>
import AvatarComponent from "@/components/avatar-component/avatar-component.vue";
import DescriptionComponent from "@/components/description-component/description-component.vue";
import ReviewComponent from "@/components/review-component/review-component.vue";
import api from "@/data/api";

export default {
  name: "FilmView",
  components: {ReviewComponent, DescriptionComponent, AvatarComponent},
  data: () => {
    return {
      data: null,
      reviews: [],
      loading: true,
    }
  },
  async created() {
    this.loading = true;
    // getting product name and description
    const {id} = this.$route.params;
    this.data = await api.products.getOne(id);
    // getting reviews
    const config = {
      params: {
        productId: id,
      }
    }
    this.reviews = await api.reviews.getAll(config);
    this.loading = false;
  }
};
</script>
