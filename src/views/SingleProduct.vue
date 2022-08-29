<template>
  <div class="single">
    <div class="page" v-for="product in product" :key="product.id">
      <div class="card">
        <img :src="product.image" alt="" />
        <div>
          <h2>{{ product.descriptions }}</h2>
          <h1>R{{ product.price }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product.id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>

<style scoped>
.single {
  background-color: #f5d9d6;
}
img {
  width: 300px;
  margin-top: 30px;
}
.page {
  height: 100vh;
  padding-top: 150px;
  display: flex;
  justify-content: center;
}
/* cards */
.card {
  padding: 30px;
  margin: 20px;
  width: 30vw;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
@media screen and (max-width: 1200px) {
  .card {
    width: fit-content;
  }
}
</style>
