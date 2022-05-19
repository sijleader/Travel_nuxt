'use strict'

const mobileViewport = 992
let isSafari = navigator.userAgent.includes('Safari')
const isChrome = navigator.userAgent.includes('Chrome')
if (isSafari && isChrome) {
  isSafari = false
}

$(document).ready(function () {
  OwlCarousel()

  $('.blur-area').blurArea()
  $('.ws-action').windowScrollAction()
  checkboxes()
  afternavHeight()
  activeBookmark()
  magnificLightbox()
  priceSlider()
  BSTabsActions()
  heroSearchSections()
  $('.quantity-selector').quantitySelector()
  autocomplete()
  searchResultsCollapse()
  comingSoonCountdown()
  smoothScroll()

  if ($(window).width() > mobileViewport) {
    YouTubeVideo()
    stickySidebars()
  }

  if ($(window).width() < mobileViewport) {
    mobileFilters()
  }
})

googleMaps()

function smoothScroll() {
  const scroll = new SmoothScroll('a[data-scroll]')
}

function YouTubeVideo() {
  const $video = $('#youtube-video')
  if ($video.length) {
    $video.YTPlayer({
      fitToBackground: true,
      videoId: $video.data('video-id'),
      events: {
        onReady () {
          $video.data('ytPlayer').player.mute()
        },
      },
    })

    $(document).on('scroll', function () {
      videoScroll()
    })

    function videoScroll() {
      const fraction = 0.75;
        const player = $video.data('ytPlayer').player;
        const videoHeight = $video.height();
        const videoOffsetTop = $video.offset().top;
        const windowScrollY = window.scrollY

      if (windowScrollY > (videoHeight + videoOffsetTop) * fraction) {
        player.pauseVideo()
      } else {
        player.playVideo()
      }
    }
  }
}

function OwlCarousel() {
  $('.owl-carousel').each(function () {
    const $carousel = $(this)
    $carousel.owlCarousel({
      // dots : false,
      // items : $carousel.data("items"),
      slideBy: $carousel.data('slideby'),
      center: $carousel.data('center'),
      loop: $carousel.data('loop'),
      margin: $carousel.data('margin'),

      autoplay: $carousel.data('autoplay'),
      autoplayTimeout: $carousel.data('autoplay-timeout'),
      navText: [
        '<span class="fa fa-angle-left"><span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },
        992: {
          items: $carousel.data('items'),
          dots: false,
          nav: $carousel.data('nav'),
        },
      },
    })
  })
}

function stickySidebars() {
  $('.sticky-col').stick_in_parent({
    parent: $('#sticky-parent'),
  })

  $('.sticky-cols').stick_in_parent({
    parent: $('.sticky-parent'),
  })
}

function mobileFilters() {
  if ($('#mobileFilters').length) {
    $(document).on('scroll', function () {
      filtersScroll()
    })
  }

  function filtersScroll() {
    const filters = $('#mobileFilters')
    const footer = $('#mainFooter')

    if (
      filters.offset().top + filters.height() > footer.offset().top - 10 ||
      !$(document).scrollTop()
    ) {
      filters.removeClass('active')
    } else {
      filters.addClass('active')
    }

    if ($(document).scrollTop + window.innerHeight > footer.offset().top) {
      filters.addClass('active')
    }
  }
}

function checkboxes() {
  $('.icheck, .iradio').iCheck({
    checkboxClass: 'icheck',
    radioClass: 'iradio',
  })
}

function googleMaps() {
  if ($('.google-map').length) {
    window.initMap = function () {
      $('.google-map').gmap()
    }
  } else {
    window.initMap = function () {
      
    }
  }
}

function afternavHeight() {
  $('.afternav-height').each(function () {
    const $mainNav = $('#main-nav');
      const mainNavHeight = $mainNav.height();
      const height = $(window).height() - mainNavHeight

    $(this).css('height', height)
  })
}

function activeBookmark() {
  $('.theme-search-results-item-bookmark').each(function (index, el) {
    $(el).on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('active')
    })
  })
}

function magnificLightbox() {
  $('.magnific-gallery').each(function (index, el) {
    $(el).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    })
  })

  $('.magnific-gallery-link').each(function (index, value) {
    const gallery = $(this)
    const galleryImages = $(this).data('items').split(',')
    const items = []
    for (let i = 0; i < galleryImages.length; i++) {
      items.push({
        src: galleryImages[i],
        title: '',
      })
    }
    gallery.magnificPopup({
      mainClass: 'mfp-fade',
      items,
      gallery: {
        enabled: true,
        tPrev: $(this).data('prev-text'),
        tNext: $(this).data('next-text'),
      },
      type: 'image',
    })
  })

  $('.magnific-inline').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
  })

  $('.magnific-iframe').magnificPopup({
    type: 'iframe',
  })
}

function priceSlider() {
  $('#price-slider').ionRangeSlider({
    type: 'double',
    prefix: ' ت ',
  })

  $('#price-slider-mob').ionRangeSlider({
    type: 'double',
    prefix: ' ت ',
  })
}

function BSTabsActions() {
  $('#sticky-tab').on('shown.bs.tab', function (e) {
    $('.sticky-tab-col').stick_in_parent({
      parent: $('#sticky-tab-parent'),
    })
  })

  $('#slideTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    const control = $(this).attr('aria-controls')
    const active = $('#slideTabsSlides').find('.active')[0]
    const target = $('#slideTabsSlides').find("[data-tab='" + control + "']")[0]
    if (active !== target) {
      $(active).removeClass('active')
      $(target).addClass('active')
    }
  })
}

function heroSearchSections() {
  $('.theme-hero-search-section').each(function () {
    let label, input

    label = $(this).find('.theme-hero-search-section-label')
    input = $(this).find('.theme-hero-search-section-input')

    if (input.val()) {
      label.addClass('active')
    }

    input.focus(function () {
      label.addClass('active')
    })

    input.blur(function () {
      if (!input.val()) {
        label.removeClass('active')
      }
    })
  })
}

function autocomplete() {
  $('.typeahead').typeahead({
    minLength: 3,
    showHintOnFocus: true,
    source (q, cb) {
      return $.ajax({
        dataType: 'jsonp',
        type: 'get',
        url: 'http://gd.geobytes.com/AutoCompleteCity?callback=?&q=' + q,
        chache: false,
        success (data) {
          const res = []
          $.each(data, function (index, val) {
            if (val !== '%s') {
              res.push({
                id: index,
                name: val,
              })
            }
          })
          cb(res)
        },
      })
    },
  })
}

function searchResultsCollapse() {
  $('.theme-search-results-item-collapse').on('shown.bs.collapse', function () {
    $(this).parents('.theme-search-results-item').addClass('active')
  })

  $('.theme-search-results-item-collapse').on(
    'hidden.bs.collapse',
    function () {
      $(this).parents('.theme-search-results-item').removeClass('active')
    }
  )
}

function comingSoonCountdown() {
  $('#commingSoonCountdown').countdown('1400/10/10', function (e) {
    $(this).html(
      e.strftime(
        '' +
          '<div><p>%D</p><span>روز</span></div>' +
          '<div><p>%H</p><span>ساعت</span></div>' +
          '<div><p>%M</p><span>دقیه</span></div>' +
          '<div><p>%S</p><span>ثانیه</span></div>'
      )
    )
  })
}

$('.mobile-picker').each(function (i, item) {
  if (!isSafari) {
    $(item).attr('type', 'text')
    $(item).val($(item).attr('value'))
    $(item).on('focus', function () {
      $(item).attr('type', 'date')
    })
    $(item).on('blur', function () {
      $(item).attr('type', 'text')
    })
  }
})
