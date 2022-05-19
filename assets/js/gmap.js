/*
 *  google maps wrapper
 */
;(function ($, window, document, undefined) {
  'use strict'

  // Create the defaults once
  const pluginName = 'gmap';
    const defaults = {
      mapStyle: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffffff' }, { lightness: 17 }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 18 }],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#dedede' }, { lightness: 21 }],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            { visibility: 'on' },
            { color: '#ffffff' },
            { lightness: 16 },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            { saturation: 36 },
            { color: '#333333' },
            { lightness: 40 },
          ],
        },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#fefefe' }, { lightness: 20 }],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
        },
      ],
      zoom: 14,
      mapIcon: 'img/map-marker.png',
      google: null,
      tabMap: true,
      nearbySearch: false,
    };
    let mapStyle;
    let service;
    let tabItem;
    let markers;
    let markersExists = false

  function Plugin(element, options) {
    this.element = element

    this.settings = $.extend({}, defaults, options)
    this._defaults = defaults
    this._name = pluginName
    this.init()
  }

  $.extend(Plugin.prototype, {
    map: null,
    loc: null,
    init () {
      ;(tabItem = $(this.element).attr('data-tab')),
        (markers = $(this.element).attr('data-markers'))

      if (typeof markers !== typeof undefined && markers !== false) {
        markers = $.parseJSON(markers)
        markersExists = true
      }

      this.loc()
      if (tabItem === 'false') {
        this.setMap()
      } else {
        this.tabBnt()
      }
    },
    setMap () {
      this.map = new google.maps.Map(this.element, {
        zoom: this.settings.zoom,
        center: this.loc,
        mapTypeControl: false,
      })

      if (markersExists) {
        this.setMarkers()
      } else {
        this.marker()
      }

      this.mapStyle()
      if (this.settings.nearbySearch) {
        this.service()
      }
    },
    tabBnt () {
      const parent = $(this.element).closest('.tab-pane');
        const id = parent.attr('id');
        const href = '#' + id;
        const $tab = $('a[href="' + href + '"]');
        const self = this

      $tab.on('shown.bs.tab', function (e) {
        if (!self.map) {
          self.setMap()
        }
      })
    },
    loc () {
      const lng = $(this.element).data('lng');
        const lat = $(this.element).data('lat')

      this.loc = new google.maps.LatLng(lat, lng)
    },
    mapStyle () {
      mapStyle = new google.maps.StyledMapType(this.settings.mapStyle)
      this.map.mapTypes.set('styled_map', mapStyle)
      this.map.setMapTypeId('styled_map')
    },
    setMarkers () {
      for (let i = markers.length - 1; i >= 0; i--) {
        new google.maps.Marker({
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          map: this.map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5,
            fillColor: '#ff6c2d',
            fillOpacity: 1,
            strokeColor: 'white',
            strokeWeight: 2,
          },
        })
      }
    },
    marker () {
      new google.maps.Marker({
        position: this.loc,
        map: this.map,
        icon: this.settings.mapIcon,
      })
    },
    service () {
      service = new google.maps.places.PlacesService(map)
      service.nearbySearch(
        {
          location: loc,
          radius: 300,
          type: ['store'],
          // this: this
        },
        this.processService
      )
    },
    processService (results, status, pagination) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        
      } else {
        self.serviceMarkers(results)
      }
    },
    serviceMarkers (places) {
      const bounds = new google.maps.LatLngBounds()

      for (var i = 0, place; (place = places[i]); i++) {
        var infowindow = new google.maps.InfoWindow()
        // console.log(map);
        const infoMarker = new google.maps.Marker({
          map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeOpacity: 0,
            fillColor: '#0093d2',
            fillOpacity: 0.5,
            scale: 2.5,
          },
          title: place.name,
          position: place.geometry.location,
        })

        google.maps.event.addListener(infoMarker, 'mouseover', function () {
          infowindow.setContent(this.title)
          infowindow.open(map, this)
        })

        google.maps.event.addListener(infoMarker, 'mouseout', function () {
          infowindow.close(map, this)
        })

        bounds.extend(place.geometry.location)
      }
      map.fitBounds(bounds)
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
