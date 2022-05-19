/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

;(function ($) {
  // Cached vars
  const _iCheck = 'iCheck';
    const _iCheckHelper = _iCheck + '-helper';
    const _checkbox = 'checkbox';
    const _radio = 'radio';
    const _checked = 'checked';
    const _unchecked = 'un' + _checked;
    const _disabled = 'disabled';
    const _determinate = 'determinate';
    const _indeterminate = 'in' + _determinate;
    const _update = 'update';
    const _type = 'type';
    const _click = 'click';
    const _touch = 'touchbegin.i touchend.i';
    const _add = 'addClass';
    const _remove = 'removeClass';
    const _callback = 'trigger';
    const _label = 'label';
    const _cursor = 'cursor';
    const _mobile =
      /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(
        navigator.userAgent
      )

  // Plugin init
  $.fn[_iCheck] = function (options, fire) {
    // Walker
    let handle =
        'input[type="' + _checkbox + '"], input[type="' + _radio + '"]';
      let stack = $();
      const walker = function (object) {
        object.each(function () {
          const self = $(this)

          if (self.is(handle)) {
            stack = stack.add(self)
          } else {
            stack = stack.add(self.find(handle))
          }
        })
      }

    // Check if we should operate with some method
    if (
      /^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(
        options
      )
    ) {
      // Normalize method's name
      options = options.toLowerCase()

      // Find checkboxes and radio buttons
      walker(this)

      return stack.each(function () {
        const self = $(this)

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed')
        } else {
          operate(self, true, options)
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire()
        }
      })

      // Customization
    } else if (typeof options === 'object' || !options) {
      // Check if any options were passed
      const settings = $.extend(
          {
            checkedClass: _checked,
            disabledClass: _disabled,
            indeterminateClass: _indeterminate,
            labelHover: true,
          },
          options
        );
        const selector = settings.handle;
        const hoverClass = settings.hoverClass || 'hover';
        const focusClass = settings.focusClass || 'focus';
        const activeClass = settings.activeClass || 'active';
        const labelHover = !!settings.labelHover;
        const labelHoverClass = settings.labelHoverClass || 'hover';
        // Setup clickable area
        let area = ('' + settings.increaseArea).replace('%', '') | 0

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]'
      }

      // Clickable area limit
      if (area < -50) {
        area = -50
      }

      // Walk around the selector
      walker(this)

      return stack.each(function () {
        const self = $(this)

        // If already customized
        tidy(self)

        const node = this;
          const id = node.id;
          // Layer styles
          const offset = -area + '%';
          const size = 100 + area * 2 + '%';
          const layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0,
          };
          // Choose how to hide input
          const hide = _mobile
            ? {
                position: 'absolute',
                visibility: 'hidden',
              }
            : area
            ? layer
            : {
                position: 'absolute',
                opacity: 0,
              };
          // Get proper class
          const className =
            node[_type] == _checkbox
              ? settings.checkboxClass || 'i' + _checkbox
              : settings.radioClass || 'i' + _radio;
          // Find assigned labels
          const label = $(_label + '[for="' + id + '"]').add(self.closest(_label));
          // Check ARIA option
          const aria = !!settings.aria;
          // Set ARIA placeholder
          const ariaID = _iCheck + '-' + Math.random().toString(36).substr(2, 6);
          // Parent & helper
          let parent =
            '<div class="' +
            className +
            '" ' +
            (aria ? 'role="' + node[_type] + '" ' : '');
          let helper

        // Set ARIA "labelledby"
        if (aria) {
          label.each(function () {
            parent += 'aria-labelledby="'

            if (this.id) {
              parent += this.id
            } else {
              this.id = ariaID
              parent += ariaID
            }

            parent += '"'
          })
        }

        // Wrap input
        parent = self
          .wrap(parent + '/>')
          [_callback]('ifCreated')
          .parent()
          .append(settings.insert)

        // Layer addition
        helper = $('<ins class="' + _iCheckHelper + '"/>')
          .css(layer)
          .appendTo(parent)

        // Finalize customization
        self.data(_iCheck, { o: settings, s: self.attr('style') }).css(hide)
        !!settings.inheritClass && parent[_add](node.className || '')
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id)
        parent.css('position') == 'static' && parent.css('position', 'relative')
        operate(self, true, _update)

        // Label events
        if (label.length) {
          label.on(
            _click + '.i mouseover.i mouseout.i ' + _touch,
            function (event) {
              const type = event[_type];
                const item = $(this)

              // Do nothing if input is disabled
              if (!node[_disabled]) {
                // Click
                if (type == _click) {
                  if ($(event.target).is('a')) {
                    return
                  }
                  operate(self, false, true)

                  // Hover state
                } else if (labelHover) {
                  // mouseout|touchend
                  if (/ut|nd/.test(type)) {
                    parent[_remove](hoverClass)
                    item[_remove](labelHoverClass)
                  } else {
                    parent[_add](hoverClass)
                    item[_add](labelHoverClass)
                  }
                }

                if (_mobile) {
                  event.stopPropagation()
                } else {
                  return false
                }
              }
            }
          )
        }

        // Input events
        self.on(
          _click + '.i focus.i blur.i keyup.i keydown.i keypress.i',
          function (event) {
            const type = event[_type];
              const key = event.keyCode

            // Click
            if (type == _click) {
              return false

              // Keydown
            } else if (type == 'keydown' && key == 32) {
              if (!(node[_type] == _radio && node[_checked])) {
                if (node[_checked]) {
                  off(self, _checked)
                } else {
                  on(self, _checked)
                }
              }

              return false

              // Keyup
            } else if (type == 'keyup' && node[_type] == _radio) {
              !node[_checked] && on(self, _checked)

              // Focus/blur
            } else if (/us|ur/.test(type)) {
              parent[type == 'blur' ? _remove : _add](focusClass)
            }
          }
        )

        // Helper events
        helper.on(
          _click + ' mousedown mouseup mouseover mouseout ' + _touch,
          function (event) {
            const type = event[_type];
              // mousedown|mouseup
              const toggle = /wn|up/.test(type) ? activeClass : hoverClass

            // Do nothing if input is disabled
            if (!node[_disabled]) {
              // Click
              if (type == _click) {
                operate(self, false, true)

                // Active and hover states
              } else {
                // State is on
                if (/wn|er|in/.test(type)) {
                  // mousedown|mouseover|touchbegin
                  parent[_add](toggle)

                  // State is off
                } else {
                  parent[_remove](toggle + ' ' + activeClass)
                }

                // Label hover
                if (label.length && labelHover && toggle == hoverClass) {
                  // mouseout|touchend
                  label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass)
                }
              }

              if (_mobile) {
                event.stopPropagation()
              } else {
                return false
              }
            }
          }
        )
      })
    } else {
      return this
    }
  }

  // Do something with inputs
  function operate(input, direct, method) {
    const node = input[0];
      const state = /er/.test(method)
        ? _indeterminate
        : /bl/.test(method)
        ? _disabled
        : _checked;
      const active =
        method == _update
          ? {
              checked: node[_checked],
              disabled: node[_disabled],
              indeterminate:
                input.attr(_indeterminate) == 'true' ||
                input.attr(_determinate) == 'false',
            }
          : node[state]

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state)

      // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state)

      // Update
    } else if (method == _update) {
      // Handle states
      for (const each in active) {
        if (active[each]) {
          on(input, each, true)
        } else {
          off(input, each, true)
        }
      }
    } else if (!direct || method == 'toggle') {
      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked')
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state)
        }
      } else {
        on(input, state)
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    const node = input[0];
      const parent = input.parent();
      const checked = state == _checked;
      const indeterminate = state == _indeterminate;
      const disabled = state == _disabled;
      const callback = indeterminate
        ? _determinate
        : checked
        ? _unchecked
        : 'enabled';
      const regular = option(input, callback + capitalize(node[_type]));
      const specific = option(input, state + capitalize(node[_type]))

    // Prevent unnecessary actions
    if (node[state] !== true) {
      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        const form = input.closest('form');
          let inputs = 'input[name="' + node.name + '"]'

        inputs = form.length ? form.find(inputs) : $(inputs)

        inputs.each(function () {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state)
          }
        })
      }

      // Indeterminate state
      if (indeterminate) {
        // Add indeterminate state
        node[state] = true

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force')
        }

        // Checked or disabled state
      } else {
        // Add checked or disabled state
        if (!keep) {
          node[state] = true
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false)
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep)
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default')
    }

    // Add state class
    parent[_add](specific || option(input, state) || '')

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true')
    }

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '')
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    const node = input[0];
      const parent = input.parent();
      const checked = state == _checked;
      const indeterminate = state == _indeterminate;
      const disabled = state == _disabled;
      const callback = indeterminate
        ? _determinate
        : checked
        ? _unchecked
        : 'enabled';
      const regular = option(input, callback + capitalize(node[_type]));
      const specific = option(input, state + capitalize(node[_type]))

    // Prevent unnecessary actions
    if (node[state] !== false) {
      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep)
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer')
    }

    // Remove state class
    parent[_remove](specific || option(input, state) || '')

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false')
    }

    // Add regular state class
    parent[_add](regular || option(input, callback) || '')
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {
      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''))

      // Callback
      if (callback) {
        input[_callback](callback)
      }

      // Unbind events
      input.off('.i').unwrap()
      $(_label + '[for="' + input[0].id + '"]')
        .add(input.closest(_label))
        .off('.i')
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')]
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled')
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback))
    }
  }
})(window.jQuery || window.Zepto)
