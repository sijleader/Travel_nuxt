<template>
  <div
    class="theme-search-area _mob-h theme-search-area-white theme-search-area-stacked"
  >
    <div class="theme-search-area-header _ta-c">
      <h1 class="theme-search-area-title theme-search-area-title-sm">
        175 پرواز به تهران
      </h1>
      <p class="theme-search-area-subtitle">
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
      </p>
    </div>
    <div id="hero-search-form" class="theme-search-area-form">
      <div class="row" data-gutter="none">
        <div class="col-md-5">
          <div class="row" data-gutter="none">
            <div class="col-md-6">
              <div
                class="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-sm"
              >
                <div class="theme-search-area-section-inner">
                  <i
                    class="theme-search-area-section-icon lin lin-location-pin"
                  ></i>
                  <input
                    class="theme-search-area-section-input typeahead"
                    type="text"
                    placeholder="مبدا"
                    data-provide="typeahead"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
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
        <div class="col-md-6">
          <div class="row" data-gutter="none">
            <div class="" :class="[selected == 'two-way' ? 'col-md-4' : 'col-md-6']">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
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
                    popover="bottom-left"
                  />
                </div>
              </div>
            </div>
            <div class="" :class="[selected == 'two-way' ? 'col-md-4' : 'hidden']">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
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
                    popover="bottom-left"
                  />
                </div>
              </div>
            </div>
            <div class="" :class="[selected == 'two-way' ? 'col-md-4' : 'col-md-6']">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
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
        <div class="col-md-1">
          <button
            class="theme-search-area-submit _tt-uc _mt-0 theme-search-area-submit-curved theme-search-area-submit-sm"
          >
            ویرایش کنید
          </button>
        </div>
      </div>
    </div>
    <div
      class="theme-search-area-options theme-search-area-options-center theme-search-area-options-dot-primary-inverse clearfix"
    >
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
export default {
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
  },
}
</script>
