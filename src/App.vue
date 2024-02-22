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
      <div class="controls">
        <button @click="hideMenuItem">hide assignment menu</button>
        <button @click="disableMenuItem">disable assignment menu</button>
      </div>



<!--      <router-link :to="{name: 'course', params: {id: '123'}}">Курс</router-link>-->
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import {publicApiFunction} from '@lms/util'
// console.log(publicApiFunction)

export default {
  name: 'App',
  components: {
  },
  methods: {
    sendMessage() {
      this.$root.eventBus.emit('message', {text: 'Hello!'})
    },
    hideMenuItem() {
      this.$root.eventBus.emit('sidebar:hide_item', {id: 'assignment'})
    },
    disableMenuItem() {
      this.$root.eventBus.emit('sidebar:disable_item', {id: 'assignment'})
    }
  },
  created() {

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
