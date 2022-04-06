<template>
  <div style="min-height: 100vh;">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Produkt
            </th>
            <th class="text-left">
              Anzahl
            </th>
            <th class="text-left">
              Preis
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="o in order"
            :key="o.name"
          >
            <td>{{ o.name }}</td>
            <td>{{ o.number }}</td>
            <td>{{ o.price }}€</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div style="height: 100px;" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'OrderList',

  data() {
    return {}
  },
  computed: {
    ...mapState([
      'order'
    ]),
    ...mapGetters([
      'sum'
    ]),
  },
  watch: {
    order(){
      const options = {

      }
      //this.$vuetify.goTo(9999, options)
    }
  }
}

</script>

<style>

</style>