<template>
  <div class="theme-page-section theme-page-section-lg">
    <div class="container">
      <div class="row row-col-static row-col-mob-gap">
        <div class="col-md-8">
          <div class="theme-payment-page-sections">
            <!-- <FlightDetails :details="ticketInfo" /> -->
            <div class="theme-payment-page-sections-item">
    <div class="theme-search-results-item theme-payment-page-item-thumb">
      <div class="row" data-gutter="20">
        <div class="col-md-9">
          <h2 class="theme-search-results-item-flight-payment-airline">
            شما در حال پرواز با خطوط هوایی آمریکا هستید
          </h2>
          <h5 class="theme-search-results-item-title">{{ticketInfo.OriginDestinationOptions[0].ArrivalAirportLocationCode}} ← {{ticketInfo.OriginDestinationOptions[0].DepartureAirportLocationCode}}</h5>          
          <div class="theme-search-results-item-flight-detail-items">
            <div class="theme-search-results-item-flight-details">
              <div class="row">
                <div class="col-md-3 col-xs-3">
                  <div class="theme-search-results-item-flight-details-info">
                    <h5
                      class="theme-search-results-item-flight-details-info-title"
                    >
                      پرواز {{ AirTripType[ticketInfo.DirectionInd]}}
                    </h5>
                    <p
                      class="theme-search-results-item-flight-details-info"
                    >
                      
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-date"
                    >
                      {{date(ticketInfo.OriginDestinationOptions[0].DepartureDateTime)}}
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-cities"
                    >
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-fly-time"
                    >
                      <p v-for="(object, index) in ticketInfo.AirItineraryPricingInfo
                    .PtcFareBreakdown"
                  :key="index" class="theme-search-results-item-flight-payment-info">
             {{ object.PassengerTypeQuantity.Quantity }} {{
                        PassengerType[
                          object.PassengerTypeQuantity.PassengerType
                        ]
                      }}
          </p>
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-stops"
                    >
                    </p>
                  </div>
                </div>
                <div class="col-md-9 col-xs-9">
                  <div
                    class="theme-search-results-item-flight-details-schedule"
                  >
                    <ul
                      class="theme-search-results-item-flight-details-schedule-list"
                    >
                      <li>
                        <i
                          class="fa fa-plane theme-search-results-item-flight-details-schedule-icon"
                        ></i>
                        <div
                          class="theme-search-results-item-flight-details-schedule-dots"
                        ></div>
                        <p
                          class="theme-search-results-item-flight-details-schedule-date"
                        >
                          سه شنبه 23 می
                        </p>
                        <div
                          class="theme-search-results-item-flight-details-schedule-time"
                        >
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-item"
                            >
                            {{hour(ticketInfo.OriginDestinationOptions[0].DepartureDateTime)}}
                          </span>
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-separator"
                          >
                            الی
                          </span>
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-item"
                            >
                            {{hour(ticketInfo.OriginDestinationOptions[0].ArrivalDateTime)}}
                          </span>
                        </div>
                        <p
                          class="theme-search-results-item-flight-details-schedule-fly-time"
                        >
                          {{ticketInfo.OriginDestinationOptions[0].JourneyDurationPerMinute}}دقیقه
                        </p>
                        <div
                          class="theme-search-results-item-flight-details-schedule-destination"
                        >
                          <div
                            class="theme-search-results-item-flight-details-schedule-destination-item"
                          >
                            <p
                              class="theme-search-results-item-flight-details-schedule-destination-title"
                            >
                              {{ticketInfo.OriginDestinationOptions[0].DepartureAirportLocationCode}}
                            </p>
                            <p
                              class="theme-search-results-item-flight-details-schedule-destination-city"
                            >
                              ایران
                            </p>
                          </div>
                          <div
                            class="theme-search-results-item-flight-details-schedule-destination-separator"
                          >
                            <span>←</span>
                          </div>
                          <div
                            class="theme-search-results-item-flight-details-schedule-destination-item"
                          >
                            <p
                              class="theme-search-results-item-flight-details-schedule-destination-title"
                            >
                              {{ticketInfo.OriginDestinationOptions[0].ArrivalAirportLocationCode}}
                            </p>
                            <p
                              class="theme-search-results-item-flight-details-schedule-destination-city"
                            >
                              ایران
                            </p>
                          </div>
                        </div>
                        <ul
                          class="theme-search-results-item-flight-details-schedule-features"
                        >
                          <li>پرواز {{ticketInfo.OriginDestinationOptions[0].FlightNumber}} </li>
                          <li>{{ticketInfo.OriginDestinationOptions[0].Equipment}}</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="theme-search-results-item-img-wrap">
            <img
              class="theme-search-results-item-img _mob-h"
              src="/img/airline-logo/aa.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
            <div class="theme-payment-page-sections-item">
              <h3 class="theme-payment-page-sections-item-title">
                مسافر را انتخاب کنید
              </h3>
              {{ this.$store.state.passengers }}
              <a
                class="theme-payment-page-sections-item-new-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="AddNewTraveler"
              >
                اضافه کردن مسافر جدید
              </a>
              <div class="theme-payment-page-sections-item-new-extend">
                <!-- <AddPassenger /> -->
                <div class="theme-payment-page-form">
                  <h3 class="theme-payment-page-form-title">اطلاعات مسافر</h3>
                  <div class="row row-col-gap" data-gutter="20">
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          v-model="latin_fname"
                          class="form-control"
                          type="text"
                          placeholder="نام (لاتین)"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          v-model="latin_lname"
                          class="form-control"
                          type="text"
                          placeholder="نام خانوادگی (لاتین)"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          v-model="persian_fname"
                          class="form-control"
                          type="text"
                          placeholder="نام (فارسی)"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          v-model="persian_lname"
                          class="form-control"
                          type="text"
                          placeholder="نام خانوادگی (فارسی)"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <i class="fa fa-angle-down"></i>
                        <select v-model="sex" class="form-control">
                          <option value="null">جنسیت</option>
                          <option disabled>
                            -- Please select an option --
                          </option>
                          <option value="male">آقا</option>
                          <option value="female">خانم</option>
                        </select>
                        <div>Picked: {{ sex }}</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          v-model="national_id"
                          class="form-control"
                          type="text"
                          placeholder="کد ملی"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          value=""
                          class="form-control birthday"
                          type="text"
                          placeholder="تاریخ تولد"
                        />
                        <date-picker
                          v-model="birthday_date"
                          simple
                          :start="new Date()"
                          format="YYYY-MM-DD"
                          display-format="jYYYY-jMM-jDD"
                          custom-input=".birthday"
                        />
                      </div>
                      {{ getAge(birthday_date) }}
                    </div>
                    <!-- <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <i class="fa fa-angle-down"></i>
          <select v-model="birthday_country" class="form-control">
            <option disabled>کشور محل تولد</option>
            <option value="iran">ایران</option>
          </select>
        </div>
      </div> -->
                    <!-- <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="passport_id"
            class="form-control"
            type="text"
            placeholder="شماره پاسپورت"
          />
        </div>
      </div> -->
                    <div class="col-md-3">
                      <div class="theme-payment-page-form-item form-group">
                        <input
                          v-model="phoneNumber"
                          class="form-control"
                          type="text"
                          placeholder="تلفن همراه"
                          maxlength="11"
                        />
                      </div>
                    </div>
                    <!-- <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="passport_expire"
            class="form-control"
            type="text"
            placeholder="تاریخ انقضای پاسپورت"
          />
        </div>
      </div> -->
                    <div class="col-md-12">
                      <div class="theme-payment-page-form-item form-group">
                        <div class="row fix-button buttons">
                          <div class="col-xs-4 col-md-6 item-modal-mobile">
                            <button
                              type="button"
                              class="btn btn-warning btn-outline btn-block"
                            >
                              لغو
                            </button>
                          </div>
                          <div class="col-xs-8 col-md-6 parent-of-confirm-edit">
                            <button
                              class="btn btn-primary btn-block"
                              type="submit"
                              @click.prevent="addPassenger()"
                            >
                              ثبت
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  v-for="(object, index) in ticketInfo.AirItineraryPricingInfo
                    .PtcFareBreakdown"
                  :key="index"
                >
                  <li class="theme-sidebar-section-charges-item"></li>
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
                </ul>
                <p class="theme-sidebar-section-charges-total">
                  مجموع
                  <span>
                    {{
                      ticketInfo.AirItineraryPricingInfo.ItinTotalFare.TotalFare
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
            <button
              class="btn _tt-uc btn-primary-inverse btn-lg btn-block"
              @click.prevent="book"
              type="submit"
            >
              رزرو کن
            </button>
            <pre dir="ltr">
            <!-- {{this.$store.state.UniqueId}} -->
              <!-- {{this.$store.state.UniqueId}} -->
              <hr>
            <p v-html="refid"></p>            
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AirTripType from "@/assets/data/AirTripType.json"
import PassengerType from '@/assets/data/PassengerType.json'

export default {
  layout: 'profile',
  data() {
    return {
      ticketInfo: this.$store.state.TicketInfo,
      PassengerType: PassengerType,
      AirTripType:AirTripType,
      latin_fname: '',
      latin_lname: '',
      persian_fname: '',
      persian_lname: '',
      sex: '',
      national_id: '',
      birthday_date: '',
      phoneNumber: '',
      // birthday_country: '',
      // passport_id: '',
      // passport_issue: '',
      // passport_expire: '',
      results: null,
      refid:null
    }
  },
  methods: {
    hour(datetime) {
      const time = new Intl.DateTimeFormat('fa-IR', {
        timeStyle: 'short',
      }).format(new Date(datetime))
      return time
    },
    date(datetime) {
      const date = new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'medium',
      }).format(new Date(datetime))
      return date
    },
    getAge(dateString) {
      const today = new Date()
      const birthDate = new Date(dateString)
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },
    isValidIranianNationalCode(input) {
      if (!/^\d{10}$/.test(input)) return false
      const check = +input[9]
      const sum =
        input
          .split('')
          .slice(0, 9)
          .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11
      return sum < 2 ? check === sum : check + sum === 11
    },
    addPassenger() {
      const passengerData = {
        FirstName: this.persian_fname,
        LastName: this.persian_lname,
        FirstNameE: this.latin_fname,
        LastNameE: this.latin_lname,
        pGender: this.sex,
        meliCode: this.national_id,
        birthday: this.birthday_date,
        phoneNumber: this.phoneNumber,
        // nationality: this.birthday_country,
        // passNumber: this.passport_id,
        // passport_issue: this.passport_issue,
        // exPass: this.passport_expire,
      }
      if (
        passengerData.FirstName === '' ||
        passengerData.LastName === '' ||
        passengerData.FirstNameE === '' ||
        passengerData.LastNameE === '' ||
        passengerData.pGender === '' ||
        passengerData.meliCode === '' ||
        passengerData.birthday === '' ||
        passengerData.phoneNumber === ''
      ) {
        alert('لطفا همه اطلاعات خواسته شده را وارد نمایید')
        this.$store.state.passengers.splice(
          this.$store.state.passengers.indexOf(passengerData),
          1
        )
      } else {
        const uniqueValues = new Set(
          this.$store.state.passengers.map(
            (v) => v.FirstName,
            (v) => v.LastName,
            (v) => v.FirstNameE,
            (v) => v.LastNameE,
            (v) => v.pGender,
            (v) => v.meliCode,
            (v) => v.phoneNumber
          )
        )
        if (uniqueValues.size < this.$store.state.passengers.length) {
          alert('اطلاعات وارد شده از قبل وجود دارد')
          this.$store.state.passengers.splice(
            this.$store.state.passengers.indexOf(passengerData),
            1
          )
        } else {
          this.$store.state.passengers.push(passengerData)
          alert('مسافر اضافه شد')
        }
      }
    },
    book() {
      const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2UyNzdhYTBmMDE4N2Y2M2U3MTExYzIxNTcwODUwNWQ1NGViN2M1NTIyMWVhOTBiYWVjNjg1NDE2YjMwNjBmMjQzODdhNzdjMTE0MTEzNWEiLCJpYXQiOjE2NTUyOTE1MjAuNjgxMDQzLCJuYmYiOjE2NTUyOTE1MjAuNjgxMDQ2LCJleHAiOjE2ODY4Mjc1MjAuNTUzNDE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kpXB2kb9huAbclEktVHpooynVfQ-FzERbFHbTv-UvlzJIDNAsl8JC7myE8ozU-wwvuphx6TqLB_e0X0DoJVB22Z6pjx-VRHt1rzhhR4WO9eI1_Q1UU7LnerOY6viUgxgkgxrpitRRIWz7KwyZW_v-yHiK0oZ3p_rUitd4ABDVw5zv2ryvoT7NJ3HQjQkiTCHE3jehu0qkCQtVGbM-6Z9-7XrFcL_5pK818Iu53YxJZZuV6DYt2Dm_e2qk7SX0Y31YrlysVSVJZW4awEIokYcjOe_oeD1LGFIB-qTnTivSQar-BPUmouUXOYCyMXINrYtQBlRhyT9I9kmLNNOegFi88EwYVGbJ38uj9SKZ3C9Fr0o-fyQm69WEoOQ0qrKDxXgnbxZxPDAbmctCWysWouZVhMBxFUHsKbT-5oY88TOVdEDBkpp_3JFsDmmA8zpotvLQZw765anyEP_1ZDzh6xm8evq9fXNT4IoRAnwYqPuaWxyWoEuAiN2r5ld4m_7fGJzjG99IafvUD1Do9vuP_mkArrW0OTDeN5YZaGESlrheyuIgFPX2usnvaPcnoXJumdQyEcZxSQ57icCB7FKp4Nh0QQcw2tKUSHJ4F_xydoaD4ptzkNf6UAjeFlQ4tQ4B79ommzK0VLAC9mmilcBFocqhh7QPJgJAswErS8bLR0DzrI'
      axios({
        method: 'post',
        url: '/book',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          FareSourceCode: this.$route.query.FareSourceCode,
          SessionId: this.$cookies.get('SessionID'),
          TravelerInfo: {
            PhoneNumber: this.phoneNumber,
            PassengerFirstName_Fa: this.persian_fname,
            PassengerLastName_Fa: this.persian_lname,
            AirTravelers: [
              {
                DateOfBirth: this.birthday_date,
                Gender: 0,
                PassengerType: 1,
                PassengerName: {
                  PassengerFirstName: this.latin_fname,
                  PassengerMiddleName: '',
                  PassengerLastName: this.latin_lname,
                },
                Passport: {
                  Country: null,
                  ExpiryDate: null,
                  IssueDate: null,
                  PassportNumber: null,
                },
                NationalId: this.national_id,
                Nationality: 'IR',
              },
            ],
          },
        },
      })
        .then((response) => {
          this.results = response.data.FLIGHTS_API_RESULT_AIRBOOK
          this.$cookies.set('ClientUniqueId',response.data.CLIENTUNIQUEID)
          if(response.data.FLIGHTS_API_RESULT_AIRBOOK.Success){
            // this.$store.state.UniqueId = response.data.FLIGHTS_API_RESULT_AIRBOOK.UniqueId
            this.$cookies.set('UniqueId',response.data.FLIGHTS_API_RESULT_AIRBOOK.UniqueId)
            axios({
                method: 'post',
                url: '/book/checkout',
                headers: { 'Authorization': 'Bearer ' + token },
                data: {
                    Price: this.ticketInfo.AirItineraryPricingInfo.ItinTotalFare.TotalFare,
                    RouteVerify: 'http://localhost:3000/singles/payment/?',
                    INVOICE_ID:response.data.INVOICE_ID
                },

            }).then(response => {
                this.refid = response.data
                console.log(response.data)
            }).catch(error => {
                console.log('Error: ' + error)
            })
          }
          else{
            alert('امکان رزرو برای این مسافر وجود ندارد')
          }
          console.log('response', response.data)
        })
        .catch((error) => {
          console.log('error', error.response)
        })
    },
  },
}
</script>
