/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion = '4.6.4'
;(function (window, document, location, $, undefined) {
  'use strict'
  const _fotoramaClass = 'fotorama';
    const _fullscreenClass = 'fullscreen';
    const wrapClass = _fotoramaClass + '__wrap';
    const wrapCss2Class = wrapClass + '--css2';
    const wrapCss3Class = wrapClass + '--css3';
    const wrapVideoClass = wrapClass + '--video';
    const wrapFadeClass = wrapClass + '--fade';
    const wrapSlideClass = wrapClass + '--slide';
    const wrapNoControlsClass = wrapClass + '--no-controls';
    const wrapNoShadowsClass = wrapClass + '--no-shadows';
    const wrapPanYClass = wrapClass + '--pan-y';
    const wrapRtlClass = wrapClass + '--rtl';
    const wrapOnlyActiveClass = wrapClass + '--only-active';
    const wrapNoCaptionsClass = wrapClass + '--no-captions';
    const wrapToggleArrowsClass = wrapClass + '--toggle-arrows';
    const stageClass = _fotoramaClass + '__stage';
    const stageFrameClass = stageClass + '__frame';
    const stageFrameVideoClass = stageFrameClass + '--video';
    const stageShaftClass = stageClass + '__shaft';
    const grabClass = _fotoramaClass + '__grab';
    const pointerClass = _fotoramaClass + '__pointer';
    const arrClass = _fotoramaClass + '__arr';
    const arrDisabledClass = arrClass + '--disabled';
    const arrPrevClass = arrClass + '--prev';
    const arrNextClass = arrClass + '--next';
    const arrArrClass = arrClass + '__arr';
    const navClass = _fotoramaClass + '__nav';
    const navWrapClass = navClass + '-wrap';
    const navShaftClass = navClass + '__shaft';
    const navDotsClass = navClass + '--dots';
    const navThumbsClass = navClass + '--thumbs';
    const navFrameClass = navClass + '__frame';
    const navFrameDotClass = navFrameClass + '--dot';
    const navFrameThumbClass = navFrameClass + '--thumb';
    const fadeClass = _fotoramaClass + '__fade';
    const fadeFrontClass = fadeClass + '-front';
    const fadeRearClass = fadeClass + '-rear';
    const shadowClass = _fotoramaClass + '__shadow';
    const shadowsClass = shadowClass + 's';
    const shadowsLeftClass = shadowsClass + '--left';
    const shadowsRightClass = shadowsClass + '--right';
    const activeClass = _fotoramaClass + '__active';
    const selectClass = _fotoramaClass + '__select';
    const hiddenClass = _fotoramaClass + '--hidden';
    const fullscreenClass = _fotoramaClass + '--fullscreen';
    const fullscreenIconClass = _fotoramaClass + '__fullscreen-icon';
    const errorClass = _fotoramaClass + '__error';
    const loadingClass = _fotoramaClass + '__loading';
    const loadedClass = _fotoramaClass + '__loaded';
    const loadedFullClass = loadedClass + '--full';
    const loadedImgClass = loadedClass + '--img';
    const grabbingClass = _fotoramaClass + '__grabbing';
    const imgClass = _fotoramaClass + '__img';
    const imgFullClass = imgClass + '--full';
    const dotClass = _fotoramaClass + '__dot';
    const thumbClass = _fotoramaClass + '__thumb';
    const thumbBorderClass = thumbClass + '-border';
    const htmlClass = _fotoramaClass + '__html';
    const videoClass = _fotoramaClass + '__video';
    const videoPlayClass = videoClass + '-play';
    const videoCloseClass = videoClass + '-close';
    const captionClass = _fotoramaClass + '__caption';
    const captionWrapClass = _fotoramaClass + '__caption__wrap';
    const spinnerClass = _fotoramaClass + '__spinner';
    const buttonAttributes = '" tabindex="0" role="button'
  const JQUERY_VERSION = $ && $.fn.jquery.split('.')

  if (
    !JQUERY_VERSION ||
    JQUERY_VERSION[0] < 1 ||
    (JQUERY_VERSION[0] == 1 && JQUERY_VERSION[1] < 8)
  ) {
    throw 'Fotorama requires jQuery 1.8 or later and will not run without it.'
  }
  // My Underscore :-)
  const _ = {}
  /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
   * Build: http://modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
   */

  const Modernizr = (function (window, document, undefined) {
    const version = '2.6.2';
      const Modernizr = {};
      const docElement = document.documentElement;
      const mod = 'modernizr';
      let modElem = document.createElement(mod);
      const mStyle = modElem.style;
      let inputElem;
      const toString = {}.toString;
      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
      const omPrefixes = 'Webkit Moz O ms';
      const cssomPrefixes = omPrefixes.split(' ');
      const domPrefixes = omPrefixes.toLowerCase().split(' ');
      const tests = {};
      const inputs = {};
      const attrs = {};
      const classes = [];
      const slice = classes.slice;
      let featureName;
      const injectElementWithStyles = function (rule, callback, nodes, testnames) {
        let style;
          let ret;
          let node;
          let docOverflow;
          const div = document.createElement('div');
          const body = document.body;
          const fakeBody = body || document.createElement('body')

        if (parseInt(nodes, 10)) {
          while (nodes--) {
            node = document.createElement('div')
            node.id = testnames ? testnames[nodes] : mod + (nodes + 1)
            div.appendChild(node)
          }
        }

        style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('')
        div.id = mod
        ;(body ? div : fakeBody).innerHTML += style
        fakeBody.appendChild(div)
        if (!body) {
          fakeBody.style.background = ''
          fakeBody.style.overflow = 'hidden'
          docOverflow = docElement.style.overflow
          docElement.style.overflow = 'hidden'
          docElement.appendChild(fakeBody)
        }

        ret = callback(div, rule)
        if (!body) {
          fakeBody.parentNode.removeChild(fakeBody)
          docElement.style.overflow = docOverflow
        } else {
          div.parentNode.removeChild(div)
        }

        return !!ret
      };
      const _hasOwnProperty = {}.hasOwnProperty;
      let hasOwnProp

    if (
      !is(_hasOwnProperty, 'undefined') &&
      !is(_hasOwnProperty.call, 'undefined')
    ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property)
      }
    } else {
      hasOwnProp = function (object, property) {
        return (
          property in object &&
          is(object.constructor.prototype[property], 'undefined')
        )
      }
    }

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {
        const target = this

        if (typeof target !== 'function') {
          throw new TypeError()
        }

        const args = slice.call(arguments, 1);
          var bound = function () {
            if (this instanceof bound) {
              const F = function () {}
              F.prototype = target.prototype
              const self = new F()

              const result = target.apply(
                self,
                args.concat(slice.call(arguments))
              )
              if (Object(result) === result) {
                return result
              }
              return self
            } else {
              return target.apply(that, args.concat(slice.call(arguments)))
            }
          }

        return bound
      }
    }

    function setCss(str) {
      mStyle.cssText = str
    }

    function setCssAll(str1, str2) {
      return setCss(prefixes.join(str1 + ';') + (str2 || ''))
    }

    function is(obj, type) {
      return typeof obj === type
    }

    function contains(str, substr) {
      return !!~('' + str).indexOf(substr)
    }

    function testProps(props, prefixed) {
      for (const i in props) {
        const prop = props[i]
        if (!contains(prop, '-') && mStyle[prop] !== undefined) {
          return prefixed == 'pfx' ? prop : true
        }
      }
      return false
    }

    function testDOMProps(props, obj, elem) {
      for (const i in props) {
        const item = obj[props[i]]
        if (item !== undefined) {
          if (elem === false) return props[i]

          if (is(item, 'function')) {
            return item.bind(elem || obj)
          }

          return item
        }
      }
      return false
    }

    function testPropsAll(prop, prefixed, elem) {
      const ucProp = prop.charAt(0).toUpperCase() + prop.slice(1);
        let props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(
          ' '
        )

      if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
        return testProps(props, prefixed)
      } else {
        props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(
          ' '
        )
        return testDOMProps(props, prefixed, elem)
      }
    }

    tests.csstransforms3d = function () {
      const ret = !!testPropsAll('perspective')

      // Chrome fails that test, ignore
      //    if (ret && 'webkitPerspective' in docElement.style) {
      //
      //      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
      //        ret = node.offsetLeft === 9 && node.offsetHeight === 3;
      //      });
      //    }
      return ret
    }

    for (const feature in tests) {
      if (hasOwnProp(tests, feature)) {
        featureName = feature.toLowerCase()
        Modernizr[featureName] = tests[feature]()

        classes.push((Modernizr[featureName] ? '' : 'no-') + featureName)
      }
    }

    Modernizr.addTest = function (feature, test) {
      if (typeof feature === 'object') {
        for (const key in feature) {
          if (hasOwnProp(feature, key)) {
            Modernizr.addTest(key, feature[key])
          }
        }
      } else {
        feature = feature.toLowerCase()

        if (Modernizr[feature] !== undefined) {
          return Modernizr
        }

        test = typeof test === 'function' ? test() : test

        if (typeof enableClasses !== 'undefined' && enableClasses) {
          docElement.className += ' ' + (test ? '' : 'no-') + feature
        }
        Modernizr[feature] = test
      }

      return Modernizr
    }

    setCss('')
    modElem = inputElem = null

    Modernizr._version = version

    Modernizr._prefixes = prefixes
    Modernizr._domPrefixes = domPrefixes
    Modernizr._cssomPrefixes = cssomPrefixes

    Modernizr.testProp = function (prop) {
      return testProps([prop])
    }

    Modernizr.testAllProps = testPropsAll

    Modernizr.testStyles = injectElementWithStyles
    Modernizr.prefixed = function (prop, obj, elem) {
      if (!obj) {
        return testPropsAll(prop, 'pfx')
      } else {
        return testPropsAll(prop, obj, elem)
      }
    }

    return Modernizr
  })(window, document)
  const fullScreenApi = {
      ok: false,
      is () {
        return false
      },
      request () {},
      cancel () {},
      event: '',
      prefix: '',
    };
    const browserPrefixes = 'webkit moz o ms khtml'.split(' ')

  // check for native support
  if (typeof document.cancelFullScreen !== 'undefined') {
    fullScreenApi.ok = true
  } else {
    // check for fullscreen support by vendor prefix
    for (let i = 0, il = browserPrefixes.length; i < il; i++) {
      fullScreenApi.prefix = browserPrefixes[i]
      if (
        typeof document[fullScreenApi.prefix + 'CancelFullScreen'] !==
        'undefined'
      ) {
        fullScreenApi.ok = true
        break
      }
    }
  }

  // update methods to do something useful
  if (fullScreenApi.ok) {
    fullScreenApi.event = fullScreenApi.prefix + 'fullscreenchange'
    fullScreenApi.is = function () {
      switch (this.prefix) {
        case '':
          return document.fullScreen
        case 'webkit':
          return document.webkitIsFullScreen
        default:
          return document[this.prefix + 'FullScreen']
      }
    }
    fullScreenApi.request = function (el) {
      return this.prefix === ''
        ? el.requestFullScreen()
        : el[this.prefix + 'RequestFullScreen']()
    }
    fullScreenApi.cancel = function (el) {
      return this.prefix === ''
        ? document.cancelFullScreen()
        : document[this.prefix + 'CancelFullScreen']()
    }
  }
  // fgnass.github.com/spin.js#v1.3.2

  /**
   * Copyright (c) 2011-2013 Felix Gnass
   * Licensed under the MIT license
   */

  let Spinner;
    const spinnerDefaults = {
      lines: 12, // The number of lines to draw
      length: 5, // The length of each line
      width: 2, // The line thickness
      radius: 7, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 15, // The rotation offset
      color: 'rgba(128, 128, 128, .75)',
      hwaccel: true,
    };
    const spinnerOverride = {
      top: 'auto',
      left: 'auto',
      className: '',
    }

  ;(function (root, factory) {
    /* CommonJS */
    // if (typeof exports == 'object')  module.exports = factory()

    /* AMD module */
    // else if (typeof define == 'function' && define.amd) define(factory)

    /* Browser global */
    // else root.Spinner = factory()

    Spinner = factory()
  })(this, function () {
    'use strict'

    const prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */;
      const animations = {} /* Animation rules keyed by their name */;
      let useCssAnimations /* Whether to use CSS animations or setTimeout */

    /**
     * Utility function to create elements. If no tag name is given,
     * a DIV is created. Optionally properties can be passed.
     */
    function createEl(tag, prop) {
      const el = document.createElement(tag || 'div');
        let n

      for (n in prop) el[n] = prop[n]
      return el
    }

    /**
     * Appends children and returns the parent.
     */
    function ins(parent /* child1, child2, ... */) {
      for (let i = 1, n = arguments.length; i < n; i++)
        parent.appendChild(arguments[i])

      return parent
    }

    /**
     * Insert a new stylesheet to hold the @keyframe or VML rules.
     */
    const sheet = (function () {
      const el = createEl('style', { type: 'text/css' })
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    })()

    /**
     * Creates an opacity keyframe animation rule and returns its name.
     * Since most mobile Webkits have timing issues with animation-delay,
     * we create separate rules for each line/segment.
     */
    function addAnimation(alpha, trail, i, lines) {
      const name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-');
        const start = 0.01 + (i / lines) * 100;
        const z = Math.max(1 - ((1 - alpha) / trail) * (100 - start), alpha);
        const prefix = useCssAnimations
          .substring(0, useCssAnimations.indexOf('Animation'))
          .toLowerCase();
        const pre = (prefix && '-' + prefix + '-') || ''

      if (!animations[name]) {
        sheet.insertRule(
          '@' +
            pre +
            'keyframes ' +
            name +
            '{' +
            '0%{opacity:' +
            z +
            '}' +
            start +
            '%{opacity:' +
            alpha +
            '}' +
            (start + 0.01) +
            '%{opacity:1}' +
            ((start + trail) % 100) +
            '%{opacity:' +
            alpha +
            '}' +
            '100%{opacity:' +
            z +
            '}' +
            '}',
          sheet.cssRules.length
        )

        animations[name] = 1
      }

      return name
    }

    /**
     * Tries various vendor prefixes and returns the first supported property.
     */
    function vendor(el, prop) {
      const s = el.style;
        let pp;
        let i

      prop = prop.charAt(0).toUpperCase() + prop.slice(1)
      for (i = 0; i < prefixes.length; i++) {
        pp = prefixes[i] + prop
        if (s[pp] !== undefined) return pp
      }
      if (s[prop] !== undefined) return prop
    }

    /**
     * Sets multiple style properties at once.
     */
    function css(el, prop) {
      for (const n in prop) el.style[vendor(el, n) || n] = prop[n]

      return el
    }

    /**
     * Fills in default values.
     */
    function merge(obj) {
      for (let i = 1; i < arguments.length; i++) {
        const def = arguments[i]
        for (const n in def) if (obj[n] === undefined) obj[n] = def[n]
      }
      return obj
    }

    /**
     * Returns the absolute page-offset of the given element.
     */
    function pos(el) {
      const o = { x: el.offsetLeft, y: el.offsetTop }
      while ((el = el.offsetParent))
        (o.x += el.offsetLeft), (o.y += el.offsetTop)

      return o
    }

    /**
     * Returns the line color from the given string or array.
     */
    function getColor(color, idx) {
      return typeof color === 'string' ? color : color[idx % color.length]
    }

    // Built-in defaults

    const defaults = {
      lines: 12, // The number of lines to draw
      length: 7, // The length of each line
      width: 5, // The line thickness
      radius: 10, // The radius of the inner circle
      rotate: 0, // Rotation offset
      corners: 1, // Roundness (0..1)
      color: '#000', // #rgb or #rrggbb
      direction: 1, // 1: clockwise, -1: counterclockwise
      speed: 1, // Rounds per second
      trail: 100, // Afterglow percentage
      opacity: 1 / 4, // Opacity of the lines
      fps: 20, // Frames per second when using setTimeout()
      zIndex: 2e9, // Use a high z-index by default
      className: 'spinner', // CSS class to assign to the element
      top: 'auto', // center vertically
      left: 'auto', // center horizontally
      position: 'relative', // element position
    }

    /** The constructor */
    function Spinner(o) {
      if (typeof this === 'undefined') return new Spinner(o)
      this.opts = merge(o || {}, Spinner.defaults, defaults)
    }

    // Global defaults that override the built-ins:
    Spinner.defaults = {}

    merge(Spinner.prototype, {
      /**
       * Adds the spinner to the given target element. If this instance is already
       * spinning, it is automatically removed from its previous target b calling
       * stop() internally.
       */
      spin (target) {
        this.stop()

        const self = this;
          const o = self.opts;
          const el = (self.el = css(createEl(0, { className: o.className }), {
            position: o.position,
            width: 0,
            zIndex: o.zIndex,
          }));
          const mid = o.radius + o.length + o.width;
          let ep; // element position
          let tp // target position

        if (target) {
          target.insertBefore(el, target.firstChild || null)
          tp = pos(target)
          ep = pos(el)
          css(el, {
            left:
              (o.left == 'auto'
                ? tp.x - ep.x + (target.offsetWidth >> 1)
                : parseInt(o.left, 10) + mid) + 'px',
            top:
              (o.top == 'auto'
                ? tp.y - ep.y + (target.offsetHeight >> 1)
                : parseInt(o.top, 10) + mid) + 'px',
          })
        }

        el.setAttribute('role', 'progressbar')
        self.lines(el, self.opts)

        if (!useCssAnimations) {
          // No CSS animation support, use setTimeout() instead
          let i = 0;
            const start = ((o.lines - 1) * (1 - o.direction)) / 2;
            let alpha;
            const fps = o.fps;
            const f = fps / o.speed;
            const ostep = (1 - o.opacity) / ((f * o.trail) / 100);
            const astep = f / o.lines

          ;(function anim() {
            i++
            for (let j = 0; j < o.lines; j++) {
              alpha = Math.max(
                1 - ((i + (o.lines - j) * astep) % f) * ostep,
                o.opacity
              )

              self.opacity(el, j * o.direction + start, alpha, o)
            }
            self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
          })()
        }
        return self
      },

      /**
       * Stops and removes the Spinner.
       */
      stop () {
        const el = this.el
        if (el) {
          clearTimeout(this.timeout)
          if (el.parentNode) el.parentNode.removeChild(el)
          this.el = undefined
        }
        return this
      },

      /**
       * Internal method that draws the individual lines. Will be overwritten
       * in VML fallback mode below.
       */
      lines (el, o) {
        let i = 0;
          const start = ((o.lines - 1) * (1 - o.direction)) / 2;
          let seg

        function fill(color, shadow) {
          return css(createEl(), {
            position: 'absolute',
            width: o.length + o.width + 'px',
            height: o.width + 'px',
            background: color,
            boxShadow: shadow,
            transformOrigin: 'left',
            transform:
              'rotate(' +
              ~~((360 / o.lines) * i + o.rotate) +
              'deg) translate(' +
              o.radius +
              'px' +
              ',0)',
            borderRadius: ((o.corners * o.width) >> 1) + 'px',
          })
        }

        for (; i < o.lines; i++) {
          seg = css(createEl(), {
            position: 'absolute',
            top: 1 + ~(o.width / 2) + 'px',
            transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
            opacity: o.opacity,
            animation:
              useCssAnimations &&
              addAnimation(
                o.opacity,
                o.trail,
                start + i * o.direction,
                o.lines
              ) +
                ' ' +
                1 / o.speed +
                's linear infinite',
          })

          if (o.shadow)
            ins(seg, css(fill('#000', '0 0 4px ' + '#000'), { top: 2 + 'px' }))
          ins(
            el,
            ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)'))
          )
        }
        return el
      },

      /**
       * Internal method that adjusts the opacity of a single line.
       * Will be overwritten in VML fallback mode below.
       */
      opacity (el, i, val) {
        if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
      },
    })

    function initVML() {
      /* Utility function to create a VML tag */
      function vml(tag, attr) {
        return createEl(
          '<' +
            tag +
            ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
          attr
        )
      }

      // No CSS transforms but VML support, add a CSS rule for VML elements:
      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

      Spinner.prototype.lines = function (el, o) {
        const r = o.length + o.width;
          const s = 2 * r

        function grp() {
          return css(
            vml('group', {
              coordsize: s + ' ' + s,
              coordorigin: -r + ' ' + -r,
            }),
            { width: s, height: s }
          )
        }

        const margin = -(o.width + o.length) * 2 + 'px';
          const g = css(grp(), { position: 'absolute', top: margin, left: margin });
          let i

        function seg(i, dx, filter) {
          ins(
            g,
            ins(
              css(grp(), { rotation: (360 / o.lines) * i + 'deg', left: ~~dx }),
              ins(
                css(vml('roundrect', { arcsize: o.corners }), {
                  width: r,
                  height: o.width,
                  left: o.radius,
                  top: -o.width >> 1,
                  filter,
                }),
                vml('fill', {
                  color: getColor(o.color, i),
                  opacity: o.opacity,
                }),
                vml('stroke', { opacity: 0 }) // transparent stroke to fix color bleeding upon opacity change
              )
            )
          )
        }

        if (o.shadow)
          for (i = 1; i <= o.lines; i++)
            seg(
              i,
              -2,
              'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)'
            )

        for (i = 1; i <= o.lines; i++) seg(i)
        return ins(el, g)
      }

      Spinner.prototype.opacity = function (el, i, val, o) {
        let c = el.firstChild
        o = (o.shadow && o.lines) || 0
        if (c && i + o < c.childNodes.length) {
          c = c.childNodes[i + o]
          c = c && c.firstChild
          c = c && c.firstChild
          if (c) c.opacity = val
        }
      }
    }

    const probe = css(createEl('group'), { behavior: 'url(#default#VML)' })

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')

    return Spinner
  })

  /* Bez v1.0.10-g5ae0136
   * http://github.com/rdallasgray/bez
   *
   * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
   *
   * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
   * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
   *
   * Copyright 2011 Robert Dallas Gray. All rights reserved.
   * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
   */
  function bez(coOrdArray) {
    const encodedFuncName =
      'bez_' + $.makeArray(arguments).join('_').replace('.', 'p')
    if (typeof $.easing[encodedFuncName] !== 'function') {
      const polyBez = function (p1, p2) {
        const A = [null, null];
          const B = [null, null];
          const C = [null, null];
          const bezCoOrd = function (t, ax) {
            C[ax] = 3 * p1[ax]
            B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax]
            A[ax] = 1 - C[ax] - B[ax]
            return t * (C[ax] + t * (B[ax] + t * A[ax]))
          };
          const xDeriv = function (t) {
            return C[0] + t * (2 * B[0] + 3 * A[0] * t)
          };
          const xForT = function (t) {
            let x = t;
              let i = 0;
              let z
            while (++i < 14) {
              z = bezCoOrd(x, 0) - t
              if (Math.abs(z) < 1e-3) break
              x -= z / xDeriv(x)
            }
            return x
          }
        return function (t) {
          return bezCoOrd(xForT(t), 1)
        }
      }
      $.easing[encodedFuncName] = function (x, t, b, c, d) {
        return (
          c *
            polyBez(
              [coOrdArray[0], coOrdArray[1]],
              [coOrdArray[2], coOrdArray[3]]
            )(t / d) +
          b
        )
      }
    }
    return encodedFuncName
  }
  const $WINDOW = $(window);
    const $DOCUMENT = $(document);
    let $HTML;
    let $BODY;
    const QUIRKS_FORCE = location.hash.replace('#', '') === 'quirks';
    const TRANSFORMS3D = Modernizr.csstransforms3d;
    const CSS3 = TRANSFORMS3D && !QUIRKS_FORCE;
    const COMPAT = TRANSFORMS3D || document.compatMode === 'CSS1Compat';
    const FULLSCREEN = fullScreenApi.ok;
    const MOBILE = navigator.userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
    );
    const SLOW = !CSS3 || MOBILE;
    const MS_POINTER = navigator.msPointerEnabled;
    const WHEEL =
      'onwheel' in document.createElement('div')
        ? 'wheel'
        : document.onmousewheel !== undefined
        ? 'mousewheel'
        : 'DOMMouseScroll';
    const TOUCH_TIMEOUT = 250;
    const TRANSITION_DURATION = 300;
    const SCROLL_LOCK_TIMEOUT = 1400;
    const AUTOPLAY_INTERVAL = 5000;
    const MARGIN = 2;
    const THUMB_SIZE = 64;
    const WIDTH = 500;
    const HEIGHT = 333;
    const STAGE_FRAME_KEY = '$stageFrame';
    const NAV_DOT_FRAME_KEY = '$navDotFrame';
    const NAV_THUMB_FRAME_KEY = '$navThumbFrame';
    const AUTO = 'auto';
    const BEZIER = bez([0.1, 0, 0.25, 1]);
    const MAX_WIDTH = 99999;
    const FIFTYFIFTY = '50%';
    const OPTIONS = {
      // dimensions
      width: null, // 500 || '100%'
      minwidth: null,
      maxwidth: '100%', // '100%'
      height: null,
      minheight: null,
      maxheight: null,

      ratio: null, // '16/9' || 500/333 || 1.5

      margin: MARGIN,
      glimpse: 0,

      fit: 'contain', // 'cover' || 'scaledown' || 'none'

      position: FIFTYFIFTY,
      thumbposition: FIFTYFIFTY,

      // navigation, thumbs
      nav: 'dots', // 'thumbs' || false
      navposition: 'bottom', // 'top'
      navwidth: null,
      thumbwidth: THUMB_SIZE,
      thumbheight: THUMB_SIZE,
      thumbmargin: MARGIN,
      thumbborderwidth: MARGIN,
      thumbfit: 'cover', // 'contain' || 'scaledown' || 'none'

      allowfullscreen: false, // true || 'native'

      transition: 'slide', // 'crossfade' || 'dissolve'
      clicktransition: null,
      transitionduration: TRANSITION_DURATION,

      captions: true,

      hash: false,
      startindex: 0,

      loop: false,

      autoplay: false,
      stopautoplayontouch: true,

      keyboard: false,

      arrows: true,
      click: true,
      swipe: true,
      trackpad: false,

      enableifsingleframe: false,

      controlsonstart: true,

      shuffle: false,

      direction: 'ltr', // 'rtl'

      shadows: true,
      spinner: null,
    };
    const KEYBOARD_OPTIONS = {
      left: true,
      right: true,
      down: false,
      up: false,
      space: false,
      home: false,
      end: false,
    }
  function noop() {}

  function minMaxLimit(value, min, max) {
    return Math.max(
      isNaN(min) ? -Infinity : min,
      Math.min(isNaN(max) ? Infinity : max, value)
    )
  }

  function readTransform(css) {
    return css.match(/ma/) && css.match(/-?\d+(?!d)/g)[css.match(/3d/) ? 12 : 4]
  }

  function readPosition($el) {
    if (CSS3) {
      return +readTransform($el.css('transform'))
    } else {
      return +$el.css('left').replace('px', '')
    }
  }

  function getTranslate(pos /*, _001 */) {
    const obj = {}
    if (CSS3) {
      obj.transform = 'translate3d(' + pos /* + (_001 ? 0.001 : 0) */ + 'px,0,0)' // 0.001 to remove Retina artifacts
    } else {
      obj.left = pos
    }
    return obj
  }

  function getDuration(time) {
    return { 'transition-duration': time + 'ms' }
  }

  function unlessNaN(value, alternative) {
    return isNaN(value) ? alternative : value
  }

  function numberFromMeasure(value, measure) {
    return unlessNaN(+String(value).replace(measure || 'px', ''))
  }

  function numberFromPercent(value) {
    return /%$/.test(value) ? numberFromMeasure(value, '%') : undefined
  }

  function numberFromWhatever(value, whole) {
    return unlessNaN(
      (numberFromPercent(value) / 100) * whole,
      numberFromMeasure(value)
    )
  }

  function measureIsValid(value) {
    return (
      (!isNaN(numberFromMeasure(value)) ||
        !isNaN(numberFromMeasure(value, '%'))) &&
      value
    )
  }

  function getPosByIndex(index, side, margin, baseIndex) {
    /// /console.log('getPosByIndex', index, side, margin, baseIndex);
    /// /console.log((index - (baseIndex || 0)) * (side + (margin || 0)));

    return (index - (baseIndex || 0)) * (side + (margin || 0))
  }

  function getIndexByPos(pos, side, margin, baseIndex) {
    return -Math.round(pos / (side + (margin || 0)) - (baseIndex || 0))
  }

  function bindTransitionEnd($el) {
    const elData = $el.data()

    if (elData.tEnd) return

    const el = $el[0];
      const transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        msTransition: 'MSTransitionEnd',
        transition: 'transitionend',
      }
    addEvent(
      el,
      transitionEndEvent[Modernizr.prefixed('transition')],
      function (e) {
        elData.tProp && e.propertyName.match(elData.tProp) && elData.onEndFn()
      }
    )
    elData.tEnd = true
  }

  function afterTransition($el, property, fn, time) {
    let ok;
      const elData = $el.data()

    if (elData) {
      elData.onEndFn = function () {
        if (ok) return
        ok = true
        clearTimeout(elData.tT)
        fn()
      }
      elData.tProp = property

      // Passive call, just in case of fail of native transition-end event
      clearTimeout(elData.tT)
      elData.tT = setTimeout(function () {
        elData.onEndFn()
      }, time * 1.5)

      bindTransitionEnd($el)
    }
  }

  function stop($el, left /*, _001 */) {
    if ($el.length) {
      const elData = $el.data()
      if (CSS3) {
        $el.css(getDuration(0))
        elData.onEndFn = noop
        clearTimeout(elData.tT)
      } else {
        $el.stop()
      }
      const lockedLeft = getNumber(left, function () {
        return readPosition($el)
      })

      $el.css(getTranslate(lockedLeft /*, _001 */)) // .width(); // `.width()` for reflow
      return lockedLeft
    }
  }

  function getNumber() {
    let number
    for (let _i = 0, _l = arguments.length; _i < _l; _i++) {
      number = _i ? arguments[_i]() : arguments[_i]
      if (typeof number === 'number') {
        break
      }
    }

    return number
  }

  function edgeResistance(pos, edge) {
    return Math.round(pos + (edge - pos) / 1.5)
  }

  function getProtocol() {
    getProtocol.p =
      getProtocol.p || (location.protocol === 'https:' ? 'https://' : 'http://')
    return getProtocol.p
  }

  function parseHref(href) {
    const a = document.createElement('a')
    a.href = href
    return a
  }

  function findVideoId(href, forceVideo) {
    if (typeof href !== 'string') return href
    href = parseHref(href)

    let id, type

    if (href.host.match(/youtube\.com/) && href.search) {
      // .log();
      id = href.search.split('v=')[1]
      if (id) {
        const ampersandPosition = id.indexOf('&')
        if (ampersandPosition !== -1) {
          id = id.substring(0, ampersandPosition)
        }
        type = 'youtube'
      }
    } else if (href.host.match(/youtube\.com|youtu\.be/)) {
      id = href.pathname.replace(/^\/(embed\/|v\/)?/, '').replace(/\/.*/, '')
      type = 'youtube'
    } else if (href.host.match(/vimeo\.com/)) {
      type = 'vimeo'
      id = href.pathname.replace(/^\/(video\/)?/, '').replace(/\/.*/, '')
    }

    if ((!id || !type) && forceVideo) {
      id = href.href
      type = 'custom'
    }

    return id
      ? {
          id,
          type,
          s: href.search.replace(/^\?/, ''),
          p: getProtocol(),
        }
      : false
  }

  function getVideoThumbs(dataFrame, data, fotorama) {
    let img;
      let thumb;
      const video = dataFrame.video
    if (video.type === 'youtube') {
      thumb = getProtocol() + 'img.youtube.com/vi/' + video.id + '/default.jpg'
      img = thumb.replace(/\/default.jpg$/, '/hqdefault.jpg')
      dataFrame.thumbsReady = true
    } else if (video.type === 'vimeo') {
      $.ajax({
        url: getProtocol() + 'vimeo.com/api/v2/video/' + video.id + '.json',
        dataType: 'jsonp',
        success (json) {
          dataFrame.thumbsReady = true
          updateData(
            data,
            { img: json[0].thumbnail_large, thumb: json[0].thumbnail_small },
            dataFrame.i,
            fotorama
          )
        },
      })
    } else {
      dataFrame.thumbsReady = true
    }

    return {
      img,
      thumb,
    }
  }

  function updateData(data, _dataFrame, i, fotorama) {
    for (let _i = 0, _l = data.length; _i < _l; _i++) {
      const dataFrame = data[_i]

      if (dataFrame.i === i && dataFrame.thumbsReady) {
        const clear = { videoReady: true }
        clear[STAGE_FRAME_KEY] =
          clear[NAV_THUMB_FRAME_KEY] =
          clear[NAV_DOT_FRAME_KEY] =
            false

        fotorama.splice(_i, 1, $.extend({}, dataFrame, clear, _dataFrame))

        break
      }
    }
  }

  function getDataFromHtml($el) {
    const data = []

    function getDataFromImg($img, imgData, checkVideo) {
      const $child = $img.children('img').eq(0);
        let _imgHref = $img.attr('href');
        const _imgSrc = $img.attr('src');
        const _thumbSrc = $child.attr('src');
        const _video = imgData.video;
        let video = checkVideo ? findVideoId(_imgHref, _video === true) : false

      if (video) {
        _imgHref = false
      } else {
        video = _video
      }

      getDimensions(
        $img,
        $child,
        $.extend(imgData, {
          video,
          img: imgData.img || _imgHref || _imgSrc || _thumbSrc,
          thumb: imgData.thumb || _thumbSrc || _imgSrc || _imgHref,
        })
      )
    }

    function getDimensions($img, $child, imgData) {
      const separateThumbFLAG = imgData.thumb && imgData.img !== imgData.thumb;
        const width = numberFromMeasure(imgData.width || $img.attr('width'));
        const height = numberFromMeasure(imgData.height || $img.attr('height'))

      $.extend(imgData, {
        width,
        height,
        thumbratio: getRatio(
          imgData.thumbratio ||
            numberFromMeasure(
              imgData.thumbwidth ||
                ($child && $child.attr('width')) ||
                separateThumbFLAG ||
                width
            ) /
              numberFromMeasure(
                imgData.thumbheight ||
                  ($child && $child.attr('height')) ||
                  separateThumbFLAG ||
                  height
              )
        ),
      })
    }

    $el.children().each(function () {
      const $this = $(this);
        const dataFrame = optionsToLowerCase(
          $.extend($this.data(), { id: $this.attr('id') })
        )
      if ($this.is('a, img')) {
        getDataFromImg($this, dataFrame, true)
      } else if (!$this.is(':empty')) {
        getDimensions(
          $this,
          null,
          $.extend(dataFrame, {
            html: this,
            _html: $this.html(), // Because of IE
          })
        )
      } else return

      data.push(dataFrame)
    })

    return data
  }

  function isHidden(el) {
    return el.offsetWidth === 0 && el.offsetHeight === 0
  }

  function isDetached(el) {
    return !$.contains(document.documentElement, el)
  }

  function waitFor(test, fn, timeout, i) {
    if (!waitFor.i) {
      waitFor.i = 1
      waitFor.ii = [true]
    }

    i = i || waitFor.i

    if (typeof waitFor.ii[i] === 'undefined') {
      waitFor.ii[i] = true
    }

    if (test()) {
      fn()
    } else {
      waitFor.ii[i] &&
        setTimeout(function () {
          waitFor.ii[i] && waitFor(test, fn, timeout, i)
        }, timeout || 100)
    }

    return waitFor.i++
  }

  waitFor.stop = function (i) {
    waitFor.ii[i] = false
  }

  function setHash(hash) {
    /// ///console.time('setHash ' + hash);
    location.replace(
      location.protocol +
        '//' +
        location.host +
        location.pathname.replace(/^\/?/, '/') +
        location.search +
        '#' +
        hash
    )
    /// ///console.timeEnd('setHash ' + hash);
  }

  function fit($el, measuresToFit, method, position) {
    const elData = $el.data();
      const measures = elData.measures

    if (
      measures &&
      (!elData.l ||
        elData.l.W !== measures.width ||
        elData.l.H !== measures.height ||
        elData.l.r !== measures.ratio ||
        elData.l.w !== measuresToFit.w ||
        elData.l.h !== measuresToFit.h ||
        elData.l.m !== method ||
        elData.l.p !== position)
    ) {
      // console.log('fit');

      let width = measures.width;
        let height = measures.height;
        const ratio = measuresToFit.w / measuresToFit.h;
        const biggerRatioFLAG = measures.ratio >= ratio;
        const fitFLAG = method === 'scaledown';
        const containFLAG = method === 'contain';
        const coverFLAG = method === 'cover';
        const pos = parsePosition(position)

      if (
        (biggerRatioFLAG && (fitFLAG || containFLAG)) ||
        (!biggerRatioFLAG && coverFLAG)
      ) {
        width = minMaxLimit(measuresToFit.w, 0, fitFLAG ? width : Infinity)
        height = width / measures.ratio
      } else if (
        (biggerRatioFLAG && coverFLAG) ||
        (!biggerRatioFLAG && (fitFLAG || containFLAG))
      ) {
        height = minMaxLimit(measuresToFit.h, 0, fitFLAG ? height : Infinity)
        width = height * measures.ratio
      }

      $el.css({
        width,
        height,
        left: numberFromWhatever(pos.x, measuresToFit.w - width),
        top: numberFromWhatever(pos.y, measuresToFit.h - height),
      })

      elData.l = {
        W: measures.width,
        H: measures.height,
        r: measures.ratio,
        w: measuresToFit.w,
        h: measuresToFit.h,
        m: method,
        p: position,
      }
    }

    return true
  }

  function setStyle($el, style) {
    const el = $el[0]
    if (el.styleSheet) {
      el.styleSheet.cssText = style
    } else {
      $el.html(style)
    }
  }

  function findShadowEdge(pos, min, max) {
    return min === max
      ? false
      : pos <= min
      ? 'left'
      : pos >= max
      ? 'right'
      : 'left right'
  }

  function getIndexFromHash(hash, data, ok, startindex) {
    if (!ok) return false
    if (!isNaN(hash)) return hash - (startindex ? 0 : 1)

    let index

    for (let _i = 0, _l = data.length; _i < _l; _i++) {
      const dataFrame = data[_i]

      if (dataFrame.id === hash) {
        index = _i
        break
      }
    }

    return index
  }

  function smartClick($el, fn, _options) {
    _options = _options || {}

    $el.each(function () {
      const $this = $(this);
        const thisData = $this.data();
        let startEvent

      if (thisData.clickOn) return

      thisData.clickOn = true

      $.extend(
        touch($this, {
          onStart (e) {
            startEvent = e
            ;(_options.onStart || noop).call(this, e)
          },
          onMove: _options.onMove || noop,
          onTouchEnd: _options.onTouchEnd || noop,
          onEnd (result) {
            /// /console.log('smartClick ← result.moved', result.moved);
            if (result.moved) return
            fn.call(this, startEvent)
          },
        }),
        { noMove: true }
      )
    })
  }

  function div(classes, child) {
    return '<div class="' + classes + '">' + (child || '') + '</div>'
  }

  // Fisher–Yates Shuffle
  // http://bost.ocks.org/mike/shuffle/
  function shuffle(array) {
    // While there remain elements to shuffle
    let l = array.length
    while (l) {
      // Pick a remaining element
      const i = Math.floor(Math.random() * l--)

      // And swap it with the current element
      const t = array[l]
      array[l] = array[i]
      array[i] = t
    }

    return array
  }

  function clone(array) {
    return (
      Object.prototype.toString.call(array) == '[object Array]' &&
      $.map(array, function (frame) {
        return $.extend({}, frame)
      })
    )
  }

  function lockScroll($el, left, top) {
    $el.scrollLeft(left || 0).scrollTop(top || 0)
  }

  function optionsToLowerCase(options) {
    if (options) {
      const opts = {}
      $.each(options, function (key, value) {
        opts[key.toLowerCase()] = value
      })

      return opts
    }
  }

  function getRatio(_ratio) {
    if (!_ratio) return
    let ratio = +_ratio
    if (!isNaN(ratio)) {
      return ratio
    } else {
      ratio = _ratio.split('/')
      return +ratio[0] / +ratio[1] || undefined
    }
  }

  function addEvent(el, e, fn, bool) {
    if (!e) return
    el.addEventListener
      ? el.addEventListener(e, fn, !!bool)
      : el.attachEvent('on' + e, fn)
  }

  function elIsDisabled(el) {
    return !!el.getAttribute('disabled')
  }

  function disableAttr(FLAG) {
    return { tabindex: FLAG * -1 + '', disabled: FLAG }
  }

  function addEnterUp(el, fn) {
    addEvent(el, 'keyup', function (e) {
      elIsDisabled(el) || (e.keyCode == 13 && fn.call(el, e))
    })
  }

  function addFocus(el, fn) {
    addEvent(
      el,
      'focus',
      (el.onfocusin = function (e) {
        fn.call(el, e)
      }),
      true
    )
  }

  function stopEvent(e, stopPropagation) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
    stopPropagation && e.stopPropagation && e.stopPropagation()
  }

  function getDirectionSign(forward) {
    return forward ? '>' : '<'
  }

  function parsePosition(rule) {
    rule = (rule + '').split(/\s+/)
    return {
      x: measureIsValid(rule[0]) || FIFTYFIFTY,
      y: measureIsValid(rule[1]) || FIFTYFIFTY,
    }
  }
  function slide($el, options) {
    const elData = $el.data();
      let elPos = Math.round(options.pos);
      let onEndFn = function () {
        elData.sliding = false
        ;(options.onEnd || noop)()
      }

    if (
      typeof options.overPos !== 'undefined' &&
      options.overPos !== options.pos
    ) {
      elPos = options.overPos
      onEndFn = function () {
        slide(
          $el,
          $.extend({}, options, {
            overPos: options.pos,
            time: Math.max(TRANSITION_DURATION, options.time / 2),
          })
        )
      }
    }

    /// /////console.time('var translate = $.extend');
    const translate = $.extend(
      getTranslate(elPos /*, options._001 */),
      options.width && { width: options.width }
    )
    /// /////console.timeEnd('var translate = $.extend');

    elData.sliding = true

    if (CSS3) {
      $el.css($.extend(getDuration(options.time), translate))
      if (options.time > 10) {
        /// /////console.time('afterTransition');
        afterTransition($el, 'transform', onEndFn, options.time)
        /// /////console.timeEnd('afterTransition');
      } else {
        onEndFn()
      }
    } else {
      $el.stop().animate(translate, options.time, BEZIER, onEndFn)
    }
  }

  function fade($el1, $el2, $frames, options, fadeStack, chain) {
    const chainedFLAG = typeof chain !== 'undefined'
    if (!chainedFLAG) {
      fadeStack.push(arguments)
      Array.prototype.push.call(arguments, fadeStack.length)
      if (fadeStack.length > 1) return
    }

    $el1 = $el1 || $($el1)
    $el2 = $el2 || $($el2)

    const _$el1 = $el1[0];
      const _$el2 = $el2[0];
      const crossfadeFLAG = options.method === 'crossfade';
      var onEndFn = function () {
        if (!onEndFn.done) {
          onEndFn.done = true
          const args = (chainedFLAG || fadeStack.shift()) && fadeStack.shift()
          args && fade.apply(this, args)
          ;(options.onEnd || noop)(!!args)
        }
      };
      const time = options.time / (chain || 1)

    $frames.removeClass(fadeRearClass + ' ' + fadeFrontClass)

    $el1.stop().addClass(fadeRearClass)
    $el2.stop().addClass(fadeFrontClass)

    crossfadeFLAG && _$el2 && $el1.fadeTo(0, 0)

    $el1.fadeTo(crossfadeFLAG ? time : 0, 1, crossfadeFLAG && onEndFn)
    $el2.fadeTo(time, 0, onEndFn)

    ;(_$el1 && crossfadeFLAG) || _$el2 || onEndFn()
  }
  let lastEvent, moveEventType, preventEvent, preventEventTimeout

  function extendEvent(e) {
    const touch = (e.touches || [])[0] || e
    e._x = touch.pageX
    e._y = touch.clientY
    e._now = $.now()
  }

  function touch($el, options) {
    const el = $el[0];
      const tail = {};
      let touchEnabledFLAG;
      let startEvent;
      let $target;
      let controlTouch;
      let touchFLAG;
      let targetIsSelectFLAG;
      let targetIsLinkFlag;
      let tolerance;
      let moved

    function onStart(e) {
      $target = $(e.target)
      tail.checked = targetIsSelectFLAG = targetIsLinkFlag = moved = false

      if (
        touchEnabledFLAG ||
        tail.flow ||
        (e.touches && e.touches.length > 1) ||
        e.which > 1 ||
        (lastEvent && lastEvent.type !== e.type && preventEvent) ||
        (targetIsSelectFLAG = options.select && $target.is(options.select, el))
      )
        return targetIsSelectFLAG

      touchFLAG = e.type === 'touchstart'
      targetIsLinkFlag = $target.is('a, a *', el)
      controlTouch = tail.control

      tolerance =
        tail.noMove || tail.noSwipe || controlTouch ? 16 : !tail.snap ? 4 : 0

      extendEvent(e)

      startEvent = lastEvent = e
      moveEventType = e.type
        .replace(/down|start/, 'move')
        .replace(/Down/, 'Move')

      ;(options.onStart || noop).call(el, e, {
        control: controlTouch,
        $target,
      })

      touchEnabledFLAG = tail.flow = true

      if (!touchFLAG || tail.go) stopEvent(e)
    }

    function onMove(e) {
      if (
        (e.touches && e.touches.length > 1) ||
        (MS_POINTER && !e.isPrimary) ||
        moveEventType !== e.type ||
        !touchEnabledFLAG
      ) {
        touchEnabledFLAG && onEnd()
        ;(options.onTouchEnd || noop)()
        return
      }

      extendEvent(e)

      const xDiff = Math.abs(e._x - startEvent._x); // opt _x ← _pageX
        const yDiff = Math.abs(e._y - startEvent._y);
        const xyDiff = xDiff - yDiff;
        const xWin = (tail.go || tail.x || xyDiff >= 0) && !tail.noSwipe;
        const yWin = xyDiff < 0

      if (touchFLAG && !tail.checked) {
        if ((touchEnabledFLAG = xWin)) {
          stopEvent(e)
        }
      } else {
        /// /console.log('onMove e.preventDefault');
        stopEvent(e)
        ;(options.onMove || noop).call(el, e, { touch: touchFLAG })
      }

      if (
        !moved &&
        Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)) > tolerance
      ) {
        moved = true
      }

      tail.checked = tail.checked || xWin || yWin
    }

    function onEnd(e) {
      /// ///console.time('touch.js onEnd');

      ;(options.onTouchEnd || noop)()

      const _touchEnabledFLAG = touchEnabledFLAG
      tail.control = touchEnabledFLAG = false

      if (_touchEnabledFLAG) {
        tail.flow = false
      }

      if (!_touchEnabledFLAG || (targetIsLinkFlag && !tail.checked)) return

      e && stopEvent(e)

      preventEvent = true
      clearTimeout(preventEventTimeout)
      preventEventTimeout = setTimeout(function () {
        preventEvent = false
      }, 1000)

      ;(options.onEnd || noop).call(el, {
        moved,
        $target,
        control: controlTouch,
        touch: touchFLAG,
        startEvent,
        aborted: !e || e.type === 'MSPointerCancel',
      })
      /// ///console.timeEnd('touch.js onEnd');
    }

    function onOtherStart() {
      if (tail.flow) return
      setTimeout(function () {
        tail.flow = true
      }, 10)
    }

    function onOtherEnd() {
      if (!tail.flow) return
      setTimeout(function () {
        tail.flow = false
      }, TOUCH_TIMEOUT)
    }

    if (MS_POINTER) {
      addEvent(el, 'MSPointerDown', onStart)
      addEvent(document, 'MSPointerMove', onMove)
      addEvent(document, 'MSPointerCancel', onEnd)
      addEvent(document, 'MSPointerUp', onEnd)
    } else {
      addEvent(el, 'touchstart', onStart)
      addEvent(el, 'touchmove', onMove)
      addEvent(el, 'touchend', onEnd)

      addEvent(document, 'touchstart', onOtherStart)
      addEvent(document, 'touchend', onOtherEnd)
      addEvent(document, 'touchcancel', onOtherEnd)

      $WINDOW.on('scroll', onOtherEnd)

      $el.on('mousedown', onStart)
      $DOCUMENT.on('mousemove', onMove).on('mouseup', onEnd)
    }

    $el.on('click', 'a', function (e) {
      tail.checked && stopEvent(e)
    })

    return tail
  }

  function moveOnTouch($el, options) {
    const el = $el[0];
      const elData = $el.data();
      let tail = {};
      let startCoo;
      let coo;
      let startElPos;
      let moveElPos;
      let edge;
      let moveTrack;
      let startTime;
      let endTime;
      let min;
      let max;
      let snap;
      let slowFLAG;
      let controlFLAG;
      let moved;
      let tracked

    function startTracking(e, noStop) {
      tracked = true
      startCoo = coo = e._x
      startTime = e._now

      moveTrack = [[startTime, startCoo]]

      startElPos = moveElPos =
        tail.noMove || noStop
          ? 0
          : stop($el, (options.getPos || noop)() /*, options._001 */)

      ;(options.onStart || noop).call(el, e)
    }

    function onStart(e, result) {
      min = tail.min
      max = tail.max
      snap = tail.snap

      slowFLAG = e.altKey
      tracked = moved = false

      controlFLAG = result.control

      if (!controlFLAG && !elData.sliding) {
        startTracking(e)
      }
    }

    function onMove(e, result) {
      if (!tail.noSwipe) {
        if (!tracked) {
          startTracking(e)
        }

        coo = e._x

        moveTrack.push([e._now, coo])

        moveElPos = startElPos - (startCoo - coo)

        edge = findShadowEdge(moveElPos, min, max)

        if (moveElPos <= min) {
          moveElPos = edgeResistance(moveElPos, min)
        } else if (moveElPos >= max) {
          moveElPos = edgeResistance(moveElPos, max)
        }

        if (!tail.noMove) {
          $el.css(getTranslate(moveElPos /*, options._001 */))
          if (!moved) {
            moved = true
            // only for mouse
            result.touch || MS_POINTER || $el.addClass(grabbingClass)
          }

          ;(options.onMove || noop).call(el, e, { pos: moveElPos, edge })
        }
      }
    }

    function onEnd(result) {
      /// ///console.time('moveontouch.js onEnd');
      if (tail.noSwipe && result.moved) return

      if (!tracked) {
        startTracking(result.startEvent, true)
      }

      /// /console.log('onEnd');

      result.touch || MS_POINTER || $el.removeClass(grabbingClass)

      endTime = $.now()

      const _backTimeIdeal = endTime - TOUCH_TIMEOUT;
        let _backTime;
        let _timeDiff;
        let _timeDiffLast;
        let backTime = null;
        let backCoo;
        let virtualPos;
        let limitPos;
        let newPos;
        let overPos;
        let time = TRANSITION_DURATION;
        let speed;
        const friction = options.friction

      for (let _i = moveTrack.length - 1; _i >= 0; _i--) {
        _backTime = moveTrack[_i][0]
        _timeDiff = Math.abs(_backTime - _backTimeIdeal)
        if (backTime === null || _timeDiff < _timeDiffLast) {
          backTime = _backTime
          backCoo = moveTrack[_i][1]
        } else if (backTime === _backTimeIdeal || _timeDiff > _timeDiffLast) {
          break
        }
        _timeDiffLast = _timeDiff
      }

      newPos = minMaxLimit(moveElPos, min, max)

      const cooDiff = backCoo - coo;
        const forwardFLAG = cooDiff >= 0;
        const timeDiff = endTime - backTime;
        const longTouchFLAG = timeDiff > TOUCH_TIMEOUT;
        const swipeFLAG =
          !longTouchFLAG && moveElPos !== startElPos && newPos === moveElPos

      if (snap) {
        newPos = minMaxLimit(
          Math[swipeFLAG ? (forwardFLAG ? 'floor' : 'ceil') : 'round'](
            moveElPos / snap
          ) * snap,
          min,
          max
        )
        min = max = newPos
      }

      if (swipeFLAG && (snap || newPos === moveElPos)) {
        speed = -(cooDiff / timeDiff)
        time *= minMaxLimit(Math.abs(speed), options.timeLow, options.timeHigh)
        virtualPos = Math.round(moveElPos + (speed * time) / friction)

        if (!snap) {
          newPos = virtualPos
        }

        if (
          (!forwardFLAG && virtualPos > max) ||
          (forwardFLAG && virtualPos < min)
        ) {
          limitPos = forwardFLAG ? min : max
          overPos = virtualPos - limitPos
          if (!snap) {
            newPos = limitPos
          }
          overPos = minMaxLimit(
            newPos + overPos * 0.03,
            limitPos - 50,
            limitPos + 50
          )
          time = Math.abs((moveElPos - overPos) / (speed / friction))
        }
      }

      time *= slowFLAG ? 10 : 1

      ;(options.onEnd || noop).call(
        el,
        $.extend(result, {
          moved: result.moved || (longTouchFLAG && snap),
          pos: moveElPos,
          newPos,
          overPos,
          time,
        })
      )
    }

    tail = $.extend(
      touch(
        options.$wrap,
        $.extend({}, options, {
          onStart,
          onMove,
          onEnd,
        })
      ),
      tail
    )

    return tail
  }
  function wheel($el, options) {
    const el = $el[0];
      let lockFLAG;
      let lastDirection;
      let lastNow;
      const tail = {
        prevent: {},
      }

    addEvent(el, WHEEL, function (e) {
      const yDelta = e.wheelDeltaY || -1 * e.deltaY || 0;
        const xDelta = e.wheelDeltaX || -1 * e.deltaX || 0;
        const xWin = Math.abs(xDelta) && !Math.abs(yDelta);
        const direction = getDirectionSign(xDelta < 0);
        const sameDirection = lastDirection === direction;
        const now = $.now();
        const tooFast = now - lastNow < TOUCH_TIMEOUT

      lastDirection = direction
      lastNow = now

      if (!xWin || !tail.ok || (tail.prevent[direction] && !lockFLAG)) {
        return
      } else {
        stopEvent(e, true)
        if (lockFLAG && sameDirection && tooFast) {
          return
        }
      }

      if (options.shift) {
        lockFLAG = true
        clearTimeout(tail.t)
        tail.t = setTimeout(function () {
          lockFLAG = false
        }, SCROLL_LOCK_TIMEOUT)
      }

      ;(options.onEnd || noop)(e, options.shift ? direction : xDelta)
    })

    return tail
  }
  jQuery.Fotorama = function ($fotorama, opts) {
    $HTML = $('html')
    $BODY = $('body')

    const that = this;
      const stamp = $.now();
      const stampClass = _fotoramaClass + stamp;
      const fotorama = $fotorama[0];
      let data;
      let dataFrameCount = 1;
      const fotoramaData = $fotorama.data();
      let size;
      const $style = $('<style></style>');
      const $anchor = $(div(hiddenClass));
      const $wrap = $(div(wrapClass));
      const $stage = $(div(stageClass)).appendTo($wrap);
      const stage = $stage[0];
      const $stageShaft = $(div(stageShaftClass)).appendTo($stage);
      let $stageFrame = $();
      const $arrPrev = $(div(arrClass + ' ' + arrPrevClass + buttonAttributes));
      const $arrNext = $(div(arrClass + ' ' + arrNextClass + buttonAttributes));
      const $arrs = $arrPrev.add($arrNext).appendTo($stage);
      const $navWrap = $(div(navWrapClass));
      const $nav = $(div(navClass)).appendTo($navWrap);
      const $navShaft = $(div(navShaftClass)).appendTo($nav);
      let $navFrame;
      let $navDotFrame = $();
      let $navThumbFrame = $();
      const stageShaftData = $stageShaft.data();
      const navShaftData = $navShaft.data();
      const $thumbBorder = $(div(thumbBorderClass)).appendTo($navShaft);
      const $fullscreenIcon = $(div(fullscreenIconClass + buttonAttributes));
      const fullscreenIcon = $fullscreenIcon[0];
      const $videoPlay = $(div(videoPlayClass));
      const $videoClose = $(div(videoCloseClass)).appendTo($stage);
      const videoClose = $videoClose[0];
      let spinner;
      const $spinner = $(div(spinnerClass));
      let $videoPlaying;
      let activeIndex = false;
      let activeFrame;
      let activeIndexes;
      let repositionIndex;
      let dirtyIndex;
      let lastActiveIndex;
      let prevIndex;
      let nextIndex;
      let nextAutoplayIndex;
      let startIndex;
      let o_loop;
      let o_nav;
      let o_navThumbs;
      let o_navTop;
      let o_allowFullScreen;
      let o_nativeFullScreen;
      let o_fade;
      let o_thumbSide;
      let o_thumbSide2;
      let o_transitionDuration;
      let o_transition;
      let o_shadows;
      let o_rtl;
      let o_keyboard;
      let lastOptions = {};
      let measures = {};
      let measuresSetFLAG;
      let stageShaftTouchTail = {};
      let stageWheelTail = {};
      let navShaftTouchTail = {};
      let navWheelTail = {};
      let scrollTop;
      let scrollLeft;
      let showedFLAG;
      let pausedAutoplayFLAG;
      let stoppedAutoplayFLAG;
      const toDeactivate = {};
      const toDetach = {};
      let measuresStash;
      let touchedFLAG;
      let hoverFLAG;
      let navFrameKey;
      let stageLeft = 0;
      const fadeStack = []

    $wrap[STAGE_FRAME_KEY] = $(div(stageFrameClass))
    $wrap[NAV_THUMB_FRAME_KEY] = $(
      div(
        navFrameClass + ' ' + navFrameThumbClass + buttonAttributes,
        div(thumbClass)
      )
    )
    $wrap[NAV_DOT_FRAME_KEY] = $(
      div(
        navFrameClass + ' ' + navFrameDotClass + buttonAttributes,
        div(dotClass)
      )
    )

    toDeactivate[STAGE_FRAME_KEY] = []
    toDeactivate[NAV_THUMB_FRAME_KEY] = []
    toDeactivate[NAV_DOT_FRAME_KEY] = []
    toDetach[STAGE_FRAME_KEY] = {}

    $wrap
      .addClass(CSS3 ? wrapCss3Class : wrapCss2Class)
      .toggleClass(wrapNoControlsClass, !opts.controlsonstart)

    fotoramaData.fotorama = this

    function checkForVideo() {
      $.each(data, function (i, dataFrame) {
        if (!dataFrame.i) {
          dataFrame.i = dataFrameCount++
          const video = findVideoId(dataFrame.video, true)
          if (video) {
            let thumbs = {}
            dataFrame.video = video
            if (!dataFrame.img && !dataFrame.thumb) {
              thumbs = getVideoThumbs(dataFrame, data, that)
            } else {
              dataFrame.thumbsReady = true
            }
            updateData(
              data,
              { img: thumbs.img, thumb: thumbs.thumb },
              dataFrame.i,
              that
            )
          }
        }
      })
    }

    function allowKey(key) {
      return o_keyboard[key] || that.fullScreen
    }

    function bindGlobalEvents(FLAG) {
      const keydownCommon = 'keydown.' + _fotoramaClass;
        const localStamp = _fotoramaClass + stamp;
        const keydownLocal = 'keydown.' + localStamp;
        const resizeLocal =
          'resize.' + localStamp + ' ' + 'orientationchange.' + localStamp

      if (FLAG) {
        $DOCUMENT.on(keydownLocal, function (e) {
          let catched, index

          if ($videoPlaying && e.keyCode === 27) {
            catched = true
            unloadVideo($videoPlaying, true, true)
          } else if (that.fullScreen || (opts.keyboard && !that.index)) {
            if (e.keyCode === 27) {
              catched = true
              that.cancelFullScreen()
            } else if (
              (e.shiftKey && e.keyCode === 32 && allowKey('space')) ||
              (e.keyCode === 37 && allowKey('left')) ||
              (e.keyCode === 38 && allowKey('up'))
            ) {
              index = '<'
            } else if (
              (e.keyCode === 32 && allowKey('space')) ||
              (e.keyCode === 39 && allowKey('right')) ||
              (e.keyCode === 40 && allowKey('down'))
            ) {
              index = '>'
            } else if (e.keyCode === 36 && allowKey('home')) {
              index = '<<'
            } else if (e.keyCode === 35 && allowKey('end')) {
              index = '>>'
            }
          }

          ;(catched || index) && stopEvent(e)
          index && that.show({ index, slow: e.altKey, user: true })
        })

        if (!that.index) {
          $DOCUMENT
            .off(keydownCommon)
            .on(keydownCommon, 'textarea, input, select', function (e) {
              !$BODY.hasClass(_fullscreenClass) && e.stopPropagation()
            })
        }

        $WINDOW.on(resizeLocal, that.resize)
      } else {
        $DOCUMENT.off(keydownLocal)
        $WINDOW.off(resizeLocal)
      }
    }

    function appendElements(FLAG) {
      if (FLAG === appendElements.f) return

      if (FLAG) {
        $fotorama
          .html('')
          .addClass(_fotoramaClass + ' ' + stampClass)
          .append($wrap)
          .before($style)
          .before($anchor)

        addInstance(that)
      } else {
        $wrap.detach()
        $style.detach()
        $anchor.detach()
        $fotorama.html(fotoramaData.urtext).removeClass(stampClass)

        hideInstance(that)
      }

      bindGlobalEvents(FLAG)
      appendElements.f = FLAG
    }

    function setData() {
      data = that.data = data || clone(opts.data) || getDataFromHtml($fotorama)
      size = that.size = data.length

      !ready.ok && opts.shuffle && shuffle(data)

      checkForVideo()

      activeIndex = limitIndex(activeIndex)

      size && appendElements(true)
    }

    function stageNoMove() {
      const _noMove = (size < 2 && !opts.enableifsingleframe) || $videoPlaying
      stageShaftTouchTail.noMove = _noMove || o_fade
      stageShaftTouchTail.noSwipe = _noMove || !opts.swipe

      !o_transition &&
        $stageShaft.toggleClass(
          grabClass,
          !opts.click &&
            !stageShaftTouchTail.noMove &&
            !stageShaftTouchTail.noSwipe
        )
      MS_POINTER &&
        $wrap.toggleClass(wrapPanYClass, !stageShaftTouchTail.noSwipe)
    }

    function setAutoplayInterval(interval) {
      if (interval === true) interval = ''
      opts.autoplay = Math.max(
        +interval || AUTOPLAY_INTERVAL,
        o_transitionDuration * 1.5
      )
    }

    /**
     * Options on the fly
     * */
    function setOptions() {
      that.options = opts = optionsToLowerCase(opts)

      o_fade = opts.transition === 'crossfade' || opts.transition === 'dissolve'

      o_loop =
        opts.loop &&
        (size > 2 || (o_fade && (!o_transition || o_transition !== 'slide')))

      o_transitionDuration = +opts.transitionduration || TRANSITION_DURATION

      o_rtl = opts.direction === 'rtl'

      o_keyboard = $.extend(
        {},
        opts.keyboard && KEYBOARD_OPTIONS,
        opts.keyboard
      )

      const classes = { add: [], remove: [] }

      function addOrRemoveClass(FLAG, value) {
        classes[FLAG ? 'add' : 'remove'].push(value)
      }

      if (size > 1 || opts.enableifsingleframe) {
        o_nav = opts.nav
        o_navTop = opts.navposition === 'top'
        classes.remove.push(selectClass)

        $arrs.toggle(!!opts.arrows)
      } else {
        o_nav = false
        $arrs.hide()
      }

      spinnerStop()
      spinner = new Spinner(
        $.extend(spinnerDefaults, opts.spinner, spinnerOverride, {
          direction: o_rtl ? -1 : 1,
        })
      )

      arrsUpdate()
      stageWheelUpdate()

      if (opts.autoplay) setAutoplayInterval(opts.autoplay)

      o_thumbSide = numberFromMeasure(opts.thumbwidth) || THUMB_SIZE
      o_thumbSide2 = numberFromMeasure(opts.thumbheight) || THUMB_SIZE

      stageWheelTail.ok = navWheelTail.ok = opts.trackpad && !SLOW

      stageNoMove()

      extendMeasures(opts, [measures])

      o_navThumbs = o_nav === 'thumbs'

      if (o_navThumbs) {
        frameDraw(size, 'navThumb')

        $navFrame = $navThumbFrame
        navFrameKey = NAV_THUMB_FRAME_KEY

        setStyle(
          $style,
          $.Fotorama.jst.style({
            w: o_thumbSide,
            h: o_thumbSide2,
            b: opts.thumbborderwidth,
            m: opts.thumbmargin,
            s: stamp,
            q: !COMPAT,
          })
        )

        $nav.addClass(navThumbsClass).removeClass(navDotsClass)
      } else if (o_nav === 'dots') {
        frameDraw(size, 'navDot')

        $navFrame = $navDotFrame
        navFrameKey = NAV_DOT_FRAME_KEY

        $nav.addClass(navDotsClass).removeClass(navThumbsClass)
      } else {
        o_nav = false
        $nav.removeClass(navThumbsClass + ' ' + navDotsClass)
      }

      if (o_nav) {
        if (o_navTop) {
          $navWrap.insertBefore($stage)
        } else {
          $navWrap.insertAfter($stage)
        }
        frameAppend.nav = false
        frameAppend($navFrame, $navShaft, 'nav')
      }

      o_allowFullScreen = opts.allowfullscreen

      if (o_allowFullScreen) {
        $fullscreenIcon.prependTo($stage)
        o_nativeFullScreen = FULLSCREEN && o_allowFullScreen === 'native'
      } else {
        $fullscreenIcon.detach()
        o_nativeFullScreen = false
      }

      addOrRemoveClass(o_fade, wrapFadeClass)
      addOrRemoveClass(!o_fade, wrapSlideClass)
      addOrRemoveClass(!opts.captions, wrapNoCaptionsClass)
      addOrRemoveClass(o_rtl, wrapRtlClass)
      addOrRemoveClass(opts.arrows !== 'always', wrapToggleArrowsClass)

      o_shadows = opts.shadows && !SLOW
      addOrRemoveClass(!o_shadows, wrapNoShadowsClass)

      $wrap
        .addClass(classes.add.join(' '))
        .removeClass(classes.remove.join(' '))

      lastOptions = $.extend({}, opts)
    }

    function normalizeIndex(index) {
      return index < 0
        ? (size + (index % size)) % size
        : index >= size
        ? index % size
        : index
    }

    function limitIndex(index) {
      return minMaxLimit(index, 0, size - 1)
    }

    function edgeIndex(index) {
      return o_loop ? normalizeIndex(index) : limitIndex(index)
    }

    function getPrevIndex(index) {
      return index > 0 || o_loop ? index - 1 : false
    }

    function getNextIndex(index) {
      return index < size - 1 || o_loop ? index + 1 : false
    }

    function setStageShaftMinmaxAndSnap() {
      stageShaftTouchTail.min = o_loop
        ? -Infinity
        : -getPosByIndex(size - 1, measures.w, opts.margin, repositionIndex)
      stageShaftTouchTail.max = o_loop
        ? Infinity
        : -getPosByIndex(0, measures.w, opts.margin, repositionIndex)
      stageShaftTouchTail.snap = measures.w + opts.margin
    }

    function setNavShaftMinMax() {
      /// /////console.log('setNavShaftMinMax', measures.nw);
      navShaftTouchTail.min = Math.min(0, measures.nw - $navShaft.width())
      navShaftTouchTail.max = 0
      $navShaft.toggleClass(
        grabClass,
        !(navShaftTouchTail.noMove =
          navShaftTouchTail.min === navShaftTouchTail.max)
      )
    }

    function eachIndex(indexes, type, fn) {
      if (typeof indexes === 'number') {
        indexes = new Array(indexes)
        var rangeFLAG = true
      }
      return $.each(indexes, function (i, index) {
        if (rangeFLAG) index = i
        if (typeof index === 'number') {
          const dataFrame = data[normalizeIndex(index)]

          if (dataFrame) {
            const key = '$' + type + 'Frame';
              const $frame = dataFrame[key]

            fn.call(
              this,
              i,
              index,
              dataFrame,
              $frame,
              key,
              $frame && $frame.data()
            )
          }
        }
      })
    }

    function setMeasures(width, height, ratio, index) {
      if (
        !measuresSetFLAG ||
        (measuresSetFLAG === '*' && index === startIndex)
      ) {
        /// ///console.log('setMeasures', index, opts.width, opts.height);

        width = measureIsValid(opts.width) || measureIsValid(width) || WIDTH
        height = measureIsValid(opts.height) || measureIsValid(height) || HEIGHT
        that.resize(
          {
            width,
            ratio: opts.ratio || ratio || width / height,
          },
          0,
          index !== startIndex && '*'
        )
      }
    }

    function loadImg(indexes, type, specialMeasures, method, position, again) {
      eachIndex(
        indexes,
        type,
        function (i, index, dataFrame, $frame, key, frameData) {
          if (!$frame) return

          const fullFLAG =
            that.fullScreen &&
            dataFrame.full &&
            dataFrame.full !== dataFrame.img &&
            !frameData.$full &&
            type === 'stage'

          if (frameData.$img && !again && !fullFLAG) return

          const img = new Image();
            const $img = $(img);
            const imgData = $img.data()

          frameData[fullFLAG ? '$full' : '$img'] = $img

          const srcKey = type === 'stage' ? (fullFLAG ? 'full' : 'img') : 'thumb';
            let src = dataFrame[srcKey];
            const dummy = fullFLAG
              ? null
              : dataFrame[type === 'stage' ? 'thumb' : 'img']

          if (type === 'navThumb') $frame = frameData.$wrap

          function triggerTriggerEvent(event) {
            const _index = normalizeIndex(index)
            triggerEvent(event, {
              index: _index,
              src,
              frame: data[_index],
            })
          }

          function error() {
            $img.remove()

            $.Fotorama.cache[src] = 'error'

            if (
              (!dataFrame.html || type !== 'stage') &&
              dummy &&
              dummy !== src
            ) {
              dataFrame[srcKey] = src = dummy
              loadImg([index], type, specialMeasures, method, position, true)
            } else {
              if (src && !dataFrame.html && !fullFLAG) {
                $frame
                  .trigger('f:error')
                  .removeClass(loadingClass)
                  .addClass(errorClass)

                triggerTriggerEvent('error')
              } else if (type === 'stage') {
                $frame
                  .trigger('f:load')
                  .removeClass(loadingClass + ' ' + errorClass)
                  .addClass(loadedClass)

                triggerTriggerEvent('load')
                setMeasures()
              }

              frameData.state = 'error'

              if (
                size > 1 &&
                data[index] === dataFrame &&
                !dataFrame.html &&
                !dataFrame.deleted &&
                !dataFrame.video &&
                !fullFLAG
              ) {
                dataFrame.deleted = true
                that.splice(index, 1)
              }
            }
          }

          function loaded() {
            /// ///console.log('loaded: ' + src);

            /// /console.log('$.Fotorama.measures[src]', $.Fotorama.measures[src]);

            $.Fotorama.measures[src] = imgData.measures = $.Fotorama.measures[
              src
            ] || {
              width: img.width,
              height: img.height,
              ratio: img.width / img.height,
            }

            setMeasures(
              imgData.measures.width,
              imgData.measures.height,
              imgData.measures.ratio,
              index
            )

            $img
              .off('load error')
              .addClass(imgClass + (fullFLAG ? ' ' + imgFullClass : ''))
              .prependTo($frame)

            fit(
              $img,
              ($.isFunction(specialMeasures)
                ? specialMeasures()
                : specialMeasures) || measures,
              method || dataFrame.fit || opts.fit,
              position || dataFrame.position || opts.position
            )

            $.Fotorama.cache[src] = frameData.state = 'loaded'

            setTimeout(function () {
              $frame
                .trigger('f:load')
                .removeClass(loadingClass + ' ' + errorClass)
                .addClass(
                  loadedClass +
                    ' ' +
                    (fullFLAG ? loadedFullClass : loadedImgClass)
                )

              if (type === 'stage') {
                triggerTriggerEvent('load')
              } else if (
                dataFrame.thumbratio === AUTO ||
                (!dataFrame.thumbratio && opts.thumbratio === AUTO)
              ) {
                // danger! reflow for all thumbnails
                dataFrame.thumbratio = imgData.measures.ratio
                reset()
              }
            }, 0)
          }

          if (!src) {
            error()
            return
          }

          function waitAndLoad() {
            let _i = 10
            waitFor(
              function () {
                return !touchedFLAG || (!_i-- && !SLOW)
              },
              function () {
                loaded()
              }
            )
          }

          if (!$.Fotorama.cache[src]) {
            $.Fotorama.cache[src] = '*'

            $img.on('load', waitAndLoad).on('error', error)
          } else {
            ;(function justWait() {
              if ($.Fotorama.cache[src] === 'error') {
                error()
              } else if ($.Fotorama.cache[src] === 'loaded') {
                /// /console.log('take from cache: ' + src);
                setTimeout(waitAndLoad, 0)
              } else {
                setTimeout(justWait, 100)
              }
            })()
          }

          frameData.state = ''
          img.src = src
        }
      )
    }

    function spinnerSpin($el) {
      $spinner.append(spinner.spin().el).appendTo($el)
    }

    function spinnerStop() {
      $spinner.detach()
      spinner && spinner.stop()
    }

    function updateFotoramaState() {
      const $frame = activeFrame[STAGE_FRAME_KEY]

      if ($frame && !$frame.data().state) {
        spinnerSpin($frame)
        $frame.on('f:load f:error', function () {
          $frame.off('f:load f:error')
          spinnerStop()
        })
      }
    }

    function addNavFrameEvents(frame) {
      addEnterUp(frame, onNavFrameClick)
      addFocus(frame, function () {
        setTimeout(function () {
          lockScroll($nav)
        }, 0)
        slideNavShaft({
          time: o_transitionDuration,
          guessIndex: $(this).data().eq,
          minMax: navShaftTouchTail,
        })
      })
    }

    function frameDraw(indexes, type) {
      eachIndex(
        indexes,
        type,
        function (i, index, dataFrame, $frame, key, frameData) {
          if ($frame) return

          $frame = dataFrame[key] = $wrap[key].clone()
          frameData = $frame.data()
          frameData.data = dataFrame
          const frame = $frame[0]

          if (type === 'stage') {
            if (dataFrame.html) {
              $('<div class="' + htmlClass + '"></div>')
                .append(
                  dataFrame._html
                    ? $(dataFrame.html).removeAttr('id').html(dataFrame._html) // Because of IE
                    : dataFrame.html
                )
                .appendTo($frame)
            }

            dataFrame.caption &&
              $(
                div(captionClass, div(captionWrapClass, dataFrame.caption))
              ).appendTo($frame)

            dataFrame.video &&
              $frame.addClass(stageFrameVideoClass).append($videoPlay.clone())

            // This solves tabbing problems
            addFocus(frame, function () {
              setTimeout(function () {
                lockScroll($stage)
              }, 0)
              clickToShow({ index: frameData.eq, user: true })
            })

            $stageFrame = $stageFrame.add($frame)
          } else if (type === 'navDot') {
            addNavFrameEvents(frame)
            $navDotFrame = $navDotFrame.add($frame)
          } else if (type === 'navThumb') {
            addNavFrameEvents(frame)
            frameData.$wrap = $frame.children(':first')
            $navThumbFrame = $navThumbFrame.add($frame)
            if (dataFrame.video) {
              frameData.$wrap.append($videoPlay.clone())
            }
          }
        }
      )
    }

    function callFit($img, measuresToFit, method, position) {
      return $img && $img.length && fit($img, measuresToFit, method, position)
    }

    function stageFramePosition(indexes) {
      eachIndex(
        indexes,
        'stage',
        function (i, index, dataFrame, $frame, key, frameData) {
          if (!$frame) return

          const normalizedIndex = normalizeIndex(index);
            const method = dataFrame.fit || opts.fit;
            const position = dataFrame.position || opts.position
          frameData.eq = normalizedIndex

          toDetach[STAGE_FRAME_KEY][normalizedIndex] = $frame.css(
            $.extend(
              {
                left: o_fade
                  ? 0
                  : getPosByIndex(
                      index,
                      measures.w,
                      opts.margin,
                      repositionIndex
                    ),
              },
              o_fade && getDuration(0)
            )
          )

          if (isDetached($frame[0])) {
            $frame.appendTo($stageShaft)
            unloadVideo(dataFrame.$video)
          }

          callFit(frameData.$img, measures, method, position)
          callFit(frameData.$full, measures, method, position)
        }
      )
    }

    function thumbsDraw(pos, loadFLAG) {
      if (o_nav !== 'thumbs' || isNaN(pos)) return

      const leftLimit = -pos;
        const rightLimit = -pos + measures.nw

      $navThumbFrame.each(function () {
        const $this = $(this);
          const thisData = $this.data();
          const eq = thisData.eq;
          const getSpecialMeasures = function () {
            return {
              h: o_thumbSide2,
              w: thisData.w,
            }
          };
          const specialMeasures = getSpecialMeasures();
          const dataFrame = data[eq] || {};
          const method = dataFrame.thumbfit || opts.thumbfit;
          const position = dataFrame.thumbposition || opts.thumbposition

        specialMeasures.w = thisData.w

        if (
          thisData.l + thisData.w < leftLimit ||
          thisData.l > rightLimit ||
          callFit(thisData.$img, specialMeasures, method, position)
        )
          return

        loadFLAG &&
          loadImg([eq], 'navThumb', getSpecialMeasures, method, position)
      })
    }

    function frameAppend($frames, $shaft, type) {
      if (!frameAppend[type]) {
        const thumbsFLAG = type === 'nav' && o_navThumbs;
          let left = 0

        $shaft.append(
          $frames
            .filter(function () {
              let actual;
                const $this = $(this);
                const frameData = $this.data()
              for (let _i = 0, _l = data.length; _i < _l; _i++) {
                if (frameData.data === data[_i]) {
                  actual = true
                  frameData.eq = _i
                  break
                }
              }
              return actual || ($this.remove() && false)
            })
            .sort(function (a, b) {
              return $(a).data().eq - $(b).data().eq
            })
            .each(function () {
              if (!thumbsFLAG) return

              const $this = $(this);
                const frameData = $this.data();
                const thumbwidth =
                  Math.round(o_thumbSide2 * frameData.data.thumbratio) ||
                  o_thumbSide

              frameData.l = left
              frameData.w = thumbwidth

              $this.css({ width: thumbwidth })

              left += thumbwidth + opts.thumbmargin
            })
        )

        frameAppend[type] = true
      }
    }

    function getDirection(x) {
      return x - stageLeft > measures.w / 3
    }

    function disableDirrection(i) {
      return (
        !o_loop &&
        (!(activeIndex + i) || !(activeIndex - size + i)) &&
        !$videoPlaying
      )
    }

    function arrsUpdate() {
      const disablePrev = disableDirrection(0);
        const disableNext = disableDirrection(1)
      $arrPrev
        .toggleClass(arrDisabledClass, disablePrev)
        .attr(disableAttr(disablePrev))
      $arrNext
        .toggleClass(arrDisabledClass, disableNext)
        .attr(disableAttr(disableNext))
    }

    function stageWheelUpdate() {
      if (stageWheelTail.ok) {
        stageWheelTail.prevent = {
          '<': disableDirrection(0),
          '>': disableDirrection(1),
        }
      }
    }

    function getNavFrameBounds($navFrame) {
      const navFrameData = $navFrame.data();
        let left;
        let width

      if (o_navThumbs) {
        left = navFrameData.l
        width = navFrameData.w
      } else {
        left = $navFrame.position().left
        width = $navFrame.width()
      }

      return {
        c: left + width / 2,
        min: -left + opts.thumbmargin * 10,
        max: -left + measures.w - width - opts.thumbmargin * 10,
      }
    }

    function slideThumbBorder(time) {
      const navFrameData = activeFrame[navFrameKey].data()
      slide($thumbBorder, {
        time: time * 1.2,
        pos: navFrameData.l,
        width: navFrameData.w - opts.thumbborderwidth * 2,
      })
    }

    function slideNavShaft(options) {
      /// /console.log('slideNavShaft', options.guessIndex, options.keep, slideNavShaft.l);
      const $guessNavFrame = data[options.guessIndex][navFrameKey]
      if ($guessNavFrame) {
        const overflowFLAG = navShaftTouchTail.min !== navShaftTouchTail.max;
          const minMax =
            options.minMax ||
            (overflowFLAG && getNavFrameBounds(activeFrame[navFrameKey]));
          const l =
            overflowFLAG &&
            (options.keep && slideNavShaft.l
              ? slideNavShaft.l
              : minMaxLimit(
                  (options.coo || measures.nw / 2) -
                    getNavFrameBounds($guessNavFrame).c,
                  minMax.min,
                  minMax.max
                ));
          const pos =
            overflowFLAG &&
            minMaxLimit(l, navShaftTouchTail.min, navShaftTouchTail.max);
          const time = options.time * 1.1

        slide($navShaft, {
          time,
          pos: pos || 0,
          onEnd () {
            thumbsDraw(pos, true)
          },
        })

        // if (time) thumbsDraw(pos);

        setShadow(
          $nav,
          findShadowEdge(pos, navShaftTouchTail.min, navShaftTouchTail.max)
        )
        slideNavShaft.l = l
      }
    }

    function navUpdate() {
      deactivateFrames(navFrameKey)
      toDeactivate[navFrameKey].push(
        activeFrame[navFrameKey].addClass(activeClass)
      )
    }

    function deactivateFrames(key) {
      const _toDeactivate = toDeactivate[key]

      while (_toDeactivate.length) {
        _toDeactivate.shift().removeClass(activeClass)
      }
    }

    function detachFrames(key) {
      const _toDetach = toDetach[key]

      /// ///console.log('_toDetach', _toDetach);
      /// ///console.log('activeIndexes', activeIndexes);

      $.each(activeIndexes, function (i, index) {
        delete _toDetach[normalizeIndex(index)]
      })

      $.each(_toDetach, function (index, $frame) {
        delete _toDetach[index]
        /// ///console.log('Detach', index);
        $frame.detach()
      })
    }

    function stageShaftReposition(skipOnEnd) {
      repositionIndex = dirtyIndex = activeIndex

      const $frame = activeFrame[STAGE_FRAME_KEY]

      if ($frame) {
        deactivateFrames(STAGE_FRAME_KEY)
        toDeactivate[STAGE_FRAME_KEY].push($frame.addClass(activeClass))

        skipOnEnd || that.show.onEnd(true)
        stop($stageShaft, 0, true)

        detachFrames(STAGE_FRAME_KEY)
        stageFramePosition(activeIndexes)
        setStageShaftMinmaxAndSnap()
        setNavShaftMinMax()
      }
    }

    function extendMeasures(options, measuresArray) {
      if (!options) return

      $.each(measuresArray, function (i, measures) {
        if (!measures) return

        $.extend(measures, {
          width: options.width || measures.width,
          height: options.height,
          minwidth: options.minwidth,
          maxwidth: options.maxwidth,
          minheight: options.minheight,
          maxheight: options.maxheight,
          ratio: getRatio(options.ratio),
        })
      })
    }

    function triggerEvent(event, extra) {
      $fotorama.trigger(_fotoramaClass + ':' + event, [that, extra])
    }

    function onTouchStart() {
      clearTimeout(onTouchEnd.t)
      touchedFLAG = 1

      if (opts.stopautoplayontouch) {
        that.stopAutoplay()
      } else {
        pausedAutoplayFLAG = true
      }
    }

    function onTouchEnd() {
      if (!touchedFLAG) return
      if (!opts.stopautoplayontouch) {
        releaseAutoplay()
        changeAutoplay()
      }

      onTouchEnd.t = setTimeout(function () {
        touchedFLAG = 0
      }, TRANSITION_DURATION + TOUCH_TIMEOUT)
      /// ///console.timeEnd('onTouchEnd');
    }

    function releaseAutoplay() {
      /// /console.log('releaseAutoplay');
      pausedAutoplayFLAG = !!($videoPlaying || stoppedAutoplayFLAG)
    }

    function changeAutoplay() {
      /// /console.log('changeAutoplay');

      clearTimeout(changeAutoplay.t)
      waitFor.stop(changeAutoplay.w)

      if (!opts.autoplay || pausedAutoplayFLAG) {
        if (that.autoplay) {
          that.autoplay = false
          triggerEvent('stopautoplay')
        }

        return
      }

      /// /console.log('changeAutoplay continue');

      if (!that.autoplay) {
        that.autoplay = true
        triggerEvent('startautoplay')
      }

      const _activeIndex = activeIndex

      const frameData = activeFrame[STAGE_FRAME_KEY].data()
      changeAutoplay.w = waitFor(
        function () {
          /// /console.log('wait for the state of the current frame');
          return frameData.state || _activeIndex !== activeIndex
        },
        function () {
          /// /console.log('the current frame is ready');
          changeAutoplay.t = setTimeout(function () {
            /// /console.log('changeAutoplay.t setTimeout', pausedAutoplayFLAG, _activeIndex !== activeIndex);
            if (pausedAutoplayFLAG || _activeIndex !== activeIndex) return

            const _nextAutoplayIndex = nextAutoplayIndex;
              const nextFrameData = data[_nextAutoplayIndex][STAGE_FRAME_KEY].data()

            changeAutoplay.w = waitFor(
              function () {
                /// /console.log('wait for the state of the next frame');
                return (
                  nextFrameData.state ||
                  _nextAutoplayIndex !== nextAutoplayIndex
                )
              },
              function () {
                if (
                  pausedAutoplayFLAG ||
                  _nextAutoplayIndex !== nextAutoplayIndex
                )
                  return
                that.show(o_loop ? getDirectionSign(!o_rtl) : nextAutoplayIndex)
              }
            )
          }, opts.autoplay)
        }
      )
    }

    that.startAutoplay = function (interval) {
      if (that.autoplay) return this
      pausedAutoplayFLAG = stoppedAutoplayFLAG = false
      setAutoplayInterval(interval || opts.autoplay)
      changeAutoplay()

      return this
    }

    that.stopAutoplay = function () {
      if (that.autoplay) {
        pausedAutoplayFLAG = stoppedAutoplayFLAG = true
        changeAutoplay()
      }
      return this
    }

    that.show = function (options) {
      /// /console.log('that.show');
      /// ///console.time('that.show prepare');
      let index

      if (typeof options !== 'object') {
        index = options
        options = {}
      } else {
        index = options.index
      }

      index =
        index === '>'
          ? dirtyIndex + 1
          : index === '<'
          ? dirtyIndex - 1
          : index === '<<'
          ? 0
          : index === '>>'
          ? size - 1
          : index
      index = isNaN(index) ? getIndexFromHash(index, data, true) : index
      index = typeof index === 'undefined' ? activeIndex || 0 : index

      that.activeIndex = activeIndex = edgeIndex(index)
      prevIndex = getPrevIndex(activeIndex)
      nextIndex = getNextIndex(activeIndex)
      nextAutoplayIndex = normalizeIndex(activeIndex + (o_rtl ? -1 : 1))
      activeIndexes = [activeIndex, prevIndex, nextIndex]

      dirtyIndex = o_loop ? index : activeIndex

      const diffIndex = Math.abs(lastActiveIndex - dirtyIndex);
        let time = getNumber(options.time, function () {
          return Math.min(
            o_transitionDuration * (1 + (diffIndex - 1) / 12),
            o_transitionDuration * 2
          )
        });
        const overPos = options.overPos

      if (options.slow) time *= 10

      const _activeFrame = activeFrame
      that.activeFrame = activeFrame = data[activeIndex]
      /// ///console.timeEnd('that.show prepare');

      const silent = _activeFrame === activeFrame && !options.user

      // setTimeout(function () {
      /// ///console.time('unloadVideo');
      unloadVideo(
        $videoPlaying,
        activeFrame.i !== data[normalizeIndex(repositionIndex)].i
      )
      /// ///console.timeEnd('unloadVideo');
      /// ///console.time('frameDraw');
      frameDraw(activeIndexes, 'stage')
      /// ///console.timeEnd('frameDraw');
      /// ///console.time('stageFramePosition');
      stageFramePosition(
        SLOW
          ? [dirtyIndex]
          : [dirtyIndex, getPrevIndex(dirtyIndex), getNextIndex(dirtyIndex)]
      )
      /// ///console.timeEnd('stageFramePosition');
      /// ///console.time('updateTouchTails');
      updateTouchTails('go', true)
      /// ///console.timeEnd('updateTouchTails');
      /// ///console.time('triggerEvent');

      silent ||
        triggerEvent('show', {
          user: options.user,
          time,
        })
      /// ///console.timeEnd('triggerEvent');
      // }, 0);

      /// ///console.time('bind onEnd');

      pausedAutoplayFLAG = true

      var onEnd = (that.show.onEnd = function (skipReposition) {
        if (onEnd.ok) return
        onEnd.ok = true

        skipReposition || stageShaftReposition(true)

        if (!silent) {
          triggerEvent('showend', {
            user: options.user,
          })
        }

        /// /console.log('o_transition', o_transition);

        if (
          !skipReposition &&
          o_transition &&
          o_transition !== opts.transition
        ) {
          /// /console.log('set transition back to: ' + o_transition);
          that.setOptions({ transition: o_transition })
          o_transition = false
          return
        }

        updateFotoramaState()
        loadImg(activeIndexes, 'stage')

        updateTouchTails('go', false)
        stageWheelUpdate()

        stageCursor()
        releaseAutoplay()
        changeAutoplay()
      })
      /// ///console.timeEnd('bind onEnd');

      if (!o_fade) {
        /// ///console.time('slide');
        slide($stageShaft, {
          pos: -getPosByIndex(
            dirtyIndex,
            measures.w,
            opts.margin,
            repositionIndex
          ),
          overPos,
          time,
          onEnd /*,
        _001: true */,
        })
        /// ///console.timeEnd('slide');
      } else {
        const $activeFrame = activeFrame[STAGE_FRAME_KEY];
          const $prevActiveFrame =
            activeIndex !== lastActiveIndex
              ? data[lastActiveIndex][STAGE_FRAME_KEY]
              : null

        fade(
          $activeFrame,
          $prevActiveFrame,
          $stageFrame,
          {
            time,
            method: opts.transition,
            onEnd,
          },
          fadeStack
        )
      }

      /// ///console.time('arrsUpdate');
      arrsUpdate()
      /// ///console.timeEnd('arrsUpdate');

      if (o_nav) {
        /// ///console.time('navUpdate');
        navUpdate()
        /// ///console.timeEnd('navUpdate');

        /// ///console.time('slideNavShaft');
        const guessIndex = limitIndex(
          activeIndex + minMaxLimit(dirtyIndex - lastActiveIndex, -1, 1)
        )
        slideNavShaft({
          time,
          coo: guessIndex !== activeIndex && options.coo,
          guessIndex:
            typeof options.coo !== 'undefined' ? guessIndex : activeIndex,
          keep: silent,
        })
        /// ///console.timeEnd('slideNavShaft');

        /// ///console.time('slideThumbBorder');
        if (o_navThumbs) slideThumbBorder(time)
        /// ///console.timeEnd('slideThumbBorder');
      }

      /// ///console.time('that.show end');
      showedFLAG =
        typeof lastActiveIndex !== 'undefined' &&
        lastActiveIndex !== activeIndex
      lastActiveIndex = activeIndex
      opts.hash &&
        showedFLAG &&
        !that.eq &&
        setHash(activeFrame.id || activeIndex + 1)
      /// ///console.timeEnd('that.show end');

      /// ///console.timeEnd('that.show');

      return this
    }

    that.requestFullScreen = function () {
      if (o_allowFullScreen && !that.fullScreen) {
        scrollTop = $WINDOW.scrollTop()
        scrollLeft = $WINDOW.scrollLeft()

        lockScroll($WINDOW)

        updateTouchTails('x', true)

        measuresStash = $.extend({}, measures)

        $fotorama
          .addClass(fullscreenClass)
          .appendTo($BODY.addClass(_fullscreenClass))

        $HTML.addClass(_fullscreenClass)

        unloadVideo($videoPlaying, true, true)

        that.fullScreen = true

        if (o_nativeFullScreen) {
          fullScreenApi.request(fotorama)
        }

        that.resize()
        loadImg(activeIndexes, 'stage')
        updateFotoramaState()

        triggerEvent('fullscreenenter')
      }

      return this
    }

    function cancelFullScreen() {
      if (that.fullScreen) {
        that.fullScreen = false

        if (FULLSCREEN) {
          fullScreenApi.cancel(fotorama)
        }

        $BODY.removeClass(_fullscreenClass)
        $HTML.removeClass(_fullscreenClass)

        $fotorama.removeClass(fullscreenClass).insertAfter($anchor)

        measures = $.extend({}, measuresStash)

        unloadVideo($videoPlaying, true, true)

        updateTouchTails('x', false)

        that.resize()
        loadImg(activeIndexes, 'stage')

        lockScroll($WINDOW, scrollLeft, scrollTop)

        triggerEvent('fullscreenexit')
      }
    }

    that.cancelFullScreen = function () {
      if (o_nativeFullScreen && fullScreenApi.is()) {
        fullScreenApi.cancel(document)
      } else {
        cancelFullScreen()
      }

      return this
    }

    that.toggleFullScreen = function () {
      return that[(that.fullScreen ? 'cancel' : 'request') + 'FullScreen']()
    }

    addEvent(document, fullScreenApi.event, function () {
      if (data && !fullScreenApi.is() && !$videoPlaying) {
        cancelFullScreen()
      }
    })

    that.resize = function (options) {
      if (!data) return this

      const time = arguments[1] || 0;
        const setFLAG = arguments[2]

      extendMeasures(
        !that.fullScreen
          ? optionsToLowerCase(options)
          : {
              width: '100%',
              maxwidth: null,
              minwidth: null,
              height: '100%',
              maxheight: null,
              minheight: null,
            },
        [measures, setFLAG || that.fullScreen || opts]
      )

      let width = measures.width;
        let height = measures.height;
        const ratio = measures.ratio;
        const windowHeight = $WINDOW.height() - (o_nav ? $nav.height() : 0)

      if (measureIsValid(width)) {
        $wrap
          .addClass(wrapOnlyActiveClass)
          .css({
            width,
            minWidth: measures.minwidth || 0,
            maxWidth: measures.maxwidth || MAX_WIDTH,
          })

        width = measures.W = measures.w = $wrap.width()
        measures.nw =
          (o_nav && numberFromWhatever(opts.navwidth, width)) || width

        if (opts.glimpse) {
          // Glimpse
          measures.w -= Math.round(
            (numberFromWhatever(opts.glimpse, width) || 0) * 2
          )
        }

        $stageShaft.css({
          width: measures.w,
          marginLeft: (measures.W - measures.w) / 2,
        })

        /// ///console.log('measures.W', measures.W);
        /// ///console.log('measures.w', measures.w);

        height = numberFromWhatever(height, windowHeight)

        height = height || (ratio && width / ratio)

        if (height) {
          width = Math.round(width)
          height = measures.h = Math.round(
            minMaxLimit(
              height,
              numberFromWhatever(measures.minheight, windowHeight),
              numberFromWhatever(measures.maxheight, windowHeight)
            )
          )

          $stage
            .stop()
            .animate({ width, height }, time, function () {
              $wrap.removeClass(wrapOnlyActiveClass)
            })

          stageShaftReposition()

          if (o_nav) {
            $nav.stop().animate({ width: measures.nw }, time)

            slideNavShaft({ guessIndex: activeIndex, time, keep: true })
            if (o_navThumbs && frameAppend.nav) slideThumbBorder(time)
          }

          measuresSetFLAG = setFLAG || true

          ready()
        }
      }

      stageLeft = $stage.offset().left

      return this
    }

    that.setOptions = function (options) {
      $.extend(opts, options)
      reset()
      return this
    }

    that.shuffle = function () {
      data && shuffle(data) && reset()
      return this
    }

    function setShadow($el, edge) {
      /// ///console.time('setShadow');
      if (o_shadows) {
        $el.removeClass(shadowsLeftClass + ' ' + shadowsRightClass)
        edge &&
          !$videoPlaying &&
          $el.addClass(edge.replace(/^|\s/g, ' ' + shadowsClass + '--'))
      }
      /// ///console.timeEnd('setShadow');
    }

    that.destroy = function () {
      that.cancelFullScreen()
      that.stopAutoplay()

      data = that.data = null

      appendElements()

      activeIndexes = []
      detachFrames(STAGE_FRAME_KEY)

      reset.ok = false

      return this
    }

    that.playVideo = function () {
      const dataFrame = activeFrame;
        const video = dataFrame.video;
        const _activeIndex = activeIndex

      if (typeof video === 'object' && dataFrame.videoReady) {
        o_nativeFullScreen && that.fullScreen && that.cancelFullScreen()

        waitFor(
          function () {
            return !fullScreenApi.is() || _activeIndex !== activeIndex
          },
          function () {
            if (_activeIndex === activeIndex) {
              dataFrame.$video =
                dataFrame.$video || $($.Fotorama.jst.video(video))
              dataFrame.$video.appendTo(dataFrame[STAGE_FRAME_KEY])

              $wrap.addClass(wrapVideoClass)
              $videoPlaying = dataFrame.$video

              stageNoMove()

              $arrs.blur()
              $fullscreenIcon.blur()

              triggerEvent('loadvideo')
            }
          }
        )
      }

      return this
    }

    that.stopVideo = function () {
      unloadVideo($videoPlaying, true, true)
      return this
    }

    function unloadVideo($video, unloadActiveFLAG, releaseAutoplayFLAG) {
      if (unloadActiveFLAG) {
        $wrap.removeClass(wrapVideoClass)
        $videoPlaying = false

        stageNoMove()
      }

      if ($video && $video !== $videoPlaying) {
        $video.remove()
        triggerEvent('unloadvideo')
      }

      if (releaseAutoplayFLAG) {
        releaseAutoplay()
        changeAutoplay()
      }
    }

    function toggleControlsClass(FLAG) {
      $wrap.toggleClass(wrapNoControlsClass, FLAG)
    }

    function stageCursor(e) {
      if (stageShaftTouchTail.flow) return

      const x = e ? e.pageX : stageCursor.x;
        const pointerFLAG = x && !disableDirrection(getDirection(x)) && opts.click

      if (
        stageCursor.p !== pointerFLAG &&
        $stage.toggleClass(pointerClass, pointerFLAG)
      ) {
        stageCursor.p = pointerFLAG
        stageCursor.x = x
      }
    }

    $stage.on('mousemove', stageCursor)

    function clickToShow(showOptions) {
      clearTimeout(clickToShow.t)

      if (opts.clicktransition && opts.clicktransition !== opts.transition) {
        /// /console.log('change transition to: ' + opts.clicktransition);

        // this timeout is for yield events flow
        setTimeout(function () {
          // save original transition for later
          const _o_transition = opts.transition

          that.setOptions({ transition: opts.clicktransition })

          // now safe to pass base transition to o_transition, so that.show will restor it
          o_transition = _o_transition
          // this timeout is here to prevent jerking in some browsers
          clickToShow.t = setTimeout(function () {
            that.show(showOptions)
          }, 10)
        }, 0)
      } else {
        that.show(showOptions)
      }
    }

    function onStageTap(e, toggleControlsFLAG) {
      /// ///console.time('onStageTap');
      const target = e.target;
        const $target = $(target)

      if ($target.hasClass(videoPlayClass)) {
        that.playVideo()
      } else if (target === fullscreenIcon) {
        that.toggleFullScreen()
      } else if ($videoPlaying) {
        target === videoClose && unloadVideo($videoPlaying, true, true)
      } else if (toggleControlsFLAG) {
          toggleControlsClass()
        } else if (opts.click) {
          clickToShow({
            index: e.shiftKey || getDirectionSign(getDirection(e._x)),
            slow: e.altKey,
            user: true,
          })
        }
      /// ///console.timeEnd('onStageTap');
    }

    function updateTouchTails(key, value) {
      stageShaftTouchTail[key] = navShaftTouchTail[key] = value
    }

    stageShaftTouchTail = moveOnTouch($stageShaft, {
      onStart: onTouchStart,
      onMove (e, result) {
        setShadow($stage, result.edge)
      },
      onTouchEnd,
      onEnd (result) {
        /// ///console.time('stageShaftTouchTail.onEnd');
        setShadow($stage)

        /// ///console.log('result', result);

        const toggleControlsFLAG =
          ((MS_POINTER && !hoverFLAG) || result.touch) &&
          opts.arrows &&
          opts.arrows !== 'always'

        if (
          result.moved ||
          (toggleControlsFLAG &&
            result.pos !== result.newPos &&
            !result.control)
        ) {
          const index = getIndexByPos(
            result.newPos,
            measures.w,
            opts.margin,
            repositionIndex
          )
          that.show({
            index,
            time: o_fade ? o_transitionDuration : result.time,
            overPos: result.overPos,
            user: true,
          })
        } else if (!result.aborted && !result.control) {
          onStageTap(result.startEvent, toggleControlsFLAG)
        }
        /// ///console.timeEnd('stageShaftTouchTail.onEnd');
      },
      //    getPos: function () {
      //      return -getPosByIndex(dirtyIndex, measures.w, opts.margin, repositionIndex);
      //    },
      // _001: true,
      timeLow: 1,
      timeHigh: 1,
      friction: 2,
      select: '.' + selectClass + ', .' + selectClass + ' *',
      $wrap: $stage,
    })

    navShaftTouchTail = moveOnTouch($navShaft, {
      onStart: onTouchStart,
      onMove (e, result) {
        setShadow($nav, result.edge)
      },
      onTouchEnd,
      onEnd (result) {
        function onEnd() {
          slideNavShaft.l = result.newPos
          releaseAutoplay()
          changeAutoplay()
          thumbsDraw(result.newPos, true)
        }

        if (!result.moved) {
          const target = result.$target.closest('.' + navFrameClass, $navShaft)[0]
          target && onNavFrameClick.call(target, result.startEvent)
        } else if (result.pos !== result.newPos) {
          pausedAutoplayFLAG = true
          slide($navShaft, {
            time: result.time,
            pos: result.newPos,
            overPos: result.overPos,
            onEnd,
          })
          thumbsDraw(result.newPos)
          o_shadows &&
            setShadow(
              $nav,
              findShadowEdge(
                result.newPos,
                navShaftTouchTail.min,
                navShaftTouchTail.max
              )
            )
        } else {
          onEnd()
        }
      },
      timeLow: 0.5,
      timeHigh: 2,
      friction: 5,
      $wrap: $nav,
    })

    stageWheelTail = wheel($stage, {
      shift: true,
      onEnd (e, direction) {
        /// ///console.log('wheel $stage onEnd', direction);
        onTouchStart()
        onTouchEnd()
        that.show({ index: direction, slow: e.altKey })
      },
    })

    navWheelTail = wheel($nav, {
      onEnd (e, direction) {
        /// ///console.log('wheel $nav onEnd', direction);
        onTouchStart()
        onTouchEnd()
        const newPos = stop($navShaft) + direction * 0.25
        $navShaft.css(
          getTranslate(
            minMaxLimit(newPos, navShaftTouchTail.min, navShaftTouchTail.max)
          )
        )
        o_shadows &&
          setShadow(
            $nav,
            findShadowEdge(newPos, navShaftTouchTail.min, navShaftTouchTail.max)
          )
        navWheelTail.prevent = {
          '<': newPos >= navShaftTouchTail.max,
          '>': newPos <= navShaftTouchTail.min,
        }
        clearTimeout(navWheelTail.t)
        navWheelTail.t = setTimeout(function () {
          slideNavShaft.l = newPos
          thumbsDraw(newPos, true)
        }, TOUCH_TIMEOUT)
        thumbsDraw(newPos)
      },
    })

    $wrap.hover(
      function () {
        setTimeout(function () {
          if (touchedFLAG) return
          toggleControlsClass(!(hoverFLAG = true))
        }, 0)
      },
      function () {
        if (!hoverFLAG) return
        toggleControlsClass(!(hoverFLAG = false))
      }
    )

    function onNavFrameClick(e) {
      const index = $(this).data().eq
      clickToShow({
        index,
        slow: e.altKey,
        user: true,
        coo: e._x - $nav.offset().left,
      })
    }

    function onArrClick(e) {
      clickToShow({
        index: $arrs.index(this) ? '>' : '<',
        slow: e.altKey,
        user: true,
      })
    }

    smartClick(
      $arrs,
      function (e) {
        stopEvent(e)
        onArrClick.call(this, e)
      },
      {
        onStart () {
          onTouchStart()
          stageShaftTouchTail.control = true
        },
        onTouchEnd,
      }
    )

    function addFocusOnControls(el) {
      addFocus(el, function () {
        setTimeout(function () {
          lockScroll($stage)
        }, 0)
        toggleControlsClass(false)
      })
    }

    $arrs.each(function () {
      addEnterUp(this, function (e) {
        onArrClick.call(this, e)
      })
      addFocusOnControls(this)
    })

    addEnterUp(fullscreenIcon, that.toggleFullScreen)
    addFocusOnControls(fullscreenIcon)

    function reset() {
      setData()
      setOptions()

      if (!reset.i) {
        reset.i = true
        // Only once
        const _startindex = opts.startindex
        if (_startindex || (opts.hash && location.hash)) {
          startIndex = getIndexFromHash(
            _startindex || location.hash.replace(/^#/, ''),
            data,
            that.index === 0 || _startindex,
            _startindex
          )
        }
        activeIndex =
          repositionIndex =
          dirtyIndex =
          lastActiveIndex =
          startIndex =
            edgeIndex(startIndex) || 0 /* (o_rtl ? size - 1 : 0) */ // ;
      }

      if (size) {
        if (changeToRtl()) return

        if ($videoPlaying) {
          unloadVideo($videoPlaying, true)
        }

        activeIndexes = []
        detachFrames(STAGE_FRAME_KEY)

        reset.ok = true

        that.show({ index: activeIndex, time: 0 })
        that.resize()
      } else {
        that.destroy()
      }
    }

    function changeToRtl() {
      /// ///console.log('changeToRtl');
      if (!changeToRtl.f === o_rtl) {
        changeToRtl.f = o_rtl
        activeIndex = size - 1 - activeIndex
        /// ///console.log('changeToRtl execute, activeIndex is', activeIndex);
        that.reverse()

        return true
      }
    }

    $.each(
      'load push pop shift unshift reverse sort splice'.split(' '),
      function (i, method) {
        that[method] = function () {
          data = data || []
          if (method !== 'load') {
            Array.prototype[method].apply(data, arguments)
          } else if (
            arguments[0] &&
            typeof arguments[0] === 'object' &&
            arguments[0].length
          ) {
            data = clone(arguments[0])
          }
          reset()
          return that
        }
      }
    )

    function ready() {
      if (!ready.ok) {
        ready.ok = true
        triggerEvent('ready')
      }
    }

    reset()
  }

  $.fn.fotorama = function (opts) {
    return this.each(function () {
      const that = this;
        const $fotorama = $(this);
        const fotoramaData = $fotorama.data();
        const fotorama = fotoramaData.fotorama

      if (!fotorama) {
        waitFor(
          function () {
            return !isHidden(that)
          },
          function () {
            fotoramaData.urtext = $fotorama.html()
            new $.Fotorama(
              $fotorama,
              /* Priority for options:
               * 1. <div data-loop="true"></div>
               * 2. $('div').fotorama({loop: false})
               * 3. Defaults */
              $.extend({}, OPTIONS, window.fotoramaDefaults, opts, fotoramaData)
            )
          }
        )
      } else {
        fotorama.setOptions(opts, true)
      }
    })
  }
  $.Fotorama.instances = []

  function calculateIndexes() {
    $.each($.Fotorama.instances, function (index, instance) {
      instance.index = index
    })
  }

  function addInstance(instance) {
    $.Fotorama.instances.push(instance)
    calculateIndexes()
  }

  function hideInstance(instance) {
    $.Fotorama.instances.splice(instance.index, 1)
    calculateIndexes()
  }
  $.Fotorama.cache = {}
  $.Fotorama.measures = {}
  $ = $ || {}
  $.Fotorama = $.Fotorama || {}
  $.Fotorama.jst = $.Fotorama.jst || {}

  $.Fotorama.jst.style = function (v) {
    let __t;
      let __p = '';
      const __e = _.escape
    __p +=
      '.fotorama' +
      ((__t = v.s) == null ? '' : __t) +
      ' .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:' +
      ((__t = v.m) == null ? '' : __t) +
      'px;\nheight:' +
      ((__t = v.h) == null ? '' : __t) +
      'px}\n.fotorama' +
      ((__t = v.s) == null ? '' : __t) +
      ' .fotorama__thumb-border{\nheight:' +
      ((__t = v.h - v.b * (v.q ? 0 : 2)) == null ? '' : __t) +
      'px;\nborder-width:' +
      ((__t = v.b) == null ? '' : __t) +
      'px;\nmargin-top:' +
      ((__t = v.m) == null ? '' : __t) +
      'px}'
    return __p
  }

  $.Fotorama.jst.video = function (v) {
    let __t;
      let __p = '';
      const __e = _.escape;
      const __j = Array.prototype.join
    function print() {
      __p += __j.call(arguments, '')
    }
    __p += '<div class="fotorama__video"><iframe src="'
    print(
      (v.type == 'youtube'
        ? v.p + 'youtube.com/embed/' + v.id + '?autoplay=1'
        : v.type == 'vimeo'
        ? v.p + 'player.vimeo.com/video/' + v.id + '?autoplay=1&badge=0'
        : v.id) + (v.s && v.type != 'custom' ? '&' + v.s : '')
    )
    __p += '" frameborder="0" allowfullscreen></iframe></div>\n'
    return __p
  }
  $(function () {
    $('.' + _fotoramaClass + ':not([data-auto="false"])').fotorama()
  })
})(window, document, location, typeof jQuery !== 'undefined' && jQuery)
