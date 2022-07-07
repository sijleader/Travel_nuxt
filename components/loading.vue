<template>
  <div class="theme-hero-area theme-hero-area-full">
    <div class="theme-hero-area-bg-wrap">
      <div class="theme-hero-area-bg bg-area"></div>
      <div class="theme-hero-area-mask theme-hero-area-mask-strong"></div>
      <div class="theme-hero-area-inner-shadow"></div>
    </div>
    <div class="theme-hero-area-body theme-hero-area-body-vert-center">
      <div class="container">
        <div class="theme-loading">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="spinner theme-loading-spinner">
                <div class="spinner-grid-dots">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="theme-loading-body">
                <h2 class="theme-loading-title">فقط یک لحظه</h2>
                <p class="theme-loading-subtitle">
                  ما به دنبال هتل ها هستیم
                  <br />
                  <b>ایران - تهران</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a class="theme-abs-logo" href="index.html">
      <img
        src="~/static/img/logo.png"
        alt="Image Alternative text"
        title="Image Title"
      />
    </a> -->
  </div>
</template>

<script>
export default {
    layout:'loading'
}
</script>

<style scoped>
.bg-area {
  background-image: url('~/static/img/architecture-art-clouds-landmark-290386_1500x800.jpg');
}
</style>