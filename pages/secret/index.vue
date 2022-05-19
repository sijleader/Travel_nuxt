<template>
  <div>
    <div class="row center-align">
      <h1>Secret Area</h1>
    </div>
    <div class="row center-align">
      <button v-on:click.stop.prevent="logout" class="waves-effect waves-light btn red"><i class="material-icons left">account_box</i>Logout</button>
    </div>
  </div>
</template>
 
<script>
export default {
  middleware: 'check_auth',
  methods: {
    // Clicking log out triggers this function that wipes out any pre-existing tokens
    logout: function() {
      this.$store.commit('INVALIDATE_TOKEN');
      this.$nuxt.$router.replace({ path: '/' });
    }
  }
};
</script>
