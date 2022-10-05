<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div id="layout-wrapper">
    <Header />
    <main>
      <Nuxt />
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
  /* padding: 20px; */
  display: flex;
  height: 100%;
}
</style>
