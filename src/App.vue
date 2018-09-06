<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/careers">Careers</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss" >
@import 'styles.scss';
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  $background-color: $primary-background-color;
}
.nav {
  padding: 30px;
  background-color: $navbar-color;
  a {
    font-weight: bold;
    color: $text-light;
    &.router-link-exact-active {
      color: $text-light-blue;
    }
  }
}
</style>
