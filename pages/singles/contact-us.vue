<template>
  <div>
    <div class="theme-hero-area _h-50vh _h-mob-80vh theme-hero-area-sm">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg area-bg"></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-half"></div>
        <div class="theme-hero-area-inner-shadow"></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 theme-page-header-abs">
              <div class="theme-page-header theme-page-header-lg">
                <h1 class="theme-page-header-title">تماس با ما</h1>
                <div class="theme-contact-info">
                  <div class="row row-no-gutter">
                    <div class="col-md-12">
                      <address class="theme-contact-address">
                        خراسان رضوی، مشهد، خیابان بزرگمهر، نبش بزرگمهر جنوبی 2،
                        پلاک 1، شرکت خدمات مسافرتی پارت ونک
                      </address>
                    </div>
                  </div>
                  <div class="row row-no-gutter">
                    <div class="col-md-4">
                      <ul class="theme-contact-info-list">
                        <li>
                          <i class="fa fa-phone"></i>

                          <a href="tel://+985137675034">5137675034</a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-envelope"></i>
                            <a href="mailto://hello@Bookify.com"
                              >hello@Bookify.com</a
                            >
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="theme-page-section theme-page-section-xl theme-page-section-gray"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="theme-contact">
              <h2 class="theme-contact-title">با ما تماس بگیرید</h2>
              <div class="row row-col-mob-gap">
                <div class="col-md-7">
                  <div class="form-group theme-contact-form-group">
                    <input class="form-control" type="text" placeholder="نام" />
                  </div>
                  <div class="form-group theme-contact-form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="پست الکترونیک"
                    />
                  </div>
                  <div class="form-group theme-contact-form-group">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="پیام"
                    ></textarea>
                  </div>
                  <button class="btn btn-uc btn-primary btn-lg" href="#"
                    >پیام خود را ارسال کنید</button
                  >
                </div>
                <div class="col-md-5">
                  <div class="google-map theme-contact-map">
                    <client-only>
                      <l-map :zoom="130" :center="[36.31095, 59.54853]">
                        <l-tile-layer
                          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        ></l-tile-layer>
                        <l-marker :lat-lng="[36.31095, 59.54853]"></l-marker>
                      </l-map>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.area-bg {
  background-image: url('~/static/img/man-wearing-red-while-sitting-inside-concrete-bulding-7065_1500x800.jpg');
}
</style>
