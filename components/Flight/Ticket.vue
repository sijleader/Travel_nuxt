<template>
  <div
    class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
  >
    <div class="theme-search-results-item-preview">
      <a
        class="theme-search-results-item-mask-link"
        href="#searchResultsItem-1"
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
                      src="~/static/img/airline-logo/delta.jpg"
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
                            ساعت 03:30
                            <span>بعد از ظهر</span>
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-city"
                          >
                            لندن
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-date"
                          >
                            17 مه 1400
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="theme-search-results-item-flight-section-path"
                        >
                          <div
                            class="theme-search-results-item-flight-section-path-fly-time"
                          >
                            <p>20 ساعت 0 دقیقه</p>
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
                            ساعت 11:30
                            <span>صبح</span>
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-city"
                          >
                            نیویورک
                          </p>
                          <p
                            class="theme-search-results-item-flight-section-meta-date"
                          >
                            18 مه 1400
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5
                class="theme-search-results-item-flight-section-airline-title"
              >
                توسط خطوط هوایی دلتا اداره می شود
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="theme-search-results-item-book">
            <div class="theme-search-results-item-price">
              <p class="theme-search-results-item-price-tag">279 تومان</p>
              <p class="theme-search-results-item-price-sign">اقتصاد</p>
            </div>
            <nuxt-link
              class="btn btn-primary-inverse btn-block theme-search-results-item-price-btn"
              to="/flights/checkout"
              >رزرو کن</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      id="searchResultsItem-1"
      class="collapse theme-search-results-item-collapse"
    >
      <div class="theme-search-results-item-extend">
        <a
          class="theme-search-results-item-extend-close"
          href="#searchResultsItem-1"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          >✕</a
        >
        <div class="theme-search-results-item-extend-inner">
          <div class="theme-search-results-item-flight-detail-items">
            <div class="theme-search-results-item-flight-details">
              <div class="row">
                <div class="col-md-3">
                  <div class="theme-search-results-item-flight-details-info">
                    <h5
                      class="theme-search-results-item-flight-details-info-title"
                    >
                      رفتن
                    </h5>
                    <p
                      class="theme-search-results-item-flight-details-info-date"
                    >
                      دوشنبه 15 آبان
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-cities"
                    >
                      لندن ← نیویورک
                    </p>
                    <p
                      class="theme-search-results-item-flight-details-info-fly-time"
                    >
                      20 ساعت 0 دقیقه
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
                        <ul
                          class="theme-search-results-item-flight-details-schedule-features"
                        >
                          <li>9253 دلتا</li>
                          <li>جت پهن پیکر</li>
                          <li>امبر 175</li>
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
    </div>
  </div>
</template>
