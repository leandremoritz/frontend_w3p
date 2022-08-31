<template>
  <button class="button-17" @click="toggleModal">Create Product</button>

  <div v-if="active" class="addme">
    <form>
      <div>IMAGE</div>
      <input class="button-17" type="text" />
      <div>CATEGORY</div>
      <input class="button-17" type="text" />
      <div>DESCRIPTION</div>
      <input class="button-17" type="text" />
      <div>PRICE</div>
      <input class="button-17" type="text" />
    </form>
    <button class="btn btn-lg rounded-pill ms-2" @click="createProduct()">
      Add
    </button>
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
    createProduct() {
      this.$store.dispatch("createProduct", {
        id: this.id,
        image: this.image,
        descriptions: this.descriptions,
        category: this.category,
        color: this.color,
        price: this.price,
      });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style>
button.btn {
  background-color: pink;
  color: black;
  height: 40px;
  padding: 5px;
  text-align: center;
}
button.btn:hover {
  background-color: black;
  color: pink;
}
.addme {
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
</style>
