<template>
  <div  class="page-background">
    <div>
      <h1>Store</h1>
      <p>It wouldn't be a practice website without some lorem and some ipsum.  Add in a little ipsum for spice and top with lorem to taste.  Serve with ipsum and lorem.</p>
    </div>

    <div v-for="item in store" :key="item.id">
      <h3>{{item.name}}</h3>
      <p>{{item.details}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'store',
  computed: mapState({
    store: state => state.store
  })
}
</script>
