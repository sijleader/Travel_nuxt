<template>
  <div class="search-selectdate" :class="{ 'is-active': isOpen }" :do="close">
    <button
      ref="button"
      type="button"
      class="search-selectdate-input"
      @click="open"
    >
      <span v-if="value !== null">{{ value }}</span>
      <span v-else class="search-selectdate-placeholder">Soldier Select </span>
    </button>
    <div v-show="isOpen" ref="dropdown" class="search-selectdate-dropdown">
      <input
        ref="search"
        v-model="search"
        class="search-selectdate-search"
        @keydown.esc="close"
        @keydown.up="highlightPrev"
        @keydown.down="highlightNext"
        @keydown.enter.prevent="selectHighlighted"
        @keydown.tab.prevent
      />
      <ul
        v-show="filteredOptions.length > 0"
        ref="options"
        class="search-selectdate-options"
      >
        <li
          v-for="(option, i) in filteredOptions"
          :key="option"
          class="search-selectdate-option"
          :class="{ 'is-active': i === highlightedIndex }"
          @click="select(option)"
        >
          {{ option }}
        </li>
      </ul>
      <div
        v-show="filteredOptions.length === 0"
        class="search-selectdate-empty"
      >
        No results found for "{{ search }}"
      </div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js'

export default {
  props: ['value', 'options', 'filterFunction', 'do'],
  data() {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0,
    }
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options)
    },
  },
  beforeDestroy() {
    this.popper.destroy()
  },
  mounted() {
    const listener = (e) => {
      if (e.target === this.$el || this.$el.contains(e.target)) {
        return
      }
      this.do()
    }
    document.addEventListener('click', listener)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('click', listener)
    })
  },
  methods: {
    open() {
      if (this.isOpen) {
        return
      }
      this.isOpen = true
      this.$nextTick(() => {
        this.setupPopper()
        this.$refs.search.focus()
        this.scrollToHighlighted()
      })
    },
    setupPopper() {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
          placement: 'bottom',
        })
      } else {
        this.popper.scheduleUpdate()
      }
    },
    close() {
      if (!this.isOpen) {
        return
      }
      this.isOpen = false
      this.$refs.button.focus()
    },
    select(option) {
      this.$emit('input', option)
      this.search = ''
      this.highlightedIndex = 0
      this.close()
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex])
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      })
    },
    highlight(index) {
      this.highlightedIndex = index

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0
      }

      this.scrollToHighlighted()
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1)
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1)
    },
  },
  render() {
    return this.$slots.default[0]
  },
}
</script>
