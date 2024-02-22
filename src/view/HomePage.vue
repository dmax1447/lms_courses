<template>
  <div >
    <h3>Корневая страница модуля</h3>
    <div>messages: {{messages}}</div>

  </div>
</template>

<script>
import { emitter } from '@lms/styleguide'

export default {
  name: "HomePage",
  data() {
    return {
      messages: []
    }
  },
  created() {
    emitter.on('message', (v) => {
      this.messages.push(v)
    })
  }
}
</script>

