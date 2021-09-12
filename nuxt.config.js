export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Conoda Rôleplay',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/fonts.css',
    '~/assets/css/common.css',
    '~/assets/css/keyframes.css',
  ],

  server: {
      port: 9876,
  },

  axios: {
    baseURL: 'http://localhost',
    browserBaseURL: 'http://localhost:9876',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/client/header.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/Globals',
        {
          path: '~/components/Main',
          prefix: 'Main'
        },
        {
          path: '~/components/Main/Sections',
          prefix: 'Section'
        },
        {
          path: '~/components/Wiki',
          prefix: 'Wiki'
        },
        {
          path: '~/components/Shop',
          prefix: 'Shop'
        },
        {
          path: '~/components/Form',
          prefix: 'Form'
        }
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'wikiUrls',
        path: '/wiki/:category/:sub',
        component: resolve(__dirname, 'pages/wiki'),
      },
      {
        name: 'formsUrls',
        path: '/forms/:id(\\S{12})',
        component: resolve(__dirname, 'pages/forms'),
      },
      {
        name: 'verificationUrls',
        path: '/auth/verification/:code(\\d{7})',
        component: 'pages/auth/verification.vue',
      })
    }
  },

  loading: {
    color: '#0077E0',
    height: '5px'
  },
}
