import Vue from 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin,
  TabsPlugin,
//   NavbarPlugin,
  VBTogglePlugin,
  ModalPlugin,
  VBModal,
} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(TabsPlugin)
// Vue.use(NavbarPlugin)
Vue.use(VBTogglePlugin)
Vue.use(ModalPlugin)
Vue.directive('b-modal', VBModal)
