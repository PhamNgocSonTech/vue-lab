import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
  const newTodo = ref(null)
  const todos = ref([
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
    },

  ],
  )

  const getTotal = computed(() =>  todos.value.length)

  const addToDo = () => {
    if(!newTodo.value) return;
    todos.value.push({
      id: Date.now(),
      todo: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }

  const deleteTodo = (id) => {
    let newTodos = null;
    newTodos = todos.value.filter(todo => todo.id !== id)
    todos.value = newTodos
  }

  return {
    addToDo,
    deleteTodo,
    getTotal,
    todos,
    newTodo,
  };
},
  {persist: {
      key: 'my-todos'
    }},)