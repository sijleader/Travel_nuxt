<template>
  <div>
    <div class="theme-hero-area">
      <div class="theme-hero-area-bg-wrap">
        <div id="hero-banner" class="theme-hero-area-bg banner-bg"></div>
        <!-- <img id="hero-banner" class="theme-hero-area-bg banner-bg" src="~/static/img/architecture-bridge-buildings-calm-waters-427679_1500x800.jpg"> -->
        <div class="theme-hero-area-mask theme-hero-area-mask-strong"></div>
        <div
          class="blur-area"
          data-bg-area="#hero-banner"
          data-blur-area="#hero-search-form"
          data-blur="20"
        ></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="container">
          <div class="row _pb-50 _pt-100 _pv-mob-50">
            <div class="col-md-10 col-md-offset-1">
              <SeachDesktop />
              <div
                class="theme-search-area-inline _desk-h theme-search-area-inline-white"
              >
                <!-- <h4 class="theme-search-area-inline-title">پروازهای لودون</h4>
                <p class="theme-search-area-inline-details">
                  27 تیر ← 2 مهر، 1 مسافر
                </p> -->
                <!-- <b-button
                  class="theme-search-area-inline-link magnific-inline"
                  data-bs-toggle="modal"
                  data-bs-target="#searchEditModal"
                >
                  <i class="fa fa-pencil"></i>ویرایش کنید
                </b-button> -->
                
                <SearchMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="theme-page-section theme-page-section-dark">
      <div class="container">
        <div id="sticky-parent" class="row row-col-static" data-gutter="20">
          <div class="col-md-2-5">
            <div class="sticky-col _mob-h">
              <div class="theme-search-results-sidebar">
                <div
                  class="theme-search-results-sidebar-sections _mb-20 _br-2 theme-search-results-sidebar-sections-white"
                >
                  <Filters />
                </div>
              </div>
              <div class="theme-ad theme-ad-dark">
                <a class="theme-ad-link" href="#"></a>
                <p class="theme-ad-sign">تبلیغات</p>
                <img
                  class="theme-ad-img"
                  src="~/static/img/side_banners/flight/2.jpg"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="theme-search-results-sort _b-n _mob-h clearfix">
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
                    >مدت زمان
                    <span>طولانی ← کوتاه</span>
                  </a>
                </li>
                <li>
                  <a href="#"
                    >توصیه
                    <span>شده زیاد ← کم</span>
                  </a>
                </li>
                <li>
                  <a href="#"
                    >نام شرکت هواپیمایی
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
                    <a href="#">برخاستن</a>
                  </li>
                  <li>
                    <a href="#">فرود خروج</a>
                  </li>
                  <li>
                    <a href="#">پرواز برگشت</a>
                  </li>
                  <li>
                    <a href="#">فرود برگشت</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="theme-search-results-sort-select _desk-h">
              <select>
                <option>قیمت</option>
                <option>مدت زمان</option>
                <option>توصیه شده</option>
                <option>نام شرکت هواپیمایی</option>
                <option>برخاستن</option>
                <option>فرود خروج</option>
                <option>پرواز برگشت</option>
                <option>فرود برگشت</option>
              </select>
            </div>
            <FilterMobile />
            <div class="theme-search-results">
              <Ticket />
            </div>
          </div>
          <!-- <div class="col-md-2-5">
            <div class="sticky-col _mob-h">
              <div class="theme-ad _mb-20 theme-ad-dark">
                <a class="theme-ad-link" href="#"></a>
                <p class="theme-ad-sign">تبلیغات</p>
                <img
                  class="theme-ad-img"
                  src="img/side_banners/flight/1.jpg"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </div>
              <div class="theme-ad theme-ad-dark">
                <a class="theme-ad-link" href="#"></a>
                <p class="theme-ad-sign">تبلیغات</p>
                <img
                  class="theme-ad-img"
                  src="img/side_banners/flight/3.jpg"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LeftSidebar from '~/components/Flight-Components/Left-sidebar'
// import RightSidebar from '~/components/Flight-Components/Right-sidebar'
// import Banner from '~/components/Flight-Components/Banner'
import SearchMobile from '~/components/Flight/Search-mobile'
import FilterMobile from '~/components/Flight/Filter-mobile'
import SeachDesktop from '~/components/Flight/Search-Desktop'
import Filters from '~/components/Filters'
import Ticket from '~/components/Flight/Ticket'

export default {
  components: {
    SearchMobile,
    FilterMobile,
    SeachDesktop,
    Filters,
    Ticket,
    //   LeftSidebar,
    //   RightSidebar,
    //   Banner,
  },

  // data() {
  //   return {
  //     show: false,
  //   }
  // },
  // methods: {
  //   toggle() {
  //     this.show = !this.show
  //   },
  // },
}
</script>
<style scoped>
.banner-bg {
  background-image: url('~/static/img/architecture-bridge-buildings-calm-waters-427679_1500x800.jpg');
}
</style>
