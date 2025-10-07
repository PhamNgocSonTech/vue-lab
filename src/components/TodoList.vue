<script setup>

import { computed, reactive } from 'vue'

import {userCounter} from '@/composables/userCounter.js'

const todoReactive = reactive({
  todos: [
    {
      id: 1,
      todo: 'to do 1',
      completed: false,
    },

    {
      id: 2,
      todo: 'to do 2',
      completed: false,
    },

    {
      id: 3,
      todo: 'to do 3',
      completed: true,
    },

    {
      id: 4,
      todo: 'to do 4',
      completed: true,
    }
  ]
})

const {count, increment} = userCounter()

const totalTodos = computed(() => {
  return todoReactive.todos.length
})
</script>

<template>
  <div class="wrapper">
    <h2 class="todo-heading">To Do ({{totalTodos}})</h2>
    <input class="todo-input" type="text" placeholder="Input Your Todo">
    <button>Add</button>
    <ul class="todo-list">
      <li v-for="item in todoReactive.todos" :key="item.id" class="todo-item">{{item.todo}}
        <button>Delete</button>
      </li>
    </ul>
    <div class="counter">{{count}}</div>
    <button class="counter-btn" @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
</style>
