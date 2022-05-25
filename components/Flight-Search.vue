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
                  <i
                    class="theme-search-area-section-icon lin lin-location-pin"
                  ></i>
                  <!-- <input
                    class="theme-search-area-section-input typeahead"
                    type="text"
                    placeholder="مبدا"
                    data-provide="typeahead"
                  /> -->
                  <search-select
                    v-model="selectedSoldier"
                    :options="soldiers"
                    :filter-function="applySearchFilter"
                  ></search-select>

                  <!-- <div>{{ selectedSoldier }}</div> -->
                  <!-- <datalist id="suggestions">
                    <option>First option</option>
                    <option>Second Option</option>
                  </datalist> -->
                  <!-- <v-select
                    v-model="user"
                    :options="users_options"
                  >
                  </v-select> -->
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
                  <input
                    class="theme-search-area-section-input typeahead"
                    type="text"
                    placeholder="مقصد"
                    data-provide="typeahead"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Choose date of depart and return -->
        <div class="col-md-6">
          <div v-if="selected == 'two-way'" class="row" data-gutter="30">
            <!-- depart -->
            <div class="col-md-4">
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
            <!-- return -->
            <div class="col-md-4">
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
                    :disabled="!start"
                    :min="start"
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
                    :disabled="!start"
                    :min="start"
                    format="YYYY-MM-DD"
                    display-format="jYYYY-jMM-jDD"
                    custom-input=".return-input-mobile"
                  />
                </div>
              </div>
            </div>
            <!-- passengers -->
            <div class="col-md-4">
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
          <div v-else class="row" data-gutter="30">
            <!-- depart -->
            <div class="col-md-6">
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
            <!-- passengers -->
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
        </div>
        <!-- submit button -->
        <div class="col-md-1">
          <nuxt-link to="/flights">
            <button
              class="theme-search-area-submit _mt-0 _fs-xl theme-search-area-submit-curved theme-search-area-submit-primary theme-search-area-submit-glow"
            >
              ←
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="theme-search-area-options clearfix">
      <div
        class="btn-group theme-search-area-options-list"
        data-bs-toggle="buttons"
      >
        <input v-model="selected" type="radio" value="one-way" />یک طرفه
        <input v-model="selected" type="radio" value="two-way" checked="" />رفت
        و برگشت
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelect from "~/components/test/SearchSelect.vue"

export default {
  components: {
    SearchSelect
  },
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
      user: '',
      country: 0,
      users_options: [
        'Yogesh singh',
        'Sunil singh',
        'Sonarika bhadoria',
        'Akilesh sahu',
        'Mayank patidar',
      ],
      selectedSoldier: null,
      search: "",
      soldiers: [
        "1LT Lakes, Dale",
        "1LT Ball, Michael",
        "CW3 Latane, Paul",
        "SFC Busby, Ryan",
        "SSG Salinas, Ricky",
        "SSG Hochheimer, Steven",
        "SSG Fossett, Matt",
        "SSG Sabatini, Jesse",
        "SSG jackson, Jeremy"
      ]
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
    applySearchFilter(search, soldiers) {
      return soldiers.filter((soldier) =>
        soldier.toLowerCase().startsWith(search.toLowerCase())
      )
    }
  },
}
</script>
