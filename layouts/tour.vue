<template>
  <div>
    <Navbar />
    <nuxt />
    <div class="theme-copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="theme-copyright-text">
              <!-- حق چاپ © 1400 <a href="#">Bookify</a> . تمامی حقوق محفوظ است. -->
              طراحی شده توسط آژانس مسافرتی و گردشگری پارت ونک  © {{$PersianDate.year()}}. تمامی حقوق محفوظ است.
            </p>
            <!-- <p class="theme-footer-abs-copyright">
              طراحی شده توسط تیم توسعه دهنده  © {{$PersianDate.year()}}. تمامی حقوق برای آژانس مسافرتی و گردشگری پارت ونک محفوظ است.
            </p> -->
          </div>
          <div class="col-md-6">
            <ul class="theme-copyright-social">
              <li>
                <a class="fa fa-facebook" href="#"></a>
              </li>
              <li>
                <a class="fa fa-google" href="#"></a>
              </li>
              <li>
                <a class="fa fa-twitter" href="#"></a>
              </li>
              <li>
                <a class="fa fa-youtube-play" href="#"></a>
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
import Navbar from '~/components/Navbar-profile'
export default {
  components: {
    Navbar,
  },
}
</script>
