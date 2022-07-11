<template>
  <div class="theme-page-section theme-page-section-lg">
    <div class="container">
      <div
        id="sticky-parent"
        class="row row-col-static row-col-mob-gap"
        data-gutter="60"
      >
        <div class="col-md-8">
          <div class="theme-payment-page-sections">
            <FlightDetails />
            {{ ticketInfo }}
            <div class="theme-payment-page-sections-item">
              <h3 class="theme-payment-page-sections-item-title">
                مسافر را انتخاب کنید
              </h3>
              <!-- <div v-text="$PersianDate.toString()"></div> -->
              <!-- <div>{{ $PersianDate.toString() }}</div> -->
              <!-- {{ ticketInfo }} -->
              <!-- <div class="row">
                <div class="col-md-6">
                  <div class="theme-payment-page-form-item form-group">
                    <i class="fa fa-angle-down"></i>
                    <GridMultiSelect
                      v-model="selectedItems"
                      title="انتخاب مسافر"
                      :items="passengers"
                      item-key="national_id"
                      item-label="persian_lname"
                      menu-position="float"
                      empty-message="مسافری انتخاب نشده"
                    />
                  </div>
                </div>
              </div> -->
              {{ this.$store.state.passengers }}
              <br />
              <a
                class="theme-payment-page-sections-item-new-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="AddNewTraveler"
              >
                + اضافه کردن مسافر جدید
              </a>
              <div class="theme-payment-page-sections-item-new-extend">
                <AddPassenger />
              </div>
              <!-- <div
                id="AddNewTraveler"
                class="theme-payment-page-sections-item-new-extend"
              >
                <AddPassenger />
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sticky-col">
            <div class="theme-sidebar-section _mb-10">
              <h5 class="theme-sidebar-section-title">اتهامات</h5>
              <div class="theme-sidebar-section-charges">
                <ul class="theme-sidebar-section-charges-list">
                  <li class="theme-sidebar-section-charges-item"></li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 بزرگسال
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 کودک
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 نوزاد
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      مالیات، کارمزد و اضافه هزینه
                    </h5>
                    <p class="theme-sidebar-section-charges-item-subtitle"></p>
                    <p class="theme-sidebar-section-charges-item-price">
                      55000 تومان
                    </p>
                  </li>
                </ul>
                <p class="theme-sidebar-section-charges-total">
                  مجموع
                  <span>670000 تومان</span>
                </p>
              </div>
            </div>
          </div>
          <div class="theme-payment-page-booking">
            <div class="theme-payment-page-booking-header">
              <p class="theme-sidebar-section-features-list-body">
                کلیک بر روی دکمه رزرو، به منزله موافقت با شرایط و ضوابط ضمانت
                بازگشت پول می‌باشد.
              </p>
            </div>
            <!-- <button
              class="btn _tt-uc btn-primary-inverse btn-lg btn-block"
              href="#"
            >
              رزرو کن
            </button> -->
            <nuxt-link
              class="btn _tt-uc btn-primary-inverse btn-lg btn-block"
              to="/singles/payment"
            >
              رزرو کن
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GridMultiSelect from 'vue-gridmultiselect'
// import 'vue-gridmultiselect/dist/vue-gridmultiselect.css'
import axios from 'axios'
import AddPassenger from '~/components/Payment/AddPassenger.vue'
import FlightDetails from '~/components/Payment/Details.vue'

// import Multiselect from '~/components/Multiselect.vue'
export default {
  // props:{
  //   ticketInfo:{
  //     type:Object,
  //     required:true
  //   }
  // },
  components: {
    // GridMultiSelect,
    AddPassenger,
    FlightDetails,
    // Multiselect
  },
  layout: 'profile',
  data() {
    return {
      // selectedItems: null,
      // latin_fname: '',
      // latin_lname: '',
      // persian_fname: '',
      // persian_lname: '',
      // sex: '',
      // national_id: '',
      // birthday_date: '',
      // birthday_country: '',
      // passport_id: '',
      // passport_issue: '',
      // passport_expire: '',
      ticketInfo: null,
    }
  },
  mounted() {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2UyNzdhYTBmMDE4N2Y2M2U3MTExYzIxNTcwODUwNWQ1NGViN2M1NTIyMWVhOTBiYWVjNjg1NDE2YjMwNjBmMjQzODdhNzdjMTE0MTEzNWEiLCJpYXQiOjE2NTUyOTE1MjAuNjgxMDQzLCJuYmYiOjE2NTUyOTE1MjAuNjgxMDQ2LCJleHAiOjE2ODY4Mjc1MjAuNTUzNDE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kpXB2kb9huAbclEktVHpooynVfQ-FzERbFHbTv-UvlzJIDNAsl8JC7myE8ozU-wwvuphx6TqLB_e0X0DoJVB22Z6pjx-VRHt1rzhhR4WO9eI1_Q1UU7LnerOY6viUgxgkgxrpitRRIWz7KwyZW_v-yHiK0oZ3p_rUitd4ABDVw5zv2ryvoT7NJ3HQjQkiTCHE3jehu0qkCQtVGbM-6Z9-7XrFcL_5pK818Iu53YxJZZuV6DYt2Dm_e2qk7SX0Y31YrlysVSVJZW4awEIokYcjOe_oeD1LGFIB-qTnTivSQar-BPUmouUXOYCyMXINrYtQBlRhyT9I9kmLNNOegFi88EwYVGbJ38uj9SKZ3C9Fr0o-fyQm69WEoOQ0qrKDxXgnbxZxPDAbmctCWysWouZVhMBxFUHsKbT-5oY88TOVdEDBkpp_3JFsDmmA8zpotvLQZw765anyEP_1ZDzh6xm8evq9fXNT4IoRAnwYqPuaWxyWoEuAiN2r5ld4m_7fGJzjG99IafvUD1Do9vuP_mkArrW0OTDeN5YZaGESlrheyuIgFPX2usnvaPcnoXJumdQyEcZxSQ57icCB7FKp4Nh0QQcw2tKUSHJ4F_xydoaD4ptzkNf6UAjeFlQ4tQ4B79ommzK0VLAC9mmilcBFocqhh7QPJgJAswErS8bLR0DzrI'
    axios({
      method: 'post',
      url: '/airrevalidate',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        SessionId: this.$store.state.SessionID,
        // FareSourceCode: this.$route.query.FareSourceCode,
        FareSourceCode: this.$route.query.FareSourceCode,
      },
    })
      .then((response) => {
        this.ticketInfo = response.data.FLIGHTS_API_AIR_REVALIDATE
        console.log('response', response.data)
      })
      .catch((error) => {
        console.log('error', error.response)
      })
  },
  // methods: {
  //   getAge(dateString) {
  //     const today = new Date()
  //     const birthDate = new Date(dateString)
  //     let age = today.getFullYear() - birthDate.getFullYear()
  //     const m = today.getMonth() - birthDate.getMonth()
  //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //       age--
  //     }
  //     return age
  //   },
  // },
}
</script>
