<template>
  <header>
    <!-- <div id="header-title">KSparkle</div> -->
    <nav>
      <ul>
        <!-- TODO: トップへの遷移はnavではなくロゴ画像とかで -->
        <li><NuxtLink to="/">TOP</NuxtLink></li>
        <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
        <li><NuxtLink to="/member">MEMBER</NuxtLink></li>
        <li><NuxtLink to="/work">WORK</NuxtLink></li>
        <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
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
  user-select: none;
}
a {
  color: white;
}
#header-title:hover,
li:hover {
  text-shadow: 1px 1px 2px black;
}
</style>
