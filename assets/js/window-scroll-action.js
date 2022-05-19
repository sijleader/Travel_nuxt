;(function ($, window, document, undefined) {
  'use strict'

  const pluginName = 'windowScrollAction';
    const defaults = {
      offset: 0.25,
    };
    let _wsa;
    let _$window;
    const _blur = 30;
    const _scale = 1.1;
    const _mob_breakpoint = 992

  // The actual plugin constructor
  function Plugin(element, options) {
    _wsa = this
    _wsa.element = element
    _wsa.$el = $(element)
    _$window = $(window)
    _wsa.settings = $.extend({}, defaults, options)
    _wsa._defaults = defaults
    _wsa._name = pluginName
    _wsa.init()
  }

  $.extend(Plugin.prototype, {
    init () {
      if (_$window.width() > _mob_breakpoint) {
        _wsa.start()
      }
    },

    start () {
      _wsa.$parent = _wsa.$el.parent()
      _wsa.parentHeight = _wsa.$parent.height()
      _wsa.elOffset = _wsa.parentHeight * _wsa.settings.offset
      _wsa.parentOffset = _wsa.$parent.offset().top

      _wsa.useScale = false
      _wsa.useBlur = false
      _wsa.blur = _wsa.$el.data('blur')
      _wsa.scale = _wsa.$el.data('scale')
      _wsa.parallax = _wsa.$el.data('parallax')
      _wsa.initScaleValue = 1.05

      if (typeof _wsa.scale !== typeof undefined && _wsa.scale !== false) {
        _wsa.scale = parseFloat(_wsa.scale)
        _wsa.scale -= 1
        _wsa.useScale = true
      }

      if (typeof _wsa.blur !== typeof undefined && _wsa.blur !== false) {
        _wsa.blur = parseFloat(_wsa.blur)
        _wsa.useBlur = true
      }

      if (_wsa.parallax !== true) {
        _wsa.parallax = false
      }

      if (_wsa.blur && !_wsa.scale) {
        _wsa.initScale = true
        _wsa.initBlurScale()
      } else {
        _wsa.initScale = false
      }

      _wsa.setDefPosision()
      _wsa.windowScroll()
    },

    initBlurScale () {
      if (_wsa.parallax) {
        _wsa.$el.css(
          _wsa.setTransObj(
            'translate3d(0, ' +
              -_wsa.elOffset +
              'px, 0) scale(' +
              _wsa.initScaleValue +
              ')'
          )
        )
      } else {
        _wsa.$el.css(
          _wsa.setTransObj(
            'translate3d(0, 0, 0) scale(' + _wsa.initScaleValue + ')'
          )
        )
      }
    },

    setDefPosision () {
      if (!_wsa.initScale) {
        _wsa.$el.css(
          _wsa.setTransObj('translate3d(0, ' + -_wsa.elOffset + 'px, 0)')
        )
      }
      _wsa.$el.css('height', _wsa.parentHeight * (1 + _wsa.settings.offset * 2))
    },

    windowScroll () {
      _wsa.fireEvent(_$window, 'scroll', function (e) {
        const scroll = $(document).scrollTop();
          let scrollPx;
          let scrolledP;
          let blurred;
          let scaled

        if (
          scroll > _wsa.parentOffset &&
          scroll < _wsa.parentOffset + _wsa.parentHeight
        ) {
          _wsa.scrolledP =
            100 -
            (100 * (_wsa.parentOffset + _wsa.parentHeight - scroll)) /
              _wsa.parentHeight
          _wsa.scrollPx =
            (scroll - _wsa.parentOffset) * (_wsa.settings.offset * 2) -
            _wsa.elOffset
          // console.log(_wsa.scrollPx);
          _wsa.blurScroll()
          _wsa.transformScroll()
          // _wsa.addParallax();
        } else {
          _wsa.removeBlur()
          // _wsa.removeParallax();
        }
      })
    },

    addParallax () {
      if (_wsa.parallax) {
        _wsa.$el.addClass('bg-fixed')
      }
    },

    removeParallax () {
      if (_wsa.parallax) {
        _wsa.$el.removeClass('bg-fixed')
      }
    },

    blurScroll () {
      let blurred
      if (_wsa.useBlur) {
        blurred = (_wsa.blur * _wsa.scrolledP) / 100
        _wsa.$el.css({
          filter: 'blur(' + blurred + 'px)',
        })
      }
    },

    removeBlur () {
      if (_wsa.useBlur) {
        _wsa.$el.css({
          filter: 'blur(0px)',
        })
      }
    },

    transformScroll () {
      let scaled, trans

      if (_wsa.parallax || _wsa.useScale) {
        if (_wsa.parallax && _wsa.useScale) {
          scaled = 1 + (_wsa.scale * _wsa.scrolledP) / 100

          trans = _wsa.setTransObj(
            'translate3d(0, ' + _wsa.scrollPx + 'px, 0) scale(' + scaled + ')'
          )
        } else if (_wsa.useScale) {
          trans = _wsa.setTransObj('translate3d(0, 0, 0) scale(' + scaled + ')')
        } else if (_wsa.initScale) {
            trans = _wsa.setTransObj(
              'translate3d(0, ' +
                _wsa.scrollPx +
                'px, 0) scale(' +
                _wsa.initScaleValue +
                ')'
            )
          } else {
            trans = _wsa.setTransObj(
              'translate3d(0, ' + _wsa.scrollPx + 'px, 0)'
            )
          }
        _wsa.$el.css(trans)
      }
    },

    setTransObj (val) {
      const prefixes = ['-ms-', '-webkit-', '-moz-', ''];
        const transObj = {}
      for (let i = prefixes.length - 1; i >= 0; i--) {
        transObj[prefixes[i] + 'transform'] = val
      }

      return transObj
    },

    fireEvent (el, evt, callback) {
      el.on(evt, { _wsa }, function (e) {
        _wsa = e.data._wsa
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
