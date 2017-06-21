<template>
  <div class="hello">
    <div style="padding: 80px"class="row">
      <div class="col-md-4">
        <list></list>
      </div>
      <div class="col-md-5">
        <cart></cart>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
import List from '@/components/List.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { Cart, List }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
