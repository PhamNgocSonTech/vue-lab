<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['remove-todo'])
</script>

<template>
      <div>
        {{ props.todo.todo }}
        <button @click="emit('remove-todo')">Delete</button>
      </div>
</template>

<style scoped></style>
