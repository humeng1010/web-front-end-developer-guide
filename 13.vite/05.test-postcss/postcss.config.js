// 就类似全屋净水系统加插槽,加额外的功能
// 预设环境中是会包含很多的插件的
// 语法降级 --> postcss-low-level
// 编译插件 --> postcss-compiler
// ...
// 预设就是把这些必要的插件都给我们装上了
// 做语法编译 less语法,sass语法
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
    plugins: [
        // 对css高级语法降级的插件
        postcssPresetEnv()
    ]

}