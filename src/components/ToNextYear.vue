<script setup>
import { date } from '@/time'
</script>

<template>
  <div class="text-gray-600 text-xl">
    距离 <b>{{ date.getFullYear() + 1 }}</b> 年还有
  </div>
</template>
