<template>
  <v-app>
    <v-navigation-drawer
      v-model="showOrder"
      app
      width="300"
      right
      fixed
    >
      <OrderList 
        v-model="order"
      />
    </v-navigation-drawer>
    <v-main>
      <CheckOut v-model="checkout" />
      <div>
        <v-btn
          class="hide-btn" 
          :style="showOrder ? 'right: 300px;' : 'right: 0px;'"
          @click="showOrder = !showOrder"
          icon
        >
          <v-icon v-if="showOrder">
            mdi-chevron-right
          </v-icon>
          <v-icon v-else>
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </div>
      <router-view />
    </v-main>
    <v-footer 
      padless
      style="z-index: 100;"
      color="teal darken-4"
      dark
      fixed
    >
    <v-col
      class="text-center"
      cols="10"
    >
      <v-btn @click="checkout = true" text width="100%" height="50px">
        <h1>BEZAHLEN</h1>
      </v-btn>
    </v-col>
    <v-col
      class="text-right"
      cols="2"
    >
      <h1>{{sum}}€</h1>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
import OrderList from '@/components/OrderList.vue'
import CheckOut from '@/components/CheckOut.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    OrderList,
    CheckOut
  },

  data: () => ({
    showOrder: false,
    checkout: false,
  }),

  computed: {
    ...mapState([
      'order'
    ]),
    ...mapGetters([
      'sum'
    ]),
  },
  watch: {
    order(newOrder){
      this.showOrder = this.order.length > 0
    }
  }
};
</script>

<style scoped>
.hide-btn{
  position: fixed;
  top: 50%;
}
</style>