import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var Item = function (name, price) {
  this.name = name
  this.price = price
}

var LineItem = function (item, count) {
  this.item = item
  this.count = count
}

export default new Vuex.Store({
  state: {
    items: [
      new Item('อั้ยย้ะ', 500),
      new Item('เช้ยๆ', 200),
      new Item('คอนเน่', 100),
      new Item('อะหื้ย', 700)
    ],
    cart: []
  },
  getters: {
    items: state => state.items,
    cart: state => state.cart
  },
  mutations: {
    addToCart (state, item) {
      var x = null
      var hasItem = state.cart.some(function (lineItem) {
        if (lineItem.item === item) {
          x = lineItem
        }
        return lineItem.item === item
      })
      if (hasItem) {
        x.count++
      } else {
        state.cart.push(new LineItem(item, 1))
      }
    },
    removeFromCart (state, item) {
      var x = null
      var hasItem = state.cart.some(function (lineItem) {
        if (lineItem.item === item) {
          x = lineItem
        }
        return lineItem.item === item
      })
      if (hasItem) {
        if (x.count > 1) {
          x.count--
        } else {
          state.cart.splice(state.cart.indexOf(x), 1)
        }
      }
    }
  },
  actions: {
    addToCart (context, item) {
      context.commit('addToCart', item)
    },
    removeFromCart (context, item) {
      context.commit('removeFromCart', item)
    }
  }
})
