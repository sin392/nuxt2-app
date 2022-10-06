export default {
  srcDir: 'src/',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'nuxt2-app',
    title: 'Kosen-Sparkle',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: '高専生による高専生のためのキャリア支援組織 "Kosen-Sparkle"',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:site_name', content: 'Kosen-Sparkle' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://kosen-sparkle.com' },
      { name: 'og:title', content: 'Kosen-Sparkle' },
      {
        name: 'og:description',
        content: '高専生による高専生のためのキャリア支援組織 "Kosen-Sparkle"',
      },
      // twitter用のtagはcardとタイトルだけあれば良いとか
      // NOTE: TwitterのシェアデバッガーやOGP確認サイトだと認識されないことがある (Facebookだと認識する？)
      { name: 'og:image', content: '/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Kosen-Sparkle HomePage' },
      { name: 'twitter:site', content: '@kosen_sparkle' },
      { name: 'twitter:image', content: 'https://kosen-sparkle.com/ogp.png' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    
    // ロゴにしようしたFuturaと類似した Renner* を採用しました
    link: [{rel: "stylesheet", 
            href: "https://indestructibletype-fonthosting.github.io/renner.css",
            type: "text/css",
            charset: "utf-8"}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['static/global.css', 'ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    presets: ['@nuxt/babel-preset-app'],
  },
}
