import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const doubleCount = (() => count * 2)

    function increment () {
        return count.value++
    }

    return {count, doubleCount, increment}
})