<script setup lang="ts">
import MemberCard, { MemberCardProps } from '~/components/member-card.vue'

const MEMBERS: MemberCardProps[] = [
  {
    name: 'しのりん',
    hobby: '旅行 / 英語 / 個人開発',
    skill: '機械学習 / 英語 / 教育 / WEB / メディア',
    comment: '高専在学中に40カ国に旅行する中で悟りを開きました',
    imgFileName: 'member-shinorin-256.webp',
  },
  {
    name: 'まいん',
    hobby: 'カメラ / コーヒー / ゲーム / アニメ / 散歩',
    skill: 'ロボティクス / 機械学習 / Web / 組み込み / コンテンツツーリズム',
    comment: 'ブレンダー勉強中、先生求む',
    imgFileName: 'member-mine-256.webp',
  },
  {
    name: 'ざき',
    hobby: 'ゲーム / エレキギター / キャンプ / サウナ',
    skill: '機械学習 / 材料 / 自然言語 / 楽器 / デザイン / WEB / 寮生活',
    comment:
      '肉汁の出るハンバーグをずぼらに作る方法について日夜研究を重ねています',
    imgFileName: 'member-zaki-256.webp',
  },
]
</script>

<template>
  <div class="member-page">
    <MemberCard
      v-for="item in MEMBERS"
      :key="item.name"
      :name="item.name"
      :hobby="item.hobby"
      :skill="item.skill"
      :comment="item.comment"
      :img-file-name="item.imgFileName"
    />
  </div>
</template>

<style scoped>
.member-page {
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
/* @media (max-width: 480px) {
} */
</style>
