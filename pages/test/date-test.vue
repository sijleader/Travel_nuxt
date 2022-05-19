<template>
  <div>
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
      <button @click="toggle" class="btn">Click Me</button>
      <div v-show="isOpen" class="content">
        <ul class="list">
          <button
            @click="minusAdult"
            :style="[
              this.adult <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
          >
            -
          </button>
          <span>Adult</span>
          <button @click="addAdult">+</button>
          <p>{{ adult }} adults</p>
          <hr />
          <button
            @click="minusChild"
            :style="[
              this.child <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
          >
            -
          </button>
          <span>Child</span>
          <button @click="addChild">+</button>
          <p>{{ child }} childs</p>
          <hr />
          <button
            @click="minusInfant"
            :style="[
              this.infant <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
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
    <div class="quantity-selector-box show">
      <div class="quantity-selector-inner">
        <p class="quantity-selector-title">بزرگسال</p>
        <ul class="quantity-selector-controls">
          <li class="quantity-selector-decrement">
            <button
            @click="minusAdult"
            :style="[
              this.adult <= 0
                ? { background: '#6ca5b6' }
                : { background: '#44b3d7' },
            ]"
          >
            -
          </button>
          </li>
          <li class="quantity-selector-current">1</li>
          <li class="quantity-selector-increment">
            <button @click="addAdult">+</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import moment from 'moment-jalaali'

export default {
  data() {
    return {
      show: false,
      date: '',
      dateMoment: moment(this.date, 'jYYYY-jMM-jDD'),
      adult: 1,
      child: 0,
      infant: 0,
      isOpen: false,
    }
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
  },
  computed: {
    totalPassengers() {
      return this.adult + this.child + this.infant
    },
  },
}
</script>