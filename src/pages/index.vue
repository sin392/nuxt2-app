<script setup>
import {
  TwitterOutlined,
  YoutubeOutlined,
  FileOutlined,
} from '@ant-design/icons-vue/lib'
import { TWITTER_URL, YOUTUBE_URL, NOTE_CREATOR_URL } from '~/consts/url'
</script>

<template>
  <div class="root-page">
    <div class="eyecatch">
      <h1 class="title">
        KOSEN <span class="title-accent-char">S</span>PARKLE
      </h1>
      <p class="slogan">For the Kosen, By the Kosen, Student Organization</p>
    </div>
    <div class="description">
      <p>
        高専卒業生によって設立され、高専生の多様なキャリアをサポートするための活動を行っています。
      </p>
      <p>
        高専生の様々なお悩みを解決すべく情報発信などを行なっていく予定です!!
      </p>
    </div>
    <div class="links">
      <a :href="TWITTER_URL" target="_blank">
        <no-ssr><TwitterOutlined class="icon twitter-icon" /></no-ssr>
      </a>
      <a :href="YOUTUBE_URL" target="_blank">
        <no-ssr><YoutubeOutlined class="icon youtube-icon" /></no-ssr>
      </a>
      <a :href="NOTE_CREATOR_URL" target="_blank">
        <no-ssr><FileOutlined class="icon note-icon" /></no-ssr>
      </a>
    </div>
  </div>
</template>

<style scoped>
.root-page {
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.eyecatch {
  margin: 0;
  padding-top: 80px;
  user-select: none;
}
.title {
  margin: 0;
  font-weight: bolder;
  font-size: 120px;
  letter-spacing: 5px;
}
.title-accent-char {
  color: var(--main-bg-color);
}
.slogan {
  font-size: 30px;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
.description {
  font-family: Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: large;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
}
.icon {
  padding: 10px;
  font-size: 60px;
  border-radius: 50px;
}
.icon:hover {
  box-shadow: 0 0 5px darkgray;
}
.twitter-icon {
  color: #08c;
}
.youtube-icon {
  color: #c00;
}
.note-icon {
  color: #0c8;
  transform: scale(-1, 1);
}
@media (max-width: 480px) {
  .root-page {
    max-height: 100%;
    justify-content: start;
  }
  .eyecatch {
    padding-top: 0;
  }
  .title {
    font-size: 65px;
    line-height: 70px;
  }
  .slogan {
    padding-top: 10px;
    font-size: 13px;
  }
  .description {
    gap: 30px;
  }
  .links {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    padding-bottom: 20px;
  }
}
</style>
