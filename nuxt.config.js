/* eslint-disable nuxt/no-cjs-in-config */
// eslint-disable-next-line nuxt/no-cjs-in-config
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
// import { LoaderOptionsPlugin } from 'webpack';
// import 'vue-nav-tabs/themes/vue-tabs.css'
// import {VueTabs, VTab} from 'vue-nav-tabs'
export default {
  // server: {
  //   host: '192.168.1.150'
  // },
  target: 'static',
  // ssr:false,

  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: '~/assets/css/font-awesome.css',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: '~/assets/css/lineicons.css',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: '~/assets/css/weather-icons.css',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: '~/assets/css/bootstrap.css',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: '~/assets/css/styles.css',
      // },
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
    // '@/assets/css/app.css',
  ],

  plugins: [
    '~/plugins/bootstrap.js',
    { src: '~/plugins/jquery.js', ssr: false },
    '~/plugins/vue2-filters',
    { src: '~/plugins/datePicker', ssr: false },
    {
      src: '~/plugins/modal.js',
      mode: 'client',
    },
    {
      src: '~/plugins/multiselect.js',
      mode: 'client',
    },
    '~/plugins/v-select.js'
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
  // mode: 'production',

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    'nuxt-vue-multiselect',
    'cookie-universal-nuxt',
    '@nuxt/http',
    // ['nuxt-vuex-localstorage', {
    //   sessionStorage: ['sessionid']
    // }]
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
      // 'NavbarPlugin',
      'VBTogglePlugin',
      'BVModalPlugin',
    ],
    directives: [
      'VBModal',
      'VBPopover',
      'VBTooltip',
      'VBScrollspy',
      // 'NavbarPlugin',
    ],
    componentPlugins: ['IconsPlugin'],
    icons: true,
  },

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    // language: String,   // Recaptcha language (v2)
    siteKey: '6Ld5gOAeAAAAANskjaZcwMPX-GuTw_-kWx8ZgGVp', // Site key for requests
    version: 3, // Version
    size: 'compact', // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // publicRuntimeConfig: {
  //     recaptcha: {
  //       /* reCAPTCHA options */
  //       siteKey: process.env.RECAPTCHA_SITE_KEY // for example
  //     }
  //   },

  axios: {
    // baseURL: 'http://127.0.0.1:3333/api',
    // baseURL: 'https://apidemo.partocrs.com/Rest/Air',
    proxy: true,
    N8N_USE_DEPRECATED_REQUEST_LIB: true,
  },

  proxy: {
    '/AirLowFareSearch': 'https://apidemo.partocrs.com/Rest/Air',
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
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery',
    //   }),
    // ],
  },
}
