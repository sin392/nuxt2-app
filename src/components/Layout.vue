<script setup>
// Headerなどはhtmlの予約語として認識されるのでリネーム
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div id="layout-wrapper">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#layout-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
  padding: 20px;
}
</style>
