<template>
  <div class="theme-search-area _mob-h theme-search-area-stacked">
    <div class="theme-search-area-header _mb-30 _ta-c _c-w">
      <h1 class="theme-search-area-title theme-search-area-title-sm">
        2196 هتل در نیویورک
      </h1>
      <p class="theme-search-area-subtitle">
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
      </p>
    </div>
    <div
      class="theme-search-area-form _bsh-xxl _bsh-light"
      id="hero-search-form"
    >
      <div class="row" data-gutter="none">
        <div class="col-md-3">
          <div
            class="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr"
          >
            <div class="theme-search-area-section-inner">
              <i
                class="theme-search-area-section-icon lin lin-location-pin"
              ></i>
              <input
                class="theme-search-area-section-input typeahead"
                value="تهران"
                type="text"
                placeholder="موقعیت هتل"
                data-provide="typeahead"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row" data-gutter="none">
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr"
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
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr"
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
        </div>
        <div class="col-md-4">
          <div class="row" data-gutter="none">
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector"
                data-increment="اتاق ها"
              >
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-tag"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="1 اتاق"
                    type="text"
                  />
                  <div class="quantity-selector-box" id="HotelSearchRooms">
                    <div class="quantity-selector-inner">
                      <p class="quantity-selector-title">اتاق ها</p>
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
            </div>
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector"
                data-increment="مهمان"
              >
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-people"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="2 مهمان"
                    type="text"
                  />
                  <div class="quantity-selector-box" id="HotelSearch مهمان">
                    <div class="quantity-selector-inner">
                      <p class="quantity-selector-title">مهمان</p>
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
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <button
            class="theme-search-area-submit _mt-0 theme-search-area-submit-curved theme-search-area-submit-sm theme-search-area-submit-no-border"
          >
            تغییر دادن
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
