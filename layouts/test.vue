<template>
  <div>
    <Navbar />
    <Banner />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import Banner from '~/components/Banner'
export default {
  components: {
    Navbar,
    Footer,
    Banner,
  },
}
</script>
