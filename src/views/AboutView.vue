<template>
  <div class="about">
    <h1>关于本项目</h1>
    <el-card class="about-card">
      <h3>Vue 3 示例项目</h3>
      <p>这是一个用于学习 Vue 3 核心概念的示例项目，包含以下特性：</p>
      <el-divider />
      <ul>
        <li>
          <strong>Vue 3 组合式 API</strong>
          <p>使用 setup 语法糖，展示组合式 API 的优势</p>
        </li>
        <li>
          <strong>Vue Router 4</strong>
          <p>实现页面路由和导航功能</p>
        </li>
        <li>
          <strong>Pinia</strong>
          <p>新一代的 Vue 状态管理工具</p>
        </li>
        <li>
          <strong>Element Plus</strong>
          <p>基于 Vue 3 的组件库，提供美观的 UI 界面</p>
        </li>
      </ul>
      <el-divider />
      <div class="actions">
        <el-button type="primary" @click="$router.push('/')">
          返回首页
        </el-button>
        <el-button type="success" @click="$router.push('/todos')">
          查看待办事项
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-card {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 20px 0;
}

li strong {
  display: block;
  margin-bottom: 5px;
  color: #409EFF;
}

li p {
  margin: 5px 0;
  color: #666;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}
</style> 