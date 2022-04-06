<template>
  <div class="home">
    <center>
    <v-btn class="ma-15" @click="add()">Add</v-btn>
    <v-btn class="ma-15" @click="clearOrder()">Clear</v-btn>
    </center>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    ...mapMutations([
      'appendOrder',
      'clearOrder'
    ]),
    add(){
      const order = {
        name: 'test',
        price: 1,
        number: 1
      }
      this.appendOrder(order)
    }
  }
}
</script>
