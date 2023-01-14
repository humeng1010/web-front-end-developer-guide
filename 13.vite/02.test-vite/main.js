// 加载图片
import './src/imageLoader.js'
// 引入json文件,如果我们使用的不是vite,在一些其他的构建工具里,json文件的导出会作为json字符串的形式存在
// 而vite会直接把这个json自动装换为js对象提供我们使用
// import jsonFile from './src/assets/json/index.json'
import { name } from './src/assets/json/index.json'
// tree shake : 打包工具会帮我们移除掉那些我们没有使用到的变量或者方法
console.log("jsonFile", name)
/* import { count } from './counter.js'
import './request.js'
// 引入css
import './variable.css'
import './index.css'
import './components/ComponentA.js'
import './components/ComponentB.js'
import './components/ComponentC.js'

console.log('count', count) */