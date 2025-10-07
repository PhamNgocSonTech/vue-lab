<script setup>

import { userCounter } from '@/composables/userCounter.js'

import { useTodoStore } from '@/stores/todoStore.js'
import { computed } from 'vue'
import TodoItem from '@/components/TodoItem.vue'


const todoStore = useTodoStore()

const { count, increment } = userCounter()




const addTodo = () => {
  todoStore.addToDo()
}

const deleteTodo = (id) => {
  todoStore.deleteTodo(id)
}
</script>

<template>
  <div class="wrapper">
    <h2 class="todo-heading">To Do ({{ todoStore.getTotal }})</h2>
    <input v-model="todoStore.newTodo" class="todo-input" type="text" placeholder="Input Your Todo" />
    <button @click="addTodo">Add</button>
    <ul class="todo-list">
      <li v-for="item in todoStore.todos" :key="item.id" class="todo-item">
        <TodoItem :todo="item" @remove-todo="deleteTodo(item.id)"/>
      </li>
    </ul>
    <div class="counter">{{ count }}</div>
    <button class="counter-btn" @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
</style>
