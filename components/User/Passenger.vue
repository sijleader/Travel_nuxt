<template>
  <div class="col-md-6">
    <div class="theme-account-traveler">
      <!-- <div class="theme-account-traveler-body">
        <p class="theme-account-traveler-name">مایا اسمیت</p>
        <ul class="theme-account-traveler-details">
          <li>hello_maya95@yahoo.com</li>
          <li>0912345678</li>
          <li>ایران</li>
        </ul>
        <ul class="theme-account-traveler-actions">
          <li>
            <a
              href="#"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="AddNewTraveler"
              >ویرایش کنید</a
            >
          </li>
          <li>
            <a href="#" @click="removeField(index, phoneNumbers)">حذف</a>
          </li>
        </ul>
      </div> -->
      <div class="theme-account-traveler-body">
        <p class="theme-account-traveler-name">{{ passenger.fullname }}</p>
        <ul class="theme-account-traveler-details">
          <li>{{ passenger.phonenumber }}</li>
          <li>{{ passenger.national_id }}</li>
          <li>ایران</li>
        </ul>
        <ul class="theme-account-traveler-actions">
          <li>
            <a
              href="#"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="AddNewTraveler"
              >ویرایش کنید</a
            >
          </li>
          <li>
            <a href="#" @click="removeField(index, phoneNumbers)">حذف</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    passenger: {
      id: 0,
      type: Object,
      default: null
    },
  },

  //   data() {
  //     return {
  //       passenger: {},
  //     }
  //   },
}
</script>
