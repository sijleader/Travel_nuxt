import Vue from 'vue'
import Vuex from 'vuex'
import VueWarehouse from 'vue-warehouse'
import VueWarehouseSync from 'vue-warehouse/sync'

import VueWarehouseStore from 'store' // vue-warehouse store instance

Vue.use(Vuex)
Vue.use(VueWarehouse, {
  store: VueWarehouseStore,
})

const VuexStore = new Vuex.Store()

VueWarehouseSync(VuexStore, VueWarehouseStore)
