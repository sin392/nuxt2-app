<template>
  <header>
    <!-- <div id="header-title">KSparkle</div> -->
    <nav>
      <ul>
        <!-- TODO: トップへの遷移はnavではなくロゴ画像とかで -->
        <li>TOP</li>
        <li>ABOUT</li>
        <li>MEMBER</li>
        <li>WORK</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 65px;
  padding: 0 40px;
  background-color: var(--main-bg-color);
  color: var(--font-color-on-main-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px gray;
}
/* #header-title {
  font-size: xx-large;
} */
ul {
  padding: 0;
  margin: 0;
  display: flex;
  gap: 80px;
}
li {
  height: fit-content !important;
  font-size: x-large;
  list-style-type: none;
  letter-spacing: 0.5rem;
}
#header-title,
li {
  cursor: pointer;
  user-select: none;
}
#header-title:hover,
li:hover {
  text-shadow: 1px 1px 2px black;
}
</style>
