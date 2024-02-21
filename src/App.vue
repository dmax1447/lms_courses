<template>
  <div id="app">
    <div class="header">
      <img width="24" height="24" alt="Vue logo" src="@/assets/logo.png">
      <h2>
        <router-link :to="{name: 'home'}">Модуль курсы</router-link>
      </h2>
    </div>

    <nav>
      <div>
        <router-link :to="{name: 'course', params: {id: 'id01'}}">Страница Курсы</router-link>
      </div>
      <div>
        <router-link :to="{name: 'stat'}">Статистика</router-link>
        <router-link :to="{name: 'assignment'}">Статистика:Задания</router-link>
        <router-link :to="{name: 'quiz'}">Статистика:тесты</router-link>
      </div>
      <div>
        <router-link :to="{name: 'check'}">Проверка</router-link>
      </div>


<!--      <router-link :to="{name: 'course', params: {id: '123'}}">Курс</router-link>-->
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    console.log('this.$root.token', this.$root.token)
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
  & > div {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

}
</style>
