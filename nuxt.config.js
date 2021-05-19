export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: "static",
  srcDir: "src",
  buildDir: "functions/.nuxt",

  head: {
    title: "AwardBox",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      }
    ],

    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/vue-js-modal.js",
    "~/plugins/firebaseConfig.js",
    "~/plugins/vue-awesome-swiper.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
    "@nuxtjs/color-mode",
    "@nuxt/postcss8",
    "@nuxtjs/pwa"
  ],

  tailwindcss: {
    jit: true
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  logo: "~/components/lottie/logo.vue",

  pwa: {
    meta: {
      title: "AwardsBox",
      author: "AwardxBox Team",
      viewport: "width = 320, initial-scale = 2.3, user-scalable = no",
      mobileAppIOS: true
    },
    manifest: {
      name: "AwardsBox Progressive Web App",
      short_name: "AwardsBox PWA",
      lang: "en"
    }
    // workbox: {
    //   /* workbox options */
    //   autoRegister: true,
    //   enabled: true,
    //   runtimeCaching: [
    //     {
    //       urlPattern: 'http://localhost:3000/*',
    //       strategyOptions: {
    //         cacheName: 'our-cache',
    //       },
    //       strategyPlugins: [{
    //          use: 'Expiration',
    //          config: {
    //            maxEntries: 10,
    //            maxAgeSeconds: 300
    //          }
    //        }]
    //     }
    //   ]
    // }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "bootstrap-vue/nuxt",
    "nuxt-typeform",
    "@nuxtjs/amp",
    "@nuxtjs/onesignal",
    "@nuxtjs/pwa"
    // ['nuxt-bootstrap-slider',]
  ],

  oneSignal: {
    // Use CDN
    cdn: true,
    // Use any custom URL
    OneSignalSDK: "https://cdn.onesignal.com/sdks/OneSignalSDK.js",
    init: {
      appId: "fbda13d4-5ca9-45b3-9838-d7b4af1e182e",
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  },

  amp: {
    // Options
    origin: "http://localhost:3000",
    mode: "hybrid"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
