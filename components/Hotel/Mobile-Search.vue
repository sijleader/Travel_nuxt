<template>
  <div class="theme-search-area-inline _desk-h theme-search-area-inline-white">
    <div id="searchEditModal" class="modal-dialog">
      <div class="magnific-popup modal-content">
        <!-- <div class="modal-content"> -->
        <div class="container">
          <div class="theme-search-area-header">
            <h1 class="theme-search-area-title theme-search-area-title-sm">
              هتل های نیویورک
            </h1>
            <p class="theme-search-area-subtitle">27 تیر ← 2 مهر، 1 اتاق</p>
          </div>
          <div class="theme-search-area-form">
            <div
              class="theme-search-area-section first theme-search-area-section-curved"
            >
              <label class="theme-search-area-section-label">جستجو مکان</label>
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
            <div class="row" data-gutter="10">
              <div class="col-md-6">
                <div
                  class="theme-search-area-section theme-search-area-section-curved"
                >
                  <label class="theme-search-area-section-label"
                    >تاریخ رفت</label
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
                  class="theme-search-area-section theme-search-area-section-curved"
                >
                  <label class="theme-search-area-section-label">
                    تاریخ برگشت</label
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
            <button
              class="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-curved"
            >
              تغییر دادن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
