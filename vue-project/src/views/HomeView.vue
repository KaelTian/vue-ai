<template>
  <div class="home">
    <h1>欢迎使用 Vue 3 示例应用</h1>
    <el-card class="feature-card">
      <template #header>
        <div class="card-header">
          <h3>主要功能演示</h3>
        </div>
      </template>
      <div class="feature-list">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover">
              <h4>Vue Router</h4>
              <p>演示路由导航和页面切换</p>
              <el-button type="primary" @click="$router.push('/about')">
                查看关于页面
              </el-button>
            </el-card>
          </el-col>
          
          <el-col :span="8">
            <el-card shadow="hover">
              <h4>Pinia 状态管理</h4>
              <p>使用 Pinia 管理应用状态</p>
              <el-button type="success" @click="$router.push('/todos')">
                待办事项演示
              </el-button>
            </el-card>
          </el-col>
          
          <el-col :span="8">
            <el-card shadow="hover">
              <h4>API 调用示例</h4>
              <p>展示与后端 API 交互</p>
              <el-button type="warning" @click="$router.push('/spell-check')">
                拼写检查演示
              </el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.feature-card {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feature-list {
  margin-top: 20px;
}

h4 {
  margin: 0 0 10px 0;
}

p {
  margin: 10px 0;
  color: #666;
}

.el-card {
  margin-bottom: 20px;
}
</style> 