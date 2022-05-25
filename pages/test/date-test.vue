<template>
  <div class="theme-page-section theme-page-section-gray theme-page-section-lg">
    <date-picker
      v-model="date"
      simple
      format="jYYYY-jMM-jDD"
      @change="dateMoment = $event"
    />
    <br />
    <span>dateMoment = {{ dateMoment.format('dddd jDD jMMMM jYYYY') }}</span>
    <br />
    <span>date = {{ date }}</span>
    <hr />
    <div class="wrapper">
      <button class="btn" @click="toggle">Click Me</button>
      <div v-show="isOpen" class="content">
        <ul class="list">
          <button
            :style="[
              adult <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
            @click="minusAdult"
          >
            -
          </button>
          <span>Adult</span>
          <button @click="addAdult">+</button>
          <p>{{ adult }} adults</p>
          <hr />
          <button
            :style="[
              child <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
            @click="minusChild"
          >
            -
          </button>
          <span>Child</span>
          <button @click="addChild">+</button>
          <p>{{ child }} childs</p>
          <hr />
          <button
            :style="[
              infant <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
            @click="minusInfant"
          >
            -
          </button>
          <span>infants</span>
          <button @click="addInfant">+</button>
          <p>{{ infant }} infants</p>
          <hr />
        </ul>
      </div>
    </div>
    <hr />
    <p>total = {{ totalPassengers }}</p>
    <hr />
    <!-- <div class="col-md-5"> -->
    <div class="row" data-gutter="30">
      <div class="col-md-6">
        <div
          class="theme-search-area-section first theme-search-area-section-line"
        >
          <div class="theme-search-area-section-inner">
            <i class="theme-search-area-section-icon lin lin-location-pin"></i>
            <input
              v-model="filterCriteria"
              class="theme-search-area-section-input typeahead"
              type="search"
              :placeholder="placeholder"
              @click="toggleDropDown()"
              @keyup.enter="selectItem()"
            >
            <!-- </b-form-input> -->
            <b-collapse id="drop-down">
              <b-table
                ref="collapsibleTable"
                v-model="filteredRows"
                no-border-collapse
                responsive="sm"
                selectable
                select-mode="single"
                sticky-header="200px"
                thead-class="d-none"
                :fields="fields"
                :filter="filterCriteria"
                :items="items"
                :sort-desc.sync="sortDesc"
                @row-selected="rowSelected"
              >
              </b-table>
            </b-collapse>
            <!-- <input
              class="theme-search-area-section-input typeahead"
              type="text"
              placeholder="مبدا"
              data-provide="typeahead"
            /> -->
            <!-- <v-select multiple v-model="selected" :options="['Canada','United States']" class="theme-search-area-section-input typeahead" /> -->
            <!-- <b-form-input list="my-list-id" class="theme-search-area-section-input typeahead"></b-form-input>
            <datalist id="my-list-id">
              <option value="" disabled selected>Choose your country</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">France</option>
              <option value="3">Poland</option>
              <option value="3">Japan</option>
            </datalist> -->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="theme-search-area-section theme-search-area-section-line">
          <div class="theme-search-area-section-inner">
            <i class="theme-search-area-section-icon lin lin-location-pin"></i>
            <input
              class="theme-search-area-section-input typeahead"
              type="text"
              placeholder="مقصد"
              data-provide="typeahead"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import moment from 'moment-jalaali'

export default {
  layout: 'test',
  props: {
        display: {
            required: true,
            type: String
        },
        fields: {
            required: true,
            type: Array
        },
        items: {
            required: true,
            type: Array
        },
        placeholder: {
            required: false,
            default: 'Select'
        },
        sortBy: {
            required: true,
            type: String
        },
        sortDec: {
            default: false,
            required: false
        }
    },
  data() {
    return {
      show: false,
      date: '',
      dateMoment: moment(this.date, 'jYYYY-jMM-jDD'),
      adult: 1,
      child: 0,
      infant: 0,
      isOpen: false,
      selected: null,
      filterCriteria: '',
      filteredRows: [],
    }
  },
  computed: {
    totalPassengers() {
      return this.adult + this.child + this.infant
    },
  },
  methods: {
    addAdult() {
      this.adult += 1
    },
    minusAdult() {
      if (this.adult <= 0) {
        this.adult = 0
      } else {
        this.adult -= 1
      }
    },
    addChild() {
      this.child += 1
    },
    minusChild() {
      if (this.child <= 0) {
        this.child = 0
      } else {
        this.child -= 1
      }
    },
    addInfant() {
      this.infant += 1
    },
    minusInfant() {
      if (this.infant <= 0) {
        this.infant = 0
      } else {
        this.infant -= 1
      }
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    toggleDropDown() {
      this.$root.$emit('bv::toggle::collapse', 'drop-down')
    },
    selectItem() {
      if (this.filteredRows.length === 1) {
        this.$refs.collapsibleTable.selectRow(0)
      }
    },
    rowSelected(rowArray) {
      // No rows or 1 row can be selected
      if (rowArray.length === 1) {
        this.$emit('item-selected', rowArray[0])
        this.filterCriteria = rowArray[0][this.display]
        this.toggleDropDown()
      }
    },
  }
}
</script>
