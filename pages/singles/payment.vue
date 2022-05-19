<template>
  <div>
    <div
      class="theme-page-section theme-page-section-xl theme-page-section-gray"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div class="theme-payment-success">
              <div class="theme-payment-success-header">
                <i
                  class="fa fa-check-circle theme-payment-success-header-icon"
                ></i>
                <h1 class="theme-payment-success-title">
                  پرداخت با موفقیت انجام شد
                </h1>
                <p class="theme-payment-success-subtitle">
                  رسید را برای شما ایمیل کرده ایم.
                </p>
              </div>
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
                  <nuxt-link to="/user/orders">صفحه حساب</nuxt-link> خود بررسی کنید.
                </p>
              </div>
              <ul class="theme-payment-success-actions">
                <li>
                  <a href="#">
                    <i class="fa fa-file-pdf-o"></i>
                    <p><br />رسید پی دی اف</p>
                  </a>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'profile',
}
</script>