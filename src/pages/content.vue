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
  <div class="wrapper">
    <div>- Note Articles -</div>
    <div class="articles-list">
      <div v-for="content in contents" :key="content.id" class="article-card">
        <a :href="content.noteUrl" target="_brank">
          <div class="image-wrapper">
            <img
              v-if="content.eyecatch"
              :src="content.eyecatch"
              alt="アイキャッチ画像"
            />
            <div v-if="!content.eyecatch" class="noimage">NO IMAGE</div>
          </div>
          <div class="text-wrapper">
            <div class="title">{{ content.name }}</div>
            <div class="body">{{ content.body }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 60%;
  height: 80%;
  margin: auto;
  box-shadow: 0 0 5px darkgray;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-size: xx-large;
  font-weight: bold;
}
.articles-list {
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  /* スクロールバーの非表示 (IE, Edge, Safari) */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.articles-list::-webkit-scrollbar {
  /* スクロールバーの非表示 (Chrome, Safari)*/
  display: none;
}
.article-card {
  display: flex;
  height: calc(670px / 6);
  border: 1px solid darkgray;
  /* box-shadow: 0 0 10px darkgray; */
}
.article-card > a {
  width: 100%;
  display: inherit;
  color: inherit;
}
.image-wrapper {
  min-width: calc(1280px / 6);
  width: calc(1280px / 6);
  text-align: center;
  background-color: darkgray;
  display: flex;
}
img {
  width: 100%;
}
.noimage {
  margin: auto;
  color: whitesmoke;
  object-fit: contain;
}
.text-wrapper {
  padding: 10px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.body {
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
  .wrapper {
    width: 80%;
  }
}
</style>
