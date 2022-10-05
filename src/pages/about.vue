<template>
  <div class="wrapper">
    <p class="title">Kosen-Sparkleについて</p>
    <div class="flex-wrapper">
      <div>
        初めまして！<br class="br-sma" />
        <span class="bold">Kosen-Sparkle (こうせんすぱーくる)</span>
        です！
      </div>
      <div>
        私たちは、元高専生を中心に<br class="br-sma" />
        <span class="bold">”高専生による高専生のための組織”</span>として<br />
        キャリア支援のための活動・イベントを行う<br class="br-sma" />
        学生組織として2023年に発足しました。
      </div>

      <div>
        優秀な人が多く、工学の経験もキャリアに<br class="br-sma" />
        おいて<span class="bold accent">大きなアドバンテージ</span
        >となる高専。<br />
        しかし、在学中は自身や技術の需要に<br class="br-sma" />
        気づかないことも多いです...
      </div>
      <div>
        私たちはそうした問題を解決するため<br />
        <span class="bold">"高専生による高専生のためのキャリア支援"</span
        ><br class="br-sma" />
        を目指して活動しています！
      </div>
    </div>
  </div>
</template>

<style scoped>
.br-sma {
  display: none;
}
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
  font-size: x-large;
}
.title {
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
}
.flex-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}
@media (max-width: 480px) {
  .wrapper {
    font-size: 14.5px;
    width: 80%;
  }
  .flex-wrapper {
    gap: 30px;
  }
  .br-sma {
    display: block;
  }
  .title {
    font-size: x-large;
  }
}
</style>
