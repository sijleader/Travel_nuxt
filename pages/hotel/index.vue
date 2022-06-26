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
              <DesktopSearch />
              <MobileSearch />
              <div
                class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
              >
                <!-- <br />
        Window height: {{ windowHeight }} <br />
        {{ txt }} -->
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
          <DesktopFilters />
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
            <div class="theme-search-results-mobile-filters" id="mobileFilters">
              <MobileFilters />
            </div>
            <div class="theme-search-results">
              <HotelResult />
              <div
                class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
              >
                <div class="theme-search-results-item-preview">
                  <a
                    class="theme-search-results-item-mask-link"
                    href="#searchResultsItem-11"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="searchResultsItem-11"
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
                          src="img/hotel-results/11.jpg"
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
                        هتل تهران
                      </h5>
                      <div class="theme-search-results-item-hotel-rating">
                        <p class="theme-search-results-item-hotel-rating-title">
                          <b>6.6 عالی</b>&nbsp;(8775 نظرات)
                        </p>
                      </div>
                      <p class="theme-search-results-item-location">
                        <i class="fa fa-map-marker"></i>سمت شرق
                      </p>
                      <p class="theme-search-results-item-hotel-book-count">
                        رزرو <b>49</b>بار امروز
                      </p>
                      <ul class="theme-search-results-item-hotel-features"></ul>
                    </div>
                    <div class="col-md-2">
                      <div class="theme-search-results-item-book">
                        <div class="theme-search-results-item-price">
                          <p class="theme-search-results-item-price-tag">
                            140 تومان
                          </p>
                          <p class="theme-search-results-item-price-sign">
                            هرشب
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
                  id="searchResultsItem-11"
                >
                  <div class="theme-search-results-item-extend">
                    <a
                      class="theme-search-results-item-extend-close"
                      href="#searchResultsItem-11"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="searchResultsItem-11"
                      >✕</a
                    >
                    <div class="tabbable theme-search-results-item-tabs">
                      <ul class="nav nav-tabs" role="tablist">
                        <li class="active" role="presentation">
                          <a
                            role="tab"
                            data-bs-toggle="tab"
                            href="#tab-item-11-1"
                            aria-controls="tab-item-11-1"
                            >جزئیات</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            role="tab"
                            data-bs-toggle="tab"
                            href="#tab-item-11-2"
                            aria-controls="tab-item-11-2"
                            >نقشه
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            role="tab"
                            data-bs-toggle="tab"
                            href="#tab-item-11-3"
                            aria-controls="tab-item-11-3"
                            >نظرات
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            role="tab"
                            data-bs-toggle="tab"
                            href="#tab-item-11-4"
                            aria-controls="tab-item-11-4"
                            >مشابه
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div
                          class="tab-pane active"
                          role="tabpanel"
                          id="tab-item-11-1"
                        >
                          <div class="row" data-bs-gutter="20">
                            <div class="col-md-6">
                              <ul
                                class="magnific-gallery theme-search-results-item-tabs-gallery"
                              >
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
                                  <a href="img/hotel-results/gallery/12.jpg">
                                    <img
                                      src="img/hotel-results/gallery/12-s.jpg"
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
                                  <a href="img/hotel-results/gallery/4.jpg">
                                    <img
                                      src="img/hotel-results/gallery/4-s.jpg"
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
                                  <a href="img/hotel-results/gallery/9.jpg">
                                    <img
                                      src="img/hotel-results/gallery/9-s.jpg"
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
                              </ul>
                            </div>
                            <div class="col-md-6">
                              <p
                                class="theme-search-results-item-tabs-details-desc"
                              >
                                از آنجا که لورم ایپسوم، شباهت زیادی به متن های
                                واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده
                                میکنند تا فقط به مشتری یا کار فرما نشان دهند که
                                قالب طراحی شده بعد از اینکه متن در آن قرار میگرد
                                چگونه خواهد بود و فونت ها و اندازه ها چگونه در
                                نظر گرفته شده است.
                              </p>
                              <table
                                class="theme-search-results-item-tabs-details-table"
                              >
                                <tbody>
                                  <tr>
                                    <th
                                      class="theme-search-results-item-tabs-details-table-title"
                                    >
                                      مکان
                                    </th>
                                    <th
                                      class="theme-search-results-item-tabs-details-table-value"
                                    >
                                      <div
                                        class="theme-search-results-item-tabs-details-table-value-bar"
                                      >
                                        <div style="width: 59%"></div>
                                      </div>
                                    </th>
                                    <th>
                                      <b>5.9</b>
                                    </th>
                                  </tr>
                                  <tr>
                                    <th
                                      class="theme-search-results-item-tabs-details-table-title"
                                    >
                                      روشنایی
                                    </th>
                                    <th
                                      class="theme-search-results-item-tabs-details-table-value"
                                    >
                                      <div
                                        class="theme-search-results-item-tabs-details-table-value-bar"
                                      >
                                        <div style="width: 65%"></div>
                                      </div>
                                    </th>
                                    <th>
                                      <b>6.5</b>
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
                                        <div style="width: 100%"></div>
                                      </div>
                                    </th>
                                    <th>
                                      <b>10</b>
                                    </th>
                                  </tr>
                                  <tr>
                                    <th
                                      class="theme-search-results-item-tabs-details-table-title"
                                    >
                                      امکانات
                                    </th>
                                    <th
                                      class="theme-search-results-item-tabs-details-table-value"
                                    >
                                      <div
                                        class="theme-search-results-item-tabs-details-table-value-bar"
                                      >
                                        <div style="width: 68%"></div>
                                      </div>
                                    </th>
                                    <th>
                                      <b>6.8</b>
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
                          id="tab-item-11-2"
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
                                09123144060
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
                                    <b>9.9</b>عالی
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
                                    <b>9.9</b>عالی
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
                                    <b>9.9</b>عالی
                                  </h5>
                                  <p
                                    class="theme-search-results-item-tabs-map-rates-sign"
                                  >
                                    شب زنده داری
                                  </p>
                                </li>
                                <li>
                                  <i
                                    class="fa fa-shopping-cart theme-search-results-item-tabs-map-rates-icon"
                                  ></i>
                                  <h5
                                    class="theme-search-results-item-tabs-map-rates-title"
                                  >
                                    <b>9.9</b>عالی
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
                          id="tab-item-11-3"
                        >
                          <div class="theme-reviews">
                            <div class="theme-reviews-list">
                              <article class="theme-reviews-item">
                                <div class="row" data-bs-gutter="10">
                                  <div class="col-md-3">
                                    <div class="theme-reviews-item-info">
                                      <img
                                        class="theme-reviews-item-avatar"
                                        src="img/fashion-beauty-model-portrait-girl_70x70.jpg"
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
                                      <div class="theme-reviews-rating-header">
                                        <span class="theme-reviews-rating-num"
                                          >7.8</span
                                        >
                                        <span
                                          class="theme-reviews-rating-title"
                                        >
                                          عالی</span
                                        >
                                      </div>
                                      <div class="theme-reviews-rating-bar">
                                        <div style="width: 78%"></div>
                                      </div>
                                    </div>
                                    <div class="theme-reviews-item-body">
                                      <p class="theme-reviews-item-text">
                                        اگر شما یک طراح هستین و یا با طراحی های
                                        گرافیکی سروکار دارید به متن های برخورده
                                        اید که با نام لورم ایپسوم شناخته
                                        می‌شوند.
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
                                        بررسی شده 21 بهمن
                                      </p>
                                      <p class="theme-reviews-item-author">
                                        با اسمیت
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-9">
                                    <div class="theme-reviews-rating">
                                      <div class="theme-reviews-rating-header">
                                        <span class="theme-reviews-rating-num"
                                          >8.5</span
                                        >
                                        <span class="theme-reviews-rating-title"
                                          >عالی</span
                                        >
                                      </div>
                                      <div class="theme-reviews-rating-bar">
                                        <div style="width: 85%"></div>
                                      </div>
                                    </div>
                                    <div class="theme-reviews-item-body">
                                      <p class="theme-reviews-item-text">
                                        اگر شما یک طراح هستین و یا با طراحی های
                                        گرافیکی سروکار دارید به متن های برخورده
                                        اید که با نام لورم ایپسوم شناخته
                                        می‌شوند.
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
                                        بررسی شده در 13 بهمن
                                      </p>
                                      <p class="theme-reviews-item-author">
                                        با جان دو
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-9">
                                    <div class="theme-reviews-rating">
                                      <div class="theme-reviews-rating-header">
                                        <span class="theme-reviews-rating-num"
                                          >10.0</span
                                        >
                                        <span class="theme-reviews-rating-title"
                                          >عالی</span
                                        >
                                      </div>
                                      <div class="theme-reviews-rating-bar">
                                        <div style="width: 100%"></div>
                                      </div>
                                    </div>
                                    <div class="theme-reviews-item-body">
                                      <p class="theme-reviews-item-text">
                                        اگر شما یک طراح هستین و یا با طراحی های
                                        گرافیکی سروکار دارید به متن های برخورده
                                        اید که با نام لورم ایپسوم شناخته
                                        می‌شوند.
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
                                        src="img/sevenly_shirts_-_june_2012__2_70x70.jpg"
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
                                      <div class="theme-reviews-rating-header">
                                        <span class="theme-reviews-rating-num"
                                          >7.0</span
                                        >
                                        <span
                                          class="theme-reviews-rating-title"
                                        >
                                          عالی</span
                                        >
                                      </div>
                                      <div class="theme-reviews-rating-bar">
                                        <div style="width: 70%"></div>
                                      </div>
                                    </div>
                                    <div class="theme-reviews-item-body">
                                      <p class="theme-reviews-item-text">
                                        اگر شما یک طراح هستین و یا با طراحی های
                                        گرافیکی سروکار دارید به متن های برخورده
                                        اید که با نام لورم ایپسوم شناخته
                                        می‌شوند.
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
                                        با اسمیت
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-9">
                                    <div class="theme-reviews-rating">
                                      <div class="theme-reviews-rating-header">
                                        <span class="theme-reviews-rating-num"
                                          >6.9</span
                                        >
                                        <span
                                          class="theme-reviews-rating-title"
                                        >
                                          عالی</span
                                        >
                                      </div>
                                      <div class="theme-reviews-rating-bar">
                                        <div style="width: 69%"></div>
                                      </div>
                                    </div>
                                    <div class="theme-reviews-item-body">
                                      <p class="theme-reviews-item-text">
                                        اگر شما یک طراح هستین و یا با طراحی های
                                        گرافیکی سروکار دارید به متن های برخورده
                                        اید که با نام لورم ایپسوم شناخته
                                        می‌شوند.
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
                          id="tab-item-11-4"
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
                                    129
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
                                    70 تومان
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
                                    325
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
                                    302
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

<script>
import MobileFilters from '../../components/Hotel/Mobile-Filters.vue'
import MobileSearch from '../../components/Hotel/Mobile-Search.vue'
import DesktopSearch from '../../components/Hotel/Desktop-Search.vue'
import DesktopFilters from '../../components/Hotel/Desktop-Filters.vue'
import HotelResult from '../../components/Hotel/Hotel-Result.vue'
export default {
  layout: 'default',
  components: {
    MobileFilters,
    MobileSearch,
    DesktopSearch,
    DesktopFilters,
    HotelResult,
  },
  // computed:{
  //   checkWidth(){
  //     const wid = this.window.innerWidth
  //     if(wid < 992){
  //       return "_desk-h"
  //     } else{
  //       return "_mob-h"
  //     }
  //   }
  // }
  // data() {
  //   return {
  //     windowHeight: window.width,
  //     txt: '',
  //   }
  // },
  // watch: {
  //   windowHeight(newHeight, oldHeight) {
  //     this.txt = `it changed to ${newHeight} from ${oldHeight}`
  //   },
  // },
  // mounted() {
  //   this.$nextTick(() => {
  //     window.addEventListener('resize', this.onResize)
  //   })
  // },

  // beforeDestroy() {
  //   window.removeEventListener('resize', this.onResize)
  // },

  // methods: {
  //   onResize() {
  //     this.windowHeight = this.window.width
  //   },
  // },
  // methods: {
  //   getWidth() {
  //     const screenwidth = this.screen.availWidth
  //     this.width = screenwidth
  //   },
  // },
}
</script>
