<template lang="html">
<div>
  <div class="pull-right" v-for="lineItem in cart">
    <p style="font-size:20px">
      {{ lineItem.item.name }} {{ lineItem.item.price }} บาท {{ lineItem.count }} ชิ้น (รวม {{ sum(lineItem) }} บาท)
      <button @click="removeFromCart(lineItem.item)" class="btn btn-danger">ลบออกจากตะกร้า</button>
    </p>
  </div>
  <div style="font-size:30px"class="pull-right">
    <strong>ราคาทั้งหมด</strong>: {{ total() }} บาท
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'cart'
    ])
  },
  methods: {
    ...mapActions([
      'removeFromCart'
    ]),
    sum: function (lineItem) {
      return lineItem.item.price * lineItem.count
    },
    total: function () {
      var sum = 0
      this.cart.forEach((lineItem) => {
        sum += lineItem.item.price * lineItem.count
      })
      return sum
    }
  }
}
</script>

<style lang="css">
</style>
