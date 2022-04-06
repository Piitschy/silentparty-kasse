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
      return state.order.reduce((acc, cur) => acc + cur.price, 0)
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
