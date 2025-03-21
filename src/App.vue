<template>
  <el-container class="layout-container">
    <el-header>
      <nav class="nav-menu">
        <router-link to="/" class="logo">
          Vue 3 Demo
        </router-link>
        <div class="nav-links">
          <el-menu
            mode="horizontal"
            :router="true"
            :default-active="$route.path"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/todos">待办事项</el-menu-item>
            <el-menu-item index="/spell-check">拼写检查</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
          </el-menu>
        </div>
      </nav>
    </el-header>

    <el-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>

    <el-footer>
      <p>Vue 3 示例项目 - 用于学习 Vue 3 核心概念</p>
    </el-footer>
  </el-container>
</template>

<style>
.layout-container {
  min-height: 100vh;
}

.el-header {
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-menu {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #409EFF;
  text-decoration: none;
}

.nav-links {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.el-main {
  padding-top: 20px;
  background-color: #f5f7fa;
}

.el-footer {
  text-align: center;
  color: #909399;
  padding: 20px;
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 