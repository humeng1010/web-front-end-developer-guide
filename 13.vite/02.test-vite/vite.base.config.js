// import最后都会被替换为commonJS规范的
import { defineConfig } from 'vite'
// 引入别名自动配置
import { ViteAliases } from 'vite-aliases'
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
    build: {
        // 配置rollup的一些构建策略
        rollupOptions: {
            output: {// 控制输出
                // 在rollup里面, hash代表的是你的文件名和文件内容进行组合计算得来的结果
                assetFileNames: "[hash].[name].[ext]",
            },

        },
        // assetsInlineLimit: 4096, // 4kb 如果静态资源小于4kb则会转换为base64的格式
        // outDir: "build",//配置打包的文件名称
        assetsDir: "static",// 配置打包后静态资源的目录
    },
    // 配置插件
    plugins: [
        // 自动生成路径别名的插件
        ViteAliases()
    ],
}
)
