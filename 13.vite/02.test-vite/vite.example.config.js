import { defineConfig } from 'vite'

// 实例参考配置,仅用于以后复习参考使用,在该项目中并没有引入
export default defineConfig({
    optimizeDeps: {
        exclude: []
    },
    envPrefix: "ENV_",//配置vite注入客户端环境变量校验env前缀
})