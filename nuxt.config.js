const webpack = require('webpack')

export default {

  target: 'static',

  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav48.ico' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js',
      },
    ],
  },

  css: [
    '@/assets/css/font-awesome.css',
    '@/assets/css/lineicons.css',
    '@/assets/css/weather-icons.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/styles.css',
  ],

  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/vue2-filters',
    '~/plugins/v-select.js',
    '~/plugins/vue-composition.js',
    '~/plugins/vuePhoneNumberInput.js',
    { src: "~/plugins/vue-js-modal", mode: "client" },
    { src: '~/plugins/jquery.js', ssr: false },
    { src: '~/plugins/vue-html2pdf', mode: 'client' },
    { src: '~/plugins/datePicker', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/recaptcha',
    '@alireza-ab/persian-date/nuxt',
    [
      '@nuxt-modules/cache',
      {
        browser: {
          pages: [
            ['/', { 'max-age': 3600, 'stale-when-revalidate': 10 }],
            // ['/product', { 'max-age': 3600, 'stale-when-revalidate': 10 }],
            // ['/category', { 'max-age': 3600, 'stale-when-revalidate': 10 }]
          ],
        },
      },
    ],
  ],
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'raw-loader'],
      },
    ],
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    'nuxt-vue-multiselect',
    'cookie-universal-nuxt',
    '@nuxt/http',
    'nuxt-leaflet',
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BFormInput',
      'BButton',
      'BTable',
      'BModal',
      'BIcon',
      'BIconCalendar',
      'VBTogglePlugin',
      'BVModalPlugin',
    ],
    directives: [
      'VBModal',
      'VBPopover',
      'VBTooltip',
      'VBScrollspy',
    ],
    componentPlugins: ['IconsPlugin'],
    icons: true,
  },

  recaptcha: {
    hideBadge: false,
    siteKey: '6Ld5gOAeAAAAANskjaZcwMPX-GuTw_-kWx8ZgGVp',
    version: 3,
    size: 'compact',
  },

  axios: {
    proxy: true,
    N8N_USE_DEPRECATED_REQUEST_LIB: true,
  },

  proxy: {
    '/AirLowFareSearch': 'https://apidemo.partocrs.com/Rest/Air',
    '/login':'http://127.0.0.1:8000/rest/passenger',
    '/login/verify':'http://127.0.0.1:8000/rest/passenger',
    '/search':'http://127.0.0.1:8000/rest/flights'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false,
        },
      },
    },
  },

  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {},

  build: {
    babel: {
      compact: true,
      plugins: [
        [
          'component', {
            libraryName: 'maz-ui',
            styleLibraryName: 'css'
          }
        ]
      ]
     },
     extend (config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      })
    }
  },
}
