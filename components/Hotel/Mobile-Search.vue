<template>
  <div class="theme-search-area-inline _desk-h theme-search-area-inline-white">
    <h4 class="theme-search-area-inline-title">هتل های نیویورک</h4>
    <p class="theme-search-area-inline-details">27 تیر ← 2 مهر، 1 اتاق</p>
    <button
      class="theme-search-area-inline-link magnific-inline"
      @click="$modal.show('search-edit')"
    >
      <i class="fa fa-pencil"></i>ویرایش کنید
    </button>

    <modal name="search-edit" :adaptive="true" :scrollable="true" height="auto">
      <!-- <div class="modal-content" style="z-index: 3"> -->
      <div class="theme-search-area theme-search-area-vert">
        <div class="theme-search-area-header">
          <h1 class="theme-search-area-title theme-search-area-title-sm">
            جستجوی خود را ویرایش کنید
          </h1>
          <p class="theme-search-area-subtitle">
            ممکن است قیمت ها با نتایج فعلی متفبهمن باشد
          </p>
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
                <label class="theme-search-area-section-label">تاریخ رفت</label>
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
          <div class="row" data-gutter="10">
            <div class="col-md-6">
              <div
                class="theme-search-area-section theme-search-area-section-curved quantity-selector"
                data-increment="اتاق ها"
              >
                <label class="theme-search-area-section-label">اتاق ها</label>
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-tag"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="1 اتاق"
                    type="text"
                  />
                  <div
                    class="quantity-selector-box"
                    id="mobile-HotelSearchRooms"
                  >
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
                class="theme-search-area-section theme-search-area-section-curved quantity-selector"
                data-increment="مهمان"
              >
                <label class="theme-search-area-section-label">مهمان</label>
                <div class="theme-search-area-section-inner">
                  <i class="theme-search-area-section-icon lin lin-people"></i>
                  <input
                    class="theme-search-area-section-input"
                    value="2 مهمان"
                    type="text"
                  />
                  <div
                    class="quantity-selector-box"
                    id="mobile-HotelSearch مهمان"
                  >
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
          <button
            class="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-curved"
          >
            تغییر دادن
          </button>
        </div>
      </div>
      <!-- </div> -->
      <div class="modal-footer">
        <button @click="$modal.hide('search-edit')">Close it</button>
      </div>
    </modal>
  </div>
</template>
