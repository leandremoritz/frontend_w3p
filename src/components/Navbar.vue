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
        <li><router-link to="/home">Home</router-link></li>

        <li><router-link to="/login">Login</router-link></li>

        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style>
li {
  padding-right: 20px;
}
#pages {
  font-size: 15px;
  background-color: inherit;
  border: none;
}
</style>
