<template>
  <div class="theme-search-area theme-search-area-white">
    <div class="theme-search-area-form">
      <div class="row" data-gutter="30">
        <!-- Choose source and dest -->
        <div class="col-md-5">
          <div class="row" data-gutter="30">
            <div class="col-md-6">
              <div
                class="theme-search-area-section first theme-search-area-section-line"
              >
                <div class="theme-search-area-section-inner">
                  <search-select
                    v-model="departure"
                    :options="cities"
                    :filter-function="applySearchFilter"
                    placeholder="مبدا"
                  ></search-select>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-line"
              >
                <div class="theme-search-area-section-inner">
                  <i
                    class="theme-search-area-section-icon lin lin-location-pin"
                  ></i>
                  <search-select
                    v-model="destination"
                    :options="cities"
                    :filter-function="applySearchFilter"
                    placeholder="مقصد"
                  ></search-select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Choose date of depart and return -->
        <div class="col-md-6">
          <div class="row" data-gutter="30">
            <div
              class=""
              :class="[selected == 'two-way' ? 'col-md-4' : 'col-md-6']"
            >
              <div
                class="theme-search-area-section theme-search-area-section-line"
              >
                <div class="theme-search-area-section-inner">
                  <i
                    class="theme-search-area-section-icon lin lin-calendar"
                  ></i>
                  <input
                    class="theme-search-area-section-input datePickerStart _mob-h depart-input-desktop"
                    value=""
                    type="text"
                    placeholder="تاریخ رفت"
                  />
                  <date-picker
                    v-model="start"
                    simple
                    :min="new Date()"
                    format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD"
                    custom-input=".depart-input-desktop"
                  />
                  <input
                    class="theme-search-area-section-input _desk-h mobile-picker depart-input-mobile"
                    placeholder="تاریخ رفت"
                    type="text"
                  />
                  <date-picker
                    v-model="start"
                    simple
                    :min="new Date()"
                    format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD"
                    custom-input=".depart-input-mobile"
                  />
                </div>
              </div>
            </div>
            <div
              class=""
              :class="[selected == 'two-way' ? 'col-md-4' : 'hidden']"
            >
              <div
                class="theme-search-area-section theme-search-area-section-line"
              >
                <div class="theme-search-area-section-inner">
                  <i
                    class="theme-search-area-section-icon lin lin-calendar"
                  ></i>
                  <input
                    class="theme-search-area-section-input datePickerEnd _mob-h return-input-desktop"
                    value=""
                    type="text"
                    placeholder="تاریخ برگشت"
                  />
                  <date-picker
                    v-model="end"
                    simple
                    :disabled="!tommorow"
                    :min="tommorow"
                    format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD"
                    custom-input=".return-input-desktop"
                  />
                  <input
                    class="theme-search-area-section-input _desk-h mobile-picker return-input-mobile"
                    placeholder="تاریخ برگشت"
                    type="text"
                  />

                  <date-picker
                    v-model="end"
                    simple
                    :disabled="!tommorow"
                    :min="tommorow"
                    format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD"
                    custom-input=".return-input-mobile"
                  />
                </div>
              </div>
            </div>
            <div
              class=""
              :class="[selected == 'two-way' ? 'col-md-4' : 'col-md-6']"
            >
              <div
                class="theme-search-area-section theme-search-area-section-line quantity-selector"
              >
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-people"></i>

                  <button
                    class="theme-search-area-section-input"
                    @click="toggle"
                  >
                    {{ totalPassengers }} مسافر
                  </button>
                  <div v-show="isOpen" class="content">
                    <div class="quantity-selector-box show">
                      <div class="quantity-selector-inner">
                        <p class="quantity-selector-title">بزرگسال</p>
                        <ul class="quantity-selector-controls">
                          <li class="quantity-selector-decrement">
                            <button
                              :style="[
                                adult <= 1
                                  ? { background: '#6ca5b6' }
                                  : { background: '#44b3d7' },
                              ]"
                              @click="minusAdult"
                            >
                              -
                            </button>
                          </li>
                          <li class="quantity-selector-current">
                            {{ adult }}
                          </li>
                          <li class="quantity-selector-increment">
                            <button @click="addAdult">+</button>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class="quantity-selector-inner">
                        <p class="quantity-selector-title">کودک</p>
                        <ul class="quantity-selector-controls">
                          <li class="quantity-selector-decrement">
                            <button
                              :style="[
                                child <= 0
                                  ? { background: '#6ca5b6' }
                                  : { background: '#44b3d7' },
                              ]"
                              @click="minusChild"
                            >
                              -
                            </button>
                          </li>
                          <li class="quantity-selector-current">
                            {{ child }}
                          </li>
                          <li class="quantity-selector-increment">
                            <button @click="addChild">+</button>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class="quantity-selector-inner">
                        <p class="quantity-selector-title">نوزاد</p>
                        <ul class="quantity-selector-controls">
                          <li class="quantity-selector-decrement">
                            <button
                              :style="[
                                infant <= 0
                                  ? { background: '#6ca5b6' }
                                  : { background: '#44b3d7' },
                              ]"
                              @click="minusInfant"
                            >
                              -
                            </button>
                          </li>
                          <li class="quantity-selector-current">
                            {{ infant }}
                          </li>
                          <li class="quantity-selector-increment">
                            <button @click="addInfant">+</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- submit button -->
        <div class="col-md-1">
          <button
            class="theme-search-area-submit _mt-0 _fs-xl theme-search-area-submit-curved theme-search-area-submit-primary theme-search-area-submit-glow"
            @click.prevent="onsubmit"
            type="submit"
          >
            ←
          </button>
        </div>
      </div>
    </div>
    <!-- <div dir="ltr">
      {{ cities }}
      <hr />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import PersianDate from '@alireza-ab/persian-date'
import CityList from '@/assets/data/CitiesList.json'
import SearchSelect from '~/components/test/SearchSelect.vue'
// import Loading from '~/components/loading.vue'

export default {
  components: {
    SearchSelect,
    // Loading,
  },
  props: ['options'],
  data() {
    return {
      start: '',
      end: '',
      show: false,
      isOpen: false,
      adult: 1,
      child: 0,
      infant: 0,
      selected: 'one-way',
      departure: null,
      destination: null,
      search: '',
      cities: CityList,
      results: null,
      new_cities: [],
      SessionID: null,
    }
  },
  computed: {
    totalPassengers() {
      return this.adult + this.child + this.infant
    },
    tommorow() {
      const today = new Date(this.start)
      const tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      return tomorrow
    },
  },
  mounted() {
    for (let i = 0; i < this.cities.length; i++) {
      this.new_cities.push(this.cities[i].iata)
    }
  },
  methods: {
    addAdult() {
      this.adult += 1
    },
    minusAdult() {
      if (this.adult <= 1) {
        this.adult = 1
      } else {
        this.adult -= 1
      }
    },
    addChild() {
      this.child += 1
    },
    minusChild() {
      if (this.child <= 0) {
        this.child = 0
      } else {
        this.child -= 1
      }
    },
    addInfant() {
      this.infant += 1
    },
    minusInfant() {
      if (this.infant <= 0) {
        this.infant = 0
      } else {
        this.infant -= 1
      }
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    applySearchFilter(search, cities) {
      cities = this.new_cities
      return cities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      )
    },
    onsubmit() {
      const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2UyNzdhYTBmMDE4N2Y2M2U3MTExYzIxNTcwODUwNWQ1NGViN2M1NTIyMWVhOTBiYWVjNjg1NDE2YjMwNjBmMjQzODdhNzdjMTE0MTEzNWEiLCJpYXQiOjE2NTUyOTE1MjAuNjgxMDQzLCJuYmYiOjE2NTUyOTE1MjAuNjgxMDQ2LCJleHAiOjE2ODY4Mjc1MjAuNTUzNDE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kpXB2kb9huAbclEktVHpooynVfQ-FzERbFHbTv-UvlzJIDNAsl8JC7myE8ozU-wwvuphx6TqLB_e0X0DoJVB22Z6pjx-VRHt1rzhhR4WO9eI1_Q1UU7LnerOY6viUgxgkgxrpitRRIWz7KwyZW_v-yHiK0oZ3p_rUitd4ABDVw5zv2ryvoT7NJ3HQjQkiTCHE3jehu0qkCQtVGbM-6Z9-7XrFcL_5pK818Iu53YxJZZuV6DYt2Dm_e2qk7SX0Y31YrlysVSVJZW4awEIokYcjOe_oeD1LGFIB-qTnTivSQar-BPUmouUXOYCyMXINrYtQBlRhyT9I9kmLNNOegFi88EwYVGbJ38uj9SKZ3C9Fr0o-fyQm69WEoOQ0qrKDxXgnbxZxPDAbmctCWysWouZVhMBxFUHsKbT-5oY88TOVdEDBkpp_3JFsDmmA8zpotvLQZw765anyEP_1ZDzh6xm8evq9fXNT4IoRAnwYqPuaWxyWoEuAiN2r5ld4m_7fGJzjG99IafvUD1Do9vuP_mkArrW0OTDeN5YZaGESlrheyuIgFPX2usnvaPcnoXJumdQyEcZxSQ57icCB7FKp4Nh0QQcw2tKUSHJ4F_xydoaD4ptzkNf6UAjeFlQ4tQ4B79ommzK0VLAC9mmilcBFocqhh7QPJgJAswErS8bLR0DzrI'
      axios({
        method: 'post',
        url: '/search',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          AdultCount: this.adult,
          ChildCount: this.child,
          InfantCount: this.infant,
          OriginLocationCode: this.departure,
          DestinationLocationCode: this.destination,
          DepartureDateTime: this.start,
        },
      })
        .then((response) => {
          this.$store.state.results = response.data.FLIGHTS_API_LIST
          // this.$cookies.set('SessionID', response.data.SESSIONID, {
          //   maxAge: 60 * 15,
          // })
          this.$cookies.set('SessionID', response.data.SESSIONID)
          this.$router.push({
            path: 'flights',
            query: {
              Route: this.departure + '-' + this.destination,
              DepartureDate: new PersianDate(this.start)
                .calendar('jalali')
                .toString('?YYYY-?MM-?DD'),
              AdultCount: this.adult,
              ChildCount: this.child,
              InfantCount: this.infant,
            },
          })
          console.log('response', response.data)
        })
        .catch((error) => {
          console.log('error', error.response)
        })
    },
  },
}
</script>
