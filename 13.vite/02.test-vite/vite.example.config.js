import { defineConfig } from 'vite'

// 实例参考配置,仅用于以后复习参考使用,在该项目中并没有引入
export default defineConfig({
    optimizeDeps: {
        exclude: []
    },
    envPrefix: "ENV_",//配置vite注入客户端环境变量校验env前缀
    // 对css的行为进行配置
    css: {
        // 是对css模块化的默认行为进行覆盖
        modules: {
            // 修改生成的配置对象的key的形式
            localsConvention: "dashesOnly",
            scopeBehaviour: "local",
            // generateScopedName: "[name]_[local]_[hash:5]"
            // hashPrefix: "hello"
            // globalModulePaths: [],//代表不想参与css模块化的路径
        },
        // 执行编译css文件的执行参数
        preprocessorOptions: {//key+value
            less: { // 整个的配置对象都会给到less的执行参数(全局参数)中去
                math: "always",
                // 配置全局变量
                globalVars: {
                    "main-color": "red",
                    "color-content": "pink"
                }
            },
        },
        // devSourcemap: true,
    },
})