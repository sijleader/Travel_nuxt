<template>
  <div>
    <div v-for="user in orderBy(ObjectCounter, 'age', -1)" :key="user.index">
      {{ user.age }}--------------{{ user.name }}
    </div>
    <hr />
    <p>{{ ObjectCounter.length }}</p>
    <hr />
    <!-- <GridMultiSelect
      v-model="selectedItems"
      :items="items"
      item-key="national_id"
      item-label=" last_name"
    /> -->
    <hr />
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map :zoom="130" :center="[36.31095, 59.54853]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[36.31095, 59.54853]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters'
// import GridMultiSelect from 'vue-gridmultiselect'
import 'vue-gridmultiselect/dist/vue-gridmultiselect.css'
export default {
  // components: { GridMultiSelect },
  mixins: [Vue2Filters.mixin],
  // vuetify: new Vuetify(),
  layout: 'test',
  data() {
    return {
      users: [
        {
          index: 0,
          age: 0,
          name: 'Bonita Valenzuela',
          gender: 'female',
          airline: 'Mahan',
        },
        {
          index: 1,
          age: 1,
          name: 'Chaney Reed',
          gender: 'male',
          airline: 'Mahan',
        },
        {
          index: 2,
          age: 2,
          name: 'Sandoval Smith',
          gender: 'male',
          airline: 'Mahan',
        },
        {
          index: 3,
          age: 3,
          name: 'Judy Schroeder',
          gender: 'female',
          airline: 'Mahan',
        },
        {
          index: 4,
          age: 4,
          name: 'Thelma Cervantes',
          gender: 'female',
          airline: 'Mahan',
        },
        {
          index: 5,
          age: 5,
          name: 'Zamora Huff',
          gender: 'male',
          airline: 'Mahan',
        },
        {
          index: 6,
          age: 6,
          name: 'Alma Mullen',
          gender: 'female',
          airline: 'Mahan',
        },
        {
          index: 7,
          age: 7,
          name: 'Aisha Pugh',
          gender: 'female',
          airline: 'Mahan',
        },
        {
          index: 8,
          age: 8,
          name: 'Deana Clarke',
          gender: 'female',
          airline: 'Mahan',
        },
        { index: 9, age: 9, name: 'Blankenship Contreras', gender: 'male' },
        { index: 10, age: 10, name: 'Coleen Short', gender: 'female' },
        { index: 11, age: 11, name: 'Owen Reilly', gender: 'male' },
        { index: 12, age: 12, name: 'Tucker Conway', gender: 'male' },
        {
          index: 13,
          age: 13,
          name: 'Nadine Wiggins',
          gender: 'female',
          airline: 'Mahan',
        },
        { index: 14, age: 14, name: 'Tommie Austin', gender: 'female' },
        {
          index: 15,
          age: 15,
          name: 'Luz Singleton',
          gender: 'female',
          airline: 'Mahan',
        },
        { index: 16, age: 16, name: 'Myrna Carpenter', gender: 'female' },
        { index: 17, age: 17, name: 'Schneider Blankenship', gender: 'male' },
        { index: 18, age: 18, name: 'Heather Chapman', gender: 'female' },
        { index: 19, age: 19, name: 'Katelyn Reese', gender: 'female' },
        { index: 20, age: 20, name: 'Elvira Guzman', gender: 'female' },
        { index: 21, age: 21, name: 'Gibbs Kinney', gender: 'male' },
        { index: 22, age: 22, name: 'Felicia Mccullough', gender: 'female' },
        { index: 23, age: 23, name: 'Brock Malone', gender: 'male' },
        { index: 24, age: 24, name: 'Jayne Willis', gender: 'female' },
        { index: 25, age: 25, name: 'Bennett Burns', gender: 'male' },
        { index: 26, age: 26, name: 'Gamble Moore', gender: 'male' },
      ],
    }
  },
  computed: {
    ObjectCounter() {
      return this.filterBy(
        this.users,
        (user) => user.age >= 16 && user.age < 60
      )
    },
    // Differ() {
    //   const date = new PersianDate([1400, 1, 1], 'jalali')

    //   return date.diff('1399/9', 'date') + ' days'

    // },
  },
  methods: {
    onSelect(option, id) {
      console.log(option, id)
    },
  },
  // mounted() {
  //   this.date = this.$PersianDate.clone().month(5).toString()
  // },
}
</script>
