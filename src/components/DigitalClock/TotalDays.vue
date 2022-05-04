<script setup>
import { date, getElapsedDays } from '@/time'
</script>

<template>
  <span class="text-3xl">今天是 {{ date.getFullYear() }} 年的第</span>
  <span class="mx-3 font-semibold">{{ getElapsedDays(date) }}</span>
  <span class="text-3xl">天</span>
</template>
