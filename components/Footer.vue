<template>
  <div>
    <div id="mainFooter" class="theme-footer">
      <div class="container _ph-mob-0">
        <div class="row row-eq-height row-mob-full">
          <div class="col-md-8">
            <div class="col-md-6">
              <div class="theme-footer-section theme-footer-">
                <a class="theme-footer-brand _mb-mob-30" href="#">
                  <img
                    src="/footer-logo-partvanak.png"
                    alt="تصویر متن جایگزین"
                    title="عنوان تصویر"
                  />
                </a>
                <h5 class="theme-footer-section-title">
                  شرکت خدمات مسافرت هوایی و جهانگردی پارت ونک
                </h5>
                <div class="theme-footer-brand-text">
                  <p>
                    خراسان رضوی، مشهد، خیابان بزرگمهر، نبش بزرگمهر جنوبی 2، پلاک
                    1، شرکت خدمات مسافرتی پارت ونک
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4 col-xs-4">
                  <div class="theme-footer-section">
                    <h5 class="theme-footer-section-title">همسفر</h5>
                    <ul class="theme-footer-section-list">
                      <li>
                        <a href="#">درباره تراول میت</a>
                      </li>
                      <li>
                        <a href="#">اپلیکیشن موبایل</a>
                      </li>
                      <li>
                        <a href="#">پشتیبانی مشتری</a>
                      </li>
                      <li>
                        <a href="#">تبلیغات</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-xs-4">
                  <div class="theme-footer-section theme-footer-">
                    <h5 class="theme-footer-section-title">سفر کنید</h5>
                    <ul class="theme-footer-section-list">
                      <li>
                        <a href="#">کشورها</a>
                      </li>
                      <li>
                        <a href="#">مناطق</a>
                      </li>
                      <li>
                        <a href="#">شهرها</a>
                      </li>
                      <li>
                        <a href="#">نواحی</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-xs-4">
                  <div class="theme-footer-section theme-footer-">
                    <h5 class="theme-footer-section-title">کتاب</h5>
                    <ul class="theme-footer-section-list">
                      <li>
                        <a href="#">آپارتمان ها</a>
                      </li>
                      <li>
                        <a href="#">استراحتگاه ها</a>
                      </li>
                      <li>
                        <a href="#">ویلاها</a>
                      </li>
                      <li>
                        <a href="#">خوابگاه ها</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="theme-footer-">
                <div class="theme-footer-brand-text">
                  <h5 class="theme-footer-section-title text-justify">
                    توکان سیر مهاجر با ارائه بهترین و با کیفیت ترین خدمات
                    گردشگری به صورت آنلاین می کوشد تا به عنوان معتبرترین شرکت
                    گردشگری در ایران، تجربه ی لذت بخش یک رزرو اینترنتی را
                    برایتان تداعی کند. شما در هر کجای دنیا که باشید، در هر ساعت
                    از شبانه روز می توانید از طریق سایت توکان سیر مهاجر بلیط
                    هواپیما، بلیط چارتر، رزرو هتل ارزان قیمت، تورهای مسافرتی و
                    تور لحظه آخری را با پایین ترین نرخ ها انتخاب کنید.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="theme-footer-section theme-footer- google-map">
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
        <div class="row row-eq-height row-mob-full">
          <div class="col-md-8">
            <div class="theme-footer-">
              <div class="theme-footer-brand-text">
                <h5 class="theme-footer-section-title text-justify">
                  توکان سیر مهاجر با ارائه بهترین و با کیفیت ترین خدمات گردشگری
                  به صورت آنلاین می کوشد تا به عنوان معتبرترین شرکت گردشگری در
                  ایران، تجربه ی لذت بخش یک رزرو اینترنتی را برایتان تداعی کند.
                  شما در هر کجای دنیا که باشید، در هر ساعت از شبانه روز می
                  توانید از طریق سایت توکان سیر مهاجر بلیط هواپیما، بلیط چارتر،
                  رزرو هتل ارزان قیمت، تورهای مسافرتی و تور لحظه آخری را با
                  پایین ترین نرخ ها انتخاب کنید.
                </h5>
              </div>
            </div>
            <div class="theme-footer-">
              <img
                src="~/static/img/logos-black.png"
                alt="پارت ونک خراسان"
                class="theme-footer-brand _mb-mob-30"
                height="55"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="theme-footer-section theme-footer-section-subscribe bg-grad _mt-mob-30"
            >
              <div class="theme-footer-section-subscribe-bg footer-bg"></div>
              <div class="theme-footer-section-subscribe-content">
                <h5 class="theme-footer-section-title">عضویت در خبرنامه</h5>
                <p class="text-muted">
                  با اشتراک در خبرنامه از جدیدترین اخبار و هتل ها باخبر شوید.
                </p>
                <form>
                  <div class="row form-group" data-gutter="10">
                    <div class="col-md-7 col-xs-8">
                      <input
                        class="form-control theme-footer-subscribe-form-control"
                        type="email"
                        placeholder="ایمیل خود را وارد نمایید"
                      />
                    </div>
                    <div class="col-md-5 col-xs-4">
                      <button
                        class="btn btn-primary-invert btn-shadow text-upcase theme-footer-subscribe-btn"
                        type="submit"
                      >
                        ثبت نام در خبرنامه
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="theme-copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="theme-copyright-text">
              <!-- حق چاپ © 1400 <a href="#">Bookify</a> . تمامی حقوق محفوظ است. -->
              طراحی شده توسط آژانس مسافرتی و گردشگری پارت ونک ©
              {{ $PersianDate.year() }}. تمامی حقوق محفوظ است.
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

<style scoped>
.footer-bg {
  background-image: url('~/static/img/footer/footer_subscribe_bg.png');
}
</style>
