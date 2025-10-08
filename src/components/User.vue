<script setup>
import { onMounted, ref } from 'vue'

const users = ref([])

const fetchUser = async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok) {
      throw new Error(`HTTP Error status code: ${res.status}`)
    }
    users.value = await res.json()
  }catch (e) {
    console.error(e.message)
  }
}

onMounted(() =>  {
  fetchUser()
})

</script>

<template>
  <ul v-for="user in users" :key="user.id">
    <li>{{user.name}}</li>
  </ul>
</template>

<style scoped></style>
