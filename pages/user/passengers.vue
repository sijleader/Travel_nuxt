<template>
  <div class="theme-page-section theme-page-section-gray theme-page-section-lg">
    <div class="container">
      <div class="row">
        <div class="col-md-2-5">
          <Sidebar />
        </div>
        <div class="col-md-9-5">
          <h1 class="theme-account-page-title">مسافران</h1>
          <div
            v-for="(passenger, index) in Passengers"
            :key="index"
            class="row row-col-gap"
            data-gutter="20"
          >
            <Passenger :passenger="passenger"/>
            <!-- <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/>
            <Passenger :passenger="passenger"/> -->
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <a
                  
                  class="theme-account-traveler-link-mask"
                  @click="addField(passenger, Passengers)"
                ></a>
                <p class="theme-account-traveler-add-new">
                  + اضافه کردن مسافر جدید
                </p>
                <div
                  id="AddNewTraveler"
                  class="theme-payment-page-sections-item-new-extend"
                >
                  <AddPassenger />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AddPassenger from '~/components/Payment/AddPassenger.vue'
import Passenger from '~/components/User/Passenger.vue'
import Sidebar from '~/components/User/Sidebar'

export default {
  components: {
    Sidebar,
    Passenger,
    // AddPassenger,
  },
  layout: 'profile',
  data() {
    return {
      Passengers: [
        {
          fullname: 'as',
          phonenumber: 'as',
          national_id:'as',
          birthday:''
        },
      ],
    }
  },
  methods: {
    addPassenger(value, fieldType) {
      fieldType.push({ value: '' })
    },
    removePassenger(index, fieldType) {
      fieldType.splice(index, 1)
    },
  },
}
</script>
