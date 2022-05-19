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
              قوانین و مقررات
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div
      class="theme-page-section _pt-0 theme-page-section-gray theme-page-section-xxl"
    >
      <div class="container">
        <div class="front _mb-90 _mt--90 _mt-mob--60">
          <div class="theme-search-area-tabs">
            <div class="tabbable">
              <div
                class="tab-content _ph-25 _pt-30 _pb-15 _bg-w _bsh-xxl _bsh-light tab-content-curved"
              >
                <b-card>
                  <b-tabs content-class="mt-3" fill justified>
                    <b-tab title="First" active>
                      <QA />
                    </b-tab>
                    <b-tab title="Second">
                      <div class="theme-account-preferences-item">
                        <div class="row">
                          <!-- <div class="col-md-3">
                            <h5 class="theme-account-preferences-item-title">
                              زبان پیش فرض
                            </h5>
                          </div> -->
                          <div class="col-md-12">
                            <p
                              class="theme-account-preferences-item-value"
                              href="#ChangeLanguage"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeLanguage"
                            >
                              انگلیسی (EN)
                            </p>
                            <div id="ChangeLanguage" class="collapse">
                              <div
                                class="theme-account-preferences-item-change"
                              >
                                <div
                                  class="form-group theme-account-preferences-item-change-form"
                                >
                                  <select class="form-control">
                                    <option>انگلیسی (EN)</option>
                                  </select>
                                </div>
                                <div
                                  class="theme-account-preferences-item-change-actions"
                                >
                                  <a class="btn btn-sm btn-primary" href="#"
                                    >ذخیره تغییرات
                                  </a>
                                  <a
                                    class="btn btn-sm btn-default"
                                    href="#ChangeLanguage"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="ChangeLanguage"
                                    >لغو</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="col-md-2">
                            <a
                              class="theme-account-preferences-item-change-link"
                              href="#ChangeLanguage"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeLanguage"
                            >
                              <i class="fa fa-pencil"></i>ویرایش کنید
                            </a>
                          </div> -->
                        </div>
                      </div>
                    </b-tab>
                    <b-tab title="Very, very long title"
                      ><p>I'm the tab with the very, very long title</p></b-tab
                    >
                  </b-tabs>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      myItems: [
        {
          title: 'How many time zones are there in all?',
          value:
            'Given a 24-hour day and 360 degrees of longitude around the Earth',
          category: 'Tab-1',
        },
        {
          title: 'How long is a day and year on Venus?',
          value:
            'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
          category: 'Tab-2',
        },
        {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.',
          category: 'Tab-3',
        },
        {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.',
          category: 'Tab-4',
        },
        {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.',
          category: 'Tab-5',
        },
      ],
      activetab: '1',
    }
  },
}
</script>

<style scoped>
.hero-bg {
  background-image: url('~/static/img/activity-adult-beach-beautiful-378152_1500x800.jpg');
}
</style>
