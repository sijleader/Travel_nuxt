import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal, {
//   dynamic: true,
    scrollable:true,
  dynamicDefaults: { clickToClose: true },
  injectModalsContainer: true,
})
