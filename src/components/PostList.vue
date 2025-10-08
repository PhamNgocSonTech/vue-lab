<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const posts = ref([])

const fetchPost = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
      throw new Error(`HTTP Error status: ${res.status}`)
    }

    posts.value = await res.json()
  } catch (e) {
    console.error(e.message)
  }
}

onMounted(() => {
  fetchPost()
})

onUnmounted(() => {
  console.log("Component Destroy")
})
</script>

<template>
  <ul v-for="post in posts" :key="post.id">
    <li>{{ post.title }}</li>
  </ul>
</template>

<style scoped></style>
