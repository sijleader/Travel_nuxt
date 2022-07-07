<template>
  <div class=" theme-page-section theme-page-section-lg">
    <div class="container">
      <div
        id="sticky-parent"
        class="row row-col-static row-col-mob-gap"
        data-gutter="60"
      >
        <div class="col-md-8">
          <div class="theme-payment-page-sections">
            <FlightDetails />
            <div class="theme-payment-page-sections-item">
              <h3 class="theme-payment-page-sections-item-title">
                مسافر را انتخاب کنید
              </h3>
              <!-- <div v-text="$PersianDate.toString()"></div> -->
              <!-- <div>{{ $PersianDate.toString() }}</div> -->

              <div class="row">
                <div class="col-md-6">
                  <div class="theme-payment-page-form-item form-group">
                    <i class="fa fa-angle-down"></i>
                    <GridMultiSelect
                      v-model="selectedItems"
                      title="انتخاب مسافر"
                      :items="passengers"
                      item-key="national_id"
                      item-label="persian_lname"
                      menu-position="float"
                      empty-message="مسافری انتخاب نشده"
                    />
                    <!-- {{getAge(selectedItems.birthday_date)}} -->
                    <!-- <div class="col-12">
                      <Multiselect
                        v-model="selectedItems"
                        :options="passengers"
                        label="label"
                        track-by="value"
                        multiple
                      ></Multiselect>
                    </div> -->
                    <!-- <div>
                      {{
                        $PersianDate.diff(passengers[0].birthday_date, 'year')
                      }}
                    </div> -->
                  </div>
                </div>
              </div>
              <a
                class="theme-payment-page-sections-item-new-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="AddNewTraveler"
                >
                + اضافه کردن مسافر جدید
                </a
              >
              <div
                class="theme-payment-page-sections-item-new-extend"
              >
                <AddPassenger />
              </div>
              <!-- <div
                id="AddNewTraveler"
                class="theme-payment-page-sections-item-new-extend"
              >
                <AddPassenger />
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sticky-col">
            <div class="theme-sidebar-section _mb-10">
              <h5 class="theme-sidebar-section-title">اتهامات</h5>
              <div class="theme-sidebar-section-charges">
                <ul class="theme-sidebar-section-charges-list">
                  <li class="theme-sidebar-section-charges-item"></li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 بزرگسال
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 کودک
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      1 نوزاد
                    </h5>
                    <p class="theme-sidebar-section-charges-item-price">
                      615000 تومان
                    </p>
                  </li>
                  <li class="theme-sidebar-section-charges-item">
                    <h5 class="theme-sidebar-section-charges-item-title">
                      مالیات، کارمزد و اضافه هزینه
                    </h5>
                    <p class="theme-sidebar-section-charges-item-subtitle"></p>
                    <p class="theme-sidebar-section-charges-item-price">
                      55000 تومان
                    </p>
                  </li>
                </ul>
                <p class="theme-sidebar-section-charges-total">
                  مجموع
                  <span>670000 تومان</span>
                </p>
              </div>
            </div>
          </div>
          <div class="theme-payment-page-booking">
            <div class="theme-payment-page-booking-header">
              <p class="theme-sidebar-section-features-list-body">
                کلیک بر روی دکمه رزرو، به منزله موافقت با شرایط و ضوابط ضمانت
                بازگشت پول می‌باشد.
              </p>
            </div>
            <!-- <button
              class="btn _tt-uc btn-primary-inverse btn-lg btn-block"
              href="#"
            >
              رزرو کن
            </button> -->
            <nuxt-link
              class="btn _tt-uc btn-primary-inverse btn-lg btn-block"
              to="/singles/payment"
            >
              رزرو کن
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridMultiSelect from 'vue-gridmultiselect'
import 'vue-gridmultiselect/dist/vue-gridmultiselect.css'
import AddPassenger from '~/components/Payment/AddPassenger.vue'
import FlightDetails from '~/components/Payment/Details.vue'
// import Multiselect from '~/components/Multiselect.vue'
export default {
  components: {
    GridMultiSelect,
    AddPassenger,
    FlightDetails,
    // Multiselect
  },
  layout: 'profile',
  data() {
    return {
      selectedItems: null,
      latin_fname: '',
      latin_lname: '',
      persian_fname: '',
      persian_lname: '',
      sex: '',
      national_id: '',
      birthday_date: '',
      birthday_country: '',
      passport_id: '',
      passport_issue: '',
      passport_expire: '',
      passengers: [
        {
          latin_fname: 'Smith',
          latin_lname: 'John',
          persian_fname: 'جان',
          persian_lname: 'اسمیت',
          // persian_fullname: this.persian_fname + ' ' + this.persian_lname,
          sex: 'مرد',
          national_id: '0123456789',
          birthday_date: '1998/9/19',
          birthday_country: 'ایران',
          passport_id: 'Z12345678',
          passport_issue: 'ایران',
          passport_expire: '2024/9/18',
        },
      ],
    }
  },
  computed: {
    returnFullName() {
      return this.persian_fname + ' ' + this.persian_lname
    },
  },
  methods: {
    getAge(dateString) {
      const today = new Date()
      const birthDate = new Date(dateString)
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },
  },
}
</script>
