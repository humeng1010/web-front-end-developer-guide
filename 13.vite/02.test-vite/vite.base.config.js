import { defineConfig } from 'vite'

// 基础配置
export default defineConfig({
    optimizeDeps: {
        exclude: []
    },
    envPrefix: "ENV_",
})