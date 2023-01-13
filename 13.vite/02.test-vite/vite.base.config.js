// import最后都会被替换为commonJS规范的
import { defineConfig, loadEnv } from 'vite'
// 引入postcss预处理环境
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');
// 基础配置
export default defineConfig({
    optimizeDeps: {
        exclude: []
    },
    envPrefix: "ENV_",
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
        devSourcemap: true,//开启css的sourcemap
        // vite的诞生会让postcss再火一次
        postcss: {
            plugins: [postcssPresetEnv({
                importFrom: path.resolve(__dirname, "./variable.css"),
            })]
        }
    },
}
)
