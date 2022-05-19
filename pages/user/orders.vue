<template>
  <div
    class="_h-desk-100vh theme-page-section theme-page-section-gray theme-page-section-lg"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-2-5">
          <Sidebar />
        </div>
        <div class="col-md-9-5">
          <h1 class="theme-account-page-title">تاریخچه رزرو</h1>
          <div class="theme-account-history">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>نام مسافر</th>
                  <th>مسیر پرواز</th>
                  <th>تاریخ</th>
                  <th>قیمت</th>
                  <th>قیمت</th>
                </tr>
              </thead>
              <tbody>
                <Flightreserve />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flightreserve from '~/components/Flight-reserve'
import Sidebar from '~/components/User/Sidebar'
export default {
  components: {
    Flightreserve,
    Sidebar,
  },
  layout: 'profile',
}
</script>
