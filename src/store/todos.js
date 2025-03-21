import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: []
  }),
  
  getters: {
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
    pendingTodos: (state) => state.todos.filter(todo => !todo.completed),
    totalCount: (state) => state.todos.length
  },
  
  actions: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
    },
    
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}) 