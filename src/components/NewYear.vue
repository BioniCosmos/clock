<script setup>
import InfoCard from './NewYear/InfoCard.vue'
import Overlay from '@/components/Overlay.vue'
import { date } from '@/time'
import { ref } from 'vue'

const showInfo = ref(false)
</script>

<template>
  <div class="fixed inset-0 bg-black flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center bg-gray-200/75 dark:bg-[#1d253a]/75 rounded-xl p-12">
      <div class="text-6xl font-serif text-black dark:text-white">
        Happy New Year {{ date.getFullYear() + 1 }}
      </div>
      <button
        class="mt-6 py-2 px-6 border-gray-600 hover:bg-gray-600 hover:text-white dark:text-white border border-solid dark:border-gray-400 dark:hover:bg-gray-400 dark:hover:text-[#1d253a] font-semibold text-xl rounded ease-linear transition-all duration-150"
        type="button" @click="showInfo = true">
        更多
      </button>
    </div>
  </div>
  <Overlay v-if="showInfo">
    <InfoCard @close-info-card="showInfo = false" />
  </Overlay>
</template>
