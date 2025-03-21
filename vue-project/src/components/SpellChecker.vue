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

      <div v-if="results" class="results-section">
        <!-- 问题列表 -->
        <div v-if="results.issues.length > 0" class="issues-list">
          <h4>发现的问题:</h4>
          <el-alert
            v-for="(issue, index) in results.issues"
            :key="index"
            :title="issue.message"
            :type="issue.severity === 1 ? 'warning' : 'error'"
            :description="'RuleId: ' + issue.ruleId"
            show-icon
            class="issue-alert"
          />
        </div>
        <el-alert
          v-else
          title="未发现任何问题"
          type="success"
          show-icon
        />

        <!-- AI建议 -->
        <div v-if="results.aiSuggestion" class="ai-suggestion">
          <h4>AI建议:</h4>
          <el-alert
            :title="results.aiSuggestion"
            type="info"
            :closable="false"
          />
        </div>

        <!-- 指标统计 -->
        <div v-if="results.metrics" class="metrics">
          <h4>代码指标:</h4>
          <el-descriptions :column="2" border>
            <el-descriptions-item v-for="(value, key) in results.metrics" :key="key" :label="key">
              {{ value }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
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
    results.value = {
      issues: response.issues.map(issue => ({
        ...issue,
        severityText: issue.severity === 1 ? '警告' : '错误'
      })),
      aiSuggestion: response.aiSuggestion,
      metrics: response.metrics
    }
    ElMessage.success('检查完成')
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