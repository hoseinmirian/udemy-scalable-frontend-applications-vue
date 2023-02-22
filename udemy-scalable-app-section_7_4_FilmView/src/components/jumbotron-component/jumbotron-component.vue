<template>
  <div class="jumbotron">{{ content }}</div>
</template>

<script>
export default {
  name: "jumbotron-component",
  props: {
    schema: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      content: this.schema
    }
  }
}
</script>
<style lang="scss">
.jumbotron {
  height: 150px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: cadetblue;
  color: white;
}
</style>