<template>
  <div class="app">
    <div class="nav">
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/store">Store</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/careers">Careers</router-link>
      </div>
      <div class="nav-logo">
        <Logo class="logo"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  
  export default {
    name: 'app',
    components: {
      Logo
    }
  }
</script>

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
  height: 12vh;
  display: flex;
  position: fixed;
  background-color: $navbar-color;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  .nav-links {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin-left: 2vw;
    align-items: center;
  }
  .nav-logo {
    width: 60%;
  }
  .logo {
    height: 60%;
    float: right;
    margin-top: 12vh * .2;
    margin-right: 2vw;
  }
  a {
    font-weight: bold;
    color: $text-light;
    &.router-link-exact-active {
      color: $text-light-blue;
    }
  }
}
</style>
