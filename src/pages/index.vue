<script setup>
import {
  TwitterOutlined,
  YoutubeOutlined,
  FileOutlined,
} from '@ant-design/icons-vue/lib'
import Layout from '~/components/Layout.vue'
</script>

<template>
  <Layout>
    <div class="flex-wrapper">
      <div class="wrapper">
        <div class="image-wrapper">
          <img src="~/assets/logo_wb_circle.png" alt="ロゴ画像" />
        </div>
        <div class="description-wrapper">
          <div class="description">
            <h1>Kosen-Sparkle</h1>
            <div>
              <p>
                Kosen-Sparkleは高専卒業生によって設立された高専生の多様なキャリアをサポートするための学生組織です。
              </p>
              <ul>
                <li>高専以外でも活躍したい</li>
                <li>卒業後どんな仕事につけるのか</li>
                <li>工学以外の道はないのか</li>
              </ul>
              <p>
                高専生の様々なお悩みを解決すべく情報発信などを行なっていく予定です!!
              </p>
            </div>
          </div>
          <div class="contacts">
            <TwitterOutlined class="icon twitter-icon" />
            <YoutubeOutlined class="icon youtube-icon" />
            <FileOutlined class="icon note-icon" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.flex-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.wrapper {
  width: 80%;
  height: 80%;
  margin: auto;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.image-wrapper {
  width: 400px;
  height: 400px;
  display: flex;
}

img {
  margin: auto;
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
  /* border: 1px solid red; */
}

.description-wrapper {
  width: 600px;
  height: 400px;
  border: 1px solid;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.description {
  /* border: 1px solid; */
  font-size: medium;
}

.contacts {
  /* border: 1px solid; */
  flex-grow: 1;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 20px;
}

.icon {
  font-size: 84px;
  /* border: 1px solid; */
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
</style>
