<template>
  <div>
    <div class="theme-hero-area theme-hero-area-half">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg hero-bg"></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-half"></div>
        <div class="theme-hero-area-inner-shadow"></div>
      </div>
      <div
        class="theme-hero-area-body theme-page-section theme-page-section-xxl"
      >
        <div class="container">
          <div
            class="theme-page-header theme-page-header-lg theme-page-header-abs"
          >
            <h1 class="theme-page-header-title" align="center">
              سوالات متداول
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        theme-page-section
        _pt-0
        theme-page-section-gray theme-page-section-xxl
      "
    >
      <div class="container">
        <div class="front _mb-90 _mt--90 _mt-mob--60">
          <div class="theme-search-area-tabs">
            <div class="tabbable">
              <div
                class="
                  nav
                  _mh-mob-5
                  nav-tabs
                  nav-center
                  nav-white
                  nav-active-white
                  nav-no-br
                  nav-lg
                  nav-mob-inline
                "
                role="tablist"
              >
                <div
                  class="
                    tab-content
                    _ph-25
                    _pt-30
                    _pb-15
                    _bg-w
                    _bsh-xxl _bsh-light
                    tab-content-curved
                  "
                >
                  <div class="tab-pane active" role="tab-panel"></div>
                  <b-tabs
                    class="
                      nav
                      nav-tabs
                      nav-white
                      nav-line
                      nav-center
                      nav-lg
                      nav-no-br
                      nav-mob-inline
                    "
                    align="center"
                    justified
                  >
                    <b-tab>
                      <template #title>
                        <i
                          class="nav-icon _op-06 nav-icon-center fa fa-child"
                        ></i
                        >پرواز داخلی
                      </template>
                      <QA />
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import QA from '~/components/QA'
export default {
  components: {
    QA,
  },
  layout: 'default',
  data() {
    return {
      phoneNumber: null,
      results: null,
    }
  },
}
</script>

<style scoped>
.hero-bg {
  background-image: url('~/static/img/activity-adult-beach-beautiful-378152_1500x800.jpg');
}
</style>
