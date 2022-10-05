<script setup>
import PeopleCard from '~/components/people-card'
</script>

<template>
  <div class="wrapper">
    <PeopleCard
      name="しのりん"
      hobby="旅行"
      skill="色々"
      comment="特になし"
      imgFileName="member-shinorin.webp"
    />
    <PeopleCard
      name="まいん"
      hobby="カメラ / コーヒー / 読書"
      skill="機械学習 / ロボティクス / Web / コンテンツツーリズム"
      comment="特になし"
      imgFileName="member-mine.webp"
    />
    <PeopleCard
      name="ざき"
      hobby="ゲーム"
      skill="機械学習 / ロボティクス / Web / コンテンツツーリズム"
      comment="特になし"
      imgFileName="member-zaki.webp"
    />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
