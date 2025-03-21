<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <el-checkbox
      v-model="todo.completed"
      @change="toggleTodo"
    >
      {{ todo.text }}
    </el-checkbox>
    <el-button
      type="danger"
      size="small"
      @click="$emit('remove')"
    >
      删除
    </el-button>
  </div>
</template>

<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'remove'])

const toggleTodo = () => {
  emit('toggle')
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  background-color: #f5f7fa;
}

.completed {
  opacity: 0.6;
}

.completed :deep(.el-checkbox__label) {
  text-decoration: line-through;
}
</style> 