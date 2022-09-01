<template>
  <header id="header">
    <!--  Brand Logo  -->

    <router-link class="nav-brand" to="/home">
      <img
        id="header-img"
        src="https://i.postimg.cc/L5RjHFJv/Alphabet-Letter-L-With-Ornaments-And-S-Hand-Lettering-Letter-A-Clipart-Letter-L-Letter-PNG-and-Ve.png"
        alt=" "
      />
    </router-link>

    <!--  Toggle Menu for Mobile  -->

    <input type="checkbox" id="toggle-menu" role="button" />
    <label for="toggle-menu" class="toggle-menu">Menu</label>

    <!--  Menus  -->
    <nav id="nav-bar" class="navbar">
      <ul class="menu">
        <!-- <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li> -->
        <div class="nav_user" v-if="user">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>

          <!-- <li><button @click="Logout()">Logout</button></li> -->
          <div>
            <img
              class="profile-pic"
              width="40"
              height="35"
              :src="user.image"
              :alt="user.name"
            />
          </div>
        </div>

        <div v-else>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </div>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  // methods: {
  //   Logout() {
  //     this.$store.commit("Logout");
  //     this.$router.push("/  ");
  //   },
  // },
};
</script>
<style>
li {
  padding-right: 20px;
}
a {
  font-size: 25px;
  font-weight: bold;
}
.nav-bar {
  padding-top: 100px !important;
}
#pages {
  font-size: 15px;
  background-color: inherit;
  border: none;
}
.profile-pic {
  border-radius: 50%;
  filter: drop-shadow(0px 5px 9px rgb(249, 90, 212));
  width: 100px;
  height: 100px;
}
.nav_user {
  display: flex;
}

.navbar {
  height: fit-content;
}
@media screen and (max-width: 760px) {
  .nav_user {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
  .profile-pic {
    margin-top: 50px;
    width: 100px;
    height: 100px;
    filter: drop-shadow(0px 2px 15px pink);
  }
}
</style>
