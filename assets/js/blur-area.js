/*
 *  jquery-blur-area - v1.0.0
 *
 *  made by @remtsoy
 */
;(function ($, window, document, undefined) {
  'use strict'
  const pluginName = 'blurArea';
    const defaults = {
      sampleAttr: 'bg-area',
      areaAttr: 'blur-area',
    };
    let _blur = 20;
    let _offsetTop;
    let _offsetBottom;
    let _offsetLeft;
    let _offsetRight;
    let _sampleBg;
    let _blurArea

  // The actual plugin constructor
  function Plugin(element, options) {
    this.element = element
    this.settings = $.extend({}, defaults, options)
    this.$el = $(this.element)
    this._defaults = defaults
    this._name = pluginName
    this.init()
  }

  $.extend(Plugin.prototype, {
    init () {
      _sampleBg = this.$el.data(this.settings.sampleAttr)
      _blurArea = this.$el.data(this.settings.areaAttr)

      if (this.$el.data('blur')) {
        _blur = this.$el.data('blur')
      }

      const parentBg = $(_sampleBg).css('background-image')

      _offsetTop = $(_blurArea).offset().top - $(_sampleBg).offset().top
      _offsetBottom = $(_sampleBg).height() - _offsetTop - $(_blurArea).height()
      _offsetLeft = $(_blurArea).offset().left - $(_sampleBg).offset().left
      _offsetRight = $(_sampleBg).width() - _offsetLeft - $(_blurArea).width()

      this.$el.css({
        '-webkit-filter': 'blur(' + _blur + 'px)',
        'background-image': parentBg,
        '-webkit-clip-path':
          'inset(' +
          _offsetTop +
          'px ' +
          _offsetRight +
          'px ' +
          _offsetBottom +
          'px ' +
          _offsetLeft +
          'px)',
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
