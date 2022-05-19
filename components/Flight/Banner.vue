<template>
  <div>
    <div
      class="theme-search-area _mob-h theme-search-area-white theme-search-area-stacked"
    >
      <div class="theme-search-area-header _ta-c">
        <h1 class="theme-search-area-title theme-search-area-title-sm">
          175 پرواز به تهران
        </h1>
      </div>
      <div id="hero-search-form" class="theme-search-area-form">
        <div class="row" data-gutter="none">
          <div class="col-md-5">
            <div class="row" data-gutter="none">
              <div class="col-md-6">
                <div
                  class="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-sm"
                >
                  <div class="theme-search-area-section-inner">
                    <i
                      class="theme-search-area-section-icon lin lin-location-pin"
                    ></i>
                    <input
                      class="theme-search-area-section-input typeahead"
                      value=""
                      type="text"
                      placeholder="مبدا"
                      data-provide="typeahead"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
                >
                  <div class="theme-search-area-section-inner">
                    <i
                      class="theme-search-area-section-icon lin lin-location-pin"
                    ></i>
                    <input
                      class="theme-search-area-section-input typeahead"
                      value=""
                      type="text"
                      placeholder="مقصد"
                      data-provide="typeahead"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row" data-gutter="none">
              <div class="col-md-4">
                <div
                  class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
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
              <div class="col-md-4">
                <div
                  class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm"
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
              <div class="col-md-4">
                <div
                  class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm quantity-selector"
                  data-increment="مسافر"
                >
                  <div class="theme-search-area-section-inner">
                    <i
                      class="theme-search-area-section-icon lin lin-people"
                    ></i>
                    <input
                      class="theme-search-area-section-input"
                      value="1 مسافر"
                      type="text"
                    />
                    <div id="FlySearchPassengers" class="quantity-selector-box">
                      <div class="quantity-selector-inner">
                        <p class="quantity-selector-title">مسافران</p>
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
              class="theme-search-area-submit _tt-uc _mt-0 theme-search-area-submit-curved theme-search-area-submit-sm"
            >
              ویرایش کنید
            </button>
          </div>
        </div>
      </div>
      <div
        class="theme-search-area-options theme-search-area-options-center theme-search-area-options-dot-primary-inverse clearfix"
      >
        <div
          class="btn-group theme-search-area-options-list"
          data-toggle="buttons"
        >
          <label class="btn btn-primary active">
            <input
              id="flight-option-1"
              type="radio"
              name="flight-options"
              checked=""
            />رفت و برگشت
          </label>
          <label class="btn btn-primary">
            <input id="flight-option-2" type="radio" name="flight-options" />یک
            طرفه
          </label>
        </div>
      </div>
    </div>
    <div
      class="theme-search-area-inline _desk-h theme-search-area-inline-white"
    >
      <h4 class="theme-search-area-inline-title">پروازهای لودون</h4>
      <p class="theme-search-area-inline-details">27 تیر ← 2 مهر، 1 مسافر</p>
      <a
        class="theme-search-area-inline-link magnific-inline"
        href="#searchEditModal"
      >
        <i class="fa fa-pencil"></i>ویرایش کنید
      </a>
      <div
        id="searchEditModal"
        class="magnific-popup magnific-popup-sm mfp-hide"
      >
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
              <label class="theme-search-area-section-label">از جانب</label>
              <div class="theme-search-area-section-inner">
                <i
                  class="theme-search-area-section-icon lin lin-location-pin"
                ></i>
                <input
                  class="theme-search-area-section-input typeahead"
                  value="تهران"
                  type="text"
                  placeholder="مبدا"
                  data-provide="typeahead"
                />
              </div>
            </div>
            <div
              class="theme-search-area-section theme-search-area-section-curved"
            >
              <label class="theme-search-area-section-label">تاریخ</label>
              <div class="theme-search-area-section-inner">
                <i
                  class="theme-search-area-section-icon lin lin-location-pin"
                ></i>
                <input
                  class="theme-search-area-section-input typeahead"
                  type="text"
                  placeholder="مقصد"
                  data-provide="typeahead"
                />
              </div>
            </div>
            <div class="row" data-gutter="10">
              <div class="col-md-6">
                <div
                  class="theme-search-area-section theme-search-area-section-curved"
                >
                  <label class="theme-search-area-section-label">رفتن</label>
                  <div class="theme-search-area-section-inner">
                    <i
                      class="theme-search-area-section-icon lin lin-calendar"
                    ></i>
                    <input
                      class="theme-search-area-section-input datePickerStart _mob-h Depart"
                      value=""
                      type="text"
                      placeholder="تاریخ رفت"
                    />
                    <input
                      class="theme-search-area-section-input _desk-h mobile-picker Depart"
                      value=""
                      placeholder="تاریخ رفت"
                    />
                    <date-picker
                      v-model="departdate"
                      format="YYYY-MM-DD"
                      display-format="jYYYY-jMM-jDD"
                      custom-input=".Depart"
                      :editable="false"
                      :auto-submit="true"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="theme-search-area-section theme-search-area-section-curved"
                >
                  <label class="theme-search-area-section-label">ورود</label>
                  <div class="theme-search-area-section-inner">
                    <i
                      class="theme-search-area-section-icon lin lin-calendar"
                    ></i>
                    <input
                      class="theme-search-area-section-input datePickerEnd _mob-h Return"
                      value=""
                      type="text"
                      placeholder="تاریخ برگشت"
                    />
                    <input
                      class="theme-search-area-section-input _desk-h mobile-picker Return"
                      value=""
                      placeholder="تاریخ برگشت"
                    />
                    <date-picker
                      v-model="returndate"
                      format="YYYY-MM-DD"
                      display-format="jYYYY-jMM-jDD"
                      custom-input=".Return"
                      :editable="false"
                      :auto-submit="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="theme-search-area-section theme-search-area-section-curved quantity-selector"
              data-increment="مسافر"
            >
              <label class="theme-search-area-section-label">مسافران</label>
              <div class="theme-search-area-section-inner">
                <i class="theme-search-area-section-icon lin lin-people"></i>
                <input
                  class="theme-search-area-section-input"
                  value="1 مسافر"
                  type="text"
                />
                <div
                  id="mobile-FlySearchPassengers"
                  class="quantity-selector-box"
                >
                  <div class="quantity-selector-inner">
                    <p class="quantity-selector-title">مسافران</p>
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

<script>

export default {
  data() {
    return {
      departdate: '',
      returndate: '',
      show: false,
    }
  },
}
</script>