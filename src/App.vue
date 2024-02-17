<template>
  <div id="app">
    <div class="header">
      <img width="24" height="24" alt="Vue logo" src="@/assets/logo.png">
      <h2>Модуль курсы</h2>
    </div>

    <nav>
      <router-link>Статистика</router-link>
      <router-link>Курс с id '123</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  display: flex;
  gap: 16px;
  align-items: center;
}
nav {
  display: flex;
  gap: 10px;
}
</style>
