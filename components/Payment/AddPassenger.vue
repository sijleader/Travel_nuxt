<template>
  <div class="theme-payment-page-form">
    <h3 class="theme-payment-page-form-title">اطلاعات مسافر</h3>
    <div class="row row-col-gap" data-gutter="20">
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="latin_fname"
            class="form-control"
            type="text"
            placeholder="نام (لاتین)"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="latin_lname"
            class="form-control"
            type="text"
            placeholder="نام خانوادگی (لاتین)"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="persian_fname"
            class="form-control"
            type="text"
            placeholder="نام (فارسی)"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="persian_lname"
            class="form-control"
            type="text"
            placeholder="نام خانوادگی (فارسی)"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <i class="fa fa-angle-down"></i>
          <select v-model="sex" class="form-control">
            <option value="null">جنسیت</option>
            <option disabled>-- Please select an option --</option>
            <option value="male">آقا</option>
            <option value="female">خانم</option>
          </select>
          <div>Picked: {{ sex }}</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="national_id"
            class="form-control"
            type="text"
            placeholder="کد ملی"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="birthday_date"
            class="form-control"
            type="text"
            placeholder="تاریخ تولد"
          />
        </div>
      </div>
      <!-- <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <i class="fa fa-angle-down"></i>
          <select v-model="birthday_country" class="form-control">
            <option disabled>کشور محل تولد</option>
            <option value="iran">ایران</option>
          </select>
        </div>
      </div> -->
      <!-- <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="passport_id"
            class="form-control"
            type="text"
            placeholder="شماره پاسپورت"
          />
        </div>
      </div> -->
      <!-- <div class="col-md-4">
        <div class="theme-payment-page-form-item form-group">
          <i class="fa fa-angle-down"></i>
          <select v-model="passport_issue" class="form-control">
            <option>کشور محل صدور پاسپورت</option>
            <option value="iran">ایران</option>
          </select>
        </div>
      </div> -->
      <!-- <div class="col-md-3">
        <div class="theme-payment-page-form-item form-group">
          <input
            v-model="passport_expire"
            class="form-control"
            type="text"
            placeholder="تاریخ انقضای پاسپورت"
          />
        </div>
      </div> -->
      <div class="col-md-12">
        <div class="theme-payment-page-form-item form-group">
          <div class="row fix-button buttons">
            <div class="col-xs-4 col-md-6 item-modal-mobile">
              <button
                type="button"
                class="btn btn-warning btn-outline btn-block"
              >
                لغو
              </button>
            </div>
            <div class="col-xs-8 col-md-6 parent-of-confirm-edit">
              <button
                class="btn btn-primary btn-block"
                type="submit"
                @click.prevent="addPassenger()"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Data() {
    return {
      latin_fname: '',
      latin_lname: '',
      persian_fname: '',
      persian_lname: '',
      sex: '',
      national_id: '',
      birthday_date: '',
      // birthday_country: '',
      // passport_id: '',
      // passport_issue: '',
      // passport_expire: '',
    }
  },
  methods: {
    isValidIranianNationalCode(input) {
      if (!/^\d{10}$/.test(input)) return false
      const check = +input[9]
      const sum =
        input
          .split('')
          .slice(0, 9)
          .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11
      return sum < 2 ? check === sum : check + sum === 11
    },
    addPassenger() {
      const passengerData = {
        FirstName: this.persian_fname,
        LastName: this.persian_lname,
        FirstNameE: this.latin_fname,
        LastNameE: this.latin_lname,
        pGender: this.sex,
        meliCode: this.national_id,
        birthday: this.birthday_date,
        // nationality: this.birthday_country,
        // passNumber: this.passport_id,
        // passport_issue: this.passport_issue,
        // exPass: this.passport_expire,
      }
      this.$store.state.passengers.push(passengerData)
    },
    onChange(event) {
      this.sex = event.target.value
    },
  },
}
</script>
