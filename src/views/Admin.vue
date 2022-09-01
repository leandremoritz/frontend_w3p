<template>
  <div class="admin">
    <td class="create"><CreateModal :product="product" /></td>
    <table>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <td scope="row"><img v-bind:src="product.image" alt="" /></td>
          <td>{{ product.category }}</td>
          <td>{{ product.descriptions }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="button-17" @click="deleteProduct(product.id)">
              <i class="fa-solid fa-trash"></i
              ><span class="ms-2">Delete</span></button
            ><UpdateModal :product="product" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UpdateModal from "../components/UpdateModal.vue";
import CreateModal from "../components/CreateModal.vue";
export default {
  components: {
    UpdateModal,
    CreateModal,
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    deleteProduct(id) {
      return this.$store.dispatch("deleteProduct", id);
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
};
</script>

<style>
.create {
  display: flex;
  justify-content: center;
  border: none;
}
.admin {
  margin-top: 150px !important;
  margin: 20px;
  padding: 10px;
  color: black;
}
table {
  width: 100%;
  padding: 15px;
}
td {
  border: solid 3px pink;
}
img {
  width: 150px;
  height: 150px;
}
/* button */
.button-17 {
  margin: 3%;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: rgb(247, 39, 163);
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid rgb(240, 171, 183);
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
@media screen and (max-width: 800px) {
  img {
    width: 100px;
  }
  .admin {
    padding: 0;
    margin: 0;
  }
}
@media screen and (max-width: 300px) {
  .admin {
    display: flex;
    flex-direction: column;
  }
  .table {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: fit-content;
  }
}
</style>
