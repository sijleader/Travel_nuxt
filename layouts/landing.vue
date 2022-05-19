<template>
  <div>
    <Navbar />
    <nuxt />
    <div class="theme-footer-abs">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <!-- <ul class="theme-footer-abs-nav">
              <li>
                <a href="hotel-index-1.html">هتل</a>
              </li>
              <li>
                <a href="flight-index-1.html">پروازها</a>
              </li>
              <li>
                <a href="room-index-1.html">خانه ها</a>
              </li>
              <li>
                <a href="car-index-1.html">ماشین </a>
              </li>
              <li>
                <a href="exp-index-1.html">تجربیات </a>
              </li>
              <li>
                <a href="about-us.html">درباره ما</a>
              </li>
              <li>
                <a href="contact.html">مخاطب</a>
              </li>
            </ul> -->
            <p class="theme-footer-abs-copyright">
              طراحی شده توسط تیم توسعه دهنده  © {{$PersianDate.year()}}. تمامی حقوق برای آژانس مسافرتی و گردشگری پارت ونک محفوظ است.
            </p>
          </div>
          <div class="col-md-6">
            <ul class="theme-social-list theme-footer-abs-social">
              <li>
                <a class="fa fa-facebook" href="#"></a>
              </li>
              <li>
                <a class="fa fa-twitter" href="#"></a>
              </li>
              <li>
                <a class="fa fa-google" href="#"></a>
              </li>
              <li>
                <a class="fa fa-instagram" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>
