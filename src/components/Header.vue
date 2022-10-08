<script setup lang="ts">
import { computed, useRoute } from '@nuxtjs/composition-api'

const path = computed(() => {
  const route = useRoute()
  return route.value.path
})
</script>

<template>
  <header>
    <!-- <div id="header-title">KSparkle</div> -->
    <nav>
      <ul>
        <!-- TODO: トップへの遷移はnavではなくロゴ画像とかで -->
        <li :selected="path === '/'"><NuxtLink to="/">TOP</NuxtLink></li>
        <li :selected="path === '/about'">
          <NuxtLink to="/about">ABOUT</NuxtLink>
        </li>
        <li :selected="path === '/member'">
          <NuxtLink to="/member">MEMBER</NuxtLink>
        </li>
        <li :selected="path === '/content'">
          <NuxtLink to="/content">CONTENT</NuxtLink>
        </li>
        <li :selected="path === '/contact'">
          <NuxtLink to="/contact">CONTACT</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
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
li:hover,
li[selected] a {
  text-shadow: 1px 1px 2px black;
}
@media (max-width: 480px) {
  header {
    height: 50px;
  }
  ul {
    gap: 10px;
  }
  li {
    font-size: large;
    letter-spacing: normal;
  }
}
</style>
