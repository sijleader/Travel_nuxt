<template>
    <on-click-outside :do="close">
        <div :class="{ 'is-active': isOpen }">
            <button
                ref="button"
                type="text"
                class="theme-search-area-section-input"
                @click="open"
            >
                <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                <span v-if="value !== null" class="content">{{ value }}</span>
                <span v-else class="content">{{pplaceholder}}</span>
            </button>
            <div v-show="isOpen" ref="dropdown" class="search-select-dropdown">
                <input
                    ref="search"
                    v-model="search"
                    class="search-select-search"
                    @keydown.esc="close"
                    @keydown.up="highlightPrev"
                    @keydown.down="highlightNext"
                    @keydown.enter.prevent="selectHighlighted"
                    @keydown.tab.prevent
                />
                <ul
                    v-show="filteredOptions.length > 0"
                    ref="options"
                    class="search-select-options"
                >
                    <li
                        v-for="(option, i) in filteredOptions"
                        :key="option"
                        class="search-select-option"
                        :class="{ 'is-active': i === highlightedIndex }"
                        @click="select(option)"
                    >
                        {{ option }}
                    </li>
                </ul>
                <div v-show="filteredOptions.length === 0" class="search-select-empty">
                    No results found
                    <!-- for "{{ search }}" -->
                </div>
            </div>
        </div>
    </on-click-outside>
</template>

<script>
import Popper from 'popper.js'
import OnClickOutside from '~/components/test/OnClickOutside.vue'
export default {
    components: {
        OnClickOutside,
    },
    props: ['value', 'options', 'filterFunction','placeholder'],
    data() {
        return {
            isOpen: false,
            search: '',
            highlightedIndex: 0,
            pplaceholder:this.placeholder
        }
    },
    computed: {
        filteredOptions() {
            return this.filterFunction(this.search, this.options)
        },
    },
    // beforeDestroy() {
    //   this.popper.remove()
    // },
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

<style scoped>
.search-select-dropdown {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    position: absolute;
    right: 0;
    left: 0;
    background-color: #3d4852;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px 0 rgba(#000, 0.1);
    z-index: 50;
}

.search-select-search {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: #606f7b;
    color: #fff;
    border-radius: 0.25rem;
}

.search-select-search:focus {
    outline: 0;
}

.search-select-options {
    list-style: none;
    padding: 0;
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 14rem;
}

.search-select-empty {
    padding: 0.5rem 0.75rem;
    color: #b8c2cc;
}
</style>
<!-- <style scoped>
@import url('~/assets/css/app.css');
</style> -->
