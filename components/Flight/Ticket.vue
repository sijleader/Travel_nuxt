<template>
  <div
    class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
  >
    <div class="theme-search-results-item-preview">
      <a
        class="theme-search-results-item-mask-link"
        v-b-toggle="ticket.FareSourceCode"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
      ></a>
      <div class="row" data-gutter="20">
        <div class="col-md-10">
          <div class="theme-search-results-item-flight-sections">
            <div class="theme-search-results-item-flight-section">
              <div class="row row-no-gutter row-eq-height">
                <div class="col-md-2">
                  <div
                    class="theme-search-results-item-flight-section-airline-logo-wrap"
                  >
                    <img
                      class="theme-search-results-item-flight-section-airline-logo"
                      src="/img/airline-logo/delta.jpg"
                      alt="تصویر متن جایگزین"
                      title="عنوان تصویر"
                    />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="theme-search-results-item-flight-section-item">
                    <div class="row">
                      <div class="col-md-3">
                        <div
                          class="theme-search-results-item-flight-section-meta"
                        >
                          <p
                            class="theme-search-results-item-flight-section-meta-time"
                          >
                            ساعت
                            {{
                              hour(
                                ticket.OriginDestinationOptions[0]
                                  .DepartureDateTime
                              )
                            }}
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-city"
                          >
                            {{
                              ticket.OriginDestinationOptions[0]
                                .DepartureAirportLocationCode
                            }}
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-date"
                          >
                            {{
                              date(
                                ticket.OriginDestinationOptions[0]
                                  .DepartureDateTime
                              )
                            }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                          class="theme-search-results-item-flight-section-path"
                        >
                          <div
                            class="theme-search-results-item-flight-section-path-fly-time"
                          >
                            <p>
                              {{
                                ticket.OriginDestinationOptions[0]
                                  .JourneyDuration
                              }}
                            </p>
                          </div>
                          <div
                            class="theme-search-results-item-flight-section-path-line"
                          ></div>
                          <div
                            class="theme-search-results-item-flight-section-path-line-start"
                          >
                            <i
                              class="fa fa-plane theme-search-results-item-flight-section-path-icon"
                            ></i>
                            <div
                              class="theme-search-results-item-flight-section-path-line-dot"
                            ></div>
                            <div
                              class="theme-search-results-item-flight-section-path-line-title"
                            >
                              سی ال
                            </div>
                          </div>
                          <div
                            class="theme-search-results-item-flight-section-path-line-end"
                          >
                            <i
                              class="fa fa-plane theme-search-results-item-flight-section-path-icon"
                            ></i>
                            <div
                              class="theme-search-results-item-flight-section-path-line-dot"
                            ></div>
                            <div
                              class="theme-search-results-item-flight-section-path-line-title"
                            >
                              ال جی
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div
                          class="theme-search-results-item-flight-section-meta"
                        >
                          <p
                            class="theme-search-results-item-flight-section-meta-time"
                          >
                            ساعت
                            {{
                              hour(
                                ticket.OriginDestinationOptions[0]
                                  .ArrivalDateTime
                              )
                            }}
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-city"
                          >
                            {{
                              ticket.OriginDestinationOptions[0]
                                .ArrivalAirportLocationCode
                            }}
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-date"
                          >
                            {{
                              date(
                                ticket.OriginDestinationOptions[0]
                                  .ArrivalDateTime
                              )
                            }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="theme-search-results-item-book">
                          <div class="theme-search-results-item-price">
                            <p
                              class="theme-search-results-item-flight-section-meta-time"
                            >
                              {{
                                ticket.OriginDestinationOptions[0]
                                  .SeatsRemaining
                              }}
                              ظرفیت خالی
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="theme-search-results-item-price-tag">
                <ul
                  class="theme-search-results-item-flight-details-schedule-features"
                >
                  <li>9253 دلتا</li>
                  <li>جت پهن پیکر</li>
                  <li>امبر 175</li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="theme-search-results-item-book">
            <div class="theme-search-results-item-price">
              <p class="theme-search-results-item-price-tag">
                {{ ticket.AirItineraryPricingInfo.ItinTotalFare.TotalFare }}
                تومان
              </p>
            </div>
            <!-- <nuxt-link
              class="btn btn-primary-inverse btn-block theme-search-results-item-price-btn"
              :to="$router.push(`/flights/${ticket.OriginDestinationOptions[0]
                      .DepartureAirportLocationCode +
                    '-' +
                    ticket.OriginDestinationOptions[0]
                      .ArrivalAirportLocationCode}/checkout/${ticket.FareSourceCode}`)"
              type="submit"
            >
              رزرو کن
            </nuxt-link> -->
            <!-- <button
              class="btn btn-primary-inverse btn-block theme-search-results-item-price-btn"
              @click="$router.push(`/flights/${ticket.OriginDestinationOptions[0]
                      .DepartureAirportLocationCode +
                    '-' +
                    ticket.OriginDestinationOptions[0]
                      .ArrivalAirportLocationCode}/checkout/${ticket.FareSourceCode}`)"
              type="submit"
            >
              رزرو کن
            </button> -->
            <a
              class="btn btn-primary-inverse btn-block theme-search-results-item-price-btn"
              @click.prevent="book"
              type="submit"
            >
              رزرو کن
            </a>
          </div>
        </div>
      </div>
    </div>
    <b-collapse
      :id="ticket.FareSourceCode"
      class="collapse theme-search-results-item-collapse"
    >
      <div class="theme-search-results-item-extend">
        <a
          class="theme-search-results-item-extend-close"
          v-b-toggle="ticket.FareSourceCode"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          >✕</a
        >
        <div class="theme-search-results-item-extend-inner">
          <!-- {{this.$store.state.TicketInfo}} -->
          <div class="theme-search-results-item-flight-detail-items">
            <div class="theme-search-results-item-flight-details">
              <div class="row">
                <div class="col-md-3">
                  <div class="theme-search-results-item-flight-details-info">
                    <!-- <h5
                      class="theme-search-results-item-flight-details-info-title"
                    >
                      رفتن
                    </h5> -->
                    <p
                      class="theme-search-results-item-flight-details-info-date"
                    >
                      <!-- دوشنبه 15 آبان -->
                      {{ AirTripType[ticket.DirectionInd] }}
                    </p>
                    <!-- <p
                      class="theme-search-results-item-flight-details-info-cities"
                    >
                      لندن ← نیویورک
                    </p> -->
                    <p
                      class="theme-search-results-item-flight-details-info-fly-time"
                    >
                      <!-- 20 ساعت 0 دقیقه -->
                      {{ RefundMethod[ticket.RefundMethod] }}
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-stops"
                    >
                      بدون وقفه
                    </p>
                  </div>
                </div>
                <div class="col-md-9">
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
                          دوشنبه 15 آبان
                        </p>
                        <div
                          class="theme-search-results-item-flight-details-schedule-time"
                        >
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-item"
                            >03:30
                            <span>بعد از ظهر</span>
                          </span>
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-separator"
                          >
                            الی
                          </span>
                          <span
                            class="theme-search-results-item-flight-details-schedule-time-item"
                            >11:30
                            <span>صبح</span>
                          </span>
                        </div>
                        <p
                          class="theme-search-results-item-flight-details-schedule-fly-time"
                        >
                          20 ساعت 0 دقیقه
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
                              <b></b>شهر <b>سی ال</b>
                            </p>
                            <p
                              class="theme-search-results-item-flight-details-schedule-destination-city"
                            >
                              لندن
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
                              <b>ال</b> گاردیا
                            </p>
                            <p
                              class="theme-search-results-item-flight-details-schedule-destination-city"
                            >
                              نیویورک
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
// import axios from 'axios'
import AirTripType from '../../assets/data/AirTripType.json'
import PassengerType from '../../assets/data/PassengerType.json'
import RefundMethod from '../../assets/data/RefundMethod.json'
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      PassengerType: PassengerType,
      AirTripType: AirTripType,
      RefundMethod: RefundMethod,
    }
  },
  mounted(){
    this.$store.state.TicketInfo=this.ticket
    this.$store.state.FareSourceCode=this.ticket.FareSourceCode
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
    book() {
      this.$router.push({
        path: `flights/${
          this.ticket.OriginDestinationOptions[0].DepartureAirportLocationCode +
          '-' +
          this.ticket.OriginDestinationOptions[0].ArrivalAirportLocationCode
        }/checkout/`,
        query: {
          FareSourceCode: this.ticket.FareSourceCode,
        },
      })
    },
  },
}
</script>
