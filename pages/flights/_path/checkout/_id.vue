<template>
  <!-- <div> -->
    <div class="theme-page-section theme-page-section-lg">
      <div class="container">
        <div class="row row-col-static row-col-mob-gap">
          <div class="col-md-8">
            <div class="theme-payment-page-sections">
              <FlightDetails :details="ticketInfo" />
              <div class="theme-payment-page-sections-item">
                <h3 class="theme-payment-page-sections-item-title">
                  مسافر را انتخاب کنید
                </h3>
                <a
                  class="theme-payment-page-sections-item-new-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="AddNewTraveler"
                >
                  اضافه کردن مسافر جدید
                </a>
                <div class="theme-payment-page-sections-item-new-extend">
                  <AddPassenger />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sticky-col">
              <div class="theme-sidebar-section _mb-10">
                <h5 class="theme-sidebar-section-title">اتهامات</h5>
                <div class="theme-sidebar-section-charges">
                  <ul
                    class="theme-sidebar-section-charges-list"
                    v-for="(object, index) in ticketInfo
                      .FLIGHTS_API_AIR_REVALIDATE.PricedItinerary
                      .AirItineraryPricingInfo.PtcFareBreakdown"
                    :key="index"
                  >
                    <!-- <li class="theme-sidebar-section-charges-item"></li> -->
                    <li class="theme-sidebar-section-charges-item">
                      <h5 class="theme-sidebar-section-charges-item-title">
                        {{ object.PassengerTypeQuantity.Quantity }}
                        {{
                          PassengerType[
                            object.PassengerTypeQuantity.PassengerType
                          ]
                        }}
                      </h5>
                      <p class="theme-sidebar-section-charges-item-price">
                        {{ object.PassengerFare.TotalFare }} تومان
                      </p>
                    </li>
                    <!-- <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 بزرگسال
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li> -->
                    <!-- <li class="theme-sidebar-section-charges-item">
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
                  </li> -->
                  </ul>
                  <p class="theme-sidebar-section-charges-total">
                    مجموع
                    <!-- <span>670000 تومان</span> -->
                    <span
                      >{{
                        ticketInfo.FLIGHTS_API_AIR_REVALIDATE.PricedItinerary
                          .AirItineraryPricingInfo.ItinTotalFare.TotalFare
                      }}
                      تومان</span
                    >
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
              <pre dir="ltr"
                >{{ ticketInfo.FLIGHTS_API_AIR_REVALIDATE.PricedItinerary }}
            </pre
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import axios from 'axios'
import AddPassenger from '~/components/Payment/AddPassenger.vue'
import FlightDetails from '~/components/Payment/Details.vue'
import PassengerType from '@/assets/data/PassengerType.json'

export default {
  components: {
    AddPassenger,
    FlightDetails,
  },
  layout: 'profile',
  data() {
    return {
      ticketInfo: null,
      PassengerType: PassengerType,
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
        SessionId: this.$cookies.get('SessionID'),
        FareSourceCode: this.$route.query.FareSourceCode,
      },
    })
      .then((response) => {
        this.ticketInfo = response.data
        // this.ticketInfo = response.data.FLIGHTS_API_AIR_REVALIDATE.PricedItinerary.AirItineraryPricingInfo.ItinTotalFare.TotalFare
        console.log('response', response.data)
      })
      .catch((error) => {
        console.log('error', error.response)
      })
  },
  methods: {
    // getHour(date){
    //   return
    // }
  },
}
</script>
