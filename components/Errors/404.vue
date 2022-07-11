<template>
    <div class="theme-hero-area theme-hero-area-full">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg" style="background-image:url('/img/buoy-dawn-daylight-forest-442555_1500x800.jpg');"></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-dark"></div>
        <div class="theme-hero-area-inner-shadow"></div>
      </div>
      <div class="theme-hero-area-body theme-hero-area-body-vert-center">
        <div class="container">
          <div class="theme-page-404 _ta-c">
            <h1 class="theme-page-404-title">404</h1>
            <p class="theme-page-404-subtitle">با عرض پوزش، صفحه مورد نظر وجود ندارد</p>
            <nuxt-link class="btn btn-ghost btn-xxl btn-white btn-uc" to="/">صفحه اصلی</nuxt-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.bg-area{
    background-image:url('/img/buoy-dawn-daylight-forest-442555_1500x800.jpg');
}
</style>