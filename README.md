# nuxt2-app

Nuxt2 + Vue2 で作成された Kosen-Sparkle のホームページです。
`production`と`staging`が Netlify 上にホストされています。
(PR 立てるとプレビュー用のビルドも行われます)

## 環境変数の設定について

netlify.toml は github で共有するため API_KEY などの環境変数については管理画面で登録する
(ローカルでは.env などを使用)

## Links

- Netlify 管理画面: https://app.netlify.com/sites/kosen-sparkle/overview
- production 環境:
  - https://production--kosen-sparkle.netlify.app/
  - https://kosen-sparkle.com
- staging 環境:
  - https://staging--kosen-sparkle.netlify.app/

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:5000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Build Notifications

Slack の webhook と Netlify のサーバレス関数のホスト機能を使って slack チャンネルに通知を飛ばす。  
`/netlify`以下のフォルダ・ファイルはこの関連  
ビルド済みのサーバレス関数のディレクトリは netlify.toml の functions で指定

### Netlify のサーバレス関数のビルド

`/netlify/functions`以下のファイルを編集した場合はデプロイ前に以下を実行してサーバレス関数をビルドする。

```
yarn lambda-build
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
