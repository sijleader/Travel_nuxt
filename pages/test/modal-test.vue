<template>
  <div>
    <div class="container">
      <div class="container mt-3">
        <h3>Modal Example</h3>
        <p>Click on the button to open the modal.</p>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Open modal
        </button>
        <!-- <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button> -->
      </div>

      <!-- The Modal -->

      <div id="myModal" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <!-- <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button> -->
            </div>

            <div
              class="theme-search-area-inline _desk-h theme-search-area-inline-white"
            >
              <a
                class="theme-search-area-inline-link magnific-inline"
                href="#searchEditModal"
              >
                <i class="fa fa-pencil"></i>ویرایش کنید
              </a>
              <div
                class="magnific-popup magnific-popup-sm"
                id="searchEditModal"
              >
                <div class="theme-search-area theme-search-area-vert">
                  <div class="theme-search-area-header">
                    <h1
                      class="theme-search-area-title theme-search-area-title-sm"
                    >
                      جستجوی خود را ویرایش کنید
                    </h1>
                    <p class="theme-search-area-subtitle">
                      ممکن است قیمت ها با نتایج فعلی متفبهمن باشد
                    </p>
                  </div>
                  <div class="theme-search-area-form">
                    <div
                      class="theme-search-area-section first theme-search-area-section-curved"
                    >
                      <label class="theme-search-area-section-label"
                        >از جانب</label
                      >
                      <div class="theme-search-area-section-inner">
                        <i
                          class="theme-search-area-section-icon lin lin-location-pin"
                        ></i>
                        <input
                          class="theme-search-area-section-input typeahead"
                          value="تهران"
                          type="text"
                          placeholder="مبدا"
                          data-provide="typeahead"
                        />
                      </div>
                    </div>
                    <div
                      class="theme-search-area-section theme-search-area-section-curved"
                    >
                      <label class="theme-search-area-section-label"
                        >تاریخ</label
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
                    <div class="row" data-gutter="10">
                      <div class="col-md-6">
                        <div
                          class="theme-search-area-section theme-search-area-section-curved"
                        >
                          <label class="theme-search-area-section-label"
                            >رفتن</label
                          >
                          <div class="theme-search-area-section-inner">
                            <i
                              class="theme-search-area-section-icon lin lin-calendar"
                            ></i>
                            <input
                              class="theme-search-area-section-input datePickerStart _mob-h"
                              value="تاریخ رفت"
                              id="datepicker-check-in"
                              type="text"
                              placeholder="تاریخ رفت"
                            />
                            <input
                              class="theme-search-area-section-input _desk-h mobile-picker"
                              value="1400-06-27"
                              type="date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="theme-search-area-section theme-search-area-section-curved"
                        >
                          <label class="theme-search-area-section-label"
                            >ورود</label
                          >
                          <div class="theme-search-area-section-inner">
                            <i
                              class="theme-search-area-section-icon lin lin-calendar"
                            ></i>
                            <input
                              class="theme-search-area-section-input datePickerEnd _mob-h"
                              value=""
                              type="text"
                              placeholder="تاریخ برگشت"
                              id="datepicker-check-out"
                            />
                            <input
                              class="theme-search-area-section-input _desk-h mobile-picker"
                              value="1400-07-02"
                              type="date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="theme-search-area-section theme-search-area-section-curved quantity-selector"
                      data-increment="مسافر"
                    >
                      <label class="theme-search-area-section-label"
                        >مسافران</label
                      >
                      <div class="theme-search-area-section-inner">
                        <i
                          class="theme-search-area-section-icon lin lin-people"
                        ></i>
                        <input
                          class="theme-search-area-section-input"
                          value="1 مسافر"
                          type="text"
                        />
                        <div
                          class="quantity-selector-box"
                          id="mobile-FlySearchPassengers"
                        >
                          <div class="quantity-selector-inner">
                            <p class="quantity-selector-title">مسافران</p>
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
                    <button
                      class="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-curved"
                    >
                      تغییر دادن
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
            <!-- <div class="modal-body" dir="ltr">
            <div class="row">
              <div class="col s12 center-align">
                <h1>
                  <i class="medium material-icons">verified_user</i> ورود یا ثبت‌نام
                </h1>
                <h3>
                  <i class="medium material-icons">verified_user</i>
                   برای ادامه شماره موبایل خود را وارد کنید.
                </h3>
              </div>
            </div>
            <div class="row" v-if="request.token === ''">
              <form v-on:submit.prevent class="col s12">
                <div class="row center-align">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">phone</i>
                    <input type="text" id="phoneNumber" v-model="phoneNumber" />
                    <label for="phoneNumber"> Phone Number</label>
                  </div>
                  <div class="row center-align">
                    <button
                      v-on:click.stop.prevent="sendVerificationCode"
                      type="submit"
                      class="waves-effect waves-light btn"
                    >
                      <i class="material-icons left">account_box</i>Send me a
                      verifiation code
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="row" v-else>
              <form v-on:submit.prevent class="col s12">
                <div class="row center-align">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">sms</i>
                    <input
                      type="text"
                      id="verificationPin"
                      v-model="request.verificationPin"
                    />
                    <label for="verificationPin">
                      Enter the pin you were sent</label
                    >
                  </div>
                  <div class="row center-align">
                    <button
                      v-on:click.stop.prevent="verifyPin"
                      type="submit"
                      class="waves-effect waves-light btn"
                    >
                      <i class="material-icons left">account_box</i>Verify me
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div> -->
          </div>
        </div>
      </div>
    </div>
    <hr />
<div>
    <b-button @click="modalShow = !modalShow">Open Modal</b-button>

    <b-modal v-model="modalShow">Hello From Modal!</b-modal>
  </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
// import axios from 'axios'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import Vue from 'vue'
// import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
Vue.component('vue-phone-number-input', VuePhoneNumberInput)
export default {
  layout:'test',
  // head: {
  //   meta: [
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  //   ],
  //   script: [
  //     {
  //       src:
  //         'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js',
  //       body: true
  //     }
  //   ],
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href:
  //         'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css'
  //     }
  //   ]
  // },
  // data() {
  //   return {
  //     phoneNumber: '',
  //     request: {
  //       token: '',
  //       verificationPin: '',
  //     },
  //   }
  // },
  // methods: {
  //   displayMessage: function (type, message) {
  //     if (type === 'error') {
  //       M.toast({
  //         html: `${message}`,
  //         classes: 'rounded red accent-1',
  //         displayTime: 3000,
  //       })
  //     }
  //   },

  //   sendVerificationCode: async function () {
  //     const { data } = await axios.post('/verification_api/send', {
  //       phoneNumber: this.phoneNumber,
  //     })
  //     if (!data.token) {
  //       this.displayMessage('error', data.error_text || data.error)
  //     } else {
  //       const { token } = data
  //       this.request.token = token
  //     }
  //   },

  //   verifyPin: async function () {
  //     const { data } = await axios.post('/verification_api/verify', {
  //       token: this.request.token,
  //       code: this.request.verificationPin,
  //     })
  //     if (!data.token) {
  //       this.displayMessage('error', data.error_text || data.error)
  //     } else {
  //       const { token } = data
  //       this.$store.commit('SET_TOKEN', token)
  //       this.$nuxt.$router.replace({ path: '/secret' })
  //     }
  //   },
  // },
  data() {
    return {
      modalShow:false,
      vuePhone: {
        phone: '',
        props: {
          clearable: true,
          fetchCountry: true,
          onlycountries: ['IR'],
          noExample: true,
          noCountrySelector: true,
          translations: {
            countrySelectorLabel: 'Country code',
            countrySelectorError: 'Error',
            phoneNumberLabel: 'لطفا شماره خود را وارد نمایید',
            example: 'مثال:',
          },
          results: null,
        },
      },
    }
  },
  // mounted() {
  //   this.$modal.show('example')
  // },
}
</script>
