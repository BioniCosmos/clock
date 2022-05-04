<script setup>
import { date, getPercentage } from '@/time'
import { ref, watch } from 'vue'

const percentage = ref()
watch(date, () => {
  percentage.value = getPercentage(date.value, true)
})
</script>

<template>
  <div class="w-10/12">
    <div class="flex mb-3 items-center justify-between">
      <span class="text-sm font-semibold text-gray-600">当前进度</span>
      <span class="text-sm font-semibold text-gray-600">{{ percentage }}%</span>
    </div>
    <div class="overflow-hidden h-3 flex rounded-full bg-gray-400">
      <div class="bg-gray-600" :style="{ width: `${percentage}%` }"></div>
    </div>
  </div>
</template>
