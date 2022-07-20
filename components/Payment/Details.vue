<template>
  <div class="theme-payment-page-sections-item">
    <div class="theme-search-results-item theme-payment-page-item-thumb">
      <div class="row" data-gutter="20">
        <div class="col-md-9">
          <h2 class="theme-search-results-item-flight-payment-airline">
            شما در حال پرواز با خطوط هوایی آمریکا هستید
          </h2>
          <h5 class="theme-search-results-item-title">{{details.OriginDestinationOptions[0].ArrivalAirportLocationCode}} ← {{details.OriginDestinationOptions[0].DepartureAirportLocationCode}}</h5>          
          <div class="theme-search-results-item-flight-detail-items">
            <div class="theme-search-results-item-flight-details">
              <div class="row">
                <div class="col-md-3 col-xs-3">
                  <div class="theme-search-results-item-flight-details-info">
                    <h5
                      class="theme-search-results-item-flight-details-info-title"
                    >
                      پرواز {{ AirTripType[details.DirectionInd]}}
                    </h5>
                    <p
                      class="theme-search-results-item-flight-details-info"
                    >
                      
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-date"
                    >
                      {{date(details.OriginDestinationOptions[0].DepartureDateTime)}}
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-cities"
                    >
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-fly-time"
                    >
                      <p v-for="(object, index) in details.AirItineraryPricingInfo
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
                            {{hour(details.OriginDestinationOptions[0].DepartureDateTime)}}
                          </span>
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-separator"
                          >
                            الی
                          </span>
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-item"
                            >
                            {{hour(details.OriginDestinationOptions[0].ArrivalDateTime)}}
                          </span>
                        </div>
                        <p
                          class="theme-search-results-item-flight-details-schedule-fly-time"
                        >
                          {{details.OriginDestinationOptions[0].JourneyDurationPerMinute}}دقیقه
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
                              {{details.OriginDestinationOptions[0].DepartureAirportLocationCode}}
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
                              {{details.OriginDestinationOptions[0].ArrivalAirportLocationCode}}
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
                          <li>پرواز {{details.OriginDestinationOptions[0].FlightNumber}} </li>
                          <li>{{details.OriginDestinationOptions[0].Equipment}}</li>
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
</template>

<script>
import AirTripType from "@/assets/data/AirTripType.json"
import PassengerType from '@/assets/data/PassengerType.json'

export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  data(){
    return{
      AirTripType:AirTripType,
      PassengerType:PassengerType
    }
  },
  methods:{
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
  }
}
</script>
