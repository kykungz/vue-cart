<template lang="html">
  <div>
    <div class="pull-right" v-for="item in items">
      <p>
        {{ item.name }} {{ item.price }} บาท
        <button @click="addToCart(item)" class="btn btn-success">เพิ่มเข้าตะกร้า</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'items'
    ])
  },
  methods: {
    ...mapActions([
      'addToCart'
    ])
  }
}
</script>

<style lang="css" scoped>
  p {
    font-size: 30px;
  }
</style>
