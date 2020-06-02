<template>
  <div class="hello">
    <button @click="increment">{{ text }}</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    computed: {
      times () {
        return this.count > 1
                ? 'times'
                : 'time'
      },
      text () {
        return `I have been clicked ${this.count} ${this.times}`
      }
    },
    methods: {
      increment () {
        this.count += 1
      }
    }
  }
</script>

<style scoped>
.hello {
  background: darkred;
}
</style>
