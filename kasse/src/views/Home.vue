<template>
  <div class="home">
    <v-btn @click="add()">Add</v-btn>
    <v-btn @click="clearOrder()">Clear</v-btn>
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
