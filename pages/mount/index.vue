<template>
  <div>
    <!-- <div class="theme-search-area-inline _desk-h theme-search-area-inline-gray">
      <h4 class="theme-search-area-inline-title">پروازهای لودون</h4>
      <p class="theme-search-area-inline-details">27 تیر ← 2 مهر، 1 مسافر</p>
      <button
        class="theme-search-area-inline-link magnific-inline"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        <i class="fa fa-pencil"></i>ویرایش کنید
      </button>
      <div id="myModal" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
            </div>

            <div class="modal-body magnific-popup magnific-popup-sm">
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
                      >از جانب</label
                    >
                    <div class="theme-search-area-section-inner">
                      <i
                        class="theme-search-area-section-icon lin lin-location-pin"
                      ></i>
                      <input
                        class="theme-search-area-section-input typeahead"
                        value="تهران"
                        type="text"
                        placeholder="مبدا"
                        data-provide="typeahead"
                      />
                    </div>
                  </div>
                  <div
                    class="theme-search-area-section theme-search-area-section-curved"
                  >
                    <label class="theme-search-area-section-label">تاریخ</label>
                    <div class="theme-search-area-section-inner">
                      <i
                        class="theme-search-area-section-icon lin lin-location-pin"
                      ></i>
                      <input
                        class="theme-search-area-section-input typeahead"
                        type="text"
                        placeholder="مقصد"
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
                          >رفتن</label
                        >
                        <div class="theme-search-area-section-inner">
                          <i
                            class="theme-search-area-section-icon lin lin-calendar"
                          ></i>
                          <input
                            id="datepicker-check-in"
                            class="theme-search-area-section-input datePickerStart _mob-h"
                            value="تاریخ رفت"
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
                        <label class="theme-search-area-section-label"
                          >ورود</label
                        >
                        <div class="theme-search-area-section-inner">
                          <i
                            class="theme-search-area-section-icon lin lin-calendar"
                          ></i>
                          <input
                            id="datepicker-check-out"
                            class="theme-search-area-section-input datePickerEnd _mob-h"
                            value=""
                            type="text"
                            placeholder="تاریخ برگشت"
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
                  <div
                    class="theme-search-area-section theme-search-area-section-curved quantity-selector"
                    data-increment="مسافر"
                  >
                    <label class="theme-search-area-section-label"
                      >مسافران</label
                    >
                    <div class="theme-search-area-section-inner">
                      <i
                        class="theme-search-area-section-icon lin lin-people"
                      ></i>
                      <input
                        class="theme-search-area-section-input"
                        value="1 مسافر"
                        type="text"
                      />
                      <div
                        id="mobile-FlySearchPassengers"
                        class="quantity-selector-box"
                      >
                        <div class="quantity-selector-inner">
                          <p class="quantity-selector-title">مسافران</p>
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
                  <button
                    class="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-curved"
                  >
                    تغییر دادن
                  </button>
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
    </div> -->
    <div>
      <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

      <div class="mt-3">
        Submitted Names:
        <div v-if="submittedNames.length === 0">--</div>
        <ul v-else class="mb-0 pl-3">
          <li v-for="name in submittedNames" :key="name.index">{{ name }}</li>
        </ul>
      </div>

      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Submit Your Name"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'test',
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: [],
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
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
