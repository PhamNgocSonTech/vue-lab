<script setup>
import { userCounter } from '@/composables/userCounter.js'

const {count, increment} = userCounter()

</script>

<template>
  <div class="counter">
    <h2>Increment Number</h2>
    <p class="show">{{count}}</p>
    <button v-on:click="increment"></button>
  </div>
</template>

<style scoped>
.counter {
  text-align: center;
}
</style>
