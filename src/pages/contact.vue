<template>
  <div class="wrapper">
    <p class="title">お問い合わせ先</p>
    <div class="flex-wrapper">
      <div class="info-wrapper">
        <p class="info">
          <span class="label">Email:</span>
          <a href="mailto:kosen.sparkle@gmail.com">kosen.sparkle@gmail.com</a>
        </p>
        <p class="info">
          <span class="label">Twitter:</span>
          <a href="https://twitter.com/KosenSparkle" target="_blank">
            Kosen-Sparkle (@kosen_sparkle)
          </a>
        </p>
        <p class="info">
          <span class="label">Youtube:</span>
          <a
            href="https://www.youtube.com/channel/UC6f6GjgVmP55cvLZ2T7FpfQ"
            target="_blank"
          >
            Kosen-Sparkleチャンネル
          </a>
        </p>
        <p class="info">
          <span class="label">Note:</span>
          <a href="https://note.com/kosen_sparkle" target="_blank">
            Kosen_Sparkle
          </a>
        </p>
      </div>
      <div class="announce">
        <div>運営メンバーやイベント協力のご連絡なども募集しております！</div>
        <ul>
          <li>キャリア支援や起業に興味がある</li>
          <li>組織運営の勉強がしてみたい</li>
          <li>高専生の話が聞きたい！力が借りたい！</li>
        </ul>
        <p>卒業生・社会人・非高専生の方もぜひお気軽にご連絡ください。</p>
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 60px;
}
.title {
  font-weight: bold;
  font-size: x-large;
  text-align: center;
}
.info-wrapper {
  padding: 0 150px;
  font-size: large;
}
.label {
  display: inline-block;
  width: 6rem;
  letter-spacing: 2px;
}
.announce {
  font-size: medium;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
}
li {
  font-size: x-large;
  font-weight: bold;
}
@media (max-width: 480px) {
  .wrapper {
    width: 80%;
  }
  .title {
    margin: 0;
  }
  .flex-wrapper {
    width: 100%;
    padding-bottom: 0;
    flex-grow: 0;
  }
  .info-wrapper {
    padding: 0 100px;
    font-size: small;
  }
  .info {
    margin: 0;
  }
  .label {
    display: block;
  }
  .announce {
    width: 80%;
    font-size: smaller;
    margin-top: 20px;
  }
  ul {
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 0;
    padding-left: 10px;
  }
  li {
    font-size: small;
    font-weight: bold;
  }
}
</style>
