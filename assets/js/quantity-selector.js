;(function ($, window, document, undefined) {
  'use strict'
  const pluginName = 'quantitySelector';
    const defaults = {
      propertyName: 'value',
    };
    let _qs;
    let _$html

  function Plugin(element, options) {
    // _this = this;
    _qs = this
    _qs.element = element
    _qs.$el = $(element)
    _qs.settings = $.extend({}, defaults, options)
    _qs._defaults = defaults
    _qs._name = pluginName

    _qs.init()
  }

  $.extend(Plugin.prototype, {
    init () {
      _$html = $('html')
      _qs.boxClassName = 'quantity-selector-box'
      _qs.$box = _qs.$el.find('.' + _qs.boxClassName)
      _qs.$input = _qs.$el.find('input')
      _qs.title = _qs.$el.data('increment')
      _qs.$increment = _qs.$el.find('.quantity-selector-increment a')
      _qs.$decrement = _qs.$el.find('.quantity-selector-decrement a')
      _qs.$current = _qs.$el.find('.quantity-selector-current')
      ;(_qs.currentInt = parseInt(_qs.$current.text(), 10)),
        (_qs.sTitle = _qs.title.substring(0, _qs.title.length - 1))
      _qs.setTitle

      _qs.inputFocus()
      _qs.increment()
      _qs.decrement()
      _qs.boxHide()
    },
    inputFocus () {
      _qs.fireEvent(_qs.$input, 'focus', function (e) {
        _qs.$box.addClass('show')
        // console.log(_qs.$input.val());
        if (!_qs.$input.val()) {
          _qs.setTitle = _qs.sTitle
          _qs.inputValue()
        }
      })
    },
    inputValue () {
      _qs.$input.val(_qs.currentInt + ' ' + _qs.setTitle)
    },
    writeCurrent () {
      _qs.$current.html(_qs.currentInt)
    },
    increment () {
      _qs.fireEvent(_qs.$increment, 'click', function (e) {
        e.preventDefault()
        _qs.setTitle = _qs.title
        _qs.currentInt++
        _qs.writeCurrent()
        _qs.inputValue()
      })
    },
    decrement () {
      _qs.fireEvent(_qs.$decrement, 'click', function (e) {
        e.preventDefault()
        if (_qs.currentInt > 1) {
          _qs.setTitle = _qs.title
          if (_qs.currentInt === 2) {
            _qs.setTitle = _qs.sTitle
          }
          _qs.currentInt--
          _qs.writeCurrent()
          _qs.inputValue()
        }
      })
    },
    boxHide () {
      _qs.fireEvent($('html'), 'click', function (e) {
        if (
          e.target !== _qs.$input[0] &&
          e.target !== _qs.$box[0] &&
          !$(e.target).parents('.' + _qs.boxClassName).length
        ) {
          _qs.$box.removeClass('show')
        }
      })
    },
    fireEvent (el, evt, callback) {
      el.on(evt, { _qs }, function (e) {
        _qs = e.data._qs
        callback(e)
      })
    },
  })
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options))
      }
    })
  }
})(jQuery, window, document)
