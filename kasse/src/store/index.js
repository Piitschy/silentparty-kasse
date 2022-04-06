import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    order: [],
  },
  getters:{
    sum(state) {
      let sum = state.order.reduce((acc, cur) => acc + cur.price, 0)
      return parseFloat(sum).toFixed(2)
    }
  },
  mutations: {
    appendOrder (state, order) {
      state.order.push(order)
    },
    clearOrder (state) {
      state.order = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
