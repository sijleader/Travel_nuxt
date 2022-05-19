<template>
  <div class="theme-hero-area">
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
                  <h1 class="theme-login-title">ورود</h1>
                  <p class="theme-login-subtitle">وارد حساب Bookify خود شوید</p>
                </div>
                <div class="theme-login-box">
                  <div class="theme-login-box-inner">
                    <Notification v-if="error" :message="error" />
                    <form
                      class="theme-login-form"
                      method="post"
                      @submit.prevent="login"
                    >
                      <div class="form-group theme-login-form-group">
                        <input
                          v-model="email"
                          class="form-control"
                          type="Email"
                          placeholder="آدرس ایمیل"
                          name="email"
                        />
                      </div>
                      <div class="form-group theme-login-form-group">
                        <input
                          v-model="password"
                          class="form-control"
                          type="password"
                          placeholder="کلمه عبور"
                          name="password"
                        />
                        <p class="help-block">
                          <nuxt-link to="/auth/password-reset"
                            >رمز عبور را فراموش کرده اید؟</nuxt-link
                          >
                        </p>
                      </div>
                      <div class="form-group">
                        <div class="theme-login-checkbox">
                          <label class="icheck-label">
                            <input class="icheck" type="checkbox" />
                            <span class="icheck-title"
                              >مرا وارد سیستم نگه دارید</span
                            >
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-uc btn-dark btn-block btn-lg"
                      >
                        ورود
                      </button>
                    </form>
                    <div class="theme-login-social-separator">
                      <p>یا با شبکه های اجتماعی وارد شوید</p>
                    </div>
                    <div class="theme-login-social-login">
                      <div class="row" data-gutter="10">
                        <div class="col-xs-6">
                          <a class="theme-login-social-login-facebook" href="#">
                            <i class="fa fa-facebook-square"></i>
                            <span
                              >با
                              <br />
                              <b>فیس بوک وارد شوید</b>
                            </span>
                          </a>
                        </div>
                        <div class="col-xs-6">
                          <a class="theme-login-social-login-google" href="#">
                            <i class="fa fa-google-plus-circle"></i>
                            <span
                              >با
                              <br />
                              <b>گوگل وارد شوید</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="theme-login-box-alt">
                    <p>
                      حساب کاربری ندارید؟
                      <nuxt-link to="/auth/register">ثبت‌نام کنید</nuxt-link>
                    </p>
                  </div>
                </div>
                <p class="theme-login-terms">
                  با ورود به سیستم،
                  <nuxt-link to="/singles/terms"
                    >شرایط استفاده و سیاست حفظ حریم خصوصی</nuxt-link
                  >
                  ما را می پذیرید .
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
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>

<style scoped>
.hero-bg {
  background-image: url('~/static/img/adult-book-business-cactus-297755_1500x800.jpg');
}
</style>
