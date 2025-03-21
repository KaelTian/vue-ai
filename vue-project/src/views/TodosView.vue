<template>
  <div class="todos-container">
    <h1>待办事项</h1>
    
    <div class="todo-stats">
      <el-tag>总数: {{ todosStore.totalCount }}</el-tag>
      <el-tag type="success">已完成: {{ todosStore.completedTodos.length }}</el-tag>
      <el-tag type="warning">待完成: {{ todosStore.pendingTodos.length }}</el-tag>
    </div>

    <div class="add-todo">
      <el-input
        v-model="newTodo"
        placeholder="输入新的待办事项"
        @keyup.enter="addNewTodo"
      >
        <template #append>
          <el-button @click="addNewTodo">添加</el-button>
        </template>
      </el-input>
    </div>

    <div class="todo-list">
      <TodoItem
        v-for="todo in todosStore.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo(todo.id)"
        @remove="removeTodo(todo.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '../store/todos'
import TodoItem from '../components/TodoItem.vue'

const todosStore = useTodosStore();
const newTodo = ref('')

// 这里不需要解构store的属性，因为store中的这些属性是响应式的
// 解构会失去响应性，所以直接使用todosStore.xxx的方式访问更好
// const { todos, completedTodos, pendingTodos, totalCount } = todosStore

const addNewTodo = () => {
  if (newTodo.value.trim()) {
    todosStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}

const toggleTodo = (id) => {
  todosStore.toggleTodo(id)
}

const removeTodo = (id) => {
  todosStore.removeTodo(id)
}
</script>

<style scoped>
.todos-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.todo-stats {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

.add-todo {
  margin: 20px 0;
}

.todo-list {
  margin-top: 20px;
}
</style> 