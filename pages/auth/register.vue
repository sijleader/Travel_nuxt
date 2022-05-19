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
                  <h1 class="theme-login-title">ثبت نام</h1>
                  <Notification v-if="error" :message="error" />
                  <p class="theme-login-subtitle">
                    حساب Bookify جدید ایجاد کنید
                  </p>
                </div>
                <div class="theme-login-box">
                  <div class="theme-login-box-inner">
                    <form
                      method="post"
                      class="theme-login-form"
                      @submit.prevent="register"
                    >
                      <div class="form-group theme-login-form-group">
                        <input
                          v-model="username"
                          class="form-control"
                          type="text"
                          placeholder="نام کاربری"
                          name="username"
                          required
                        />
                      </div>
                      <div class="form-group theme-login-form-group">
                        <input
                          v-model="email"
                          class="form-control"
                          placeholder="آدرس ایمیل"
                          type="email"
                          name="email"
                          required
                        />
                      </div>
                      <div class="form-group theme-login-form-group">
                        <input
                          v-model="password"
                          class="form-control"
                          type="password"
                          placeholder="رمز عبور ایجاد کنید"
                          name="password"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-uc btn-dark btn-block btn-lg"
                        type="submit"
                      >
                        ایجاد حساب کاربری
                      </button>
                    </form>
                    <div class="theme-login-social-separator">
                      <p>یا با شبکه های اجتماعی ثبت نام کنید</p>
                    </div>
                    <div class="theme-login-social-login">
                      <div class="row" data-gutter="10">
                        <div class="col-xs-6">
                          <a class="theme-login-social-login-facebook" href="#">
                            <i class="fa fa-facebook-square"></i>
                            <span
                              >با
                              <br>
                              <b>فیسبوک ثبتنام کنید</b>
                            </span>
                          </a>
                        </div>
                        <div class="col-xs-6">
                          <a class="theme-login-social-login-google" href="#">
                            <i class="fa fa-google-plus-circle"></i>
                            <span
                              >با
                              <br>
                              <b>گوگل ثبتنام کنید</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="theme-login-box-alt">
                    <p>
                      از قبل حساب کاربری دارید؟
                      <nuxt-link to="/auth/login">وارد شوید.</nuxt-link>
                    </p>
                  </div>
                </div>
                <p class="theme-login-terms">
                  <nuxt-link to="/singles/terms">با ثبت نام، شرایط استفاده</nuxt-link> <br />
                  و <nuxt-link to="/singles/terms">سیاست حفظ حریم خصوصی</nuxt-link> ما را می پذیرید .
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
  // layout: 'test',
  middleware: 'guest',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null,
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
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
