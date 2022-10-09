<script setup lang="ts">
import { ref, useFetch } from '@nuxtjs/composition-api'
import { NoteHandler } from '~/modules/handlers/note'

interface ContentType {
  id: number
  name: string
  eyecatch: string
  publishAt: string
  body: string
  noteUrl: string
}

// useFetchの戻り値としてrefオブジェクトを受け取るようにはできないか？
const contents = ref<ContentType[]>([])
useFetch(async () => {
  const res = await NoteHandler.prototype.getMyArticles()
  contents.value = res.data.data.contents
})
</script>

<template>
  <div class="content-page">
    <h1 class="title">- Note Articles -</h1>
    <div class="articles-list scroll">
      <div v-for="content in contents" :key="content.id" class="article-card">
        <a :href="content.noteUrl" target="_blank">
          <div class="image-wrapper">
            <img
              v-if="content.eyecatch"
              :src="content.eyecatch"
              alt="アイキャッチ画像"
            />
            <div v-if="!content.eyecatch" class="noimage">NO IMAGE</div>
          </div>
          <div class="article-description">
            <div class="article-title">{{ content.name }}</div>
            <div class="article-body">{{ content.body }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$article-image-height: calc(670px / 6);
$article-image-width: calc(1280px / 6);

.content-page {
  width: 60%;
  height: 80%;
  margin: auto;
  box-shadow: 0 0 5px darkgray;
  padding: 20px;
  font-size: xx-large;
  font-weight: bold;
}
.title {
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  color: inherit;
  margin-bottom: 22px;
}
.articles-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.scroll {
  overflow-y: scroll;
  /* スクロールバーの非表示 (IE, Edge, Safari) */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroll::-webkit-scrollbar {
  /* スクロールバーの非表示 (Chrome, Safari)*/
  display: none;
}
.article-card {
  display: flex;
  height: $article-image-height;
  border: 1px solid darkgray;
}
.article-card > a {
  width: 100%;
  display: inherit;
  color: inherit;
}
.image-wrapper {
  flex-shrink: 0;
  width: $article-image-width;
  background-color: darkgray;
  display: flex;
}
img {
  width: 100%;
}
.noimage {
  margin: auto;
  color: whitesmoke;
}
.article-description {
  padding: 10px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.article-title {
  font-size: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.article-body {
  flex-grow: 1;
  padding: 4px 0;
  font-size: medium;
  overflow: hidden;
  overflow-wrap: break-word;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  /* height: 50px; */
}
@media (max-width: 480px) {
  .content-page {
    width: 80%;
  }
}
</style>
