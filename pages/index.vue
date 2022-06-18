<template>
  <div>
    <div class="_pos-r">
      <div class="theme-hero-area _h-desk-100vh">
        <div class="theme-hero-area-bg-wrap">
          <div class="theme-hero-area-bg mainbg-1"></div>
          <div
            class="theme-hero-area-bg-pattern theme-hero-area-bg-pattern-strong mainbg-2"
          ></div>
          <div class="theme-hero-area-mask"></div>
          <div class="theme-hero-area-inner-shadow"></div>
        </div>
        <div class="theme-hero-area-body _pos-desk-v-c _w-f _pv-mob-50">
          <div class="container">
            <div class="theme-search-area-tabs _pb-100">
              <div class="theme-search-area-tabs-header _c-w _mb-50">
                <!-- <h1
                  class="theme-search-area-tabs-title theme-search-area-tabs-title-lg"
                >
                  زمان سفر
                </h1> -->
              </div>
              <div class="tabbable">
                <ul
                  class="nav _fw-b _mb-5 nav-tabs nav-white nav-blank nav-xl nav-active-primary nav-mob-inline"
                  role="tablist"
                >
                  <li>
                    <nuxt-link data-bs-toggle="tab" to="#Flight"
                      >پرواز داخلی</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link data-bs-toggle="tab" to="#Hotel">هتل</nuxt-link>
                  </li>
                </ul>
                <div class="tab-content _pt-15">
                  <div id="Flight" class="tab-pane active">
                    <Flight />
                  </div>
                  <div id="Hotel" class="tab-pane">
                    <Hotel />
                  </div>
                </div>
              </div>
              <!-- <div class="tab-content _pt-15">
                <b-tabs
                  class="nav _fw-b _mb-5 nav-tabs nav-white nav-blank nav-xl nav-active-primary nav-mob-inline"
                  role="tablist"
                  content-class="mt-3"
                  fill
                  
                >
                  <b-tab
                    class="tabbable tab-pane"
                    title="پروازها"
                    title-link-class="tab-pane"
                    active
                  >
                    <Flight />
                  </b-tab>
                  <b-tab
                    class="tabbable tab-pane"
                    title-link-class="tab-pane"
                    title="هتل"
                  >
                    <Hotel />
                  </b-tab>
                </b-tabs>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flight from '~/components/Flight-Search'
import Hotel from '~/components/Hotel-Search'
export default {
  components: {
    Flight,
    Hotel,
  },
  layout: 'landing',
}
</script>

<style scoped>
.mainbg-1 {
  background-image: url('~/static/img/jocbjnw5_rc_1500x800.jpg');
}

.mainbg-2 {
  background-image: url('~/static/img/patterns/ep_naturalblack.png');
}

.nuxt-link-active {
  font-weight: bold;
}

.nuxt-link-exact-active {
  color: #0093d2;
  background: none;
  border-color: #0093d2;
}
</style>
