<template>
  <div class="theme-payment-page-sections-item">
    <div class="theme-search-results-item theme-payment-page-item-thumb">
      <div class="row" data-gutter="20">
        <div class="col-md-9">
          <p class="theme-search-results-item-flight-payment-airline">
            شما در حال پرواز با خطوط هوایی آمریکا هستید
          </p>
          <h5 class="theme-search-results-item-title">لندن ← نیویورک</h5>
          <p class="theme-search-results-item-flight-payment-info">
            رفت و برگشت، اقتصادی، 1 بزرگسال
          </p>
          <ul class="theme-search-results-item-flight-payment-dates">
            <li>خروج: 17 آبان 1400</li>
            <li>بازگشت: دوشنبه 25 آبان</li>
          </ul>
          <a
            class="theme-search-results-item-flight-payment-details-link"
            href="#FlightPaymentDetails"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="FlightPaymentDetails"
            >اطلاعات پرواز &nbsp;
            <i class="fa fa-angle-down"></i>
          </a>
          <div id="FlightPaymentDetails" class="collapse _pt-20">
            <div class="theme-search-results-item-flight-detail-items">
              <div class="theme-search-results-item-flight-details">
                <div class="row">
                  <div class="col-md-3">
                    <div class="theme-search-results-item-flight-details-info">
                      <h5
                        class="theme-search-results-item-flight-details-info-title"
                      >
                        برگشت
                      </h5>
                      <p
                        class="theme-search-results-item-flight-details-info-date"
                      >
                        سه شنبه 23 می
                      </p>
                      <p
                        class="theme-search-results-item-flight-details-info-cities"
                      >
                        نیویورک ← لندن
                      </p>
                      <p
                        class="theme-search-results-item-flight-details-info-fly-time"
                      >
                        14 ساعت 30 دقیقه
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
                            سه شنبه 23 می
                          </p>
                          <div
                            class="theme-search-results-item-flight-details-schedule-time"
                          >
                            <span
                              class="theme-search-results-item-flight-details-schedule-time-item"
                              >06:50
                              <span>صبح</span>
                            </span>
                            <span
                              class="theme-search-results-item-flight-details-schedule-time-separator"
                            >
                              الی
                            </span>
                            <span
                              class="theme-search-results-item-flight-details-schedule-time-item"
                              >09:20
                              <span>بعد از ظهر</span>
                            </span>
                          </div>
                          <p
                            class="theme-search-results-item-flight-details-schedule-fly-time"
                          >
                            14 ساعت 30 دقیقه
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
                                لوتون
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
                                گاردیا
                              </p>
                              <p
                                class="theme-search-results-item-flight-details-schedule-destination-city"
                              >
                                نیویورک
                              </p>
                            </div>
                          </div>
                          <ul
                            class="theme-search-results-item-flight-details-schedule-features"
                          >
                            <li>6980 آمریکایی</li>
                            <li>جت پهن پیکر</li>
                            <li>بوئینگ 777</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
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

export default{
  props:{
    details:{
      type:Object,
      required:true
    }
  }
}

</script>
