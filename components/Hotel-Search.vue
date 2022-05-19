<template>
  <div class="theme-search-area theme-search-area-white">
    <div class="theme-search-area-form">
      <div class="row" data-gutter="30">
        <div class="col-md-3">
          <div
            class="theme-search-area-section first theme-search-area-section-line"
          >
            <div class="theme-search-area-section-inner">
              <i
                class="theme-search-area-section-icon lin lin-location-pin"
              ></i>
              <input
                class="theme-search-area-section-input typeahead"
                type="text"
                placeholder="موقعیت هتل"
                data-provide="typeahead"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row" data-gutter="30">
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-line"
              >
                <div class="theme-search-area-section-inner">
                  <i
                    class="theme-search-area-section-icon lin lin-calendar"
                  ></i>
                  <input
                    id="datepicker-check-in"
                    class="theme-search-area-section-input datePickerStart _mob-h"
                    value="تاریخ رفت"
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
                class="theme-search-area-section theme-search-area-section-line"
              >
                <div class="theme-search-area-section-inner">
                  <i
                    class="theme-search-area-section-icon lin lin-calendar"
                  ></i>
                  <input
                    id="datepicker-check-out"
                    class="theme-search-area-section-input datePickerEnd _mob-h"
                    value=""
                    type="text"
                    placeholder="تاریخ برگشت"
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
          <div class="row" data-gutter="30">
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-line quantity-selector"
                data-increment="اتاق ها"
              >
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-tag"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="1 اتاق"
                    type="text"
                  />
                  <div id="HotelSearchRooms" class="quantity-selector-box">
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
                class="theme-search-area-section theme-search-area-section-line quantity-selector"
                data-increment="مهمان"
              >
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-people"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="2 مهمان"
                    type="text"
                  />
                  <div id="HotelSearch مهمان" class="quantity-selector-box">
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
            class="theme-search-area-submit _mt-0 _fs-xl theme-search-area-submit-curved theme-search-area-submit-primary theme-search-area-submit-glow"
          >
            ←
          </button>
        </div>
      </div>
    </div>
    <div class="theme-search-area-options _mob-h clearfix">
      <h5 class="theme-search-area-options-title">نوع هتل</h5>
      <div
        class="btn-group theme-search-area-options-list"
        data-toggle="buttons"
      >
        <label class="btn btn-primary active">
          <input
            id="hotel-option-1"
            type="radio"
            name="hotel-options"
            checked=""
          />
          هرجایی
        </label>
        <label class="btn btn-primary">
          <input id="hotel-option-2" type="radio" name="hotel-options" />کسب و
          کار
        </label>
        <label class="btn btn-primary">
          <input id="hotel-option-3" type="radio" name="hotel-options" />خانواده
        </label>
        <label class="btn btn-primary">
          <input id="hotel-option-4" type="radio" name="hotel-options" />لوکس
        </label>
        <label class="btn btn-primary">
          <input id="hotel-option-5" type="radio" name="hotel-options" />بودجه
        </label>
        <label class="btn btn-primary">
          <input
            id="hotel-option-6"
            type="radio"
            name="hotel-options"
          />رومانتیک
        </label>
      </div>
    </div>
  </div>
</template>
