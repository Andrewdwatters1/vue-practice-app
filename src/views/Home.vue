<template>
  <div class="home">
    <Logo/>
    <h1>Welcome to Views by Veux</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'

export default {
  name: 'home',
  components: {
    Logo
  }
}
</script>
