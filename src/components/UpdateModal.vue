<template>
  <button class="button-17" @click="toggleModal">
    <i class="fa-solid fa-pen ms-2"></i><span class="ms-2">Edit</span>
  </button>
  <div v-if="active" class="mod">
    <form>
      <div>IMAGE</div>
      <input class="button-17" type="text" v-model="product.image" />
      <div>CATEGORY</div>
      <input class="button-17" type="text" v-model="product.brand" />
      <div>DESCRIPTION</div>
      <input class="button-17" type="text" v-model="product.descriptions" />
      <div>PRICE</div>
      <input class="button-17" type="text" v-model="product.price" />
    </form>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
<style scoped>
.mod {
  padding: 30px;
  margin: 20px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
</style>
