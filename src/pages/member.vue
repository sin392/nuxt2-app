<script setup>
import PeopleCard from '~/components/people-card'
</script>

<template>
  <div class="wrapper">
    <PeopleCard
      name="しのりん"
      hobby="旅行 / 英語 / 個人開発"
      skill="機械学習 / 英語 / 教育 / WEB / メディア"
      comment="高専在学中に40カ国に旅行する中で悟りを開きました"
      img-file-name="member-shinorin-256.webp"
    />
    <PeopleCard
      name="まいん"
      hobby="カメラ / コーヒー / ゲーム / アニメ / 散歩"
      skill="ロボティクス / 機械学習 / Web / 組み込み / コンテンツツーリズム"
      comment="ブレンダー勉強中、先生求む"
      img-file-name="member-mine-256.webp"
    />
    <PeopleCard
      name="ざき"
      hobby="ゲーム / エレキギター / キャンプ / サウナ"
      skill="機械学習 / 材料 / 自然言語 / 楽器 / デザイン / WEB / 寮生活"
      comment="肉汁の出るハンバーグをずぼらに作る方法について日夜研究を重ねています"
      img-file-name="member-zaki-256.webp"
    />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
@media (max-width: 480px) {
}
</style>
