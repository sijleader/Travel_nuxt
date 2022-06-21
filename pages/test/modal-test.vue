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

            <div class="modal-body" dir="ltr">
              <div class="row">
                <div class="col s12 center-align">
                  <h1>
                    <i class="medium material-icons">verified_user</i> ورود یا
                    ثبت‌نام
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
                      <input
                        type="text"
                        id="phoneNumber"
                        v-model="phoneNumber"
                      />
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
          </div>
        </div>
      </div>
      <hr />
      <div>
        <b-button @click="modalShow = !modalShow">Open Modal</b-button>

        <b-modal v-model="modalShow" class="container">Hello From Modal!</b-modal>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
import axios from 'axios'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import Vue from 'vue'
// import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
Vue.component('vue-phone-number-input', VuePhoneNumberInput)
export default {
  layout: 'test',
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js',
        body: true,
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css',
      },
    ],
  },
  data() {
    return {
      phoneNumber: '',
      request: {
        token: '',
        verificationPin: '',
      },
      modalShow: false,
    }
  },
  methods: {
    startTransitionModal() {
      this.$refs.backdrop.classList.toggle('d-block')
      this.$refs.modal.classList.toggle('d-block')
    },
    endTransitionModal() {
      this.$refs.backdrop.classList.toggle('show')
      this.$refs.modal.classList.toggle('show')
    },
    // displayMessage: function (type, message) {
    //   if (type === 'error') {
    //     M.toast({
    //       html: `${message}`,
    //       classes: 'rounded red accent-1',
    //       displayTime: 3000,
    //     })
    //   }
    // },

    sendVerificationCode: async function () {
      const { data } = await axios.post('/verification_api/send', {
        phoneNumber: this.phoneNumber,
      })
      if (!data.token) {
        this.displayMessage('error', data.error_text || data.error)
      } else {
        const { token } = data
        this.request.token = token
      }
    },

    verifyPin: async function () {
      const { data } = await axios.post('/verification_api/verify', {
        token: this.request.token,
        code: this.request.verificationPin,
      })
      if (!data.token) {
        this.displayMessage('error', data.error_text || data.error)
      } else {
        const { token } = data
        this.$store.commit('SET_TOKEN', token)
        this.$nuxt.$router.replace({ path: '/secret' })
      }
    },
  },
  // data() {
  //   return {
  //     phone:'',
  //     modalShow:false,
  //     vuePhone: {
  //       phone: '',
  //       props: {
  //         clearable: true,
  //         fetchCountry: true,
  //         onlycountries: ['IR'],
  //         noExample: true,
  //         noCountrySelector: true,
  //         translations: {
  //           countrySelectorLabel: 'Country code',
  //           countrySelectorError: 'Error',
  //           phoneNumberLabel: 'لطفا شماره خود را وارد نمایید',
  //           example: 'مثال:',
  //         },
  //         results: null,
  //       },
  //     },
  //   }
  // },
  // mounted() {
  //   this.$modal.show('example')
  // },
}
</script>
