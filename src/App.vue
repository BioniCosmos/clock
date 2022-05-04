<script setup>
import DigitalClock from '@/components/DigitalClock.vue'
import NewYear from './components/NewYear.vue'
import Overlay from './components/Overlay.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import ToNextYear from '@/components/ToNextYear.vue'
import { date, isLastDay } from '@/time'
import { ref } from 'vue'

const showOverlay = ref(true)
setTimeout(() => {
  showOverlay.value = false
}, 1500)

const isNewYear = ref(false)
const interval = setInterval(() => {
  date.value = new Date()
  if (isLastDay(date.value) && date.value.getHours() === 23 && date.value.getMinutes() === 59 && date.value.getSeconds() === 59) {
    isNewYear.value = true
    clearInterval(interval)
  }
}, 1000)
</script>

<template>
  <div class="bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center text-center h-screen">
    <div
      class="flex flex-col justify-center items-center bg-gray-200/75 dark:bg-[#1d253a]/75 rounded-xl p-12 shadow-[35px_35px_70px_#c3c4c8,-35px_-35px_70px_#ffffff] dark:shadow-[35px_35px_70px_#191f31,-35px_-35px_70px_#212b43]">
      <ToNextYear v-if="isLastDay(date)" />
      <DigitalClock />
      <ProgressBar />
    </div>
  </div>
  <Overlay v-if="showOverlay">
    <div class="px-8 py-5 rounded-lg shadow-lg bg-white text-gray-700 text-lg">建议横屏观看</div>
  </Overlay>
  <NewYear v-if="isNewYear" />
</template>
