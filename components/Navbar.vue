<template>
  <nav
    id="main-nav"
    class="navbar navbar-default navbar-inverse navbar-theme navbar-theme-abs navbar-theme-transparent navbar-theme-border"
  >
    <div class="container" role="button">
      <div class="navbar-inner nav">
        <div class="navbar-header">
          <button
            class="navbar-toggle collapsed"
            data-bs-target="#navbar-main"
            data-bs-toggle="collapse"
            type="button"
            area-expanded="false"
          >
            <span class="sr-only">ناوبری را تغییر دهید</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link class="navbar-brand" to="/">
            <img src="/navbar-logo-partvanak.png" />
          </nuxt-link>
        </div>
        <div id="navbar-main" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="dropdown" active-class="active">
              <nuxt-link to="/singles/about-us" class="dropdown-toggle">
                درباره ما
              </nuxt-link>
            </li>
            <li class="dropdown">
              <nuxt-link to="/singles/terms" class="dropdown-toggle">
                قوانین و مقررات
              </nuxt-link>
            </li>
            <li class="dropdown">
              <nuxt-link to="/singles/faq" class="dropdown-toggle">
                سوالات متداول
              </nuxt-link>
            </li>
            <li class="dropdown">
              <nuxt-link to="/singles/contact-us" class="dropdown-toggle">
                تماس با ما
              </nuxt-link>
            </li>
            <li class="dropdown">
              <a
                class="dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                حساب من
              </a>
              <ul class="dropdown-menu">
                <li>
                  <nuxt-link to="/user/account" class="dropdown-toggle">حساب کاربری</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/user/orders" class="dropdown-toggle">سفارش ها</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/user/passengers" class="dropdown-toggle">مسافران</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="isAuthenticated" class="navbar-nav-item-user dropdown">
              <a class="navbar-link">
                {{ loggedInUser.username }}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <nuxt-link class="navbar-item" to="/user/profile"
                    >صفحه کاربری</nuxt-link
                  >
                </li>
                <li>
                  <a class="navbar-item" @click="logout">Logout</a>
                </li>
              </ul>
            </li>
            <template v-else>
              <li class="navbar-nav-item-user">
                <nuxt-link class="dropdown-toggle" to="/auth/login">
                  <i class="fa fa-user-circle-o navbar-nav-item-user-icon"></i>
                  ثبت نام/ورود
                </nuxt-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    toggleSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
