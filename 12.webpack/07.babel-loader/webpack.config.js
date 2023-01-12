const path = require('path')
// 引入html页面打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入css提取插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入css压缩插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出路径
    output: {
        filename: 'bundle.js',
        // 必须是绝对路径,使用到了nodejs的path内置api进行路径的拼接
        path: path.resolve(__dirname, './dist'),
        // 清理上次打包生成的文件
        clean: true,
        // 静态资源打包后的路径和名称:名称规则contenthash:使用内容的哈希值生成;ext:保持原来的扩展名
        assetModuleFilename: 'images/[contenthash][ext]'
    },

    // 使webpack的编译模式变为开发模式
    mode: 'development',
    // 使用压缩css插件需要把mode改为production
    // mode: 'production',

    // 开发控制台源代码指向真实的代码的错误地方的行数和输出的地方
    // 精准定位代码的行数
    devtool: 'inline-source-map',

    // 插件
    plugins: [
        // html打包插件:解决引入资源.需要安装html-webpack-plugin
        new HtmlWebpackPlugin({
            // 根据当前的index.html生成模板
            template: './index.html',
            // 打包后的html文件名
            filename: 'app.html',
            // 生成的script标签的位置
            inject: 'body'
        }),
        // css提取插件
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],

    // 配置开发服务器,需要安装webpack-dev-server
    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                // test会告诉webpack当遇到,正则表达式:匹配以.png结尾会使用以下配置进行解析生成文件
                test: /\.png$/,
                // 注意是 asste,不是assets,该作用是把assets作为资源,进行引入
                type: 'asset/resource',
                // 生成资源路径,优先级高于output中配置的
                generator: {
                    // 名称规则contenthash:使用内容的哈希值生成;ext:保持原来的扩展名
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                // 行内意思是:作为页面内部资源,不需要通过引入外部资源,所以在文件中不显示
                type: 'asset/inline'
            },
            {
                test: /\.txt$/,
                // source资源,可以导出资源的源代码
                type: 'asset/source'
            },
            {
                test: /\.jpg$/,
                // 通用数据类型asset,会根据文件的大小自动分配
                type: 'asset',
                // 这里我们并没有指定生成的路径,它使用了上面的output中配置的
                // generator:{},
                // 配置解析器
                parser: {
                    // 数据url条件
                    dataUrlCondition: {
                        // 配置临界值,当文件大于4MB的时候就使用resource否则是inline(默认临界值8kb)
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },
            {
                // 匹配css或less
                test: /\.(css|less)$/,
                // =======css=======
                // 使用css加载器解析css,需要安装css-loader,但是页面并没有样式
                // 我们还需要安装style-loader,帮助我们把css放到页面上
                // 注意webpack的加载顺序是从后向前加载的
                // use: ['style-loader', 'css-loader'],
                // =======less=======
                // 需要安装less-loader 和 less
                // 注意less需要先被加载为css,再通过css-loader解析css,再使用style-loader把样式放到页面上
                // use: ['style-loader', 'css-loader', 'less-loader']
                // =======mini-css-extract-plugin====
                // 由于之前我们使用style-loader把css放到页面上
                // 但是现在我们需要抽离css,所以style-loader就不需要了
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    optimization: {
        minimizer: [
            // 配置压缩css插件
            new CssMinimizerPlugin()
        ]
    }

}