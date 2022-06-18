<template>
  <div class="theme-search-area theme-search-area-white">
    <div class="theme-search-area-form">
      <div class="row" data-gutter="30">
        <div class="col-md-3-5">
          <div class="theme-search-area-section first theme-search-area-section-line">
            <div class="theme-search-area-section-inner">
              <i class="theme-search-area-section-icon lin lin-location-pin"></i>
              <!-- <input
                class="theme-search-area-section-input typeahead"
                type="text"
                placeholder="موقعیت هتل"
                data-provide="typeahead"
              /> -->
              <search-select v-model="city" :options="cities" :filter-function="applySearchFilter"
                placeholder="موقعیت هتل"></search-select>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="row" data-gutter="30">
            <div class="col-md-6">
              <div class="theme-search-area-section theme-search-area-section-line">
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-calendar"></i>
                  <input class="theme-search-area-section-input datePickerStart _mob-h check-in-desktop" value=""
                    type="text" placeholder="تاریخ ورود" />
                  <date-picker v-model="check_in" simple :min="new Date()" format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD" custom-input=".check-in-desktop" />
                  <input class="theme-search-area-section-input _desk-h mobile-picker check-in-mobile"
                    placeholder="تاریخ ورود" type="text" />
                  <date-picker v-model="check_in" simple :min="new Date()" format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD" custom-input=".check-in-mobile" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="theme-search-area-section theme-search-area-section-line">
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-calendar"></i>
                  <input class="theme-search-area-section-input datePickerEnd _mob-h check-out-desktop" value=""
                    type="text" placeholder="تاریخ خروج" />
                  <date-picker v-model="check_out" simple :disabled="!check_in" :min="check_in" format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD" custom-input=".check-out-desktop" />
                  <input class="theme-search-area-section-input _desk-h mobile-picker check-out-mobile"
                    placeholder="تاریخ خروج" type="text" />

                  <date-picker v-model="check_out" simple :disabled="!check_in" :min="check_in" format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD" custom-input=".check-out-mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-4">
          <div class="row" data-gutter="30">
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-line quantity-selector"
                data-increment="اتاق ها"
              >
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-tag"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="1 اتاق"
                    type="text"
                  />
                  <div id="HotelSearchRooms" class="quantity-selector-box">
                    <div class="quantity-selector-inner">
                      <p class="quantity-selector-title">اتاق ها</p>
                      <ul class="quantity-selector-controls">
                        <li class="quantity-selector-decrement">
                          <a href="#">-</a>
                        </li>
                        <li class="quantity-selector-current">1</li>
                        <li class="quantity-selector-increment">
                          <a href="#">+</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
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
        </div> -->
        <div class="col-md-1-5">
          <nuxt-link to="/hotel">
            <button
              class="theme-search-area-submit _mt-0 _fs-xl theme-search-area-submit-curved theme-search-area-submit-primary theme-search-area-submit-glow">
              ←
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelect from '~/components/test/SearchSelect.vue'
// import Popper from 'popper.js'
// import OnClickOutside from '~/components/test/OnClickOutside.vue'
export default {
  components: {
    SearchSelect,
  },
  props: ['options'],
  data() {
    return {
      city: null,
      check_in: '',
      check_out: '',
      show: false,
      isOpen: false,
      adult: 1,
      child: 0,
      infant: 0,
      user: '',
      search: '',
      cities: [
        '1LT Lakes, Dale',
        '1LT Ball, Michael',
        'CW3 Latane, Paul',
        'SFC Busby, Ryan',
        'SSG Salinas, Ricky',
        'SSG Hochheimer, Steven',
        'SSG Fossett, Matt',
        'SSG Sabatini, Jesse',
        'SSG jackson, Jeremy',
      ],
    }
  },
  computed: {
    totalPassengers() {
      return this.adult + this.child + this.infant
    },
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
      const sols = this.cities
      return sols.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      )
    },
  },
}
</script>
