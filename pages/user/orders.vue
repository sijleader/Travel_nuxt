<template>
  <div
    class=" theme-page-section theme-page-section-gray theme-page-section-lg"
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
          <pre dir="ltr">
            {{results}}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Flightreserve from '~/components/Flight-reserve'
import Sidebar from '~/components/User/Sidebar'
export default {
  components: {
    Flightreserve,
    Sidebar,
  },
  layout: 'profile',
  data() {
    return {
      results: null,
    }
  },
  mounted() {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2UyNzdhYTBmMDE4N2Y2M2U3MTExYzIxNTcwODUwNWQ1NGViN2M1NTIyMWVhOTBiYWVjNjg1NDE2YjMwNjBmMjQzODdhNzdjMTE0MTEzNWEiLCJpYXQiOjE2NTUyOTE1MjAuNjgxMDQzLCJuYmYiOjE2NTUyOTE1MjAuNjgxMDQ2LCJleHAiOjE2ODY4Mjc1MjAuNTUzNDE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kpXB2kb9huAbclEktVHpooynVfQ-FzERbFHbTv-UvlzJIDNAsl8JC7myE8ozU-wwvuphx6TqLB_e0X0DoJVB22Z6pjx-VRHt1rzhhR4WO9eI1_Q1UU7LnerOY6viUgxgkgxrpitRRIWz7KwyZW_v-yHiK0oZ3p_rUitd4ABDVw5zv2ryvoT7NJ3HQjQkiTCHE3jehu0qkCQtVGbM-6Z9-7XrFcL_5pK818Iu53YxJZZuV6DYt2Dm_e2qk7SX0Y31YrlysVSVJZW4awEIokYcjOe_oeD1LGFIB-qTnTivSQar-BPUmouUXOYCyMXINrYtQBlRhyT9I9kmLNNOegFi88EwYVGbJ38uj9SKZ3C9Fr0o-fyQm69WEoOQ0qrKDxXgnbxZxPDAbmctCWysWouZVhMBxFUHsKbT-5oY88TOVdEDBkpp_3JFsDmmA8zpotvLQZw765anyEP_1ZDzh6xm8evq9fXNT4IoRAnwYqPuaWxyWoEuAiN2r5ld4m_7fGJzjG99IafvUD1Do9vuP_mkArrW0OTDeN5YZaGESlrheyuIgFPX2usnvaPcnoXJumdQyEcZxSQ57icCB7FKp4Nh0QQcw2tKUSHJ4F_xydoaD4ptzkNf6UAjeFlQ4tQ4B79ommzK0VLAC9mmilcBFocqhh7QPJgJAswErS8bLR0DzrI'
    axios({
      method: 'post',
      url: '/airbookingdata',
      headers: { Authorization: 'Bearer ' + token },
      data: {
        SessionId: this.$cookies.get('SessionID'),
        UniqueId: this.$cookies.get('UniqueId'),
        ClientUniqueId: this.$cookies.get('ClientUniqueId'),
      },
    })
      .then((response) => {
        this.results = response.data
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Error: ' + error)
      })
  },
}
</script>
