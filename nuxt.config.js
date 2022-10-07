const envPath = `.env.${process.env.NODE_ENV || 'local'}`
require('dotenv').config({ path: envPath })

export default {
  srcDir: 'src/',

  // srcDir変更時,envの設定も変更する必要: https://www.memory-lovers.blog/entry/2020/01/23/110000
  dotenv: {
    path: process.cwd(),
  },

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
      { name: 'og:url', content: process.env.APP_URL },
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
      // NOTE: TwitterはbaseUrl記載しないと動かなかった（ドキュメントとかには記載ない）
      { name: 'twitter:image', content: `${process.env.APP_URL}/ogp.png` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        href: '/_nuxt/src/assets/member-shinorin-256.webp',
        as: 'image',
        type: 'image/webp',
      },
      {
        rel: 'preload',
        href: '/_nuxt/src/assets/member-mine-256.webp',
        as: 'image',
        type: 'image/webp',
      },
      {
        rel: 'preload',
        href: '/_nuxt/src/assets/member-zaki-256.webp',
        as: 'image',
        type: 'image/webp',
      },
    ],
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
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:5000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    presets: ['@nuxt/babel-preset-app'],
  },
}
