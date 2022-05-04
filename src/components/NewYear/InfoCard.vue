<script setup>
defineEmits(['close-info-card'])
</script>

<template>
  <div class="absolute p-8 rounded-lg shadow-lg bg-white">
    <h5 class="text-gray-900 text-xl leading-tight font-medium">更多</h5>
    <p class="text-gray-700 text-base my-4">
      思路提供：<a href="https://github.com/black8848" target="_blank">@black8848</a><br>
      烟花动画制作：<a href="https://github.com/DamoclesYW" target="_blank">@DamoclesYW</a><br>
      网页制作：<a href="https://github.com/BioniCosmos" target="_blank">@BioniCosmos</a>
    </p>
    <button
      class="py-2 px-6 border border-solid border-gray-600 hover:bg-gray-600 hover:text-white font-semibold text-xl rounded ease-linear transition-all duration-150"
      type="button" @click="$emit('close-info-card')">
      关闭
    </button>
  </div>
</template>
