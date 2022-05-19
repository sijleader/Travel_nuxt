//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function (a, b) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = b())
    : typeof define === 'function' && define.amd
    ? define(b)
    : (a.moment = b())
})(this, function () {
  'use strict'
  function a() {
    return sd.apply(null, arguments)
  }
  function b(a) {
    sd = a
  }
  function c(a) {
    return (
      a instanceof Array ||
      Object.prototype.toString.call(a) === '[object Array]'
    )
  }
  function d(a) {
    return a != null && Object.prototype.toString.call(a) === '[object Object]'
  }
  function e(a) {
    let b
    for (b in a) return !1
    return !0
  }
  function f(a) {
    return void 0 === a
  }
  function g(a) {
    return (
      typeof a === 'number' ||
      Object.prototype.toString.call(a) === '[object Number]'
    )
  }
  function h(a) {
    return (
      a instanceof Date || Object.prototype.toString.call(a) === '[object Date]'
    )
  }
  function i(a, b) {
    let c;
      const d = []
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c))
    return d
  }
  function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  function k(a, b) {
    for (const c in b) j(b, c) && (a[c] = b[c])
    return (
      j(b, 'toString') && (a.toString = b.toString),
      j(b, 'valueOf') && (a.valueOf = b.valueOf),
      a
    )
  }
  function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc()
  }
  function m() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    }
  }
  function n(a) {
    return a._pf == null && (a._pf = m()), a._pf
  }
  function o(a) {
    if (a._isValid == null) {
      const b = n(a);
        const c = ud.call(b.parsedDateParts, function (a) {
          return a != null
        });
        let d =
          !isNaN(a._d.getTime()) &&
          b.overflow < 0 &&
          !b.empty &&
          !b.invalidMonth &&
          !b.invalidWeekday &&
          !b.nullInput &&
          !b.invalidFormat &&
          !b.userInvalidated &&
          (!b.meridiem || (b.meridiem && c))
      if (
        (a._strict &&
          (d =
            d &&
            b.charsLeftOver === 0 &&
            b.unusedTokens.length === 0 &&
            void 0 === b.bigHour),
        Object.isFrozen != null && Object.isFrozen(a))
      )
        return d
      a._isValid = d
    }
    return a._isValid
  }
  function p(a) {
    const b = l(NaN)
    return a != null ? k(n(b), a) : (n(b).userInvalidated = !0), b
  }
  function q(a, b) {
    let c, d, e
    if (
      (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
      f(b._i) || (a._i = b._i),
      f(b._f) || (a._f = b._f),
      f(b._l) || (a._l = b._l),
      f(b._strict) || (a._strict = b._strict),
      f(b._tzm) || (a._tzm = b._tzm),
      f(b._isUTC) || (a._isUTC = b._isUTC),
      f(b._offset) || (a._offset = b._offset),
      f(b._pf) || (a._pf = n(b)),
      f(b._locale) || (a._locale = b._locale),
      vd.length > 0)
    )
      for (c = 0; c < vd.length; c++)
        (d = vd[c]), (e = b[d]), f(e) || (a[d] = e)
    return a
  }
  function r(b) {
    q(this, b),
      (this._d = new Date(b._d != null ? b._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      wd === !1 && ((wd = !0), a.updateOffset(this), (wd = !1))
  }
  function s(a) {
    return a instanceof r || (a != null && a._isAMomentObject != null)
  }
  function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
  }
  function u(a) {
    const b = +a;
      let c = 0
    return b !== 0 && isFinite(b) && (c = t(b)), c
  }
  function v(a, b, c) {
    let d;
      const e = Math.min(a.length, b.length);
      const f = Math.abs(a.length - b.length);
      let g = 0
    for (d = 0; d < e; d++)
      ((c && a[d] !== b[d]) || (!c && u(a[d]) !== u(b[d]))) && g++
    return g + f
  }
  function w(b) {
    a.suppressDeprecationWarnings === !1 &&
      typeof console !== 'undefined' &&
      console.warn &&
      console.warn('Deprecation warning: ' + b)
  }
  function x(b, c) {
    let d = !0
    return k(function () {
      if ((a.deprecationHandler != null && a.deprecationHandler(null, b), d)) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (((e = ''), typeof arguments[g] === 'object')) {
            e += '\n[' + g + '] '
            for (const h in arguments[0]) e += h + ': ' + arguments[0][h] + ', '
            e = e.slice(0, -2)
          } else e = arguments[g]
          f.push(e)
        }
        w(
          b +
            '\nArguments: ' +
            Array.prototype.slice.call(f).join('') +
            '\n' +
            new Error().stack
        ),
          (d = !1)
      }
      return c.apply(this, arguments)
    }, c)
  }
  function y(b, c) {
    a.deprecationHandler != null && a.deprecationHandler(b, c),
      xd[b] || (w(c), (xd[b] = !0))
  }
  function z(a) {
    return (
      a instanceof Function ||
      Object.prototype.toString.call(a) === '[object Function]'
    )
  }
  function A(a) {
    let b, c
    for (c in a) (b = a[c]), z(b) ? (this[c] = b) : (this['_' + c] = b)
    ;(this._config = a),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          '|' +
          /\d{1,2}/.source
      ))
  }
  function B(a, b) {
    let c;
      const e = k({}, a)
    for (c in b)
      j(b, c) &&
        (d(a[c]) && d(b[c])
          ? ((e[c] = {}), k(e[c], a[c]), k(e[c], b[c]))
          : b[c] != null
          ? (e[c] = b[c])
          : delete e[c])
    for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]))
    return e
  }
  function C(a) {
    a != null && this.set(a)
  }
  function D(a, b, c) {
    const d = this._calendar[a] || this._calendar.sameElse
    return z(d) ? d.call(b, c) : d
  }
  function E(a) {
    const b = this._longDateFormat[a];
      const c = this._longDateFormat[a.toUpperCase()]
    return b || !c
      ? b
      : ((this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
          return a.slice(1)
        })),
        this._longDateFormat[a])
  }
  function F() {
    return this._invalidDate
  }
  function G(a) {
    return this._ordinal.replace('%d', a)
  }
  function H(a, b, c, d) {
    const e = this._relativeTime[c]
    return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
  }
  function I(a, b) {
    const c = this._relativeTime[a > 0 ? 'future' : 'past']
    return z(c) ? c(b) : c.replace(/%s/i, b)
  }
  function J(a, b) {
    const c = a.toLowerCase()
    Hd[c] = Hd[c + 's'] = Hd[b] = a
  }
  function K(a) {
    return typeof a === 'string' ? Hd[a] || Hd[a.toLowerCase()] : void 0
  }
  function L(a) {
    let b;
      let c;
      const d = {}
    for (c in a) j(a, c) && ((b = K(c)), b && (d[b] = a[c]))
    return d
  }
  function M(a, b) {
    Id[a] = b
  }
  function N(a) {
    const b = []
    for (const c in a) b.push({ unit: c, priority: Id[c] })
    return (
      b.sort(function (a, b) {
        return a.priority - b.priority
      }),
      b
    )
  }
  function O(b, c) {
    return function (d) {
      return d != null
        ? (Q(this, b, d), a.updateOffset(this, c), this)
        : P(this, b)
    }
  }
  function P(a, b) {
    return a.isValid() ? a._d['get' + (a._isUTC ? 'UTC' : '') + b]() : NaN
  }
  function Q(a, b, c) {
    a.isValid() && a._d['set' + (a._isUTC ? 'UTC' : '') + b](c)
  }
  function R(a) {
    return (a = K(a)), z(this[a]) ? this[a]() : this
  }
  function S(a, b) {
    if (typeof a === 'object') {
      a = L(a)
      for (let c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
    } else if (((a = K(a)), z(this[a]))) return this[a](b)
    return this
  }
  function T(a, b, c) {
    const d = '' + Math.abs(a);
      const e = b - d.length;
      const f = a >= 0
    return (
      (f ? (c ? '+' : '') : '-') +
      Math.pow(10, Math.max(0, e)).toString().substr(1) +
      d
    )
  }
  function U(a, b, c, d) {
    let e = d
    typeof d === 'string' &&
      (e = function () {
        return this[d]()
      }),
      a && (Md[a] = e),
      b &&
        (Md[b[0]] = function () {
          return T(e.apply(this, arguments), b[1], b[2])
        }),
      c &&
        (Md[c] = function () {
          return this.localeData().ordinal(e.apply(this, arguments), a)
        })
  }
  function V(a) {
    return a.match(/\[[\s\S]/)
      ? a.replace(/^\[|\]$/g, '')
      : a.replace(/\\/g, '')
  }
  function W(a) {
    let b;
      let c;
      const d = a.match(Jd)
    for (b = 0, c = d.length; b < c; b++)
      Md[d[b]] ? (d[b] = Md[d[b]]) : (d[b] = V(d[b]))
    return function (b) {
      let e;
        let f = ''
      for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e]
      return f
    }
  }
  function X(a, b) {
    return a.isValid()
      ? ((b = Y(b, a.localeData())), (Ld[b] = Ld[b] || W(b)), Ld[b](a))
      : a.localeData().invalidDate()
  }
  function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a
    }
    let d = 5
    for (Kd.lastIndex = 0; d >= 0 && Kd.test(a); )
      (a = a.replace(Kd, c)), (Kd.lastIndex = 0), (d -= 1)
    return a
  }
  function Z(a, b, c) {
    ce[a] = z(b)
      ? b
      : function (a, d) {
          return a && c ? c : b
        }
  }
  function $(a, b) {
    return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a))
  }
  function _(a) {
    return aa(
      a
        .replace('\\', '')
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (a, b, c, d, e) {
            return b || c || d || e
          }
        )
    )
  }
  function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  function ba(a, b) {
    let c;
      let d = b
    for (
      typeof a === 'string' && (a = [a]),
        g(b) &&
          (d = function (a, c) {
            c[b] = u(a)
          }),
        c = 0;
      c < a.length;
      c++
    )
      de[a[c]] = d
  }
  function ca(a, b) {
    ba(a, function (a, c, d, e) {
      ;(d._w = d._w || {}), b(a, d._w, d, e)
    })
  }
  function da(a, b, c) {
    b != null && j(de, a) && de[a](b, c._a, c, a)
  }
  function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
  }
  function fa(a, b) {
    return a
      ? c(this._months)
        ? this._months[a.month()]
        : this._months[
            (this._months.isFormat || oe).test(b) ? 'format' : 'standalone'
          ][a.month()]
      : c(this._months)
      ? this._months
      : this._months.standalone
  }
  function ga(a, b) {
    return a
      ? c(this._monthsShort)
        ? this._monthsShort[a.month()]
        : this._monthsShort[oe.test(b) ? 'format' : 'standalone'][a.month()]
      : c(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone
  }
  function ha(a, b, c) {
    let d;
      let e;
      let f;
      const g = a.toLocaleLowerCase()
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          d = 0;
        d < 12;
        ++d
      )
        (f = l([2e3, d])),
          (this._shortMonthsParse[d] = this.monthsShort(
            f,
            ''
          ).toLocaleLowerCase()),
          (this._longMonthsParse[d] = this.months(f, '').toLocaleLowerCase())
    return c
      ? b === 'MMM'
        ? ((e = ne.call(this._shortMonthsParse, g)), e !== -1 ? e : null)
        : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null)
      : b === 'MMM'
      ? ((e = ne.call(this._shortMonthsParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null))
      : ((e = ne.call(this._longMonthsParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._shortMonthsParse, g)), e !== -1 ? e : null))
  }
  function ia(a, b, c) {
    let d, e, f
    if (this._monthsParseExact) return ha.call(this, a, b, c)
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        d = 0;
      d < 12;
      d++
    ) {
      if (
        ((e = l([2e3, d])),
        c &&
          !this._longMonthsParse[d] &&
          ((this._longMonthsParse[d] = new RegExp(
            '^' + this.months(e, '').replace('.', '') + '$',
            'i'
          )),
          (this._shortMonthsParse[d] = new RegExp(
            '^' + this.monthsShort(e, '').replace('.', '') + '$',
            'i'
          ))),
        c ||
          this._monthsParse[d] ||
          ((f = '^' + this.months(e, '') + '|^' + this.monthsShort(e, '')),
          (this._monthsParse[d] = new RegExp(f.replace('.', ''), 'i'))),
        c && b === 'MMMM' && this._longMonthsParse[d].test(a))
      )
        return d
      if (c && b === 'MMM' && this._shortMonthsParse[d].test(a)) return d
      if (!c && this._monthsParse[d].test(a)) return d
    }
  }
  function ja(a, b) {
    let c
    if (!a.isValid()) return a
    if (typeof b === 'string')
      if (/^\d+$/.test(b)) b = u(b)
      else if (((b = a.localeData().monthsParse(b)), !g(b))) return a
    return (
      (c = Math.min(a.date(), ea(a.year(), b))),
      a._d['set' + (a._isUTC ? 'UTC' : '') + 'Month'](b, c),
      a
    )
  }
  function ka(b) {
    return b != null
      ? (ja(this, b), a.updateOffset(this, !0), this)
      : P(this, 'Month')
  }
  function la() {
    return ea(this.year(), this.month())
  }
  function ma(a) {
    return this._monthsParseExact
      ? (j(this, '_monthsRegex') || oa.call(this),
        a ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (j(this, '_monthsShortRegex') || (this._monthsShortRegex = re),
        this._monthsShortStrictRegex && a
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex)
  }
  function na(a) {
    return this._monthsParseExact
      ? (j(this, '_monthsRegex') || oa.call(this),
        a ? this._monthsStrictRegex : this._monthsRegex)
      : (j(this, '_monthsRegex') || (this._monthsRegex = se),
        this._monthsStrictRegex && a
          ? this._monthsStrictRegex
          : this._monthsRegex)
  }
  function oa() {
    function a(a, b) {
      return b.length - a.length
    }
    let b;
      let c;
      const d = [];
      const e = [];
      const f = []
    for (b = 0; b < 12; b++)
      (c = l([2e3, b])),
        d.push(this.monthsShort(c, '')),
        e.push(this.months(c, '')),
        f.push(this.months(c, '')),
        f.push(this.monthsShort(c, ''))
    for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)
      (d[b] = aa(d[b])), (e[b] = aa(e[b]))
    for (b = 0; b < 24; b++) f[b] = aa(f[b])
    ;(this._monthsRegex = new RegExp('^(' + f.join('|') + ')', 'i')),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
      (this._monthsShortStrictRegex = new RegExp('^(' + d.join('|') + ')', 'i'))
  }
  function pa(a) {
    return qa(a) ? 366 : 365
  }
  function qa(a) {
    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0
  }
  function ra() {
    return qa(this.year())
  }
  function sa(a, b, c, d, e, f, g) {
    const h = new Date(a, b, c, d, e, f, g)
    return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
  }
  function ta(a) {
    const b = new Date(Date.UTC.apply(null, arguments))
    return (
      a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
      b
    )
  }
  function ua(a, b, c) {
    const d = 7 + b - c;
      const e = (7 + ta(a, 0, d).getUTCDay() - b) % 7
    return -e + d - 1
  }
  function va(a, b, c, d, e) {
    let f;
      let g;
      const h = (7 + c - d) % 7;
      const i = ua(a, d, e);
      const j = 1 + 7 * (b - 1) + h + i
    return (
      j <= 0
        ? ((f = a - 1), (g = pa(f) + j))
        : j > pa(a)
        ? ((f = a + 1), (g = j - pa(a)))
        : ((f = a), (g = j)),
      { year: f, dayOfYear: g }
    )
  }
  function wa(a, b, c) {
    let d;
      let e;
      const f = ua(a.year(), b, c);
      const g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1
    return (
      g < 1
        ? ((e = a.year() - 1), (d = g + xa(e, b, c)))
        : g > xa(a.year(), b, c)
        ? ((d = g - xa(a.year(), b, c)), (e = a.year() + 1))
        : ((e = a.year()), (d = g)),
      { week: d, year: e }
    )
  }
  function xa(a, b, c) {
    const d = ua(a, b, c);
      const e = ua(a + 1, b, c)
    return (pa(a) - d + e) / 7
  }
  function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week
  }
  function za() {
    return this._week.dow
  }
  function Aa() {
    return this._week.doy
  }
  function Ba(a) {
    const b = this.localeData().week(this)
    return a == null ? b : this.add(7 * (a - b), 'd')
  }
  function Ca(a) {
    const b = wa(this, 1, 4).week
    return a == null ? b : this.add(7 * (a - b), 'd')
  }
  function Da(a, b) {
    return typeof a !== 'string'
      ? a
      : isNaN(a)
      ? ((a = b.weekdaysParse(a)), typeof a === 'number' ? a : null)
      : parseInt(a, 10)
  }
  function Ea(a, b) {
    return typeof a === 'string'
      ? b.weekdaysParse(a) % 7 || 7
      : isNaN(a)
      ? null
      : a
  }
  function Fa(a, b) {
    return a
      ? c(this._weekdays)
        ? this._weekdays[a.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(b) ? 'format' : 'standalone'
          ][a.day()]
      : c(this._weekdays)
      ? this._weekdays
      : this._weekdays.standalone
  }
  function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
  }
  function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
  }
  function Ia(a, b, c) {
    let d;
      let e;
      let f;
      const g = a.toLocaleLowerCase()
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          d = 0;
        d < 7;
        ++d
      )
        (f = l([2e3, 1]).day(d)),
          (this._minWeekdaysParse[d] = this.weekdaysMin(
            f,
            ''
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[d] = this.weekdaysShort(
            f,
            ''
          ).toLocaleLowerCase()),
          (this._weekdaysParse[d] = this.weekdays(f, '').toLocaleLowerCase())
    return c
      ? b === 'dddd'
        ? ((e = ne.call(this._weekdaysParse, g)), e !== -1 ? e : null)
        : b === 'ddd'
        ? ((e = ne.call(this._shortWeekdaysParse, g)), e !== -1 ? e : null)
        : ((e = ne.call(this._minWeekdaysParse, g)), e !== -1 ? e : null)
      : b === 'dddd'
      ? ((e = ne.call(this._weekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._shortWeekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._minWeekdaysParse, g)),
                e !== -1 ? e : null)))
      : b === 'ddd'
      ? ((e = ne.call(this._shortWeekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._weekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._minWeekdaysParse, g)),
                e !== -1 ? e : null)))
      : ((e = ne.call(this._minWeekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._weekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._shortWeekdaysParse, g)),
                e !== -1 ? e : null)))
  }
  function Ja(a, b, c) {
    let d, e, f
    if (this._weekdaysParseExact) return Ia.call(this, a, b, c)
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        d = 0;
      d < 7;
      d++
    ) {
      if (
        ((e = l([2e3, 1]).day(d)),
        c &&
          !this._fullWeekdaysParse[d] &&
          ((this._fullWeekdaysParse[d] = new RegExp(
            '^' + this.weekdays(e, '').replace('.', '.?') + '$',
            'i'
          )),
          (this._shortWeekdaysParse[d] = new RegExp(
            '^' + this.weekdaysShort(e, '').replace('.', '.?') + '$',
            'i'
          )),
          (this._minWeekdaysParse[d] = new RegExp(
            '^' + this.weekdaysMin(e, '').replace('.', '.?') + '$',
            'i'
          ))),
        this._weekdaysParse[d] ||
          ((f =
            '^' +
            this.weekdays(e, '') +
            '|^' +
            this.weekdaysShort(e, '') +
            '|^' +
            this.weekdaysMin(e, '')),
          (this._weekdaysParse[d] = new RegExp(f.replace('.', ''), 'i'))),
        c && b === 'dddd' && this._fullWeekdaysParse[d].test(a))
      )
        return d
      if (c && b === 'ddd' && this._shortWeekdaysParse[d].test(a)) return d
      if (c && b === 'dd' && this._minWeekdaysParse[d].test(a)) return d
      if (!c && this._weekdaysParse[d].test(a)) return d
    }
  }
  function Ka(a) {
    if (!this.isValid()) return a != null ? this : NaN
    const b = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
    return a != null
      ? ((a = Da(a, this.localeData())), this.add(a - b, 'd'))
      : b
  }
  function La(a) {
    if (!this.isValid()) return a != null ? this : NaN
    const b = (this.day() + 7 - this.localeData()._week.dow) % 7
    return a == null ? b : this.add(a - b, 'd')
  }
  function Ma(a) {
    if (!this.isValid()) return a != null ? this : NaN
    if (a != null) {
      const b = Ea(a, this.localeData())
      return this.day(this.day() % 7 ? b : b - 7)
    }
    return this.day() || 7
  }
  function Na(a) {
    return this._weekdaysParseExact
      ? (j(this, '_weekdaysRegex') || Qa.call(this),
        a ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (j(this, '_weekdaysRegex') || (this._weekdaysRegex = ye),
        this._weekdaysStrictRegex && a
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex)
  }
  function Oa(a) {
    return this._weekdaysParseExact
      ? (j(this, '_weekdaysRegex') || Qa.call(this),
        a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (j(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = ze),
        this._weekdaysShortStrictRegex && a
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex)
  }
  function Pa(a) {
    return this._weekdaysParseExact
      ? (j(this, '_weekdaysRegex') || Qa.call(this),
        a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (j(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Ae),
        this._weekdaysMinStrictRegex && a
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex)
  }
  function Qa() {
    function a(a, b) {
      return b.length - a.length
    }
    let b;
      let c;
      let d;
      let e;
      let f;
      const g = [];
      const h = [];
      const i = [];
      const j = []
    for (b = 0; b < 7; b++)
      (c = l([2e3, 1]).day(b)),
        (d = this.weekdaysMin(c, '')),
        (e = this.weekdaysShort(c, '')),
        (f = this.weekdays(c, '')),
        g.push(d),
        h.push(e),
        i.push(f),
        j.push(d),
        j.push(e),
        j.push(f)
    for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++)
      (h[b] = aa(h[b])), (i[b] = aa(i[b])), (j[b] = aa(j[b]))
    ;(this._weekdaysRegex = new RegExp('^(' + j.join('|') + ')', 'i')),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
      (this._weekdaysShortStrictRegex = new RegExp(
        '^(' + h.join('|') + ')',
        'i'
      )),
      (this._weekdaysMinStrictRegex = new RegExp('^(' + g.join('|') + ')', 'i'))
  }
  function Ra() {
    return this.hours() % 12 || 12
  }
  function Sa() {
    return this.hours() || 24
  }
  function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b)
    })
  }
  function Ua(a, b) {
    return b._meridiemParse
  }
  function Va(a) {
    return (a + '').toLowerCase().charAt(0) === 'p'
  }
  function Wa(a, b, c) {
    return a > 11 ? (c ? 'pm' : 'PM') : c ? 'am' : 'AM'
  }
  function Xa(a) {
    return a ? a.toLowerCase().replace('_', '-') : a
  }
  function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length; ) {
      for (
        e = Xa(a[f]).split('-'),
          b = e.length,
          c = Xa(a[f + 1]),
          c = c ? c.split('-') : null;
        b > 0;

      ) {
        if ((d = Za(e.slice(0, b).join('-')))) return d
        if (c && c.length >= b && v(e, c, !0) >= b - 1) break
        b--
      }
      f++
    }
    return null
  }
  function Za(a) {
    let b = null
    if (!Fe[a] && typeof module !== 'undefined' && module && module.exports)
      try {
        ;(b = Be._abbr), require('./locale/' + a), $a(b)
      } catch (a) {}
    return Fe[a]
  }
  function $a(a, b) {
    let c
    return a && ((c = f(b) ? bb(a) : _a(a, b)), c && (Be = c)), Be._abbr
  }
  function _a(a, b) {
    if (b !== null) {
      let c = Ee
      if (((b.abbr = a), Fe[a] != null))
        y(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
        ),
          (c = Fe[a]._config)
      else if (b.parentLocale != null) {
        if (Fe[b.parentLocale] == null)
          return (
            Ge[b.parentLocale] || (Ge[b.parentLocale] = []),
            Ge[b.parentLocale].push({ name: a, config: b }),
            null
          )
        c = Fe[b.parentLocale]._config
      }
      return (
        (Fe[a] = new C(B(c, b))),
        Ge[a] &&
          Ge[a].forEach(function (a) {
            _a(a.name, a.config)
          }),
        $a(a),
        Fe[a]
      )
    }
    return delete Fe[a], null
  }
  function ab(a, b) {
    if (b != null) {
      let c;
        let d = Ee
      Fe[a] != null && (d = Fe[a]._config),
        (b = B(d, b)),
        (c = new C(b)),
        (c.parentLocale = Fe[a]),
        (Fe[a] = c),
        $a(a)
    } else Fe[a] != null && (Fe[a].parentLocale != null ? (Fe[a] = Fe[a].parentLocale) : Fe[a] != null && delete Fe[a])
    return Fe[a]
  }
  function bb(a) {
    let b
    if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
      return Be
    if (!c(a)) {
      if ((b = Za(a))) return b
      a = [a]
    }
    return Ya(a)
  }
  function cb() {
    return Ad(Fe)
  }
  function db(a) {
    let b;
      const c = a._a
    return (
      c &&
        n(a).overflow === -2 &&
        ((b =
          c[fe] < 0 || c[fe] > 11
            ? fe
            : c[ge] < 1 || c[ge] > ea(c[ee], c[fe])
            ? ge
            : c[he] < 0 ||
              c[he] > 24 ||
              (c[he] === 24 && (c[ie] !== 0 || c[je] !== 0 || c[ke] !== 0))
            ? he
            : c[ie] < 0 || c[ie] > 59
            ? ie
            : c[je] < 0 || c[je] > 59
            ? je
            : c[ke] < 0 || c[ke] > 999
            ? ke
            : -1),
        n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge),
        n(a)._overflowWeeks && b === -1 && (b = le),
        n(a)._overflowWeekday && b === -1 && (b = me),
        (n(a).overflow = b)),
      a
    )
  }
  function eb(a) {
    let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      const h = a._i;
      const i = He.exec(h) || Ie.exec(h)
    if (i) {
      for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
        if (Ke[b][1].exec(i[1])) {
          ;(e = Ke[b][0]), (d = Ke[b][2] !== !1)
          break
        }
      if (e == null) return void (a._isValid = !1)
      if (i[3]) {
        for (b = 0, c = Le.length; b < c; b++)
          if (Le[b][1].exec(i[3])) {
            f = (i[2] || ' ') + Le[b][0]
            break
          }
        if (f == null) return void (a._isValid = !1)
      }
      if (!d && f != null) return void (a._isValid = !1)
      if (i[4]) {
        if (!Je.exec(i[4])) return void (a._isValid = !1)
        g = 'Z'
      }
      ;(a._f = e + (f || '') + (g || '')), lb(a)
    } else a._isValid = !1
  }
  function fb(a) {
    let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      const j = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800',
      };
      const k = 'YXWVUTSRQPONZABCDEFGHIKLM'
    if (
      ((b = a._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .replace(/^\s|\s$/g, '')),
      (c = Ne.exec(b)))
    ) {
      if (
        ((d = c[1] ? 'ddd' + (c[1].length === 5 ? ', ' : ' ') : ''),
        (e = 'D MMM ' + (c[2].length > 10 ? 'YYYY ' : 'YY ')),
        (f = 'HH:mm' + (c[4] ? ':ss' : '')),
        c[1])
      ) {
        const l = new Date(c[2]);
          const m = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][l.getDay()]
        if (c[1].substr(0, 3) !== m)
          return (n(a).weekdayMismatch = !0), void (a._isValid = !1)
      }
      switch (c[5].length) {
        case 2:
          i === 0
            ? (h = ' +0000')
            : ((i = k.indexOf(c[5][1].toUpperCase()) - 12),
              (h =
                (i < 0 ? ' -' : ' +') +
                ('' + i).replace(/^-?/, '0').match(/..$/)[0] +
                '00'))
          break
        case 4:
          h = j[c[5]]
          break
        default:
          h = j[' GMT']
      }
      ;(c[5] = h),
        (a._i = c.splice(1).join('')),
        (g = ' ZZ'),
        (a._f = d + e + f + g),
        lb(a),
        (n(a).rfc2822 = !0)
    } else a._isValid = !1
  }
  function gb(b) {
    const c = Me.exec(b._i)
    return c !== null
      ? void (b._d = new Date(+c[1]))
      : (eb(b),
        void (
          b._isValid === !1 &&
          (delete b._isValid,
          fb(b),
          b._isValid === !1 &&
            (delete b._isValid, a.createFromInputFallback(b)))
        ))
  }
  function hb(a, b, c) {
    return a != null ? a : b != null ? b : c
  }
  function ib(b) {
    const c = new Date(a.now())
    return b._useUTC
      ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
      : [c.getFullYear(), c.getMonth(), c.getDate()]
  }
  function jb(a) {
    let b;
      let c;
      let d;
      let e;
      const f = []
    if (!a._d) {
      for (
        d = ib(a),
          a._w && a._a[ge] == null && a._a[fe] == null && kb(a),
          a._dayOfYear != null &&
            ((e = hb(a._a[ee], d[ee])),
            (a._dayOfYear > pa(e) || a._dayOfYear === 0) &&
              (n(a)._overflowDayOfYear = !0),
            (c = ta(e, 0, a._dayOfYear)),
            (a._a[fe] = c.getUTCMonth()),
            (a._a[ge] = c.getUTCDate())),
          b = 0;
        b < 3 && a._a[b] == null;
        ++b
      )
        a._a[b] = f[b] = d[b]
      for (; b < 7; b++)
        a._a[b] = f[b] = a._a[b] == null ? (b === 2 ? 1 : 0) : a._a[b]
      a._a[he] === 24 &&
        a._a[ie] === 0 &&
        a._a[je] === 0 &&
        a._a[ke] === 0 &&
        ((a._nextDay = !0), (a._a[he] = 0)),
        (a._d = (a._useUTC ? ta : sa).apply(null, f)),
        a._tzm != null && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        a._nextDay && (a._a[he] = 24)
    }
  }
  function kb(a) {
    let b, c, d, e, f, g, h, i
    if (((b = a._w), b.GG != null || b.W != null || b.E != null))
      (f = 1),
        (g = 4),
        (c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year)),
        (d = hb(b.W, 1)),
        (e = hb(b.E, 1)),
        (e < 1 || e > 7) && (i = !0)
    else {
      ;(f = a._locale._week.dow), (g = a._locale._week.doy)
      const j = wa(tb(), f, g)
      ;(c = hb(b.gg, a._a[ee], j.year)),
        (d = hb(b.w, j.week)),
        b.d != null
          ? ((e = b.d), (e < 0 || e > 6) && (i = !0))
          : b.e != null
          ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
          : (e = f)
    }
    d < 1 || d > xa(c, f, g)
      ? (n(a)._overflowWeeks = !0)
      : i != null
      ? (n(a)._overflowWeekday = !0)
      : ((h = va(c, d, e, f, g)),
        (a._a[ee] = h.year),
        (a._dayOfYear = h.dayOfYear))
  }
  function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b)
    if (b._f === a.RFC_2822) return void fb(b)
    ;(b._a = []), (n(b).empty = !0)
    let c;
      let d;
      let e;
      let f;
      let g;
      let h = '' + b._i;
      const i = h.length;
      let j = 0
    for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++)
      (f = e[c]),
        (d = (h.match($(f, b)) || [])[0]),
        d &&
          ((g = h.substr(0, h.indexOf(d))),
          g.length > 0 && n(b).unusedInput.push(g),
          (h = h.slice(h.indexOf(d) + d.length)),
          (j += d.length)),
        Md[f]
          ? (d ? (n(b).empty = !1) : n(b).unusedTokens.push(f), da(f, d, b))
          : b._strict && !d && n(b).unusedTokens.push(f)
    ;(n(b).charsLeftOver = i - j),
      h.length > 0 && n(b).unusedInput.push(h),
      b._a[he] <= 12 &&
        n(b).bigHour === !0 &&
        b._a[he] > 0 &&
        (n(b).bigHour = void 0),
      (n(b).parsedDateParts = b._a.slice(0)),
      (n(b).meridiem = b._meridiem),
      (b._a[he] = mb(b._locale, b._a[he], b._meridiem)),
      jb(b),
      db(b)
  }
  function mb(a, b, c) {
    let d
    return c == null
      ? b
      : a.meridiemHour != null
      ? a.meridiemHour(b, c)
      : a.isPM != null
      ? ((d = a.isPM(c)), d && b < 12 && (b += 12), d || b !== 12 || (b = 0), b)
      : b
  }
  function nb(a) {
    let b, c, d, e, f
    if (a._f.length === 0)
      return (n(a).invalidFormat = !0), void (a._d = new Date(NaN))
    for (e = 0; e < a._f.length; e++)
      (f = 0),
        (b = q({}, a)),
        a._useUTC != null && (b._useUTC = a._useUTC),
        (b._f = a._f[e]),
        lb(b),
        o(b) &&
          ((f += n(b).charsLeftOver),
          (f += 10 * n(b).unusedTokens.length),
          (n(b).score = f),
          (d == null || f < d) && ((d = f), (c = b)))
    k(a, c || b)
  }
  function ob(a) {
    if (!a._d) {
      const b = L(a._i)
      ;(a._a = i(
        [
          b.year,
          b.month,
          b.day || b.date,
          b.hour,
          b.minute,
          b.second,
          b.millisecond,
        ],
        function (a) {
          return a && parseInt(a, 10)
        }
      )),
        jb(a)
    }
  }
  function pb(a) {
    const b = new r(db(qb(a)))
    return b._nextDay && (b.add(1, 'd'), (b._nextDay = void 0)), b
  }
  function qb(a) {
    let b = a._i;
      const d = a._f
    return (
      (a._locale = a._locale || bb(a._l)),
      b === null || (void 0 === d && b === '')
        ? p({ nullInput: !0 })
        : (typeof b === 'string' && (a._i = b = a._locale.preparse(b)),
          s(b)
            ? new r(db(b))
            : (h(b) ? (a._d = b) : c(d) ? nb(a) : d ? lb(a) : rb(a),
              o(a) || (a._d = null),
              a))
    )
  }
  function rb(b) {
    const e = b._i
    f(e)
      ? (b._d = new Date(a.now()))
      : h(e)
      ? (b._d = new Date(e.valueOf()))
      : typeof e === 'string'
      ? gb(b)
      : c(e)
      ? ((b._a = i(e.slice(0), function (a) {
          return parseInt(a, 10)
        })),
        jb(b))
      : d(e)
      ? ob(b)
      : g(e)
      ? (b._d = new Date(e))
      : a.createFromInputFallback(b)
  }
  function sb(a, b, f, g, h) {
    const i = {}
    return (
      (f !== !0 && f !== !1) || ((g = f), (f = void 0)),
      ((d(a) && e(a)) || (c(a) && a.length === 0)) && (a = void 0),
      (i._isAMomentObject = !0),
      (i._useUTC = i._isUTC = h),
      (i._l = f),
      (i._i = a),
      (i._f = b),
      (i._strict = g),
      pb(i)
    )
  }
  function tb(a, b, c, d) {
    return sb(a, b, c, d, !1)
  }
  function ub(a, b) {
    let d, e
    if ((b.length === 1 && c(b[0]) && (b = b[0]), !b.length)) return tb()
    for (d = b[0], e = 1; e < b.length; ++e)
      (b[e].isValid() && !b[e][a](d)) || (d = b[e])
    return d
  }
  function vb() {
    const a = [].slice.call(arguments, 0)
    return ub('isBefore', a)
  }
  function wb() {
    const a = [].slice.call(arguments, 0)
    return ub('isAfter', a)
  }
  function xb(a) {
    for (const b in a)
      if (!Re.includes(b) || (a[b] != null && isNaN(a[b]))) return !1
    for (let c = !1, d = 0; d < Re.length; ++d)
      if (a[Re[d]]) {
        if (c) return !1
        parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0)
      }
    return !0
  }
  function yb() {
    return this._isValid
  }
  function zb() {
    return Sb(NaN)
  }
  function Ab(a) {
    const b = L(a);
      const c = b.year || 0;
      const d = b.quarter || 0;
      const e = b.month || 0;
      const f = b.week || 0;
      const g = b.day || 0;
      const h = b.hour || 0;
      const i = b.minute || 0;
      const j = b.second || 0;
      const k = b.millisecond || 0
    ;(this._isValid = xb(b)),
      (this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60),
      (this._days = +g + 7 * f),
      (this._months = +e + 3 * d + 12 * c),
      (this._data = {}),
      (this._locale = bb()),
      this._bubble()
  }
  function Bb(a) {
    return a instanceof Ab
  }
  function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
  }
  function Db(a, b) {
    U(a, 0, 0, function () {
      let a = this.utcOffset();
        let c = '+'
      return (
        a < 0 && ((a = -a), (c = '-')),
        c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
      )
    })
  }
  function Eb(a, b) {
    const c = (b || '').match(a)
    if (c === null) return null
    const d = c[c.length - 1] || [];
      const e = (d + '').match(Se) || ['-', 0, 0];
      const f = +(60 * e[1]) + u(e[2])
    return f === 0 ? 0 : e[0] === '+' ? f : -f
  }
  function Fb(b, c) {
    let d, e
    return c._isUTC
      ? ((d = c.clone()),
        (e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf()),
        d._d.setTime(d._d.valueOf() + e),
        a.updateOffset(d, !1),
        d)
      : tb(b).local()
  }
  function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
  }
  function Hb(b, c, d) {
    let e;
      const f = this._offset || 0
    if (!this.isValid()) return b != null ? this : NaN
    if (b != null) {
      if (typeof b === 'string') {
        if (((b = Eb(_d, b)), b === null)) return this
      } else Math.abs(b) < 16 && !d && (b = 60 * b)
      return (
        !this._isUTC && c && (e = Gb(this)),
        (this._offset = b),
        (this._isUTC = !0),
        e != null && this.add(e, 'm'),
        f !== b &&
          (!c || this._changeInProgress
            ? Xb(this, Sb(b - f, 'm'), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              a.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      )
    }
    return this._isUTC ? f : Gb(this)
  }
  function Ib(a, b) {
    return a != null
      ? (typeof a !== 'string' && (a = -a), this.utcOffset(a, b), this)
      : -this.utcOffset()
  }
  function Jb(a) {
    return this.utcOffset(0, a)
  }
  function Kb(a) {
    return (
      this._isUTC &&
        (this.utcOffset(0, a),
        (this._isUTC = !1),
        a && this.subtract(Gb(this), 'm')),
      this
    )
  }
  function Lb() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0)
    else if (typeof this._i === 'string') {
      const a = Eb($d, this._i)
      a != null ? this.utcOffset(a) : this.utcOffset(0, !0)
    }
    return this
  }
  function Mb(a) {
    return (
      !!this.isValid() &&
      ((a = a ? tb(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
    )
  }
  function Nb() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    )
  }
  function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted
    let a = {}
    if ((q(a, this), (a = qb(a)), a._a)) {
      const b = a._isUTC ? l(a._a) : tb(a._a)
      this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
    } else this._isDSTShifted = !1
    return this._isDSTShifted
  }
  function Pb() {
    return !!this.isValid() && !this._isUTC
  }
  function Qb() {
    return !!this.isValid() && this._isUTC
  }
  function Rb() {
    return !!this.isValid() && this._isUTC && this._offset === 0
  }
  function Sb(a, b) {
    let c;
      let d;
      let e;
      let f = a;
      let h = null
    return (
      Bb(a)
        ? (f = { ms: a._milliseconds, d: a._days, M: a._months })
        : g(a)
        ? ((f = {}), b ? (f[b] = a) : (f.milliseconds = a))
        : (h = Te.exec(a))
        ? ((c = h[1] === '-' ? -1 : 1),
          (f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c,
          }))
        : (h = Ue.exec(a))
        ? ((c = h[1] === '-' ? -1 : 1),
          (f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c),
          }))
        : f == null
        ? (f = {})
        : typeof f === 'object' &&
          ('from' in f || 'to' in f) &&
          ((e = Vb(tb(f.from), tb(f.to))),
          (f = {}),
          (f.ms = e.milliseconds),
          (f.M = e.months)),
      (d = new Ab(f)),
      Bb(a) && j(a, '_locale') && (d._locale = a._locale),
      d
    )
  }
  function Tb(a, b) {
    const c = a && parseFloat(a.replace(',', '.'))
    return (isNaN(c) ? 0 : c) * b
  }
  function Ub(a, b) {
    const c = { milliseconds: 0, months: 0 }
    return (
      (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
      a.clone().add(c.months, 'M').isAfter(b) && --c.months,
      (c.milliseconds = +b - +a.clone().add(c.months, 'M')),
      c
    )
  }
  function Vb(a, b) {
    let c
    return a.isValid() && b.isValid()
      ? ((b = Fb(b, a)),
        a.isBefore(b)
          ? (c = Ub(a, b))
          : ((c = Ub(b, a)),
            (c.milliseconds = -c.milliseconds),
            (c.months = -c.months)),
        c)
      : { milliseconds: 0, months: 0 }
  }
  function Wb(a, b) {
    return function (c, d) {
      let e, f
      return (
        d === null ||
          isNaN(+d) ||
          (y(
            b,
            'moment().' +
              b +
              '(period, number) is deprecated. Please use moment().' +
              b +
              '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
          ),
          (f = c),
          (c = d),
          (d = f)),
        (c = typeof c === 'string' ? +c : c),
        (e = Sb(c, d)),
        Xb(this, e, a),
        this
      )
    }
  }
  function Xb(b, c, d, e) {
    const f = c._milliseconds;
      const g = Cb(c._days);
      const h = Cb(c._months)
    b.isValid() &&
      ((e = e == null || e),
      f && b._d.setTime(b._d.valueOf() + f * d),
      g && Q(b, 'Date', P(b, 'Date') + g * d),
      h && ja(b, P(b, 'Month') + h * d),
      e && a.updateOffset(b, g || h))
  }
  function Yb(a, b) {
    const c = a.diff(b, 'days', !0)
    return c < -6
      ? 'sameElse'
      : c < -1
      ? 'lastWeek'
      : c < 0
      ? 'lastDay'
      : c < 1
      ? 'sameDay'
      : c < 2
      ? 'nextDay'
      : c < 7
      ? 'nextWeek'
      : 'sameElse'
  }
  function Zb(b, c) {
    const d = b || tb();
      const e = Fb(d, this).startOf('day');
      const f = a.calendarFormat(this, e) || 'sameElse';
      const g = c && (z(c[f]) ? c[f].call(this, d) : c[f])
    return this.format(g || this.localeData().calendar(f, this, tb(d)))
  }
  function $b() {
    return new r(this)
  }
  function _b(a, b) {
    const c = s(a) ? a : tb(a)
    return (
      !(!this.isValid() || !c.isValid()) &&
      ((b = K(f(b) ? 'millisecond' : b)),
      b === 'millisecond'
        ? this.valueOf() > c.valueOf()
        : c.valueOf() < this.clone().startOf(b).valueOf())
    )
  }
  function ac(a, b) {
    const c = s(a) ? a : tb(a)
    return (
      !(!this.isValid() || !c.isValid()) &&
      ((b = K(f(b) ? 'millisecond' : b)),
      b === 'millisecond'
        ? this.valueOf() < c.valueOf()
        : this.clone().endOf(b).valueOf() < c.valueOf())
    )
  }
  function bc(a, b, c, d) {
    return (
      (d = d || '()'),
      (d[0] === '(' ? this.isAfter(a, c) : !this.isBefore(a, c)) &&
        (d[1] === ')' ? this.isBefore(b, c) : !this.isAfter(b, c))
    )
  }
  function cc(a, b) {
    let c;
      const d = s(a) ? a : tb(a)
    return (
      !(!this.isValid() || !d.isValid()) &&
      ((b = K(b || 'millisecond')),
      b === 'millisecond'
        ? this.valueOf() === d.valueOf()
        : ((c = d.valueOf()),
          this.clone().startOf(b).valueOf() <= c &&
            c <= this.clone().endOf(b).valueOf()))
    )
  }
  function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b)
  }
  function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b)
  }
  function fc(a, b, c) {
    let d, e, f, g
    return this.isValid()
      ? ((d = Fb(a, this)),
        d.isValid()
          ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
            (b = K(b)),
            b === 'year' || b === 'month' || b === 'quarter'
              ? ((g = gc(this, d)),
                b === 'quarter' ? (g /= 3) : b === 'year' && (g /= 12))
              : ((f = this - d),
                (g =
                  b === 'second'
                    ? f / 1e3
                    : b === 'minute'
                    ? f / 6e4
                    : b === 'hour'
                    ? f / 36e5
                    : b === 'day'
                    ? (f - e) / 864e5
                    : b === 'week'
                    ? (f - e) / 6048e5
                    : f)),
            c ? g : t(g))
          : NaN)
      : NaN
  }
  function gc(a, b) {
    let c;
      let d;
      const e = 12 * (b.year() - a.year()) + (b.month() - a.month());
      const f = a.clone().add(e, 'months')
    return (
      b - f < 0
        ? ((c = a.clone().add(e - 1, 'months')), (d = (b - f) / (f - c)))
        : ((c = a.clone().add(e + 1, 'months')), (d = (b - f) / (c - f))),
      -(e + d) || 0
    )
  }
  function hc() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
  }
  function ic() {
    if (!this.isValid()) return null
    const a = this.clone().utc()
    return a.year() < 0 || a.year() > 9999
      ? X(a, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
      : z(Date.prototype.toISOString)
      ? this.toDate().toISOString()
      : X(a, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
  }
  function jc() {
    if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
    let a = 'moment';
      let b = ''
    this.isLocal() ||
      ((a = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'),
      (b = 'Z'))
    const c = '[' + a + '("]';
      const d = this.year() >= 0 && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
      const e = '-MM-DD[T]HH:mm:ss.SSS';
      const f = b + '[")]'
    return this.format(c + d + e + f)
  }
  function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat)
    const c = X(this, b)
    return this.localeData().postformat(c)
  }
  function lc(a, b) {
    return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
      ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate()
  }
  function mc(a) {
    return this.from(tb(), a)
  }
  function nc(a, b) {
    return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
      ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate()
  }
  function oc(a) {
    return this.to(tb(), a)
  }
  function pc(a) {
    let b
    return void 0 === a
      ? this._locale._abbr
      : ((b = bb(a)), b != null && (this._locale = b), this)
  }
  function qc() {
    return this._locale
  }
  function rc(a) {
    switch ((a = K(a))) {
      case 'year':
        this.month(0)
      case 'quarter':
      case 'month':
        this.date(1)
      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0)
      case 'hour':
        this.minutes(0)
      case 'minute':
        this.seconds(0)
      case 'second':
        this.milliseconds(0)
    }
    return (
      a === 'week' && this.weekday(0),
      a === 'isoWeek' && this.isoWeekday(1),
      a === 'quarter' && this.month(3 * Math.floor(this.month() / 3)),
      this
    )
  }
  function sc(a) {
    return (
      (a = K(a)),
      void 0 === a || a === 'millisecond'
        ? this
        : (a === 'date' && (a = 'day'),
          this.startOf(a)
            .add(1, a === 'isoWeek' ? 'week' : a)
            .subtract(1, 'ms'))
    )
  }
  function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
  }
  function uc() {
    return Math.floor(this.valueOf() / 1e3)
  }
  function vc() {
    return new Date(this.valueOf())
  }
  function wc() {
    const a = this
    return [
      a.year(),
      a.month(),
      a.date(),
      a.hour(),
      a.minute(),
      a.second(),
      a.millisecond(),
    ]
  }
  function xc() {
    const a = this
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds(),
    }
  }
  function yc() {
    return this.isValid() ? this.toISOString() : null
  }
  function zc() {
    return o(this)
  }
  function Ac() {
    return k({}, n(this))
  }
  function Bc() {
    return n(this).overflow
  }
  function Cc() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    }
  }
  function Dc(a, b) {
    U(0, [a, a.length], 0, b)
  }
  function Ec(a) {
    return Ic.call(
      this,
      a,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    )
  }
  function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
  }
  function Gc() {
    return xa(this.year(), 1, 4)
  }
  function Hc() {
    const a = this.localeData()._week
    return xa(this.year(), a.dow, a.doy)
  }
  function Ic(a, b, c, d, e) {
    let f
    return a == null
      ? wa(this, d, e).year
      : ((f = xa(a, d, e)), b > f && (b = f), Jc.call(this, a, b, c, d, e))
  }
  function Jc(a, b, c, d, e) {
    const f = va(a, b, c, d, e);
      const g = ta(f.year, 0, f.dayOfYear)
    return (
      this.year(g.getUTCFullYear()),
      this.month(g.getUTCMonth()),
      this.date(g.getUTCDate()),
      this
    )
  }
  function Kc(a) {
    return a == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (a - 1) + (this.month() % 3))
  }
  function Lc(a) {
    const b =
      Math.round(
        (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
      ) + 1
    return a == null ? b : this.add(a - b, 'd')
  }
  function Mc(a, b) {
    b[ke] = u(1e3 * ('0.' + a))
  }
  function Nc() {
    return this._isUTC ? 'UTC' : ''
  }
  function Oc() {
    return this._isUTC ? 'Coordinated Universal Time' : ''
  }
  function Pc(a) {
    return tb(1e3 * a)
  }
  function Qc() {
    return tb.apply(null, arguments).parseZone()
  }
  function Rc(a) {
    return a
  }
  function Sc(a, b, c, d) {
    const e = bb();
      const f = l().set(d, b)
    return e[c](f, a)
  }
  function Tc(a, b, c) {
    if ((g(a) && ((b = a), (a = void 0)), (a = a || ''), b != null))
      return Sc(a, b, c, 'month')
    let d;
      const e = []
    for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, 'month')
    return e
  }
  function Uc(a, b, c, d) {
    typeof a === 'boolean'
      ? (g(b) && ((c = b), (b = void 0)), (b = b || ''))
      : ((b = a),
        (c = b),
        (a = !1),
        g(b) && ((c = b), (b = void 0)),
        (b = b || ''))
    const e = bb();
      const f = a ? e._week.dow : 0
    if (c != null) return Sc(b, (c + f) % 7, d, 'day')
    let h;
      const i = []
    for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, 'day')
    return i
  }
  function Vc(a, b) {
    return Tc(a, b, 'months')
  }
  function Wc(a, b) {
    return Tc(a, b, 'monthsShort')
  }
  function Xc(a, b, c) {
    return Uc(a, b, c, 'weekdays')
  }
  function Yc(a, b, c) {
    return Uc(a, b, c, 'weekdaysShort')
  }
  function Zc(a, b, c) {
    return Uc(a, b, c, 'weekdaysMin')
  }
  function $c() {
    const a = this._data
    return (
      (this._milliseconds = df(this._milliseconds)),
      (this._days = df(this._days)),
      (this._months = df(this._months)),
      (a.milliseconds = df(a.milliseconds)),
      (a.seconds = df(a.seconds)),
      (a.minutes = df(a.minutes)),
      (a.hours = df(a.hours)),
      (a.months = df(a.months)),
      (a.years = df(a.years)),
      this
    )
  }
  function _c(a, b, c, d) {
    const e = Sb(b, c)
    return (
      (a._milliseconds += d * e._milliseconds),
      (a._days += d * e._days),
      (a._months += d * e._months),
      a._bubble()
    )
  }
  function ad(a, b) {
    return _c(this, a, b, 1)
  }
  function bd(a, b) {
    return _c(this, a, b, -1)
  }
  function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a)
  }
  function dd() {
    let a;
      let b;
      let c;
      let d;
      let e;
      let f = this._milliseconds;
      let g = this._days;
      let h = this._months;
      const i = this._data
    return (
      (f >= 0 && g >= 0 && h >= 0) ||
        (f <= 0 && g <= 0 && h <= 0) ||
        ((f += 864e5 * cd(fd(h) + g)), (g = 0), (h = 0)),
      (i.milliseconds = f % 1e3),
      (a = t(f / 1e3)),
      (i.seconds = a % 60),
      (b = t(a / 60)),
      (i.minutes = b % 60),
      (c = t(b / 60)),
      (i.hours = c % 24),
      (g += t(c / 24)),
      (e = t(ed(g))),
      (h += e),
      (g -= cd(fd(e))),
      (d = t(h / 12)),
      (h %= 12),
      (i.days = g),
      (i.months = h),
      (i.years = d),
      this
    )
  }
  function ed(a) {
    return (4800 * a) / 146097
  }
  function fd(a) {
    return (146097 * a) / 4800
  }
  function gd(a) {
    if (!this.isValid()) return NaN
    let b;
      let c;
      const d = this._milliseconds
    if (((a = K(a)), a === 'month' || a === 'year'))
      return (
        (b = this._days + d / 864e5),
        (c = this._months + ed(b)),
        a === 'month' ? c : c / 12
      )
    switch (((b = this._days + Math.round(fd(this._months))), a)) {
      case 'week':
        return b / 7 + d / 6048e5
      case 'day':
        return b + d / 864e5
      case 'hour':
        return 24 * b + d / 36e5
      case 'minute':
        return 1440 * b + d / 6e4
      case 'second':
        return 86400 * b + d / 1e3
      case 'millisecond':
        return Math.floor(864e5 * b) + d
      default:
        throw new Error('Unknown unit ' + a)
    }
  }
  function hd() {
    return this.isValid()
      ? this._milliseconds +
          864e5 * this._days +
          (this._months % 12) * 2592e6 +
          31536e6 * u(this._months / 12)
      : NaN
  }
  function id(a) {
    return function () {
      return this.as(a)
    }
  }
  function jd(a) {
    return (a = K(a)), this.isValid() ? this[a + 's']() : NaN
  }
  function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN
    }
  }
  function ld() {
    return t(this.days() / 7)
  }
  function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d)
  }
  function nd(a, b, c) {
    const d = Sb(a).abs();
      const e = uf(d.as('s'));
      const f = uf(d.as('m'));
      const g = uf(d.as('h'));
      const h = uf(d.as('d'));
      const i = uf(d.as('M'));
      const j = uf(d.as('y'));
      const k = (e <= vf.ss && ['s', e]) ||
        (e < vf.s && ['ss', e]) ||
        (f <= 1 && ['m']) ||
        (f < vf.m && ['mm', f]) ||
        (g <= 1 && ['h']) ||
        (g < vf.h && ['hh', g]) ||
        (h <= 1 && ['d']) ||
        (h < vf.d && ['dd', h]) ||
        (i <= 1 && ['M']) ||
        (i < vf.M && ['MM', i]) ||
        (j <= 1 && ['y']) || ['yy', j]
    return (k[2] = b), (k[3] = +a > 0), (k[4] = c), md.apply(null, k)
  }
  function od(a) {
    return void 0 === a ? uf : typeof a === 'function' && ((uf = a), !0)
  }
  function pd(a, b) {
    return (
      void 0 !== vf[a] &&
      (void 0 === b ? vf[a] : ((vf[a] = b), a === 's' && (vf.ss = b - 1), !0))
    )
  }
  function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate()
    const b = this.localeData();
      let c = nd(this, !a, b)
    return a && (c = b.pastFuture(+this, c)), b.postformat(c)
  }
  function rd() {
    if (!this.isValid()) return this.localeData().invalidDate()
    let a;
      let b;
      let c;
      let d = wf(this._milliseconds) / 1e3;
      const e = wf(this._days);
      let f = wf(this._months)
    ;(a = t(d / 60)),
      (b = t(a / 60)),
      (d %= 60),
      (a %= 60),
      (c = t(f / 12)),
      (f %= 12)
    const g = c;
      const h = f;
      const i = e;
      const j = b;
      const k = a;
      const l = d;
      const m = this.asSeconds()
    return m
      ? (m < 0 ? '-' : '') +
          'P' +
          (g ? g + 'Y' : '') +
          (h ? h + 'M' : '') +
          (i ? i + 'D' : '') +
          (j || k || l ? 'T' : '') +
          (j ? j + 'H' : '') +
          (k ? k + 'M' : '') +
          (l ? l + 'S' : '')
      : 'P0D'
  }
  let sd, td
  td = Array.prototype.some
    ? Array.prototype.some
    : function (a) {
        for (let b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
          if (d in b && a.call(this, b[d], d, b)) return !0
        return !1
      }
  var ud = td;
    var vd = (a.momentProperties = []);
    var wd = !1;
    var xd = {}
  ;(a.suppressDeprecationWarnings = !1), (a.deprecationHandler = null)
  let yd
  yd = Object.keys
    ? Object.keys
    : function (a) {
        let b;
          const c = []
        for (b in a) j(a, b) && c.push(b)
        return c
      }
  let zd;
    var Ad = yd;
    const Bd = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L',
    };
    const Cd = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };
    const Dd = 'Invalid date';
    const Ed = '%d';
    const Fd = /\d{1,2}/;
    const Gd = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
    };
    var Hd = {};
    var Id = {};
    var Jd =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var Ld = {};
    var Md = {};
    const Nd = /\d/;
    const Od = /\d\d/;
    const Pd = /\d{3}/;
    const Qd = /\d{4}/;
    const Rd = /[+-]?\d{6}/;
    const Sd = /\d\d?/;
    const Td = /\d\d\d\d?/;
    const Ud = /\d\d\d\d\d\d?/;
    const Vd = /\d{1,3}/;
    const Wd = /\d{1,4}/;
    const Xd = /[+-]?\d{1,6}/;
    const Yd = /\d+/;
    const Zd = /[+-]?\d+/;
    var $d = /Z|[+-]\d\d:?\d\d/gi;
    var _d = /Z|[+-]\d\d(?::?\d\d)?/gi;
    const ae = /[+-]?\d+(\.\d{1,3})?/;
    const be =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
    var ce = {};
    var de = {};
    var ee = 0;
    var fe = 1;
    var ge = 2;
    var he = 3;
    var ie = 4;
    var je = 5;
    var ke = 6;
    var le = 7;
    var me = 8
  zd = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (a) {
        let b
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b
        return -1
      }
  var ne = zd
  U('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1
  }),
    U('MMM', 0, 0, function (a) {
      return this.localeData().monthsShort(this, a)
    }),
    U('MMMM', 0, 0, function (a) {
      return this.localeData().months(this, a)
    }),
    J('month', 'M'),
    M('month', 8),
    Z('M', Sd),
    Z('MM', Sd, Od),
    Z('MMM', function (a, b) {
      return b.monthsShortRegex(a)
    }),
    Z('MMMM', function (a, b) {
      return b.monthsRegex(a)
    }),
    ba(['M', 'MM'], function (a, b) {
      b[fe] = u(a) - 1
    }),
    ba(['MMM', 'MMMM'], function (a, b, c, d) {
      const e = c._locale.monthsParse(a, d, c._strict)
      e != null ? (b[fe] = e) : (n(c).invalidMonth = a)
    })
  var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    const pe =
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      );
    const qe = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    var re = be;
    var se = be
  U('Y', 0, 0, function () {
    const a = this.year()
    return a <= 9999 ? '' + a : '+' + a
  }),
    U(0, ['YY', 2], 0, function () {
      return this.year() % 100
    }),
    U(0, ['YYYY', 4], 0, 'year'),
    U(0, ['YYYYY', 5], 0, 'year'),
    U(0, ['YYYYYY', 6, !0], 0, 'year'),
    J('year', 'y'),
    M('year', 1),
    Z('Y', Zd),
    Z('YY', Sd, Od),
    Z('YYYY', Wd, Qd),
    Z('YYYYY', Xd, Rd),
    Z('YYYYYY', Xd, Rd),
    ba(['YYYYY', 'YYYYYY'], ee),
    ba('YYYY', function (b, c) {
      c[ee] = b.length === 2 ? a.parseTwoDigitYear(b) : u(b)
    }),
    ba('YY', function (b, c) {
      c[ee] = a.parseTwoDigitYear(b)
    }),
    ba('Y', function (a, b) {
      b[ee] = parseInt(a, 10)
    }),
    (a.parseTwoDigitYear = function (a) {
      return u(a) + (u(a) > 68 ? 1900 : 2e3)
    })
  const te = O('FullYear', !0)
  U('w', ['ww', 2], 'wo', 'week'),
    U('W', ['WW', 2], 'Wo', 'isoWeek'),
    J('week', 'w'),
    J('isoWeek', 'W'),
    M('week', 5),
    M('isoWeek', 5),
    Z('w', Sd),
    Z('ww', Sd, Od),
    Z('W', Sd),
    Z('WW', Sd, Od),
    ca(['w', 'ww', 'W', 'WW'], function (a, b, c, d) {
      b[d.substr(0, 1)] = u(a)
    })
  const ue = { dow: 0, doy: 6 }
  U('d', 0, 'do', 'day'),
    U('dd', 0, 0, function (a) {
      return this.localeData().weekdaysMin(this, a)
    }),
    U('ddd', 0, 0, function (a) {
      return this.localeData().weekdaysShort(this, a)
    }),
    U('dddd', 0, 0, function (a) {
      return this.localeData().weekdays(this, a)
    }),
    U('e', 0, 0, 'weekday'),
    U('E', 0, 0, 'isoWeekday'),
    J('day', 'd'),
    J('weekday', 'e'),
    J('isoWeekday', 'E'),
    M('day', 11),
    M('weekday', 11),
    M('isoWeekday', 11),
    Z('d', Sd),
    Z('e', Sd),
    Z('E', Sd),
    Z('dd', function (a, b) {
      return b.weekdaysMinRegex(a)
    }),
    Z('ddd', function (a, b) {
      return b.weekdaysShortRegex(a)
    }),
    Z('dddd', function (a, b) {
      return b.weekdaysRegex(a)
    }),
    ca(['dd', 'ddd', 'dddd'], function (a, b, c, d) {
      const e = c._locale.weekdaysParse(a, d, c._strict)
      e != null ? (b.d = e) : (n(c).invalidWeekday = a)
    }),
    ca(['d', 'e', 'E'], function (a, b, c, d) {
      b[d] = u(a)
    })
  const ve = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_'
    );
    const we = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    const xe = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    var ye = be;
    var ze = be;
    var Ae = be
  U('H', ['HH', 2], 0, 'hour'),
    U('h', ['hh', 2], 0, Ra),
    U('k', ['kk', 2], 0, Sa),
    U('hmm', 0, 0, function () {
      return '' + Ra.apply(this) + T(this.minutes(), 2)
    }),
    U('hmmss', 0, 0, function () {
      return '' + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    }),
    U('Hmm', 0, 0, function () {
      return '' + this.hours() + T(this.minutes(), 2)
    }),
    U('Hmmss', 0, 0, function () {
      return '' + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    }),
    Ta('a', !0),
    Ta('A', !1),
    J('hour', 'h'),
    M('hour', 13),
    Z('a', Ua),
    Z('A', Ua),
    Z('H', Sd),
    Z('h', Sd),
    Z('k', Sd),
    Z('HH', Sd, Od),
    Z('hh', Sd, Od),
    Z('kk', Sd, Od),
    Z('hmm', Td),
    Z('hmmss', Ud),
    Z('Hmm', Td),
    Z('Hmmss', Ud),
    ba(['H', 'HH'], he),
    ba(['k', 'kk'], function (a, b, c) {
      const d = u(a)
      b[he] = d === 24 ? 0 : d
    }),
    ba(['a', 'A'], function (a, b, c) {
      ;(c._isPm = c._locale.isPM(a)), (c._meridiem = a)
    }),
    ba(['h', 'hh'], function (a, b, c) {
      ;(b[he] = u(a)), (n(c).bigHour = !0)
    }),
    ba('hmm', function (a, b, c) {
      const d = a.length - 2
      ;(b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d))),
        (n(c).bigHour = !0)
    }),
    ba('hmmss', function (a, b, c) {
      const d = a.length - 4;
        const e = a.length - 2
      ;(b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d, 2))),
        (b[je] = u(a.substr(e))),
        (n(c).bigHour = !0)
    }),
    ba('Hmm', function (a, b, c) {
      const d = a.length - 2
      ;(b[he] = u(a.substr(0, d))), (b[ie] = u(a.substr(d)))
    }),
    ba('Hmmss', function (a, b, c) {
      const d = a.length - 4;
        const e = a.length - 2
      ;(b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d, 2))),
        (b[je] = u(a.substr(e)))
    })
  let Be;
    const Ce = /[ap]\.?m?\.?/i;
    const De = O('Hours', !0);
    var Ee = {
      calendar: Bd,
      longDateFormat: Cd,
      invalidDate: Dd,
      ordinal: Ed,
      dayOfMonthOrdinalParse: Fd,
      relativeTime: Gd,
      months: pe,
      monthsShort: qe,
      week: ue,
      weekdays: ve,
      weekdaysMin: xe,
      weekdaysShort: we,
      meridiemParse: Ce,
    };
    var Fe = {};
    var Ge = {};
    var He =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var Ie =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var Je = /Z|[+-]\d\d(?::?\d\d)?/;
    var Ke = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, !1],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
      ['YYYYDDD', /\d{7}/],
    ];
    var Le = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/],
    ];
    var Me = /^\/?Date\((\-?\d+)/i;
    var Ne =
      /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/
  ;(a.createFromInputFallback = x(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (a) {
      a._d = new Date(a._i + (a._useUTC ? ' UTC' : ''))
    }
  )),
    (a.ISO_8601 = function () {}),
    (a.RFC_2822 = function () {})
  const Oe = x(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        const a = tb.apply(null, arguments)
        return this.isValid() && a.isValid() ? (a < this ? this : a) : p()
      }
    );
    const Pe = x(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        const a = tb.apply(null, arguments)
        return this.isValid() && a.isValid() ? (a > this ? this : a) : p()
      }
    );
    const Qe = function () {
      return Date.now ? Date.now() : +new Date()
    };
    var Re = [
      'year',
      'quarter',
      'month',
      'week',
      'day',
      'hour',
      'minute',
      'second',
      'millisecond',
    ]
  Db('Z', ':'),
    Db('ZZ', ''),
    Z('Z', _d),
    Z('ZZ', _d),
    ba(['Z', 'ZZ'], function (a, b, c) {
      ;(c._useUTC = !0), (c._tzm = Eb(_d, a))
    })
  var Se = /([\+\-]|\d\d)/gi
  a.updateOffset = function () {}
  var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    var Ue =
      /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/
  ;(Sb.fn = Ab.prototype), (Sb.invalid = zb)
  const Ve = Wb(1, 'add');
    const We = Wb(-1, 'subtract')
  ;(a.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
    (a.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]')
  const Xe = x(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (a) {
      return void 0 === a ? this.localeData() : this.locale(a)
    }
  )
  U(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100
  }),
    U(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100
    }),
    Dc('gggg', 'weekYear'),
    Dc('ggggg', 'weekYear'),
    Dc('GGGG', 'isoWeekYear'),
    Dc('GGGGG', 'isoWeekYear'),
    J('weekYear', 'gg'),
    J('isoWeekYear', 'GG'),
    M('weekYear', 1),
    M('isoWeekYear', 1),
    Z('G', Zd),
    Z('g', Zd),
    Z('GG', Sd, Od),
    Z('gg', Sd, Od),
    Z('GGGG', Wd, Qd),
    Z('gggg', Wd, Qd),
    Z('GGGGG', Xd, Rd),
    Z('ggggg', Xd, Rd),
    ca(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (a, b, c, d) {
      b[d.substr(0, 2)] = u(a)
    }),
    ca(['gg', 'GG'], function (b, c, d, e) {
      c[e] = a.parseTwoDigitYear(b)
    }),
    U('Q', 0, 'Qo', 'quarter'),
    J('quarter', 'Q'),
    M('quarter', 7),
    Z('Q', Nd),
    ba('Q', function (a, b) {
      b[fe] = 3 * (u(a) - 1)
    }),
    U('D', ['DD', 2], 'Do', 'date'),
    J('date', 'D'),
    M('date', 9),
    Z('D', Sd),
    Z('DD', Sd, Od),
    Z('Do', function (a, b) {
      return a
        ? b._dayOfMonthOrdinalParse || b._ordinalParse
        : b._dayOfMonthOrdinalParseLenient
    }),
    ba(['D', 'DD'], ge),
    ba('Do', function (a, b) {
      b[ge] = u(a.match(Sd)[0], 10)
    })
  const Ye = O('Date', !0)
  U('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
    J('dayOfYear', 'DDD'),
    M('dayOfYear', 4),
    Z('DDD', Vd),
    Z('DDDD', Pd),
    ba(['DDD', 'DDDD'], function (a, b, c) {
      c._dayOfYear = u(a)
    }),
    U('m', ['mm', 2], 0, 'minute'),
    J('minute', 'm'),
    M('minute', 14),
    Z('m', Sd),
    Z('mm', Sd, Od),
    ba(['m', 'mm'], ie)
  const Ze = O('Minutes', !1)
  U('s', ['ss', 2], 0, 'second'),
    J('second', 's'),
    M('second', 15),
    Z('s', Sd),
    Z('ss', Sd, Od),
    ba(['s', 'ss'], je)
  const $e = O('Seconds', !1)
  U('S', 0, 0, function () {
    return ~~(this.millisecond() / 100)
  }),
    U(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10)
    }),
    U(0, ['SSS', 3], 0, 'millisecond'),
    U(0, ['SSSS', 4], 0, function () {
      return 10 * this.millisecond()
    }),
    U(0, ['SSSSS', 5], 0, function () {
      return 100 * this.millisecond()
    }),
    U(0, ['SSSSSS', 6], 0, function () {
      return 1e3 * this.millisecond()
    }),
    U(0, ['SSSSSSS', 7], 0, function () {
      return 1e4 * this.millisecond()
    }),
    U(0, ['SSSSSSSS', 8], 0, function () {
      return 1e5 * this.millisecond()
    }),
    U(0, ['SSSSSSSSS', 9], 0, function () {
      return 1e6 * this.millisecond()
    }),
    J('millisecond', 'ms'),
    M('millisecond', 16),
    Z('S', Vd, Nd),
    Z('SS', Vd, Od),
    Z('SSS', Vd, Pd)
  let _e
  for (_e = 'SSSS'; _e.length <= 9; _e += 'S') Z(_e, Yd)
  for (_e = 'S'; _e.length <= 9; _e += 'S') ba(_e, Mc)
  const af = O('Milliseconds', !1)
  U('z', 0, 0, 'zoneAbbr'), U('zz', 0, 0, 'zoneName')
  const bf = r.prototype
  ;(bf.add = Ve),
    (bf.calendar = Zb),
    (bf.clone = $b),
    (bf.diff = fc),
    (bf.endOf = sc),
    (bf.format = kc),
    (bf.from = lc),
    (bf.fromNow = mc),
    (bf.to = nc),
    (bf.toNow = oc),
    (bf.get = R),
    (bf.invalidAt = Bc),
    (bf.isAfter = _b),
    (bf.isBefore = ac),
    (bf.isBetween = bc),
    (bf.isSame = cc),
    (bf.isSameOrAfter = dc),
    (bf.isSameOrBefore = ec),
    (bf.isValid = zc),
    (bf.lang = Xe),
    (bf.locale = pc),
    (bf.localeData = qc),
    (bf.max = Pe),
    (bf.min = Oe),
    (bf.parsingFlags = Ac),
    (bf.set = S),
    (bf.startOf = rc),
    (bf.subtract = We),
    (bf.toArray = wc),
    (bf.toObject = xc),
    (bf.toDate = vc),
    (bf.toISOString = ic),
    (bf.inspect = jc),
    (bf.toJSON = yc),
    (bf.toString = hc),
    (bf.unix = uc),
    (bf.valueOf = tc),
    (bf.creationData = Cc),
    (bf.year = te),
    (bf.isLeapYear = ra),
    (bf.weekYear = Ec),
    (bf.isoWeekYear = Fc),
    (bf.quarter = bf.quarters = Kc),
    (bf.month = ka),
    (bf.daysInMonth = la),
    (bf.week = bf.weeks = Ba),
    (bf.isoWeek = bf.isoWeeks = Ca),
    (bf.weeksInYear = Hc),
    (bf.isoWeeksInYear = Gc),
    (bf.date = Ye),
    (bf.day = bf.days = Ka),
    (bf.weekday = La),
    (bf.isoWeekday = Ma),
    (bf.dayOfYear = Lc),
    (bf.hour = bf.hours = De),
    (bf.minute = bf.minutes = Ze),
    (bf.second = bf.seconds = $e),
    (bf.millisecond = bf.milliseconds = af),
    (bf.utcOffset = Hb),
    (bf.utc = Jb),
    (bf.local = Kb),
    (bf.parseZone = Lb),
    (bf.hasAlignedHourOffset = Mb),
    (bf.isDST = Nb),
    (bf.isLocal = Pb),
    (bf.isUtcOffset = Qb),
    (bf.isUtc = Rb),
    (bf.isUTC = Rb),
    (bf.zoneAbbr = Nc),
    (bf.zoneName = Oc),
    (bf.dates = x('dates accessor is deprecated. Use date instead.', Ye)),
    (bf.months = x('months accessor is deprecated. Use month instead', ka)),
    (bf.years = x('years accessor is deprecated. Use year instead', te)),
    (bf.zone = x(
      'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
      Ib
    )),
    (bf.isDSTShifted = x(
      'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
      Ob
    ))
  const cf = C.prototype
  ;(cf.calendar = D),
    (cf.longDateFormat = E),
    (cf.invalidDate = F),
    (cf.ordinal = G),
    (cf.preparse = Rc),
    (cf.postformat = Rc),
    (cf.relativeTime = H),
    (cf.pastFuture = I),
    (cf.set = A),
    (cf.months = fa),
    (cf.monthsShort = ga),
    (cf.monthsParse = ia),
    (cf.monthsRegex = na),
    (cf.monthsShortRegex = ma),
    (cf.week = ya),
    (cf.firstDayOfYear = Aa),
    (cf.firstDayOfWeek = za),
    (cf.weekdays = Fa),
    (cf.weekdaysMin = Ha),
    (cf.weekdaysShort = Ga),
    (cf.weekdaysParse = Ja),
    (cf.weekdaysRegex = Na),
    (cf.weekdaysShortRegex = Oa),
    (cf.weekdaysMinRegex = Pa),
    (cf.isPM = Va),
    (cf.meridiem = Wa),
    $a('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal (a) {
        const b = a % 10;
          const c =
            u((a % 100) / 10) === 1
              ? 'th'
              : b === 1
              ? 'st'
              : b === 2
              ? 'nd'
              : b === 3
              ? 'rd'
              : 'th'
        return a + c
      },
    }),
    (a.lang = x('moment.lang is deprecated. Use moment.locale instead.', $a)),
    (a.langData = x(
      'moment.langData is deprecated. Use moment.localeData instead.',
      bb
    ))
  var df = Math.abs;
    const ef = id('ms');
    const ff = id('s');
    const gf = id('m');
    const hf = id('h');
    const jf = id('d');
    const kf = id('w');
    const lf = id('M');
    const mf = id('y');
    const nf = kd('milliseconds');
    const of = kd('seconds');
    const pf = kd('minutes');
    const qf = kd('hours');
    const rf = kd('days');
    const sf = kd('months');
    const tf = kd('years');
    var uf = Math.round;
    var vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
    var wf = Math.abs;
    const xf = Ab.prototype
  return (
    (xf.isValid = yb),
    (xf.abs = $c),
    (xf.add = ad),
    (xf.subtract = bd),
    (xf.as = gd),
    (xf.asMilliseconds = ef),
    (xf.asSeconds = ff),
    (xf.asMinutes = gf),
    (xf.asHours = hf),
    (xf.asDays = jf),
    (xf.asWeeks = kf),
    (xf.asMonths = lf),
    (xf.asYears = mf),
    (xf.valueOf = hd),
    (xf._bubble = dd),
    (xf.get = jd),
    (xf.milliseconds = nf),
    (xf.seconds = of),
    (xf.minutes = pf),
    (xf.hours = qf),
    (xf.days = rf),
    (xf.weeks = ld),
    (xf.months = sf),
    (xf.years = tf),
    (xf.humanize = qd),
    (xf.toISOString = rd),
    (xf.toString = rd),
    (xf.toJSON = rd),
    (xf.locale = pc),
    (xf.localeData = qc),
    (xf.toIsoString = x(
      'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
      rd
    )),
    (xf.lang = Xe),
    U('X', 0, 0, 'unix'),
    U('x', 0, 0, 'valueOf'),
    Z('x', Zd),
    Z('X', ae),
    ba('X', function (a, b, c) {
      c._d = new Date(1e3 * parseFloat(a, 10))
    }),
    ba('x', function (a, b, c) {
      c._d = new Date(u(a))
    }),
    (a.version = '2.18.1'),
    b(tb),
    (a.fn = bf),
    (a.min = vb),
    (a.max = wb),
    (a.now = Qe),
    (a.utc = l),
    (a.unix = Pc),
    (a.months = Vc),
    (a.isDate = h),
    (a.locale = $a),
    (a.invalid = p),
    (a.duration = Sb),
    (a.isMoment = s),
    (a.weekdays = Xc),
    (a.parseZone = Qc),
    (a.localeData = bb),
    (a.isDuration = Bb),
    (a.monthsShort = Wc),
    (a.weekdaysMin = Zc),
    (a.defineLocale = _a),
    (a.updateLocale = ab),
    (a.locales = cb),
    (a.weekdaysShort = Yc),
    (a.normalizeUnits = K),
    (a.relativeTimeRounding = od),
    (a.relativeTimeThreshold = pd),
    (a.calendarFormat = Yb),
    (a.prototype = bf),
    a
  )
})
