<script setup>
import { provide } from 'vue'
import Child from '@/components/Child.vue'
provide('theme', 'dark')
</script>

<template>
  <div>
    <child/>
  </div>
</template>

<style scoped></style>
