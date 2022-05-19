<template>
  <div>
    <div class="col-md-2-5">
      <div class="sticky-col _mob-h">
        <div class="theme-search-results-sidebar">
          <div
            class="theme-search-results-sidebar-sections _mb-20 _br-2 theme-search-results-sidebar-sections-white"
          >
            <div class="theme-search-results-sidebar-section">
              <h5 class="theme-search-results-sidebar-section-title">
                کلاس پرواز
              </h5>
              <div class="theme-search-results-sidebar-section-checkbox-list">
                <div
                  class="theme-search-results-sidebar-section-checkbox-list-items"
                >
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title">اقتصادی</span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      230 تومان</span
                    >
                  </div>
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title">تجارت</span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      423 تومان</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="theme-search-results-sidebar-section">
              <h5 class="theme-search-results-sidebar-section-title">
                برخاستن از نیویورک
              </h5>
              <div class="theme-search-results-sidebar-section-checkbox-list">
                <div
                  class="theme-search-results-sidebar-section-checkbox-list-items"
                >
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title"
                        >صبح
                        <span class="icheck-sub-title"
                          >از 05:00 صبح تا 11:59 صبح</span
                        >
                      </span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      153 تومان</span
                    >
                  </div>
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title"
                        >بعدازظهر از
                        <span class="icheck-sub-title"
                          >ساعت 12:00 تا 17:59</span
                        >
                      </span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      500 تومان</span
                    >
                  </div>
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title"
                        >عصر
                        <span class="icheck-sub-title"
                          >از 6:00 بعد از ظهر تا 11:59 شب</span
                        >
                      </span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      131 تومان</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="theme-search-results-sidebar-section">
              <h5 class="theme-search-results-sidebar-section-title">
                خطوط هوایی
              </h5>
              <div class="theme-search-results-sidebar-section-checkbox-list">
                <div
                  class="theme-search-results-sidebar-section-checkbox-list-items"
                >
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title">رویال</span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      423 تومان</span
                    >
                  </div>
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title">ماهان</span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      144 تومان</span
                    >
                  </div>
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title">ایرلاین</span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      415 تومان</span
                    >
                  </div>
                  <div
                    class="checkbox theme-search-results-sidebar-section-checkbox-list-item"
                  >
                    <label class="icheck-label">
                      <input class="icheck" type="checkbox" />
                      <span class="icheck-title">ویرجین آتلانتیک ...</span>
                    </label>
                    <span
                      class="theme-search-results-sidebar-section-checkbox-list-amount"
                    >
                      493 تومان</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="theme-ad theme-ad-dark">
          <Ads />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ads from '~/components/Flight/Ads'
export default {
  components: {
    Ads,
  },
}
</script>
