<script setup>
import {
  TwitterOutlined,
  YoutubeOutlined,
  FileOutlined,
} from '@ant-design/icons-vue/lib'
</script>

<template>
  <div class="wrapper">
    <div class="main-part">
      <h1 class="main-text">KOSEN <span class="accent-char">S</span>PARKLE</h1>
      <p class="sub-text">For the Kosen, By the Kosen, Student Organization</p>
    </div>
    <div class="description">
      <p>
        高専卒業生によって設立され、高専生の多様なキャリアをサポートするための活動を行っています。
      </p>
      <p>
        高専生の様々なお悩みを解決すべく情報発信などを行なっていく予定です!!
      </p>
    </div>
    <div class="contacts">
      <a href="https://twitter.com/KosenSparkle" target="_blank">
        <TwitterOutlined class="icon twitter-icon" />
      </a>
      <a
        href="https://www.youtube.com/channel/UC6f6GjgVmP55cvLZ2T7FpfQ"
        target="_blank"
      >
        <YoutubeOutlined class="icon youtube-icon" />
      </a>
      <a href="https://note.com/kosen_sparkle" target="_blank">
        <FileOutlined class="icon note-icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.main-part {
  margin: 0;
  padding-top: 80px;
  user-select: none;
}
.main-text {
  margin: 0;
  font-weight: bolder;
  font-size: 120px;
  letter-spacing: 5px;
}
.accent-char {
  color: var(--main-bg-color);
}
.sub-text {
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
.contacts {
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
  .wrapper {
    height: 100%;
    justify-content: start;
    margin-top: 60px;
    padding-bottom: 80px;
    gap: 40px;
  }
  .main-part {
    padding-top: 0;
  }
  .main-text {
    font-size: 65px;
    line-height: 70px;
  }
  .sub-text {
    padding-top: 10px;
    font-size: 13px;
  }
  .description {
    gap: 30px;
  }
  .contacts {
    flex-grow: 1;
    display: flex;
    /* flex-direction: column; */
    align-items: flex-end;
    padding-bottom: 20px;
  }
}
</style>
