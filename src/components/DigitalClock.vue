<script setup>
import TotalDays from './DigitalClock/TotalDays.vue'
import Countdown from './DigitalClock/Countdown.vue'
import { date, isLastDay } from '@/time'
</script>

<template>
  <div
    class="bg-gray-800 text-white text-6xl bg-opacity-60 p-6 rounded-md shadow-xl my-6 flex justify-center items-center font-mono">
    <Countdown v-if="isLastDay(date)" />
    <TotalDays v-else />
  </div>
</template>
