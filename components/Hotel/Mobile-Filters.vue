<template>
  <div class="theme-search-results-mobile-filters" id="mobileFilters">
    <button
      class="theme-search-results-mobile-filters-btn magnific-inline"
      @click="$modal.show('filter')"
    >
      <i class="fa fa-filter"></i>فیلترها
    </button>
    <modal name="filter" :adaptive="true" :scrollable="true" height="auto">
      <!-- <div class="modal-content" style="z-index: 3"> -->
      <!-- <div class="magnific-popup" id="MobileFilters"> -->
      <div class="theme-search-results-sidebar">
        <div class="theme-search-results-sidebar-sections">
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
            <div class="theme-search-results-sidebar-section-checkbox-list">
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
            <h5 class="theme-search-results-sidebar-section-title">قیمت</h5>
            <div class="theme-search-results-sidebar-section-price">
              <input type="range" min="100" max="500" step="20" />
            </div>
          </div>
          <div class="theme-search-results-sidebar-section">
            <h5 class="theme-search-results-sidebar-section-title">محله ها</h5>
            <div class="theme-search-results-sidebar-section-checkbox-list">
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
              <div class="collapse" id="SearchResultsCheckboxNeighborhoods">
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
      <!-- </div> -->
      <div class="modal-footer">
        <button @click="$modal.hide('filter')">Close it</button>
      </div>
      <!-- </div> -->
    </modal>
  </div>
</template>
