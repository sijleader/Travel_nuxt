<template>
  <div>
    <button
      type="button"
      class="btn btn-primary theme-search-results-mobile-filters-btn magnific-inline button-menu-mobile"
      data-bs-toggle="modal"
      data-bs-target="#FilterModal"
    >
      <i class="fa fa-filter"></i>فیلترها
    </button>
    <div id="FilterModal" class="modal">
      <div class="modal-dialog modal-fullscreen-xxl-down">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
          </div>
          <div class="modal-body theme-search-results-mobile-filters">
            <div class="magnific-popup">
              <div class="theme-search-results-sidebar modal-dialog">
                <div class="theme-search-results-sidebar-sections">
                  <Filters />
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '~/components/Filters'

export default {
  components: {
    Filters,
  },
}
</script>

<style scoped>
@media (min-width: 900px) {
  .button-menu-mobile {
    display: none;
  }
}
</style>
