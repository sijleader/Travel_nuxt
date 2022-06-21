import Vue from 'vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin,
  TabsPlugin,
  VBTogglePlugin,
  ModalPlugin,
  BModal
} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(TabsPlugin)
Vue.use(VBTogglePlugin)
Vue.use(ModalPlugin)
Vue.component('b-modal', BModal)
