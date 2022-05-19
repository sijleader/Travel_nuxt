<template>
  <div class="theme-page-section theme-page-section-gray theme-page-section-lg">
    <div class="container">
      <div class="row">
        <div class="col-md-2-5">
          <Sidebar />
        </div>
        <div class="col-md-9-5">
          <h1 class="theme-account-page-title">حساب کاربری</h1>
          <div class="row">
            <div class="col-md-9">
              <div class="theme-account-preferences">
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        آدرس ایمیل
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        john_doe@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        نام کاربری
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        0123456789
                      </p>
                    </div>
                  </div>
                </div>
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        نام و نام خانوادگی
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        لندن، بریتانیا - هیترو
                      </p>
                      <div id="ChangeHomeAirportChange" class="collapse">
                        <div class="theme-account-preferences-item-change">
                          <p
                            class="theme-account-preferences-item-change-description"
                          >
                            فرودگاه پیش&zwnj;فرض برای جستجوی مکان اصلی پرواز
                          </p>
                          <div
                            class="form-group theme-account-preferences-item-change-form"
                          >
                            <input
                              class="form-control"
                              type="text"
                              value="ایران - تهران  "
                            />
                          </div>
                          <div
                            class="theme-account-preferences-item-change-actions"
                          >
                            <a class="btn btn-sm btn-primary" href="#"
                              >ذخیره تغییرات
                            </a>
                            <a
                              class="btn btn-sm btn-default"
                              href="#ChangeHomeAirportChange"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeHomeAirportChange"
                              >لغو</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="theme-account-preferences-item-change-link"
                        href="#ChangeHomeAirportChange"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="ChangeHomeAirportChange"
                      >
                        <i class="fa fa-pencil"></i>ویرایش کنید
                      </a>
                    </div>
                  </div>
                </div>
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        تاریخ تولد
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        لندن، ایران
                      </p>
                      <div id="ChangeHomeSite" class="collapse">
                        <div class="theme-account-preferences-item-change">
                          <p
                            class="theme-account-preferences-item-change-description"
                          >
                            برای هشدار قیمت و اشتراک ایمیل استفاده می شود.
                          </p>
                          <div
                            class="form-group theme-account-preferences-item-change-form"
                          >
                            <input
                              class="form-control"
                              type="text"
                              value="ایران - تهران"
                            />
                          </div>
                          <div
                            class="theme-account-preferences-item-change-actions"
                          >
                            <a class="btn btn-sm btn-primary" href="#"
                              >ذخیره تغییرات
                            </a>
                            <a
                              class="btn btn-sm btn-default"
                              href="#ChangeHomeSite"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeHomeSite"
                              >لغو</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="theme-account-preferences-item-change-link"
                        href="#ChangeHomeSite"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="ChangeHomeSite"
                      >
                        <i class="fa fa-pencil"></i>ویرایش کنید
                      </a>
                    </div>
                  </div>
                </div>
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        کد ملی
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        انگلیسی (EN)
                      </p>
                      <div id="ChangeLanguage" class="collapse">
                        <div class="theme-account-preferences-item-change">
                          <p
                            class="theme-account-preferences-item-change-description"
                          >
                            برای هشدار قیمت و اشتراک ایمیل استفاده می شود.
                          </p>
                          <div
                            class="form-group theme-account-preferences-item-change-form"
                          >
                            <input
                              class="form-control"
                              type="text"
                              value="ایران - تهران"
                            />
                          </div>
                          <div
                            class="theme-account-preferences-item-change-actions"
                          >
                            <a class="btn btn-sm btn-primary" href="#"
                              >ذخیره تغییرات
                            </a>
                            <a
                              class="btn btn-sm btn-default"
                              href="#ChangeHomeSite"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeHomeSite"
                              >لغو</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="theme-account-preferences-item-change-link"
                        href="#ChangeLanguage"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="ChangeLanguage"
                      >
                        <i class="fa fa-pencil"></i>ویرایش کنید
                      </a>
                    </div>
                  </div>
                </div>
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        تلفن همراه
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        تومان آمریکا (USD)
                      </p>
                      <div id="ChangeCurrency" class="collapse">
                        <div class="theme-account-preferences-item-change">
                          <p
                            class="theme-account-preferences-item-change-description"
                          >
                            برای هشدار قیمت و اشتراک ایمیل استفاده می شود.
                          </p>
                          <div
                            class="form-group theme-account-preferences-item-change-form"
                          >
                            <input
                              class="form-control"
                              type="text"
                              value="ایران - تهران"
                            />
                          </div>
                          <div
                            class="theme-account-preferences-item-change-actions"
                          >
                            <a class="btn btn-sm btn-primary" href="#"
                              >ذخیره تغییرات
                            </a>
                            <a
                              class="btn btn-sm btn-default"
                              href="#ChangeHomeSite"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeHomeSite"
                              >لغو</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="theme-account-preferences-item-change-link"
                        href="#ChangeCurrency"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="ChangeCurrency"
                      >
                        <i class="fa fa-pencil"></i>ویرایش کنید
                      </a>
                    </div>
                  </div>
                </div>
                <!-- <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        درجه حرارت
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        درجه سانتیگراد
                      </p>
                      <div id="ChangeTemp" class="collapse">
                        <div class="theme-account-preferences-item-change">
                          <p
                            class="theme-account-preferences-item-change-description"
                          >
                            برای هشدار قیمت و اشتراک ایمیل استفاده می شود.
                          </p>
                          <div
                            class="form-group theme-account-preferences-item-change-form"
                          >
                            <input
                              class="form-control"
                              type="text"
                              value="ایران - تهران"
                            />
                          </div>
                          <div
                            class="theme-account-preferences-item-change-actions"
                          >
                            <a class="btn btn-sm btn-primary" href="#"
                              >ذخیره تغییرات
                            </a>
                            <a
                              class="btn btn-sm btn-default"
                              href="#ChangeHomeSite"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangeHomeSite"
                              >لغو</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="theme-account-preferences-item-change-link"
                        href="#ChangeTemp"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="ChangeTemp"
                      >
                        <i class="fa fa-pencil"></i>ویرایش کنید
                      </a>
                    </div>
                  </div>
                </div> -->
                <div class="theme-account-preferences-item">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="theme-account-preferences-item-title">
                        کلمه عبور
                      </h5>
                    </div>
                    <div class="col-md-7">
                      <p class="theme-account-preferences-item-value">
                        ********
                      </p>
                      <div id="ChangePassword" class="collapse">
                        <div class="theme-account-preferences-item-change">
                          <p
                            class="theme-account-preferences-item-change-description"
                          >
                            بهتر است از یک رمز عبور قوی استفاده <br />کنید که در
                            جای دیگری از آن استفاده نمی کنید
                          </p>
                          <div
                            class="form-group theme-account-preferences-item-change-form"
                          >
                            <label>رمز عبور فعلی</label>
                            <input class="form-control" type="password" />
                            <label>رمز عبور جدید</label>
                            <input class="form-control" type="password" />
                            <label>رمز عبور جدید را دوباره تایپ کنید</label>
                            <input class="form-control" type="password" />
                          </div>
                          <div
                            class="theme-account-preferences-item-change-actions"
                          >
                            <a class="btn btn-sm btn-primary" href="#"
                              >ذخیره تغییرات
                            </a>
                            <a
                              class="btn btn-sm btn-default"
                              href="#ChangePassword"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="ChangePassword"
                              >لغو</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="theme-account-preferences-item-change-link"
                        href="#ChangePassword"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="ChangePassword"
                      >
                        <i class="fa fa-pencil"></i>ویرایش کنید
                      </a>
                    </div>
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

<script>
import Sidebar from '~/components/User/Sidebar'

export default {
  components: {
    Sidebar,
  },
  layout: 'profile',
}
</script>
