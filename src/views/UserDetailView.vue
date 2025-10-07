<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>

<template>
  <h2>User ID: {{userId}}</h2>
</template>

<style></style>