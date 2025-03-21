<template>
  <div class="spell-checker">
    <el-card>
      <template #header>
        <div class="card-header">
          <h3>拼写检查</h3>
        </div>
      </template>
      
      <div class="input-section">
        <el-input
          v-model="text"
          type="textarea"
          :rows="6"
          placeholder="请输入要检查的文本..."
          resize="vertical"
        />
        
        <div class="actions">
          <el-button
            type="primary"
            :loading="loading"
            @click="checkSpelling"
          >
            检查拼写
          </el-button>
          <el-button @click="clearText">
            清空
          </el-button>
        </div>
      </div>

      <!-- 这里预留结果显示区域，等你提供返回值结构后再补充 -->
      <div v-if="results" class="results-section">
        <el-alert
          title="检查结果将在这里显示"
          type="info"
          :closable="false"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { spellCheckService } from '../api/spellCheck'

const text = ref('')
const loading = ref(false)
const results = ref(null)

const checkSpelling = async () => {
  if (!text.value.trim()) {
    ElMessage.warning('请输入要检查的文本')
    return
  }

  loading.value = true
  try {
    const response = await spellCheckService.checkSpelling(text.value)
    results.value = response
    // 这里等待你提供返回值结构后再处理具体的显示逻辑
  } catch (error) {
    ElMessage.error('拼写检查失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

const clearText = () => {
  text.value = ''
  results.value = null
}
</script>

<style scoped>
.spell-checker {
  max-width: 800px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-section {
  margin-bottom: 20px;
}

.actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.results-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ebeef5;
}
</style> 