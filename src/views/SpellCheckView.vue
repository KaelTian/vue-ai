<template>
  <div class="spell-check-view">
    <h1>拼写检查</h1>
    <p class="description">
      这是一个简单的拼写检查示例，展示了如何使用 Vue 3 与后端 API 交互。
      输入文本并点击"检查拼写"按钮来测试功能。
    </p>
    <SpellChecker />
  </div>
</template>

<script setup>
import SpellChecker from '../components/SpellChecker.vue'
</script>

<style scoped>
.spell-check-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.description {
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style> 