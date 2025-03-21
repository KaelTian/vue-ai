import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
  baseURL: 'http://localhost:3000', // 这里替换为你的实际后端服务地址
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const spellCheckService = {
  // 发送文本进行拼写检查
  checkSpelling(text) {
    return api.post('/api/spell-check', { text })
  }
}

// 添加响应拦截器处理错误
api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
) 