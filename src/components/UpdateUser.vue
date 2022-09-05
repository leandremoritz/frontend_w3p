<template>
  <button class="button-17" @click="toggleModal">
    <i class="fa-solid fa-pen ms-2"></i><span class="ms-2">Edit</span>
  </button>
  <div v-if="active" class="mod">
    <form>
      <div>Fullname</div>
      <input class="button-17" type="text" v-model="user.fullname" />
      <div>DOB</div>
      <input class="button-17" type="text" v-model="user.dob" />
      <div>AGE</div>
      <input class="button-17" type="text" v-model="user.age" />
      <div>GENDER</div>
      <input class="button-17" type="text" v-model="user.gender" />
      <div>IMAGE</div>
      <input class="button-17" type="text" v-model="user.image" />
      <div>EMAIL</div>
      <input class="button-17" type="text" v-model="user.email" />
      <button class="button-17" @click.prevent="updateUser(user.id)">
        <i class="fa-solid fa-pen ms-2"></i><span class="ms-2">Submit</span>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      active: false,
      fullname: "",
      dob: "",
      age: "",
      gender: "",
      image: "",
      email: "",
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    updateUser(id) {
      return this.$store.dispatch("updateUser", id, {
        fullname: this.fullname,
        dob: this.dob,
        age: this.age,
        gender: this.gender,
        image: this.image,
        email: this.email,
      });
    },
    // updateUser(id) {
    //   return this.$store.dispatch("updateUser", id);
    // },
  },
  mounted() {
    console.log(this.user);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.mod form {
  margin-top: 150px !important;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
  margin: 20px;
  width: 50vw;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
form {
  margin-top: 250px;
}
</style>
