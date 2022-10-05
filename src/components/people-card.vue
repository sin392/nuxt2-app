<script setup lang="ts">
import { computed } from 'vue'
interface PeopleCardProps {
  name: string
  hobby: string
  skill: string
  comment: string
  imgFileName: string
}

const props = defineProps<PeopleCardProps>()
// NOTE: "assetsに画像を置いている場合"、imgSrcをそのまま:srcに渡したりrequire(imgSrc)とするのはうまくいかなかった
// const imgSrc = require(`~/assets/${props.imgFileName}`)
const imgSrc = computed(() => props.imgFileName)
</script>

<template>
  <div class="people-card">
    <div class="people-card-header">
      <img :src="imgSrc" alt="画像" />
    </div>
    <div class="people-card-content">
      <p class="name">{{ name }}</p>
      <div class="info-wrapper">
        <div><span class="label">趣味：</span>{{ hobby }}</div>
        <div><span class="label">得意分野：</span>{{ skill }}</div>
        <div><span class="label">ひとこと：</span>{{ comment }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.people-card {
  display: flex;
  width: 1000px;
  gap: 20px;
}
.people-card-header {
  width: 180px;
  height: 180px;
  display: flex;
}
img {
  margin: auto;
  max-width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 10px darkgray;
  /* 画像のドラッグ,選択,ダウンロードを禁止 */
  pointer-events: none;
  user-select: none;
}
.people-card-content {
  flex-grow: 1;
  padding: 20px 30px;
  border-radius: 25px;
  box-shadow: 0 0 5px darkgray;
}
.name {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 10px;
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: large;
}
.label {
  display: inline-block;
  min-width: 6rem;
}
</style>
