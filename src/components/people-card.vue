<script setup lang="ts">
import { computed } from '@nuxtjs/composition-api'
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
// NOTE: SSGだとデプロイ後に初回fetchは成功するがreloadすると画像が消える
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
        <div class="info"><span class="label">趣味：</span>{{ hobby }}</div>
        <div class="info"><span class="label">得意分野：</span>{{ skill }}</div>
        <div class="info">
          <span class="label">ひとこと：</span>{{ comment }}
        </div>
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
  width: 100%;
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
@media (max-width: 480px) {
  .people-card {
    width: 80%;
    gap: 15px;
  }
  .people-card-header {
    /* WHY: 実際には80pxにはなっていない */
    width: 80px;
    height: 100%;
  }
  img {
    margin-top: 0;
  }
  .people-card-content {
    padding: 10px 20px;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: x-small;
  }
  .name {
    font-size: medium;
    margin-bottom: 2px;
  }
  .info {
    display: flex;
  }
  .label {
    display: block;
    min-width: 4rem;
  }
}
</style>
