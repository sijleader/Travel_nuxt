<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from '~/components/Errors/404.vue'
import error500 from '~/components/Errors/500.vue'
export default {
  name: 'nuxt-error',
  layout: 'simple', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      // else if (this.error.statusCode === 500) {
        return error500
      // }
    },
  },
}
</script>
