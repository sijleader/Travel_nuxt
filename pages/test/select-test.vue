<template>
  <div
    id="app"
    class="font-sans text-black min-h-screen bg-grey-darker p-8"
    style="padding-top: 14rem; padding-bottom: 14rem"
  >
    <div class="max-w-sm mx-auto bg-white rounded shadow-lg p-8">
      <div class="mb-4">
        <label class="form-label mb-2">DCDS</label>
        <search-select
          v-model="selectedSoldier"
          :options="soldiers"
          :filter-function="applySearchFilter"
        ></search-select>

        <div>{{selectedSoldier}}</div>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-blue">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelect from "~/components/test/SearchSelect.vue"

export default {
  components: {
    SearchSelect
  },
  layout:'test',
  data() {
    return {
      selectedSoldier: null,
      search: "",
      soldiers: [
        "1LT Lakes, Dale",
        "1LT Ball, Michael",
        "CW3 Latane, Paul",
        "SFC Busby, Ryan",
        "SSG Salinas, Ricky",
        "SSG Hochheimer, Steven",
        "SSG Fossett, Matt",
        "SSG Sabatini, Jesse",
        "SSG jackson, Jeremy"
      ]
    }
  },
  methods: {
    applySearchFilter(search, soldiers) {
      return soldiers.filter((soldier) =>
        soldier.toLowerCase().startsWith(search.toLowerCase())
      )
    }
  }
}
</script>

<!-- <style src="./assets/css/app.css"/> -->
