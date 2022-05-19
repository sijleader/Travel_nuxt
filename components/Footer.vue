<template>
  <div>
    <div id="mainFooter" class="theme-footer">
      <div class="container _ph-mob-0">
        <div class="row row-eq-height row-mob-full" data-gutter="60">
          <div class="col-md-3">
            <div class="theme-footer-section theme-footer-">
              <a class="theme-footer-brand _mb-mob-30" href="#">
                <img
                  src="~/static/img/logo-black.png"
                  alt="تصویر متن جایگزین"
                  title="عنوان تصویر"
                />
              </a>
              <div class="theme-footer-brand-text">
                <p>بگذار تا ترس از اراده قدرتمند زندگی نکنیم</p>
                <p>وسایل نقلیه همیشه امکان سنجی است</p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-4">
                <div class="theme-footer-section theme-footer-">
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
                    <li>
                      <a href="#">شغل ها</a>
                    </li>
                    <li>
                      <a href="#">سیاست حفظ حریم خصوصی</a>
                    </li>
                    <li>
                      <a href="#">شرایط استفاده</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
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
                    <li>
                      <a href="#">فرودگاه ها</a>
                    </li>
                    <li>
                      <a href="#">هتل</a>
                    </li>
                    <li>
                      <a href="#">مکان های مورد علاقه</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
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
                    <li>
                      <a href="#">رستوران</a>
                    </li>
                    <li>
                      <a href="#">مهمانخانه</a>
                    </li>
                    <li>
                      <a href="#">هتل های زنجیره ای</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="theme-footer-section theme-footer-section-subscribe bg-grad _mt-mob-30"
            >
              <div class="theme-footer-section-subscribe-bg footer-bg"></div>
              <div class="theme-footer-section-subscribe-content">
                <h5 class="theme-footer-section-title">
                  تا 50 درصد از سفر بعدی خود صرفه جویی کنید
                </h5>
                <p class="text-muted">
                  برای باز کردن قفل معاملات مخفی ما مشترک شوید
                </p>
                <form>
                  <div class="form-group">
                    <input
                      class="form-control theme-footer-subscribe-form-control"
                      type="email"
                      placeholder="ایمیل خود را اینجا تایپ کنید"
                    />
                  </div>
                  <button
                    class="btn btn-primary-invert btn-shadow text-upcase theme-footer-subscribe-btn"
                    type="submit"
                  >
                    معاملات دریافت کنید
                  </button>
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

<style scoped>
.footer-bg {
  background-image: url('~/static/img/footer/footer_subscribe_bg.png');
}
</style>
