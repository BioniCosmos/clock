<script setup>
import { date, getTimeDiff } from '@/time'
import { ref, watch } from 'vue'

const [hour, minute, second] = [ref(), ref(), ref()]
watch(date, () => {
  const timeDiff = getTimeDiff(date.value)
  hour.value = Math.floor(timeDiff / (60 * 60)).toString().padStart(2, '0')
  minute.value = Math.floor(timeDiff / 60 - hour.value * 60).toString().padStart(2, '0')
  second.value = Math.floor(timeDiff - hour.value * 60 * 60 - minute.value * 60).toString().padStart(2, '0')
})
</script>

<template>
  <span class="mr-3 font-semibold">{{ hour }}</span><span class="text-3xl">时</span>
  <span class="mx-3 font-semibold">{{ minute }}</span><span class="text-3xl">分</span>
  <span class="mx-3 font-semibold">{{ second }}</span><span class="text-3xl">秒</span>
</template>
