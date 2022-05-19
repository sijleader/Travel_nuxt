<template>
  <div>
    <div class="col-md-2-5">
      <div class="sticky-col _mob-h">
        <div class="theme-ad _mb-20 theme-ad-dark">
          <Ads />
        </div>
        <div class="theme-ad theme-ad-dark">
          <Ads />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ads from '~/components/Flight/Ads'
export default {
  components: {
    Ads,
  },
}
</script>
