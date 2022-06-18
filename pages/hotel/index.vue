<template>
  <div>
    <div class="theme-hero-area front">
      <div class="theme-hero-area-bg-wrap">
        <div
          class="theme-hero-area-bg"
          style="background-image: url('/img/gmtx7uc6lnc_1500x800.jpg')"
          id="hero-banner"
        ></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-strong"></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="container">
          <div class="row _pv-100">
            <div class="col-md-10 col-md-offset-1">
              <div class="theme-search-area _mob-h theme-search-area-stacked">
                <div class="theme-search-area-header _mb-30 _ta-c _c-w">
                  <h1
                    class="theme-search-area-title theme-search-area-title-sm"
                  >
                    2196 هتل در نیویورک
                  </h1>
                  <p class="theme-search-area-subtitle">
                    طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو
                    هستند
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
                              <i
                                class="theme-search-area-section-icon lin lin-tag"
                              ></i>
                              <input
                                class="theme-search-area-section-input"
                                value="1 اتاق"
                                type="text"
                              />
                              <div
                                class="quantity-selector-box"
                                id="HotelSearchRooms"
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
                            class="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector"
                            data-increment="مهمان"
                          >
                            <div class="theme-search-area-section-inner">
                              <i
                                class="theme-search-area-section-icon lin lin-people"
                              ></i>
                              <input
                                class="theme-search-area-section-input"
                                value="2 مهمان"
                                type="text"
                              />
                              <div
                                class="quantity-selector-box"
                                id="HotelSearch مهمان"
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
              <div
                class="theme-search-area-inline _desk-h theme-search-area-inline-white"
              >
                <h4 class="theme-search-area-inline-title">هتل های نیویورک</h4>
                <p class="theme-search-area-inline-details">
                  27 تیر ← 2 مهر، 1 اتاق
                </p>
                <a
                  class="theme-search-area-inline-link magnific-inline"
                  href="#searchEditModal"
                >
                  <i class="fa fa-pencil"></i>ویرایش کنید
                </a>
                <div
                  class="magnific-popup magnific-popup-sm mfp-hide"
                  id="searchEditModal"
                >
                  <div class="theme-search-area theme-search-area-vert">
                    <div class="theme-search-area-header">
                      <h1
                        class="theme-search-area-title theme-search-area-title-sm"
                      >
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
                        <label class="theme-search-area-section-label"
                          >جستجو مکان</label
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
                      <div class="row" data-gutter="10">
                        <div class="col-md-6">
                          <div
                            class="theme-search-area-section theme-search-area-section-curved quantity-selector"
                            data-increment="اتاق ها"
                          >
                            <label class="theme-search-area-section-label"
                              >اتاق ها</label
                            >
                            <div class="theme-search-area-section-inner">
                              <i
                                class="theme-search-area-section-icon lin lin-tag"
                              ></i>
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
                            <label class="theme-search-area-section-label"
                              >مهمان</label
                            >
                            <div class="theme-search-area-section-inner">
                              <i
                                class="theme-search-area-section-icon lin lin-people"
                              ></i>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="theme-page-section theme-page-section-dark theme-page-section-lg"
    >
      <div class="container">
        <div class="row row-col-static" id="sticky-parent" data-bs-gutter="20">
          <div class="col-md-3">
            <div class="sticky-col _mob-h">
              <div class="theme-search-results-sidebar">
                <div
                  class="theme-search-results-sidebar-sections _mb-20 _br-2 _b-n theme-search-results-sidebar-sections-white-wrap"
                >
                  <div class="theme-search-results-sidebar-section">
                    <h5 class="theme-search-results-sidebar-section-title">
                      جستجوی هتل ها
                    </h5>
                    <div class="theme-search-results-sidebar-section-search">
                      <input
                        class="theme-search-results-sidebar-section-search-input"
                        type="text"
                        placeholder="نام هتل، آدرس"
                      />
                      <a
                        class="fa fa-search theme-search-results-sidebar-section-search-btn"
                        href="#"
                      ></a>
                    </div>
                  </div>
                  <div class="theme-search-results-sidebar-section">
                    <h5 class="theme-search-results-sidebar-section-title">
                      امتیاز بررسی
                    </h5>
                    <div
                      class="theme-search-results-sidebar-section-checkbox-list"
                    >
                      <div
                        class="theme-search-results-sidebar-section-checkbox-list-items"
                      >
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">عالی</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            378</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">خوب</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            497</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">باشه</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            126</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">متوسط</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            438</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">ضعیف</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            209</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="theme-search-results-sidebar-section">
                    <h5 class="theme-search-results-sidebar-section-title">
                      قیمت
                    </h5>
                    <div class="theme-search-results-sidebar-section-price">
                      <input type="range" min="100" max="500" step="20" />
                    </div>
                  </div>
                  <div class="theme-search-results-sidebar-section">
                    <h5 class="theme-search-results-sidebar-section-title">
                      محله ها
                    </h5>
                    <div
                      class="theme-search-results-sidebar-section-checkbox-list"
                    >
                      <div
                        class="theme-search-results-sidebar-section-checkbox-list-items"
                      >
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">میدتاون</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            255</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">ونک</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            393</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">هلز</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            403</span
                          >
                        </div>
                        <div
                          class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                        >
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title">ونک</span>
                          </label>
                          <span
                            class="theme-search-results-sidebar-section-checkbox-list-amount"
                          >
                            255</span
                          >
                        </div>
                      </div>
                      <div
                        class="collapse"
                        id="SearchResultsCheckboxNeighborhoods"
                      >
                        <div
                          class="theme-search-results-sidebar-section-checkbox-list-items theme-search-results-sidebar-section-checkbox-list-items-expand"
                        >
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title"> منطقه</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              101</span
                            >
                          </div>
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title">منطقه مالی</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              116</span
                            >
                          </div>
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title">چلسی</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              263</span
                            >
                          </div>
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title">غرب ساید</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              298</span
                            >
                          </div>
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title">شرق ساید</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              170</span
                            >
                          </div>
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title">محله چینی</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              295</span
                            >
                          </div>
                          <div
                            class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                          >
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox" />
                              <span class="icheck-title">ایتالیای کوچک</span>
                            </label>
                            <span
                              class="theme-search-results-sidebar-section-checkbox-list-amount"
                            >
                              462</span
                            >
                          </div>
                        </div>
                      </div>
                      <a
                        class="theme-search-results-sidebar-section-checkbox-list-expand-link"
                        role="button"
                        data-bs-toggle="collapse"
                        href="#SearchResultsCheckboxNeighborhoods"
                        aria-expanded="false"
                        >بیشتر نشان بده، اطلاعات بیشتر
                        <i class="fa fa-angle-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6-5">
            <div class="theme-search-results-sort _mob-h _b-n clearfix">
              <h5 class="theme-search-results-sort-title">مرتب سازی:</h5>
              <ul class="theme-search-results-sort-list">
                <li>
                  <a href="#"
                    >قیمت
                    <span>زیاد ← پایین</span>
                  </a>
                </li>
                <li class="active">
                  <a href="#"
                    >رتبه مهمان
                    <span>بالا ← پایین</span>
                  </a>
                </li>
                <li>
                  <a href="#"
                    ><span>ستاره های</span> طبقه املاک 1 ← 5<span></span>
                  </a>
                </li>
                <li>
                  <a href="#"
                    >نام ملک
                    <span>A ← Z</span>
                  </a>
                </li>
              </ul>
              <div class="dropdown theme-search-results-sort-alt">
                <a
                  id="dropdownMenu"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                  >بیشتر
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <a href="#">توصیه شده</a>
                  </li>
                  <li>
                    <a href="#">محبوبترین</a>
                  </li>
                  <li>
                    <a href="#">مد روز در حال حاضر</a>
                  </li>
                  <li>
                    <a href="#">بهترین معاملات</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="theme-search-results-sort-select _desk-h">
              <select>
                <option>قیمت</option>
                <option>رتبه بندی مهمان</option>
                <option>کلاس اموال</option>
                <option>نام ملک</option>
                <option>توصیه شده</option>
                <option>محبوبترین</option>
                <option>مد روز در حال حاضر</option>
                <option>بهترین معاملات</option>
              </select>
            </div>
            <div class="theme-search-results">
              <div class="_mob-h">
                <div
                  class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
                >
                  <div class="theme-search-results-item-preview">
                    <a
                      class="theme-search-results-item-mask-link"
                      href="#searchResultsItem-"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="searchResultsItem-"
                    ></a>
                    <a
                      class="theme-search-results-item-bookmark theme-search-results-item-bookmark-top"
                      href="#"
                    >
                      <i class="fa fa-bookmark"></i>
                      <span>تماشا کردن</span>
                    </a>
                    <div class="row" data-bs-gutter="20">
                      <div class="col-md-5">
                        <div class="theme-search-results-item-img-wrap">
                          <img
                            class="theme-search-results-item-img"
                            src="img/hotel-results/1.jpg"
                            alt="تصویر متن جایگزین"
                            title="عنوان تصویر"
                          />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <ul class="theme-search-results-item-hotel-stars">
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                        <h5
                          class="theme-search-results-item-title _fw-b _mb-20 _fs theme-search-results-item-title-lg"
                        >
                          رادیسون مارتینک در برادوی
                        </h5>
                        <div class="theme-search-results-item-hotel-rating">
                          <p
                            class="theme-search-results-item-hotel-rating-title"
                          >
                            <b>5.4 خوب</b> &nbsp;(6580 نظر)
                          </p>
                        </div>
                        <p class="theme-search-results-item-location">
                          <i class="fa fa-map-marker"></i>مرکز شهر
                        </p>
                        <p class="theme-search-results-item-hotel-book-count">
                          <b>امروز 78</b> بار رزرو شده است
                        </p>
                        <ul
                          class="theme-search-results-item-hotel-features"
                        ></ul>
                      </div>
                      <div class="col-md-2">
                        <div class="theme-search-results-item-book">
                          <div class="theme-search-results-item-price">
                            <p class="theme-search-results-item-price-tag">
                              130 تومان
                            </p>
                            <p class="theme-search-results-item-price-sign">
                              هر شب
                            </p>
                          </div>
                          <a
                            class="btn btn-primary-inverse btn-block theme-search-results-item-price-btn"
                            href="#"
                            >رزرو کن</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="collapse theme-search-results-item-collapse"
                    id="searchResultsItem-"
                  >
                    <div class="theme-search-results-item-extend">
                      <a
                        class="theme-search-results-item-extend-close"
                        href="#searchResultsItem-"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="searchResultsItem-"
                        >✕</a
                      >
                      <div class="tabbable theme-search-results-item-tabs">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="active" role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item--1"
                              aria-controls="tab-item--1"
                              >جزئیات</a
                            >
                          </li>
                          <li role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item--2"
                              aria-controls="tab-item--2"
                              >نقشه</a
                            >
                          </li>
                          <li role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item--3"
                              aria-controls="tab-item--3"
                              >نظرات</a
                            >
                          </li>
                          <li role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item--4"
                              aria-controls="tab-item--4"
                              >مشابه</a
                            >
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div
                            class="tab-pane active"
                            role="tabpanel"
                            id="tab-item--1"
                          >
                            <div class="row" data-bs-gutter="20">
                              <div class="col-md-6">
                                <ul
                                  class="magnific-gallery theme-search-results-item-tabs-gallery"
                                >
                                  <li>
                                    <a href="img/hotel-results/gallery/4.jpg">
                                      <img
                                        src="img/hotel-results/gallery/4-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/7.jpg">
                                      <img
                                        src="img/hotel-results/gallery/7-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/5.jpg">
                                      <img
                                        src="img/hotel-results/gallery/5-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/6.jpg">
                                      <img
                                        src="img/hotel-results/gallery/6-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/3.jpg">
                                      <img
                                        src="img/hotel-results/gallery/3-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/2.jpg">
                                      <img
                                        src="img/hotel-results/gallery/2-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/10.jpg">
                                      <img
                                        src="img/hotel-results/gallery/10-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/1.jpg">
                                      <img
                                        src="img/hotel-results/gallery/1-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/11.jpg">
                                      <img
                                        src="img/hotel-results/gallery/11-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/12.jpg">
                                      <img
                                        src="img/hotel-results/gallery/12-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/8.jpg">
                                      <img
                                        src="img/hotel-results/gallery/8-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/9.jpg">
                                      <img
                                        src="img/hotel-results/gallery/9-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-md-6">
                                <p
                                  class="theme-search-results-item-tabs-details-desc"
                                >
                                  هتل تجاری خوب نزدیک به استارباکس مناسب برای
                                  گشت و گذار و نزدیک به مرکز شهر. فضای دوستانه و
                                  محوطه خوب هتل. خدمات نوکر عالی محبوب در بین
                                  خانواده ها.
                                </p>
                                <table
                                  class="theme-search-results-item-tabs-details-table"
                                >
                                  <tbody>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        محل
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 94%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>9.4</b>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        شفافیت
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 84%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>8.4</b>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        ارزش پول
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 70%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>7</b>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        امکانات رفاهی
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 50%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>5</b>
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane"
                            role="tabpanel"
                            id="tab-item--2"
                          >
                            <div class="row" data-bs-gutter="20">
                              <div class="col-md-9">
                                <div
                                  class="google-map theme-search-results-item-tabs-map"
                                  data-bs-lat="40.7483624"
                                  data-bs-lng="-73.9900896"
                                ></div>
                              </div>
                              <div class="col-md-3">
                                <h3
                                  class="theme-search-results-item-tabs-map-title"
                                >
                                  تهران - ونک
                                </h3>
                                <p
                                  class="theme-search-results-item-tabs-map-phone"
                                >
                                  0912345678
                                </p>
                                <ul
                                  class="theme-search-results-item-tabs-map-rates"
                                >
                                  <li>
                                    <i
                                      class="fa fa-camera theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      تماشا
                                    </p>
                                  </li>
                                  <li>
                                    <i
                                      class="fa fa-cutlery theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      غذا خوردن
                                    </p>
                                  </li>
                                  <li>
                                    <i
                                      class="fa fa-glass theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      زندگی شبانه
                                    </p>
                                  </li>
                                  <li>
                                    <i
                                      class="fa fa-shopping-cart theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      خريد كردن
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane"
                            role="tabpanel"
                            id="tab-item--3"
                          >
                            <div class="theme-reviews">
                              <div class="theme-reviews-list">
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/chiara_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در 21 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط ریچارد جونز
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >6.5
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 65%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/me_with_the_uke_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در شنبه، 16 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط جوزف هادسون
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >7.7
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 77%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/luca_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بررسی شده در 13 بهمن
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          با جان دو
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >5.3</span
                                          >
                                          <span
                                            class="theme-reviews-rating-title"
                                            >اوکی
                                          </span>
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 53%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/man-wearing-blue-denim-buttons-up-long-sleeve-and-blace-frame-eyelgasses_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بررسی شده در 13 بهمن
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          با جان دو
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >5.6</span
                                          >
                                          <span
                                            class="theme-reviews-rating-title"
                                            >اوکی
                                          </span>
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 56%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/gamer_chick_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در چهارشنبه، 6 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط برنادت کورنیش
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >7.2
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 72%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <div class="row">
                                  <div class="col-md-9 col-md-offset-3">
                                    <a class="theme-reviews-more" href="#"
                                      >+ نظرات بیشتر</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane"
                            role="tabpanel"
                            id="tab-item--4"
                          >
                            <div class="row" data-bs-gutter="10">
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/1.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      30 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      هتل میلنیوم برادوی - میدان تایمز
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/2.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      250 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      تایم نیویورک
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/3.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      36 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      هادسون نیویورک، پارک مرکزی
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/4.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      430 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      پارس
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
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
                <div
                  class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
                >
                  <div class="theme-search-results-item-preview">
                    <a
                      class="theme-search-results-item-mask-link"
                      href="#searchResultsItem-2"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="searchResultsItem-2"
                    ></a>
                    <a
                      class="theme-search-results-item-bookmark theme-search-results-item-bookmark-top"
                      href="#"
                    >
                      <i class="fa fa-bookmark"></i>
                      <span>تماشا کردن</span>
                    </a>
                    <div class="row" data-bs-gutter="20">
                      <div class="col-md-5">
                        <div class="theme-search-results-item-img-wrap">
                          <img
                            class="theme-search-results-item-img"
                            src="img/hotel-results/2.jpg"
                            alt="تصویر متن جایگزین"
                            title="عنوان تصویر"
                          />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <ul class="theme-search-results-item-hotel-stars">
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                        <h5
                          class="theme-search-results-item-title _fw-b _mb-20 _fs theme-search-results-item-title-lg"
                        >
                          پارک مرکزی نیویورک
                        </h5>
                        <div class="theme-search-results-item-hotel-rating">
                          <p
                            class="theme-search-results-item-hotel-rating-title"
                          >
                            <b>5.6 خوب</b> &nbsp;(9402 بررسی)
                          </p>
                        </div>
                        <p class="theme-search-results-item-location">
                          <i class="fa fa-map-marker"></i>میدتاون شرق
                        </p>
                        <p class="theme-search-results-item-hotel-book-count">
                          <b>امروز 93</b> بار رزرو شده است
                        </p>
                        <ul class="theme-search-results-item-hotel-features">
                          <li><span>! </span>شامل صبحانه</li>
                        </ul>
                      </div>
                      <div class="col-md-2">
                        <div class="theme-search-results-item-book">
                          <div class="theme-search-results-item-price">
                            <p class="theme-search-results-item-price-tag">
                              100 تومان
                            </p>
                            <p class="theme-search-results-item-price-sign">
                              هر شب
                            </p>
                          </div>
                          <a
                            class="btn btn-primary-inverse btn-block theme-search-results-item-price-btn"
                            href="#"
                            >رزرو کن</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="collapse theme-search-results-item-collapse"
                    id="searchResultsItem-2"
                  >
                    <div class="theme-search-results-item-extend">
                      <a
                        class="theme-search-results-item-extend-close"
                        href="#searchResultsItem-2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="searchResultsItem-2"
                        >✕</a
                      >
                      <div class="tabbable theme-search-results-item-tabs">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="active" role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item-2-1"
                              aria-controls="tab-item-2-1"
                              >جزئیات</a
                            >
                          </li>
                          <li role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item-2-2"
                              aria-controls="tab-item-2-2"
                              >نقشه</a
                            >
                          </li>
                          <li role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item-2-3"
                              aria-controls="tab-item-2-3"
                              >نظرات</a
                            >
                          </li>
                          <li role="presentation">
                            <a
                              role="tab"
                              data-bs-toggle="tab"
                              href="#tab-item-2-4"
                              aria-controls="tab-item-2-4"
                              >مشابه</a
                            >
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div
                            class="tab-pane active"
                            role="tabpanel"
                            id="tab-item-2-1"
                          >
                            <div class="row" data-bs-gutter="20">
                              <div class="col-md-6">
                                <ul
                                  class="magnific-gallery theme-search-results-item-tabs-gallery"
                                >
                                  <li>
                                    <a href="img/hotel-results/gallery/2.jpg">
                                      <img
                                        src="img/hotel-results/gallery/2-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/8.jpg">
                                      <img
                                        src="img/hotel-results/gallery/8-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/4.jpg">
                                      <img
                                        src="img/hotel-results/gallery/4-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/3.jpg">
                                      <img
                                        src="img/hotel-results/gallery/3-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/12.jpg">
                                      <img
                                        src="img/hotel-results/gallery/12-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/5.jpg">
                                      <img
                                        src="img/hotel-results/gallery/5-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/10.jpg">
                                      <img
                                        src="img/hotel-results/gallery/10-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/11.jpg">
                                      <img
                                        src="img/hotel-results/gallery/11-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/9.jpg">
                                      <img
                                        src="img/hotel-results/gallery/9-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/6.jpg">
                                      <img
                                        src="img/hotel-results/gallery/6-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/1.jpg">
                                      <img
                                        src="img/hotel-results/gallery/1-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="img/hotel-results/gallery/7.jpg">
                                      <img
                                        src="img/hotel-results/gallery/7-s.jpg"
                                        alt="تصویر متن جایگزین"
                                        title="عنوان تصویر"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-md-6">
                                <p
                                  class="theme-search-results-item-tabs-details-desc"
                                >
                                  هتل تجاری خوب نزدیک به استارباکس مناسب برای
                                  گشت و گذار و نزدیک به مرکز شهر. فضای دوستانه و
                                  محوطه خوب هتل. خدمات نوکر عالی محبوب در بین
                                  خانواده ها.
                                </p>
                                <table
                                  class="theme-search-results-item-tabs-details-table"
                                >
                                  <tbody>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        محل
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 93%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>9.3</b>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        شفافیت
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 51%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>5.1</b>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        ارزش پول
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 55%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>5.5</b>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-title"
                                      >
                                        امکانات رفاهی
                                      </th>
                                      <th
                                        class="theme-search-results-item-tabs-details-table-value"
                                      >
                                        <div
                                          class="theme-search-results-item-tabs-details-table-value-bar"
                                        >
                                          <div style="width: 76%"></div>
                                        </div>
                                      </th>
                                      <th>
                                        <b>7.6</b>
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane"
                            role="tabpanel"
                            id="tab-item-2-2"
                          >
                            <div class="row" data-bs-gutter="20">
                              <div class="col-md-9">
                                <div
                                  class="google-map theme-search-results-item-tabs-map"
                                  data-bs-lat="40.7483624"
                                  data-bs-lng="-73.9900896"
                                ></div>
                              </div>
                              <div class="col-md-3">
                                <h3
                                  class="theme-search-results-item-tabs-map-title"
                                >
                                  تهران - ونک
                                </h3>
                                <p
                                  class="theme-search-results-item-tabs-map-phone"
                                >
                                  0912345678
                                </p>
                                <ul
                                  class="theme-search-results-item-tabs-map-rates"
                                >
                                  <li>
                                    <i
                                      class="fa fa-camera theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      تماشا
                                    </p>
                                  </li>
                                  <li>
                                    <i
                                      class="fa fa-cutlery theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      غذا خوردن
                                    </p>
                                  </li>
                                  <li>
                                    <i
                                      class="fa fa-glass theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      زندگی شبانه
                                    </p>
                                  </li>
                                  <li>
                                    <i
                                      class="fa fa-shopping-cart theme-search-results-item-tabs-map-rates-icon"
                                    ></i>
                                    <h5
                                      class="theme-search-results-item-tabs-map-rates-title"
                                    >
                                      <b>9.9</b> عالی
                                    </h5>
                                    <p
                                      class="theme-search-results-item-tabs-map-rates-sign"
                                    >
                                      خريد كردن
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane"
                            role="tabpanel"
                            id="tab-item-2-3"
                          >
                            <div class="theme-reviews">
                              <div class="theme-reviews-list">
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/redneck-man-fashion-model_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در 26 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط کارول بلوینز
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >6.5
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 65%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/man-wearing-black-formal-suit-with-black-necktie_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در 19 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط الیور راس
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >5.6
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 56%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/afro_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بررسی شده یکشنبه، 17 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط لیا کر
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >6.6
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 66%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/adult-chill-computer-connection-450271_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در دوشنبه، 11 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط نیل دیویدسون
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >8.3
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >عالی</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 83%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <article class="theme-reviews-item">
                                  <div class="row" data-bs-gutter="10">
                                    <div class="col-md-3">
                                      <div class="theme-reviews-item-info">
                                        <img
                                          class="theme-reviews-item-avatar"
                                          src="img/luca_70x70.jpg"
                                          alt="تصویر متن جایگزین"
                                          title="عنوان تصویر"
                                        />
                                        <p class="theme-reviews-item-date">
                                          بازبینی شده در سه شنبه، 5 تیر
                                        </p>
                                        <p class="theme-reviews-item-author">
                                          توسط سارا اسلیتر
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-md-9">
                                      <div class="theme-reviews-rating">
                                        <div
                                          class="theme-reviews-rating-header"
                                        >
                                          <span class="theme-reviews-rating-num"
                                            >6.3
                                          </span>
                                          <span
                                            class="theme-reviews-rating-title"
                                            >خوب</span
                                          >
                                        </div>
                                        <div class="theme-reviews-rating-bar">
                                          <div style="width: 63%"></div>
                                        </div>
                                      </div>
                                      <div class="theme-reviews-item-body">
                                        <p class="theme-reviews-item-text">
                                          اگر شما یک طراح هستین و یا با طراحی
                                          های گرافیکی سروکار دارید به متن های
                                          برخورده اید که با نام لورم ایپسوم
                                          شناخته می‌شوند.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <div class="row">
                                  <div class="col-md-9 col-md-offset-3">
                                    <a class="theme-reviews-more" href="#"
                                      >+ نظرات بیشتر</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane"
                            role="tabpanel"
                            id="tab-item-2-4"
                          >
                            <div class="row" data-bs-gutter="10">
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/1.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      470 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      هتل میلنیوم برادوی - میدان تایمز
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/2.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      140 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      تایم نیویورک
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/3.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      450 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      هادسون نیویورک، پارک مرکزی
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div
                                  class="theme-search-results-item-tabs-similar-item"
                                >
                                  <a
                                    class="theme-search-results-item-tabs-similar-item-link"
                                    href="#"
                                  ></a>
                                  <img
                                    class="theme-search-results-item-tabs-similar-item-img"
                                    src="img/hotel-results/similar/4.jpg"
                                    alt="تصویر متن جایگزین"
                                    title="عنوان تصویر"
                                  />
                                  <div
                                    class="theme-search-results-item-tabs-similar-item-caption"
                                  >
                                    <p
                                      class="theme-search-results-item-tabs-similar-item-price"
                                    >
                                      240 تومان
                                    </p>
                                    <ul
                                      class="theme-search-results-item-tabs-similar-item-stars"
                                    >
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li class="active">
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <h5
                                      class="theme-search-results-item-tabs-similar-item-title"
                                    >
                                      پارس
                                    </h5>
                                    <a
                                      class="btn btn-primary btn-block btn-sm text-center theme-search-results-item-tabs-similar-item-book"
                                      >مشاهده معامله</a
                                    >
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
              </div>
              <div class="_desk-h">
                <div
                  class="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid"
                >
                  <div class="banner _h-30vh banner-">
                    <div
                      class="banner-bg"
                      style="background-image: url('/img/hotel-results/1.jpg')"
                    ></div>
                  </div>
                  <div class="theme-search-results-item-grid-body">
                    <a class="theme-search-results-item-mask-link" href="#"></a>
                    <div class="theme-search-results-item-grid-header">
                      <ul class="theme-search-results-item-hotel-stars">
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <h5 class="theme-search-results-item-title _fs">
                        Radisson Martinque on Broadway
                      </h5>
                    </div>
                    <div class="theme-search-results-item-grid-caption">
                      <div class="row" data-bs-gutter="10">
                        <div class="col-xs-9">
                          <div class="theme-search-results-item-hotel-rating">
                            <p
                              class="theme-search-results-item-hotel-rating-title"
                            >
                              <b>7.7 عالی</b>
                              <br />5089 reviews
                            </p>
                          </div>
                        </div>
                        <div class="col-xs-3">
                          <div class="theme-search-results-item-price">
                            <p class="theme-search-results-item-price-tag">
                              47 تومان
                            </p>
                            <p class="theme-search-results-item-price-sign">
                              هرشب
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid"
                >
                  <div class="banner _h-30vh banner-">
                    <div
                      class="banner-bg"
                      style="background-image: url('/img/hotel-results/2.jpg')"
                    ></div>
                  </div>
                  <div class="theme-search-results-item-grid-body">
                    <a class="theme-search-results-item-mask-link" href="#"></a>
                    <div class="theme-search-results-item-grid-header">
                      <ul class="theme-search-results-item-hotel-stars">
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <h5 class="theme-search-results-item-title _fs">
                        پارک مرکزی تهران
                      </h5>
                    </div>
                    <div class="theme-search-results-item-grid-caption">
                      <div class="row" data-bs-gutter="10">
                        <div class="col-xs-9">
                          <div class="theme-search-results-item-hotel-rating">
                            <p
                              class="theme-search-results-item-hotel-rating-title"
                            >
                              <b>5.3 اوکی </b>
                              <br />7785 بررسی ها
                            </p>
                          </div>
                        </div>
                        <div class="col-xs-3">
                          <div class="theme-search-results-item-price">
                            <p class="theme-search-results-item-price-tag">
                              30 تومان
                            </p>
                            <p class="theme-search-results-item-price-sign">
                              هرشب
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="theme-search-results-mobile-filters"
                id="mobileFilters"
              >
                <a
                  class="theme-search-results-mobile-filters-btn magnific-inline"
                  href="#MobileFilters"
                >
                  <i class="fa fa-filter"></i>فیلترها
                </a>
                <div class="magnific-popup mfp-hide" id="MobileFilters">
                  <div class="theme-search-results-sidebar">
                    <div class="theme-search-results-sidebar-sections">
                      <div class="theme-search-results-sidebar-section">
                        <h5 class="theme-search-results-sidebar-section-title">
                          جستجوی هتل ها
                        </h5>
                        <div
                          class="theme-search-results-sidebar-section-search"
                        >
                          <input
                            class="theme-search-results-sidebar-section-search-input"
                            type="text"
                            placeholder="نام هتل، آدرس"
                          />
                          <a
                            class="fa fa-search theme-search-results-sidebar-section-search-btn"
                            href="#"
                          ></a>
                        </div>
                      </div>
                      <div class="theme-search-results-sidebar-section">
                        <h5 class="theme-search-results-sidebar-section-title">
                          امتیاز بررسی
                        </h5>
                        <div
                          class="theme-search-results-sidebar-section-checkbox-list"
                        >
                          <div
                            class="theme-search-results-sidebar-section-checkbox-list-items"
                          >
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">عالی</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                378</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">خوب</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                497</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">باشه</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                126</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">متوسط</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                438</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">ضعیف</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                209</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="theme-search-results-sidebar-section">
                        <h5 class="theme-search-results-sidebar-section-title">
                          قیمت
                        </h5>
                        <div class="theme-search-results-sidebar-section-price">
                          <input type="range" min="100" max="500" step="20" />
                        </div>
                      </div>
                      <div class="theme-search-results-sidebar-section">
                        <h5 class="theme-search-results-sidebar-section-title">
                          محله ها
                        </h5>
                        <div
                          class="theme-search-results-sidebar-section-checkbox-list"
                        >
                          <div
                            class="theme-search-results-sidebar-section-checkbox-list-items"
                          >
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">میدتاون</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                255</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">ونک</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                393</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">هلز</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                403</span
                              >
                            </div>
                            <div
                              class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                            >
                              <label class="icheck-label">
                                <input class="icheck" type="checkbox" />
                                <span class="icheck-title">ونک</span>
                              </label>
                              <span
                                class="theme-search-results-sidebar-section-checkbox-list-amount"
                              >
                                255</span
                              >
                            </div>
                          </div>
                          <div
                            class="collapse"
                            id="SearchResultsCheckboxNeighborhoods"
                          >
                            <div
                              class="theme-search-results-sidebar-section-checkbox-list-items theme-search-results-sidebar-section-checkbox-list-items-expand"
                            >
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title"> منطقه</span>
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  101</span
                                >
                              </div>
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title">منطقه مالی</span>
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  116</span
                                >
                              </div>
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title">چلسی</span>
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  263</span
                                >
                              </div>
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title">غرب ساید</span>
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  298</span
                                >
                              </div>
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title">شرق ساید</span>
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  170</span
                                >
                              </div>
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title">محله چینی</span>
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  295</span
                                >
                              </div>
                              <div
                                class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                              >
                                <label class="icheck-label">
                                  <input class="icheck" type="checkbox" />
                                  <span class="icheck-title"
                                    >ایتالیای کوچک</span
                                  >
                                </label>
                                <span
                                  class="theme-search-results-sidebar-section-checkbox-list-amount"
                                >
                                  462</span
                                >
                              </div>
                            </div>
                          </div>
                          <a
                            class="theme-search-results-sidebar-section-checkbox-list-expand-link"
                            role="button"
                            data-bs-toggle="collapse"
                            href="#SearchResultsCheckboxNeighborhoods"
                            aria-expanded="false"
                            >بیشتر نشان بده، اطلاعات بیشتر
                            <i class="fa fa-angle-down"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2-5">
            <div class="sticky-col _mob-h">
              <div class="theme-ad _mb-20 theme-ad-dark">
                <a class="theme-ad-link" href="#"></a>
                <p class="theme-ad-sign">تبلیغات</p>
                <img
                  class="theme-ad-img"
                  src="img/side_banners/hotel/1.jpg"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </div>
              <div class="theme-ad theme-ad-dark">
                <a class="theme-ad-link" href="#"></a>
                <p class="theme-ad-sign">تبلیغات</p>
                <img
                  class="theme-ad-img"
                  src="img/side_banners/hotel/3.jpg"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>