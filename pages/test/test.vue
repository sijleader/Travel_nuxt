<template>
  <div>
    <div v-for="user in orderBy(ObjectCounter, 'age', -1)" :key="user.index">
      {{ user.age }}--------------{{ user.name }}
    </div>
    <hr />
    <p>{{ ObjectCounter.length }}</p>
    <hr />
    <div>
      <pre dir="ltr">
        {{ hour("2022-07-09T18:00:00")}}
        <!-- {{moment("2022/07/09")}} -->
        <!-- {{new Intl.DateTimeFormat('fa-IR', {dateStyle: 'full'}).format(new Date("2022/07/09"))}} -->
        <!-- {{ hour("2022-07-09T08:42:00").getTime()}} -->
      </pre>
      <hr />

    </div>
    <hr />
  </div>
</template>

<script>
// import axios from 'axios'
import Vue2Filters from 'vue2-filters'
// import GridMultiSelect from 'vue-gridmultiselect'
import 'vue-gridmultiselect/dist/vue-gridmultiselect.css'
// import { vueWindowSizeMixin } from 'vue-window-size/option-api'
// import { useWindowSize } from 'vue-window-size';
// import moment from 'vue-jalali-moment'
// import Vue from 'vue'
// Vue.use(require('vue-jalali-moment'))
export default {
  mixins: [Vue2Filters.mixin],
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
      cities: null,
      date: null,
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
    hour(datetime) {
      const date = new Intl.DateTimeFormat('fa-IR', {dateStyle: 'full'}).format(new Date(datetime))
      return date
    },
  },
  // mounted() {
  //   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjYxM2NiZGRhZWI1Njk5MmIzZTMxMjBlZTg2YTkzNmUzZDU4Y2RmYmYxNzZiNWJlYjQzOGM1NjM1N2I2MDkyNTE2YWFhNmE3MGViM2ZhNTMiLCJpYXQiOjE2NTU1MzQ0NzQuMzQ1NDcxLCJuYmYiOjE2NTU1MzQ0NzQuMzQ1NDc0LCJleHAiOjE2ODcwNzA0NzQuMDkzNTkxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.pfYV5p68w-2egmftUwXMI4liB5W_6r3w5szjOgUMMmWEXM_GbNA1WZgLYs7uiOHADZ_r3Gm8vYPmV0-GLmLkdckDY-Sqlup-9zmMGMtadjmOnvmR5HBbUNegBZmhi7NjJ_4OP7sgRH6tw1dEbUPXOCnBSBtXqpIHc237XKRmGndg12lvXoqfbSCfqcpS9wID8wCBQVqSfcyIT3BcfQiWhscUNUGCWGM9L-W8Bdjt-qIzE24uIsbk7_8kUa1o6K-GnPNqmL6J_ZnDnP93HzYl24TDvSzVDbBHbhKXXBppFf2WeaJnVqVre3av1m_sJ4y3wl94L1hSnjRH1G_J613p9VUKid4r2QyLX1eXAvVgeqHOQfGEwxlDqvSgCdW_xzR7JkN63Fy9b2JHdgsJfE2Df4btyCcTfW6gL99YDl42z7oRzdx5QJOrD6RCc2QALRagLT7AC_KfxdVRbYEM81YWp-8Kbd3PQS8sJEE8vKIf_OfkA-r2kG7kDeopIt-cIJHIMwu-7ECaoNCVM4L3k1dJuvsHrJeE2duxoa9lmAHd-SCiUa2qHyRYkWFcwxuK2_H7cbOfSl-Sd6ialoNZIWiK118ICWHAz204zOIQM5H8ba8LVFMeg-S9p5atCkVjj5mZZkBIFJj5ccgCmLQ_Gk3xwP4sAkQAgE_G-N_mRMWFEE0'

  //   axios.get('/citieslist',
  //   {
  //     headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //   }
  //   )
  //     .then(response => {
  //       this.cities = response.data.FLIGHTSCITIES
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // mounted() {
  //   this.date = this.hour('2022-07-09T08:42:00')
  // },
}
</script>
