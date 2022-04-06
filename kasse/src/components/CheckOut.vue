<template>
    <v-dialog
      v-model="value"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card justify="center">
        <v-toolbar
          dark
          color="teal darken-4"
        >
          <v-btn
            icon
            dark
            @click="$emit('input', false)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title>Checkout</v-toolbar-title>
          <v-spacer></v-spacer>
          
          <h1>{{sum}}€</h1>
        </v-toolbar>
        <center>
          <h1>{{sum-display}}€</h1>
          <h1>{{display}}€</h1>
          <v-col
            v-for="m in 4"
            :key="m"
            cols="12"
            sm="6"
            class="py-2"
          >

            <v-item-group
              
              dense
              background-color="primary"
              dark
              multiple
            >
              <v-btn
                v-for="n in 3"
                :key="n"
                class="ma-1"
                fab
                width="110px"
                height="110px"
                @click="onKey(key(n,m))"
              >
                <h1>{{ key(n,m) }}</h1>
              </v-btn>
            </v-item-group>
            
          </v-col>
        </center>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CheckOut',
  props: [
    'value'
  ],
  data () {
    return {
      display: '0',
      mapping : {
        '11': '7',
        '21': '8',
        '31': '9',
        '12': '4',
        '22': '5',
        '32': '6',
        '13': '1',
        '23': '2',
        '33': '3',
        '14': 'C',
        '24': '0',
        '34': '.',
      }
    }
  },
  computed: {
    ...mapGetters([
      'sum'
    ])
  },
  methods: {
    key(n,m){
      return this.mapping[n+''+m]
    },
    onKey(e){
      if(e === 'C'){
        this.display = '0'
      } else if(this.display === '0'){
        this.display = e
      } else {
        this.display += e
      }
    }
  }
}
</script>