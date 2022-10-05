<template>
  <div class="wrapper">
    <div>
      初めまして！
      <span class="bold">Kosen-Sparkle (こうせん すぱーくる)</span>
      です！
    </div>
    <div>
      私たちは、元高専生を中心に
      <span class="bold">”高専生による高専生のための組織”</span>として<br />
      キャリア支援のための活動・イベントを行う学生組織として2023年に活動を開始しました。
    </div>

    <div>
      優秀な人が多く、工学の経験もキャリアにおいて<span class="bold accent"
        >大きなアドバンテージ</span
      >となる高専。<br />
      しかし、在学中は自身や技術の需要に気づかないことも多いです...
    </div>
    <div>
      私たちはそうした問題を解決するため<br />
      <span class="bold">"高専生による高専生のためのキャリア支援"</span>
      を目指して活動しています！
    </div>
  </div>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
.accent {
  color: var(--main-bg-color);
  text-shadow: 2px 2px 1px gainsboro;
}
.wrapper {
  width: 70%;
  max-height: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  font-size: x-large;
}
@media (max-width: 480px) {
  .wrapper {
    font-size: medium;
    width: 80%;
    gap: 30px;
  }
}
</style>
