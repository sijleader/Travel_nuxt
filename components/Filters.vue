<template>
  <div>
    <!-- <div class="theme-search-results-sidebar-section">
      <h5 class="theme-search-results-sidebar-section-title">کلاس پرواز</h5>
      <div class="theme-search-results-sidebar-section-checkbox-list">
        <div class="theme-search-results-sidebar-section-checkbox-list-items">
          <b-form-checkbox
            v-for="option in options"
            :key="option.value"
            v-model="classselected"
            :value="option.value"
            class="icheck-title"
            size="lg"
          >
          &nbsp;
            {{ option.text }}
          </b-form-checkbox>
          <span class="icheck-title"> {{ classselected }} :class </span>
        </div>
      </div>
    </div> -->
    <div class="theme-search-results-sidebar-section">
      <h5 class="theme-search-results-sidebar-section-title">خطوط هوایی</h5>
      <div class="theme-search-results-sidebar-section-checkbox-list">
        <div class="theme-search-results-sidebar-section-checkbox-list-items">
          <b-form-checkbox
            v-for="option in Airlines"
            :key="option.value"
            v-model="airlineselected"
            :value="option.value"
            name="flavour-3a"
            plain
            stacked
            class="icheck-title"
          >
          &nbsp;
            {{ option.text }}
            <!-- <span
              class="theme-search-results-sidebar-section-checkbox-list-amount"
            >
              {{ option.count }} عدد
            </span> -->
          </b-form-checkbox>
          <span class="icheck-title">  {{ airlineselected }} :airline </span>
        </div>
      </div>
    </div>
    <div class="theme-search-results-sidebar-section">
      <h5 class="theme-search-results-sidebar-section-title">بازه قیمت</h5>
      <div class="theme-search-results-sidebar-section-price">
        <b-form-input
          id="range-2"
          v-model="value"
          type="range"
          min="0"
          max="5"
          step="0.5"
        ></b-form-input>
        <div class="icheck-title">Value: {{ value }}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2',
      classselected: [],
      airlineselected: [],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
      Airlines: [
        {
          text: 'Honorato',
          value: 'Richard',
          count: 9,
        },
        {
          text: 'Brenden',
          value: 'Caldwell',
          count: 5,
        },
        {
          text: 'Basil',
          value: 'Marsden',
          count: 7,
        },
        {
          text: 'Carlos',
          value: 'Quinlan',
          count: 9,
        },
        {
          text: 'Walker',
          value: 'Omar',
          count: 4,
        },
        {
          text: 'Honorato',
          value: 'Joel',
          count: 5,
        },
      ],
    }
  },
}
</script>
