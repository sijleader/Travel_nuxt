<template>
  <div class="_h-desk-100vh theme-hero-area">
    <div class="theme-hero-area-bg-wrap">
      <div class="theme-hero-area-bg hero-bg"></div>
      <div class="theme-hero-area-mask theme-hero-area-mask-strong"></div>
    </div>
    <div class="theme-hero-area-body">
      <div class="theme-page-section _pt-100 theme-page-section-xl">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="theme-login theme-login-white">
                <div class="theme-login-header">
                  <h1 class="theme-login-title">تنظیم مجدد رمز عبور</h1>
                  <p class="theme-login-subtitle">
                    رمز عبور فراموش شده خود را بازیابی کنید
                  </p>
                </div>
                <div class="theme-login-box">
                  <div class="theme-login-box-inner">
                    <p class="theme-login-pwd-reset-text">
                      ایمیل مرتبط با حساب خود را در فیلد زیر وارد کنید و ما
                      پیوندی را برای بازنشانی رمز عبور برای شما ایمیل می کنیم.
                    </p>
                    <div class="form-group theme-login-form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="آدرس پست الکترونیکی"
                      />
                    </div>
                    <button
                      class="btn btn-uc btn-dark btn-block btn-lg"
                      href="#"
                    >
                      بازنشانی رمز عبور رمز عبور
                    </button>
                    <nuxt-link
                      class="theme-login-pwd-reset-back"
                      to="/auth/login"
                    >
                    اطلاعات کاربری خود را به خاطر دارید؟ وارد شوید.
                    
                    </nuxt-link>
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
.hero-bg {
  background-image: url('~/static/img/adult-book-business-cactus-297755_1500x800.jpg');
}
</style>
