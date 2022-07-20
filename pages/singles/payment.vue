<template>
  <div>
    <div
      class="theme-page-section theme-page-section-xl theme-page-section-gray"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div
              class="theme-payment-success"
              v-if="this.$route.query.Status == 'OK'"
            >
              <div class="theme-payment-success-header">
                <i
                  class="fa fa-check-circle theme-payment-success-header-icon"
                ></i>
                <h1 class="theme-payment-success-title">
                  پرداخت با موفقیت انجام شد
                </h1>
              </div>
              <div class="theme-payment-success-box">
                <ul class="theme-payment-success-summary">
                  <li>
                    شناسه پرداخت
                    <span>{{ this.$route.query.info }}</span>
                  </li>
                  <li>
                    وضعیت پرداخت
                    <span>{{ orderResponse }}</span>
                  </li>
                  <li>
                    تاریخ
                    <span
                      >{{
                        new Intl.DateTimeFormat('fa-IR', {
                          dateStyle: 'long',
                          timeStyle: 'medium',
                        }).format(new Date())
                      }}
                    </span>
                  </li>
                  <li>
                    مشتری
                    <span>جان دو</span>
                  </li>
                  <li>
                    پرداخت شده به
                    <span>رزرواسیون</span>
                  </li>
                  <li>
                    موضوع
                    <span>خرید بلیط</span>
                  </li>
                  <li>
                    مبلغ پرداخت شده
                    <span>753000 تومان</span>
                  </li>
                </ul>
                <p class="theme-payment-success-check-order">
                  می توانید جزئیات سفارش خود را در
                  <nuxt-link to="/user/orders">صفحه حساب</nuxt-link> خود بررسی
                  کنید.
                </p>
              </div>
              <!-- <vue-html2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="true"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                filename="nightprogrammerpdf"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                :pdf-margin="10"
                pdf-orientation="portrait"
                pdf-content-width="800px"
                @progress="onProgress($event)"
                ref="html2Pdf"
              >
                <section slot="pdf-content">
                  <div class="theme-payment-success-box">
                    <ul class="theme-payment-success-summary">
                      <li>
                        شناسه پرداخت
                        <span>7249874</span>
                      </li>
                      <li>
                        تاریخ
                        <span>1396/09/25 - 12:24 </span>
                      </li>
                      <li>
                        مشتری
                        <span>جان دو</span>
                      </li>
                      <li>
                        پرداخت شده به
                        <span>رزرواسیون</span>
                      </li>
                      <li>
                        روش پرداخت
                        <span>ویزا کارت اعتباری</span>
                      </li>
                      <li>
                        موضوع
                        <span>خرید بلیط</span>
                      </li>
                      <li>
                        مبلغ پرداخت شده
                        <span>753000 تومان</span>
                      </li>
                    </ul>
                    <p class="theme-payment-success-check-order">
                      می توانید جزئیات سفارش خود را در
                      <nuxt-link to="/user/orders">صفحه حساب</nuxt-link> خود
                      بررسی کنید.
                    </p>
                  </div>
                </section>
              </vue-html2pdf> -->
              <ul class="theme-payment-success-actions">
                <li>
                  <button @click="generatePDF()">
                    <i class="fa fa-file-pdf-o"></i>
                    <p><br />رسید پی دی اف</p>
                  </button>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-print"></i>
                    <p>چاپ <br />رسید</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-envelope-o"></i>
                    <p><br />رسید پیامکی</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="theme-payment-success" v-else>
              <div class="theme-payment-success-header">
                <h1 class="theme-payment-success-title">پرداخت ناموفق</h1>
              </div>
              <div class="theme-payment-success-box">
                <ul class="theme-payment-success-summary">
                  <li>
                    کد پیام
                    <span>{{ this.$route.query.code }}</span>
                  </li>
                  <li>
                    خود پیام
                    <span>{{ ZarinpalExeption[this.$route.query.code] }}</span>
                  </li>
                  <li>
                    تاریخ
                    <!-- <span>1396/09/25 - 12:24 </span> -->
                    <span
                      >{{
                        new Intl.DateTimeFormat('fa-IR', {
                          dateStyle: 'long',
                          timeStyle: 'medium',
                        }).format(new Date())
                      }}
                    </span>
                  </li>
                </ul>
                <p class="theme-payment-success-check-order">
                  می توانید جزئیات سفارش خود را در
                  <nuxt-link to="/user/orders">صفحه حساب</nuxt-link> خود بررسی
                  کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ZarinpalExeption from '@/assets/data/ZarinpalExeptions.json'
export default {
  layout: 'profile',
  data() {
    return {
      ZarinpalExeption: ZarinpalExeption,
      orderResponse: null,
    }
  },
  mounted() {
    const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2UyNzdhYTBmMDE4N2Y2M2U3MTExYzIxNTcwODUwNWQ1NGViN2M1NTIyMWVhOTBiYWVjNjg1NDE2YjMwNjBmMjQzODdhNzdjMTE0MTEzNWEiLCJpYXQiOjE2NTUyOTE1MjAuNjgxMDQzLCJuYmYiOjE2NTUyOTE1MjAuNjgxMDQ2LCJleHAiOjE2ODY4Mjc1MjAuNTUzNDE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kpXB2kb9huAbclEktVHpooynVfQ-FzERbFHbTv-UvlzJIDNAsl8JC7myE8ozU-wwvuphx6TqLB_e0X0DoJVB22Z6pjx-VRHt1rzhhR4WO9eI1_Q1UU7LnerOY6viUgxgkgxrpitRRIWz7KwyZW_v-yHiK0oZ3p_rUitd4ABDVw5zv2ryvoT7NJ3HQjQkiTCHE3jehu0qkCQtVGbM-6Z9-7XrFcL_5pK818Iu53YxJZZuV6DYt2Dm_e2qk7SX0Y31YrlysVSVJZW4awEIokYcjOe_oeD1LGFIB-qTnTivSQar-BPUmouUXOYCyMXINrYtQBlRhyT9I9kmLNNOegFi88EwYVGbJ38uj9SKZ3C9Fr0o-fyQm69WEoOQ0qrKDxXgnbxZxPDAbmctCWysWouZVhMBxFUHsKbT-5oY88TOVdEDBkpp_3JFsDmmA8zpotvLQZw765anyEP_1ZDzh6xm8evq9fXNT4IoRAnwYqPuaWxyWoEuAiN2r5ld4m_7fGJzjG99IafvUD1Do9vuP_mkArrW0OTDeN5YZaGESlrheyuIgFPX2usnvaPcnoXJumdQyEcZxSQ57icCB7FKp4Nh0QQcw2tKUSHJ4F_xydoaD4ptzkNf6UAjeFlQ4tQ4B79ommzK0VLAC9mmilcBFocqhh7QPJgJAswErS8bLR0DzrI'
      
    if (this.$route.query.Status === 'OK') {
      axios({
        method: 'post',
        url: '/airorderticket',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          SessionId: this.$cookies.get('SessionID'),
          UniqueId: this.$cookies.get('UniqueId'),
        },
      })
        .then((response) => {
          // if(response.data.Success){

          // }
          this.orderResponse = response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
    this.refid = this.$route.query
  },
  methods: {
    onProgress(event) {
      console.log(`Processed: ${event} / 100`)
    },
    hasGenerated() {
      alert('PDF generated successfully!')
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf()
    },
  },
}
</script>
