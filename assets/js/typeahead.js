/* =============================================================
 * bootstrap3-typeahead.js v4.0.2
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * =============================================================
 * Original written by @mdo and @fat
 * =============================================================
 * Copyright 2014 Bass Jobsen @bassjobsen
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

;(function (root, factory) {
  'use strict'

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('jquery'))
  }
  // AMD module is defined
  else if (typeof define === 'function' && define.amd) {
    define(['jquery'], function ($) {
      return factory($)
    })
  } else {
    factory(root.jQuery)
  }
})(this, function ($) {
  'use strict'
  // jshint laxcomma: true

  /* TYPEAHEAD PUBLIC CLASS DEFINITION
   * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, Typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.select = this.options.select || this.select
    this.autoSelect =
      typeof this.options.autoSelect === 'boolean'
        ? this.options.autoSelect
        : true
    this.highlighter = this.options.highlighter || this.highlighter
    this.render = this.options.render || this.render
    this.updater = this.options.updater || this.updater
    this.displayText = this.options.displayText || this.displayText
    this.source = this.options.source
    this.delay = this.options.delay
    this.$menu = $(this.options.menu)
    this.$appendTo = this.options.appendTo ? $(this.options.appendTo) : null
    this.fitToElement =
      typeof this.options.fitToElement === 'boolean'
        ? this.options.fitToElement
        : false
    this.shown = false
    this.listen()
    this.showHintOnFocus =
      typeof this.options.showHintOnFocus === 'boolean' ||
      this.options.showHintOnFocus === 'all'
        ? this.options.showHintOnFocus
        : false
    this.afterSelect = this.options.afterSelect
    this.addItem = false
    this.value = this.$element.val() || this.$element.text()
    this.keyPressed = false
  }

  Typeahead.prototype = {
    constructor: Typeahead,

    select () {
      const val = this.$menu.find('.active').data('value')
      this.$element.data('active', val)
      if (this.autoSelect || val) {
        let newVal = this.updater(val)
        // Updater can be set to any random functions via "options" parameter in constructor above.
        // Add null check for cases when updater returns void or undefined.
        if (!newVal) {
          newVal = ''
        }
        this.$element
          .val(this.displayText(newVal) || newVal)
          .text(this.displayText(newVal) || newVal)
          .change()
        this.afterSelect(newVal)
      }
      return this.hide()
    },

    updater (item) {
      return item
    },

    setSource (source) {
      this.source = source
    },

    show () {
      const pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight,
      })

      const scrollHeight =
        typeof this.options.scrollHeight === 'function'
          ? this.options.scrollHeight.call()
          : this.options.scrollHeight

      let element
      if (this.shown) {
        element = this.$menu
      } else if (this.$appendTo) {
        element = this.$menu.appendTo(this.$appendTo)
        this.hasSameParent = this.$appendTo.is(this.$element.parent())
      } else {
        element = this.$menu.insertAfter(this.$element)
        this.hasSameParent = true
      }

      if (!this.hasSameParent) {
        // We cannot rely on the element position, need to position relative to the window
        element.css('position', 'fixed')
        const offset = this.$element.offset()
        pos.top = offset.top
        pos.left = offset.left
      }
      // The rules for bootstrap are: 'dropup' in the parent and 'dropdown-menu-right' in the element.
      // Note that to get right alignment, you'll need to specify `menu` in the options to be:
      // '<ul class="typeahead dropdown-menu" role="listbox"></ul>'
      const dropup = $(element).parent().hasClass('dropup')
      const newTop = dropup ? 'auto' : pos.top + pos.height + scrollHeight
      const right = $(element).hasClass('dropdown-menu-right')
      const newLeft = right ? 'auto' : pos.left
      // it seems like setting the css is a bad idea (just let Bootstrap do it), but I'll keep the old
      // logic in place except for the dropup/right-align cases.
      element.css({ top: newTop, left: newLeft }).show()

      if (this.options.fitToElement === true) {
        element.css('width', this.$element.outerWidth() + 'px')
      }

      this.shown = true
      return this
    },

    hide () {
      this.$menu.hide()
      this.shown = false
      return this
    },

    lookup (query) {
      let items
      if (typeof query !== 'undefined' && query !== null) {
        this.query = query
      } else {
        this.query = this.$element.val() || this.$element.text() || ''
      }

      if (
        this.query.length < this.options.minLength &&
        !this.options.showHintOnFocus
      ) {
        return this.shown ? this.hide() : this
      }

      const worker = $.proxy(function () {
        // Bloodhound (since 0.11) needs three arguments.
        // Two of them are callback functions (sync and async) for local and remote data processing
        // see https://github.com/twitter/typeahead.js/blob/master/src/bloodhound/bloodhound.js#L132
        if ($.isFunction(this.source) && this.source.length === 3) {
          this.source(
            this.query,
            $.proxy(this.process, this),
            $.proxy(this.process, this)
          )
        } else if ($.isFunction(this.source)) {
          this.source(this.query, $.proxy(this.process, this))
        } else if (this.source) {
          this.process(this.source)
        }
      }, this)

      clearTimeout(this.lookupWorker)
      this.lookupWorker = setTimeout(worker, this.delay)
    },

    process (items) {
      const that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length && !this.options.addItem) {
        return this.shown ? this.hide() : this
      }

      if (items.length > 0) {
        this.$element.data('active', items[0])
      } else {
        this.$element.data('active', null)
      }

      if (this.options.items != 'all') {
        items = items.slice(0, this.options.items)
      }

      // Add item
      if (this.options.addItem) {
        items.push(this.options.addItem)
      }

      return this.render(items).show()
    },

    matcher (item) {
      const it = this.displayText(item)
      return ~it.toLowerCase().indexOf(this.query.toLowerCase())
    },

    sorter (items) {
      const beginswith = []
      const caseSensitive = []
      const caseInsensitive = []
      let item

      while ((item = items.shift())) {
        const it = this.displayText(item)
        if (!it.toLowerCase().indexOf(this.query.toLowerCase()))
          beginswith.push(item)
        else if (~it.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    },

    highlighter (item) {
      let text = this.query
      if (text === '') {
        return item
      }
      const matches = item.match(/(>)([^<]*)(<)/g)
      let first = []
      const second = []
      let i
      if (matches && matches.length) {
        // html
        for (i = 0; i < matches.length; ++i) {
          if (matches[i].length > 2) {
            // escape '><'
            first.push(matches[i])
          }
        }
      } else {
        // text
        first = []
        first.push(item)
      }
      text = text.replace(/[\(\)\/\.\*\+\?\[\]]/g, function (mat) {
        return '\\' + mat
      })
      const reg = new RegExp(text, 'g')
      let m
      for (i = 0; i < first.length; ++i) {
        m = first[i].match(reg)
        if (m && m.length > 0) {
          // find all text nodes matches
          second.push(first[i])
        }
      }
      for (i = 0; i < second.length; ++i) {
        item = item.replace(
          second[i],
          second[i].replace(reg, '<strong>??????????&</strong>')
        )
      }
      return item
    },

    render (items) {
      const that = this
      const self = this
      let activeFound = false
      const data = []
      const _category = that.options.separator

      $.each(items, function (key, value) {
        // inject separator
        if (key > 0 && value[_category] !== items[key - 1][_category]) {
          data.push({
            __type: 'divider',
          })
        }

        // inject category header
        if (
          value[_category] &&
          (key === 0 || value[_category] !== items[key - 1][_category])
        ) {
          data.push({
            __type: 'category',
            name: value[_category],
          })
        }
        data.push(value)
      })

      items = $(data).map(function (i, item) {
        if ((item.__type || false) == 'category') {
          return $(that.options.headerHtml).text(item.name)[0]
        }

        if ((item.__type || false) == 'divider') {
          return $(that.options.headerDivider)[0]
        }

        const text = self.displayText(item)
        i = $(that.options.item).data('value', item)
        i.find('a').html(that.highlighter(text, item))
        if (text == self.$element.val()) {
          i.addClass('active')
          self.$element.data('active', item)
          activeFound = true
        }
        return i[0]
      })

      if (this.autoSelect && !activeFound) {
        items.filter(':not(.dropdown-header)').first().addClass('active')
        this.$element.data('active', items.first().data('value'))
      }
      this.$menu.html(items)
      return this
    },

    displayText (item) {
      return typeof item !== 'undefined' && typeof item.name !== 'undefined'
        ? item.name
        : item
    },

    next (event) {
      const active = this.$menu.find('.active').removeClass('active')
      let next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
      // added for screen reader
      this.$element.val(next.text())
    },

    prev (event) {
      const active = this.$menu.find('.active').removeClass('active')
      let prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
      // added for screen reader
      this.$element.val(prev.text())
    },

    listen () {
      this.$element
        .on('focus', $.proxy(this.focus, this))
        .on('blur', $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('propertychange input', $.proxy(this.input, this))
        .on('keyup', $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
        .on('mousedown', $.proxy(this.mousedown, this))
    },

    destroy () {
      this.$element.data('typeahead', null)
      this.$element.data('active', null)
      this.$element
        .off('focus')
        .off('blur')
        .off('keypress')
        .off('propertychange input')
        .off('keyup')

      if (this.eventSupported('keydown')) {
        this.$element.off('keydown')
      }

      this.$menu.remove()
      this.destroyed = true
    },

    eventSupported (eventName) {
      let isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    },

    move (e) {
      if (!this.shown) return

      switch (e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          // with the shiftKey (this is actually the left parenthesis)
          if (e.shiftKey) return
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          // with the shiftKey (this is actually the right parenthesis)
          if (e.shiftKey) return
          e.preventDefault()
          this.next()
          break
      }
    },

    keydown (e) {
      this.keyPressed = true
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27])
      if (!this.shown && e.keyCode == 40) {
        this.lookup()
      } else {
        this.move(e)
      }
    },

    keypress (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    },

    input (e) {
      // This is a fixed for IE10/11 that fires the input event when a placehoder is changed
      // (https://connect.microsoft.com/IE/feedback/details/810538/ie-11-fires-input-event-on-focus)
      const currentValue = this.$element.val() || this.$element.text()
      if (this.value !== currentValue) {
        this.value = currentValue
        this.lookup()
      }
    },

    keyup (e) {
      if (this.destroyed) {
        return
      }
      switch (e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
          if (!this.shown || (this.showHintOnFocus && !this.keyPressed)) return
          this.select()
          break
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break
      }
    },

    focus (e) {
      if (!this.focused) {
        this.focused = true
        this.keyPressed = false
        if (this.options.showHintOnFocus && this.skipShowHintOnFocus !== true) {
          if (this.options.showHintOnFocus === 'all') {
            this.lookup('')
          } else {
            this.lookup()
          }
        }
      }
      if (this.skipShowHintOnFocus) {
        this.skipShowHintOnFocus = false
      }
    },

    blur (e) {
      if (!this.mousedover && !this.mouseddown && this.shown) {
        this.hide()
        this.focused = false
        this.keyPressed = false
      } else if (this.mouseddown) {
        // This is for IE that blurs the input when user clicks on scroll.
        // We set the focus back on the input and prevent the lookup to occur again
        this.skipShowHintOnFocus = true
        this.$element.focus()
        this.mouseddown = false
      }
    },

    click (e) {
      e.preventDefault()
      this.skipShowHintOnFocus = true
      this.select()
      this.$element.focus()
      this.hide()
    },

    mouseenter (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    },

    mouseleave (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    },

    /**
     * We track the mousedown for IE. When clicking on the menu scrollbar, IE makes the input blur thus hiding the menu.
     */
    mousedown (e) {
      this.mouseddown = true
      this.$menu.one(
        'mouseup',
        function (e) {
          // IE won't fire this, but FF and Chrome will so we reset our flag for them here
          this.mouseddown = false
        }.bind(this)
      )
    },
  }

  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  const old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    const arg = arguments
    if (typeof option === 'string' && option == 'getActive') {
      return this.data('active')
    }
    return this.each(function () {
      const $this = $(this)
      let data = $this.data('typeahead')
      const options = typeof option === 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option === 'string' && data[option]) {
        if (arg.length > 1) {
          data[option].apply(data, Array.prototype.slice.call(arg, 1))
        } else {
          data[option]()
        }
      }
    })
  }

  Typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
    item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
    minLength: 1,
    scrollHeight: 0,
    autoSelect: true,
    afterSelect: $.noop,
    addItem: false,
    delay: 0,
    separator: 'category',
    headerHtml: '<li class="dropdown-header"></li>',
    headerDivider: '<li class="divider" role="separator"></li>',
  }

  $.fn.typeahead.Constructor = Typeahead

  /* TYPEAHEAD NO CONFLICT
   * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }

  /* TYPEAHEAD DATA-API
   * ================== */

  $(document).on(
    'focus.typeahead.data-api',
    '[data-provide="typeahead"]',
    function (e) {
      const $this = $(this)
      if ($this.data('typeahead')) return
      $this.typeahead($this.data())
    }
  )
})
