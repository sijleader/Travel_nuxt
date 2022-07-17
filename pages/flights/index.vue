<template>
  <div>
    <!-- <Loading v-if="isLoading"></Loading> -->
    <div class="theme-hero-area">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg banner"></div>
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
              <SearchMobile />
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
                  src="/img/side_banners/flight/2.jpg"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="theme-search-results-sort _mob-h clearfix">
              <h5 class="theme-search-results-sort-title">مرتب سازی:</h5>
              <ul class="theme-search-results-sort-list">
                <li class="justify-content-center flex-fill">
                  <a href="#"
                    >قیمت
                    <span>زیاد ← کم</span>
                  </a>
                </li>
                <li class="justify-content-center flex-fill">
                  <a href="#"
                    >قیمت
                    <span>کم ← زیاد</span>
                  </a>
                </li>
                <li class="justify-content-center flex-fill">
                  <a href="#"
                    >ساعت حرکت
                    <span>زودترین ← دیرترین</span>
                  </a>
                </li>
                <li class="justify-content-center flex-fill">
                  <a href="#"
                    >ساعت حرکت
                    <span>دیرترین ← زودترین</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="theme-search-results-sort-select _desk-h clearfix">
              <select>
                <option>قیمت: زیاد ← کم</option>
                <option>قیمت: کم ← زیاد</option>
                <option>ساعت حرکت: زودترین ← دیرترین</option>
                <option>ساعت حرکت: دیرترین ← زودترین</option>
              </select>
            </div>
            <FilterMobile />
            <div v-for="(ticket,i) in ticketResults" :key="i" class="theme-search-results">
              <Ticket :ticket="ticket"/>
            </div>
            <!-- <div
              class="theme-search-results-item _mb-10 _b-n theme-search-results-item-rounded theme-search-results-item-"
            >
              <div class="theme-search-results-item-preview">
                {{ results }}
              </div>
            </div> -->
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
import SearchMobile from '../../components/Flight/Search-mobile'
import FilterMobile from '../../components/Flight/Filter-mobile'
import SeachDesktop from '../../components/Flight/Search-Desktop'
import Filters from '../../components/Filters'
import Ticket from '../../components/Flight/Ticket'
import Loading from '../../components/loading.vue'

export default {
  components: {
    SearchMobile,
    FilterMobile,
    SeachDesktop,
    Filters,
    Ticket,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      ticketResults: this.$store.state.results,
    }
  },
  mounted() {
    console.log(this.$store.state.results)
  },
}
</script>

<style scoped>
.banner {
  background-image: url('/img/architecture-bridge-buildings-calm-waters-427679_1500x800.jpg');
}
</style>
