<template>
  <div>
    <h3>Страница Курса c id {{id}}</h3>
    <p>И какой то контент курса здесь</p>
  </div>
</template>

<script>
export default {
  name: "CoursePage",
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
