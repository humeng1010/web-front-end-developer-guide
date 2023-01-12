import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config.js'
import viteDevConfig from './vite.dev.config.js'
import viteProdConfig from './vite.prod.config.js'

// 策略模式
const envResolve = {
    "build": () => {
        console.log('生成环境')
        return { ...viteBaseConfig, ...viteProdConfig }
    },

    "serve": () => {
        console.log('开发环境')
        return { ...viteBaseConfig, ...viteDevConfig }
    }
}
export default defineConfig(({ command, mode }) => {
    // console.log('@@@', mode)
    // const env = loadEnv(mode, process.cwd(), "")
    // console.log("env", env)
    return envResolve[command]()
})
// export default defineConfig(({ command, mode }) => {
//     // process代表当前进程对象 cwd方法可以获取运行该进程所处的目录
//     // console.log('process', process.cwd())//process /Users/humeng/Github/mycode/13.vite/02.test-vite
//     // 加载env 如果是客户端, vite会将对应的环境变量注入到import.meta.env里去
//     const env = loadEnv(mode, process.cwd(), "")
//     /* 但是vite做了一个拦截, 他为了防止我们将隐私性的变量直接送进import.meta.env中, 
//     所以他做了一层拦截, 如果你的环境变量不是以VITE开头的, 他就不会帮你注入到客户端中去, 
//     如果我们想要更改这个前缀, 可以去使用envPrefix配置 */
//     // console.log("env", env.VITE_APP_KEY)
//     console.log("env", env)
//     return envResolve[command]()
// })

