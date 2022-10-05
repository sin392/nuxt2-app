<template>
  <header>
    <div id="header-title">Header</div>
    <nav>
      <ul>
        <li>About</li>
        <li>Member</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 80px;
  padding: 0 40px;
  background-color: var(--main-bg-color);
  color: var(--font-color-on-main-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 1px 1px 2px gray;
}
#header-title {
  font-size: xx-large;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
}
li {
  height: fit-content !important;
  font-size: x-large;
  list-style-type: none;
}
#header-title,
li {
  cursor: pointer;
}
#header-title:hover,
li:hover {
  text-shadow: 1px 1px 2px black;
}
</style>
