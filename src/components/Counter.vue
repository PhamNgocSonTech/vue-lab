<script setup>
import {useCounterStore} from '@/stores/counterStore.js'

const counterStore = useCounterStore()

</script>

<template>
  <div class="counter">
    <h2>Increment Number</h2>
    <p class="show">{{counterStore.count}}</p>
    <button v-on:click="counterStore.increment()">Increment</button>
  </div>
</template>

<style scoped>
.counter {
  text-align: center;
}
</style>
