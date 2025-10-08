<script setup>
import { inject } from 'vue'
const theme = inject('theme')
</script>

<template>
    <p>Theme: {{theme}}</p>
</template>

<style scoped></style>
