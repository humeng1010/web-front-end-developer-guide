# Vite世界指南
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673495307441-5f64f722-7b1c-4c1f-85e4-97c5795f9d56.png#averageHue=%23a3b1ad&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=320&id=ub441009e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=640&originWidth=640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=146204&status=done&style=none&taskId=u284d193a-932e-49e0-92e6-3bc2eb607da&title=&width=320)
**下一代的前端工具链**
# 什么是构建工具
> 浏览器只能识别html，js，css

在了解构建工具之前，我先举一个企业级开发中的项目中可能会具备哪些功能：

1. TypeScript：如果遇到ts文件我们需要通过tsc命令把TypeScript代码转换为JavaScript代码让浏览器认识

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673496745434-7ff34c10-fd49-4643-95b6-d15752db30d2.png#averageHue=%23282c34&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=198&id=u73d115df&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=688&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55291&status=done&style=none&taskId=ubd04e9c4-b42c-4f34-947e-8a2178e6675&title=&width=240)-`tsc index.ts`->![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673496856157-b28beb25-d433-4e87-9c90-ec09721b06f2.png#averageHue=%23282c34&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=196&id=u9e48d547&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=500&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25733&status=done&style=none&taskId=u144307da-fe74-416a-ad9e-d9ffb6b2c9d&title=&width=278)

2. React/Vue：安装react-compiler / vue-complier，将我们写的jsx文件或者vue文件转换为render函数

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673497236118-57b98430-5679-4be5-ad92-61257359598d.png#averageHue=%23292e36&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=176&id=u88dea3f5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=816&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40584&status=done&style=none&taskId=ua20e2957-7c31-4837-b921-effca94bad3&title=&width=353)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673497250660-be487c2f-7558-42f6-913f-dc2c6e80b819.png#averageHue=%23292d36&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=149&id=u6b3027d6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=298&originWidth=1718&originalType=binary&ratio=1&rotation=0&showTitle=false&size=56770&status=done&style=none&taskId=uf014b9e6-c192-470a-be49-c0fb0378416&title=&width=859)

3. less/sass/postcss/component-style：我们又需要安装less-loader，sass-loader等一系列编译工具
4. 语法降级：babel--> 将es的新语法转换为旧版浏览器可以识别的语法，提高兼容性
5. 体积优化：uglifyjs--> 将我们的代码进行压缩变为体积更小性能更高的文件，加快网路传输
6. ......
> 上面这些功能我们发现，只要稍微该一点点东西，就要重新手动进行转换，**非常麻烦**
> 将App.tsx--tsc-->App.jsx--ReactComplier-->js文件
> 因此我们希望有一个工具能够帮我们把ts，react-compiler，less，babel，uglifyjs全部集成到一起
> 而我们只需要关系我们写的代码就可以了，我们写的代码只要一旦变化，就会有工具帮我们把ts，react-compiler，less，babel，uglifyjs全部挨个走一遍
> 这个工具就叫做**构建工具**



> 打包：将我们写的浏览器不认识的代码 交给构建工具进行编译处理的过程就叫做打包，打包完成之后我们会得到一个浏览器认识的文件

那么构建工具到底帮我们承担了哪些麻烦的事情

1. 模块化开发的支持：支持直接从node_modules中引入代码(ES6 module) + 多种模块化的支持(CommonJS)
2. 处理代码的兼容性：比如babel语法降级，less，ts语法转换(**注意**：这不是构建工具做的，构建工具只是将这些语法对应的处理工具集成进来自动化处理)
3. 提高项目性能：压缩文件，**代码分割**
4. 优化开发体验：
- 构建工具会帮我们自动监听文件的变化，当我们文件变化，他就会自动帮我们调用对应的集成工具进行打包，然后再在浏览器中重新运行(即热更新，hot replacement)
- 开发服务器：解决跨域问题
> **构建工具他可以让我们不用每次都关系我们的代码在浏览器如何运行，我们只需要首次给构建工具提供一个配置文件(也不是必须的，他会有默认的配置)，再下次需要更新的时候我们就可以调用一次命令就可以了。如果我们再结合热更新，我们就不需要管理任何东西了，他会根据改变自动更新，所以得益于构建工具 我们不需要关心生产的代码也不用关心代码在浏览器怎么运行，只需要关心我们开发的时候怎么写的舒服就好了。**


> 市面上主流的构建工具
> - **webpack**
> - **vite**
> - parcel
> - esbuild
> - rollup
> - grunt
> - gulp

# Vite相较于webpack的优势
当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。
[https://cn.vitejs.dev/guide/why.html#the-problems](https://cn.vitejs.dev/guide/why.html#the-problems)
> 那么vite会不会取代webpack？
> 答案是不会，因为他们的侧重点不一样，webpack更关注兼容性，而vite关注浏览器端开发的体验

> 启动的区别

webpack:
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673500943665-fc724df7-ee51-4122-9ea5-aff2a5ea750e.png#averageHue=%23eeecea&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=390&id=u3365ac3b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=780&originWidth=1358&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58742&status=done&style=none&taskId=u48cb1577-4f03-4738-a175-aa5d528b4ff&title=&width=679)
vite:
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673500960698-ed9e3c3c-a86d-426a-82d2-949a1c80aaa7.png#averageHue=%23e3e2e1&clientId=u85fdffde-7388-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=386&id=ua9989b84&margin=%5Bobject%20Object%5D&name=image.png&originHeight=772&originWidth=1356&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67278&status=done&style=none&taskId=ubced0ad2-e2e4-45d6-84cb-09dcca30466&title=&width=678)
# 必须要理解的vite脚手架和vite
vite官网搭建vite项目文档教程: [https://vitejs.dev/guide/#scaffolding-your-first-vite-project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
> 比如我们敲了`yarn create vite`
> 1. 帮我们全局安装一个东西: create-vite (vite的脚手架)
> 2. 直接运行这个create-vite bin目录的下的一个执行配置

我们之前接触过vue-cli
> 很多同学可能就会存在误区: **认为官网中使用对应yarn create构建项目的过程也是vite在做的事情**

create-vite和vite的关系是什么呢？ ---- create-vite内置了vite
使用vue-cli 会内置webpack
先学习的就是vite
我们暂时不会使用yarn create vite my-vue-app --template vue
我们vue-cli 可以和webpack分的很清楚，因为这两个根本就不是一个团队的
vite --> vue团队的 create-vite ---> vue团队
**vue团队希望弱化vite的一个存在感（希望让我们直接使用create vite构建项目方便使用）, 但是我们去学习的时候不能弱化的**
预设: 买房子 毛坯房(我们的工程) 买沙发, 做装修, 修各个厕所, 埋线；精装修的房: 搭建好了
我们自己搭建一个项目: 下载vite, vue, post-css, less, babel
vue-cli/create-react-app(开发商)给我们提供已经精装修的模板: 帮你把react/vue都下好了, 同时他还帮你把配置调整到了最佳实践
create-vite(开发商)给你一套精装修模板(给你一套预设): 下载vite, vue, post-css, less, babel好了, 并且给你做好了最佳实践的配置
> 构建工具和脚手架的区别就是：_**脚手架**_**工具是建立在一些**_**构建工具**_**之上的抽象，最主要的是开发服务器/模块捆绑器，它们消除了配置和使用**_**构建工具**_**的麻烦。**

# Vite启动项目的初体验
## problem
> 首先用普通的方式直接创建index.html和main.js和counter.js，我们在counter.js中引入lodash，在main.js中引入counter.js在index.html中通过ES的module方式使用script标签引入main.js

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673503181006-00b17608-973f-4c8d-958b-7ddd175dc1fb.png#averageHue=%2325282f&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=173&id=u1dd290cd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=346&originWidth=532&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29087&status=done&style=none&taskId=u148266bd-107c-44ce-be0c-b3c98492904&title=&width=266)
> 打开index.html后发现引入lodash报错：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673503220947-3286ce98-c8c4-4b3a-9a51-3ca40129e713.png#averageHue=%23fdeded&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=44&id=ue9a042e9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=88&originWidth=1740&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12998&status=done&style=none&taskId=ub7a38f05-0d36-4957-910a-9ad8bd37531&title=&width=870)
> 意思是浏览器通过module方式引入js只能通过相对路径，而不能直接引入node_module中的东西(浏览器不知道node_module)
> 
> 那为什么浏览器不再向上去查找node_module文件呢？
> 因为每通过一个import引入文件都是一个网络请求资源，比如上面例子中，index.html中导入了main.js，main.js中导入了counter.js；则当前的网络请求如下：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673503769206-0274288d-0672-4088-86c7-37d8aa470ef2.png#averageHue=%23fbfafa&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=151&id=u8cb7e1d6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=302&originWidth=718&originalType=binary&ratio=1&rotation=0&showTitle=false&size=78679&status=done&style=none&taskId=ued2e2f4a-0168-4680-a0fd-6d5d007b4c4&title=&width=359)
> 所以浏览器**不敢再**向上再查找node_module

## Vite登场
> **开箱即用（out of box）：你不需要做任何额外的配置就可以使用vite来帮你处理构建工作**

1. 使用`yarn add vite -D`在开发环境安装vite
2. 在package.json中添加调试代码
```json
"scripts": {
  "dev": "vite"
},
```

3. 使用`yarn dev`命令启动项目

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673504373217-beadf6d1-3262-4316-bff0-0345dc8d0299.png#averageHue=%2329313b&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=170&id=ub7c43161&margin=%5Bobject%20Object%5D&name=image.png&originHeight=340&originWidth=612&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34895&status=done&style=none&taskId=u19d2da3e-39f8-4d7c-9e37-d1be4801d46&title=&width=306)
> 控制台已经不会报错了，说明lodash已经成功引入，输出lodash查看如下
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673504472302-c59ea4a3-c17e-4f86-8b87-ab114a977904.png#averageHue=%23fefefe&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=159&id=ue2b58c11&margin=%5Bobject%20Object%5D&name=image.png&originHeight=318&originWidth=1102&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41824&status=done&style=none&taskId=u712fa665-161b-4a06-ab3e-eb6556375b1&title=&width=551)

# Vite的预加载
当我们写了下面的代码
```javascript
import _ from 'lodash'
```
vite在处理过程中如果看到了有非相对路径或者绝对路径的引用，它则会尝试开启路径补全，补全结果如下
```javascript
import __vite__cjsImport0_lodash from "/node_modules/.vite/deps/lodash.js?v=d9ffc135"; 
const _ = __vite__cjsImport0_lodash.__esModule ? __vite__cjsImport0_lodash.default : __vite__cjsImport0_lodash
```
> 找寻依赖的过程是自当前目录依次向上查找的过程，直到搜寻到根目录或者搜寻到对应的依赖为止 /user/node_modules/lodash

生产和开发
yarn dev ---> 开发（每次依赖预构建所重新构建的相对路径都是正确的）
生产环境vite会全权交给一个叫做rollup的库完成生产环境的打包（路径就有可能出现问题）
> 为了解决这个问题，实际上vite在考虑另外一个问题的时候就顺便把这个问题解决了
> 就是CommonJS规范的导出 module.exports
> 有的包是通过CommonJS的规范导出的 比如axios

因此vite提出了**依赖预构建**
## 依赖预构建
> 首先vite会找到对应的依赖，然后调用esbuild(对js语法进行处理的一个库)，将其他规范的代码转换为ESmodule规范，然后放到当前目录下的node_module/.vite/deps目录下，同时对ESmodule规范的各个模块进行统一集成
> 

```javascript
export default function a(){}
```
```javascript
export {default as a} from "./a.js"//这个模块导入了其他的模块并暴露
```
vite重写后
```javascript
function a(){}
```
它解决了三个问题

1. 不同的第三方包会有不同的导出格式（这个是vite没法约束别人的）
2. 对路径的处理上可以直接使用.vite/deps，方便路径重写
3. 解决了网络多包传输的性能问题(也是原生ESmodule规范不敢支持node_module的原因之一)，有了依赖预构建之后无论它有多少额外的export和import，vite都尽可能将他们集成最后只剩下一个或者几个模块！！！

演示问题三：

1. 首先安装lodash-es版本的lodash`yarn add lodash-es`，该lodash使用的是ESmodule的方式引入并导出的，如下部分源码图片：

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673507238207-4b7a3b35-ad08-4899-a6d0-8ae532cf9463.png#averageHue=%232a313b&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=492&id=uc6b8d0e9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=984&originWidth=1244&originalType=binary&ratio=1&rotation=0&showTitle=false&size=298537&status=done&style=none&taskId=u06ffc241-7680-4f88-a5ca-113df64e3a8&title=&width=622)

2. 在counter.js中引入该库

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673507336280-b83da7ad-c325-4200-a4b6-929a148a3f5f.png#averageHue=%23282c34&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=u1699dd8a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=838&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20857&status=done&style=none&taskId=uf6f6a93f-19e5-491d-804e-f1ab91a74e2&title=&width=419)

3. 启动项目打开控制台的网络请求面板

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673507411861-4412595c-038c-4b3e-bf66-728da1b24df0.png#averageHue=%23f8f7f4&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=248&id=uf32d35b3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=496&originWidth=1120&originalType=binary&ratio=1&rotation=0&showTitle=false&size=190705&status=done&style=none&taskId=u2cd702f9-c884-4138-9e5a-df71e7993cb&title=&width=560)
> 我们发现这个模块通过ESmodule引入的很多模块并没有出现在网络请求中，说明vite解决了网络多包传输的问题！！查看该请求预览：发现引入都变成了函数的形式
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673508288810-ce7fdc85-e906-4840-8f50-9709762afdee.png#averageHue=%23fcfcfc&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=646&id=u8497f85e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1292&originWidth=1120&originalType=binary&ratio=1&rotation=0&showTitle=false&size=353384&status=done&style=none&taskId=u20b8761d-7f0c-4e0a-81e8-52e2bef47cd&title=&width=560)


为了验证网络多包传输问题的严重性，我们可以通过修改vite配置文件来进行演示：
> 1. 创建vite.config.js 添加如下配置
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673507871038-12e00faf-010d-4fa4-b72d-0cb76c88372a.png#averageHue=%23292d35&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=203&id=ub51887ac&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=1558&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65291&status=done&style=none&taskId=u4f79ea27-f0e2-450b-b685-39514920d1d&title=&width=779)
> 2. 继续打开网络请求面板发现：总共有648个请求！！！
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673507941018-b400a0b3-71bd-4c9d-8284-9e07bb940a26.png#averageHue=%23f8f8f7&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=648&id=uf25d998c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1296&originWidth=1118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=385625&status=done&style=none&taskId=u518a78f1-aa44-4632-a9a0-1021a1d95a8&title=&width=559)
> 3. 打开我们引入的lodash资源的请求：和原来一样，即未进行依赖预构建
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673508005660-1cc0e764-1388-4da0-b1d5-00624da768af.png#averageHue=%23f8efee&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=649&id=u01a00d06&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1298&originWidth=1122&originalType=binary&ratio=1&rotation=0&showTitle=false&size=635314&status=done&style=none&taskId=u938469d8-e43a-40ec-bf89-aa865aec022&title=&width=561)
> 可见没有依赖预构建的恐怖😱性

# Vite配置文件处理细节
## 配置文件的语法提示
> 在vite.config.js中书写内容我们发现，没有语法提示
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673508820680-afe4ec29-0c82-4498-a015-1b5eee0ad8b0.png#averageHue=%232b2f36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=457&id=ua2715a6b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=914&originWidth=1770&originalType=binary&ratio=1&rotation=0&showTitle=false&size=224741&status=done&style=none&taskId=u4f43702e-f088-4e57-a5aa-0cb08d90b33&title=&width=885)
> 我们可以通过引入vite中的defineConfig函数解决
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673508926827-d96fd0c8-9af0-40f4-b11a-c4eb5af46844.png#averageHue=%232a2f37&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=330&id=ub9d361d5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=660&originWidth=1644&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147760&status=done&style=none&taskId=uf2aec793-fe70-42fc-b611-aebe9f37eeb&title=&width=822)
> 在defineConfig函数内部传入配置项即可解决


> 或者使用注释的方式：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673509280329-175afaa9-0634-4283-93df-bafd3658dff0.png#averageHue=%23292d36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=260&id=uff7315ea&margin=%5Bobject%20Object%5D&name=image.png&originHeight=520&originWidth=1298&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73175&status=done&style=none&taskId=u9361db03-9d83-4180-b30e-9b7a3453ce2&title=&width=649)
> 简写：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673509339939-6a88264c-6ef8-40df-80c6-fb016c525a9e.png#averageHue=%23292e36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=180&id=ua7ac054a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=360&originWidth=1076&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44582&status=done&style=none&taskId=ub22fbcd7-4014-485d-82d1-0ad7931a7fd&title=&width=538)


## 关于环境的处理
> 过去我们使用webpack的时候，我们需要区分配置文件的一个环境
> - webpack.dev.config
> - webpack.prod.config
> - webpack.base.config
> - webpackmerge

vite的环境配置
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673510791587-34e97da9-d811-4078-888a-6a9b2226994a.png#averageHue=%23292e36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=284&id=u6b63777b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=904&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71285&status=done&style=none&taskId=ua0c7fa68-d961-45b5-b692-59d3c14add3&title=&width=452)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673510817709-bac32f4a-c700-4a00-935f-51eef4f681f0.png#averageHue=%23292e36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=230&id=udbd00b60&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=904&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57054&status=done&style=none&taskId=uf5fe131c-7451-4640-a9b9-e2d6434e24e&title=&width=452)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673510851914-622a3205-c24e-40c5-91f6-ef40ec4ca402.png#averageHue=%23292e36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=230&id=uf443be8a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=904&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57278&status=done&style=none&taskId=ucd404d49-37fc-49c0-b0f1-b72216056eb&title=&width=452)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673510872996-a0046606-3923-4726-858f-5eb858780042.png#averageHue=%23292d35&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=716&id=udc3c6b64&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1432&originWidth=1352&originalType=binary&ratio=1&rotation=0&showTitle=false&size=270219&status=done&style=none&taskId=u09da00bd-22b0-4add-bfda-9bde8b3da46&title=&width=676)
> 到底是生产环境还是开发环境取决于执行的命令

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673511020119-2d752dab-078e-4372-9092-30b7729ed592.png#averageHue=%23282d36&clientId=u8028b30c-84d7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=714&id=u8d5767c3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1428&originWidth=1866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=450136&status=done&style=none&taskId=u6f3b6557-0dad-42a0-8863-4d68dfebb03&title=&width=933)
# vite环境变量配置
环境变量: 会根据当前的**代码环境**产生值的变化的变量就叫做环境变量
代码环境:

1. 开发环境
2. 测试环境
3. 预发布环境
4. 灰度环境
5. 生产环境
6. ......

举两个例子: 
> 百度地图的sdk, 小程序的sdk
> APP_KEY: 测试环境和生产还有开发环境是不一样的key
> - 开发环境: 110
> - 生产环境: 111
> - 测试环境: 112
> 
我们去请求第三方sdk接口的时候需要带上的一个身份信息

> 我们在和后端对接的时候, 前端在开发环境中请求的后端API地址和生产环境的后端API地址是一个吗？ 
> 肯定不是同一个
> - 开发和测试: [http://test.api](http://test.api/)
> - 生产: [https://prod.api](https://api/)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673515449095-2bb61290-f9b3-4ed7-96ea-b67d1799cf19.png#averageHue=%232a2f37&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=419&id=u691acd3b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=838&originWidth=962&originalType=binary&ratio=1&rotation=0&showTitle=false&size=126399&status=done&style=none&taskId=ua257cd6a-1193-489d-9e9d-8f3261dc704&title=&width=481)
> 在这些环境发生变化的时候，我们每次都需要进行手动的更改代码，万一有一次没有改配置，或者配置错了，问题可想而知

## 在vite中的环境变量处理
> vite内置了`dotenv`这个第三方库

dotenv会自动读取.env文件, 并解析这个文件中的对应环境变量，并将其注入到process(当前进程对象)对象下(但是vite考虑到和其他配置的一些冲突问题, 他不会直接注入到process对象下)
涉及到vite.config.js中的一些配置:

- root
- envDir: 用来配置当前环境变量的文件地址
> 但是我们先不考虑改变这两个配置


**vite给我们提供了一些补偿措施:**
我们可以调用vite的`**loadEnv**`来手动确认env文件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673516385311-b6dff111-92d7-4e72-bcc7-5e9af17847df.png#averageHue=%23292d35&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=662&id=uee7e161e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1324&originWidth=1352&originalType=binary&ratio=1&rotation=0&showTitle=false&size=282159&status=done&style=none&taskId=u1f13cc0e-3a45-49b4-936d-481c94aac7a&title=&width=676)
> 参数一mode：
> yarn dev --mode development 会将mode设置为development传递进来，
> 默认执行yarn vite ，mode就是development；
> 执行yarn vite build，mode就是production。
> process.cwd()方法: 返回当前node进程的工作目录
> 通过loadEnv加载环境变量返回的env输出结果中，我们可以观察到：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673516466814-81f13814-6605-4f86-92c2-08ea9c2ee179.png#averageHue=%23293039&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=131&id=ud27a5b24&margin=%5Bobject%20Object%5D&name=image.png&originHeight=262&originWidth=1068&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73282&status=done&style=none&taskId=u0a9f96c6-beba-4427-8286-4b8701e6020&title=&width=534)
> 我们通过
> **.env: 所有环境都需要用到的环境变量**
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673516511556-e45bf5a6-3b2e-441c-8554-b7fb5a6c7663.png#averageHue=%232c3038&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=85&id=u470b77b1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=170&originWidth=564&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16751&status=done&style=none&taskId=u7e317b2e-bfd4-42ed-9264-fa49f596a0a&title=&width=282)
> **.env.development: 开发环境需要用到的环境变量(默认情况下vite将我们的开发环境取名为development) **
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673516522914-52336085-9ab6-44b7-836c-68ffe5ff0d20.png#averageHue=%232d313a&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=103&id=u054c0838&margin=%5Bobject%20Object%5D&name=image.png&originHeight=206&originWidth=726&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26570&status=done&style=none&taskId=u63b2a273-d69f-45c9-8e6c-42893554292&title=&width=363)
> **.env.test：测试环境需要用到的环境变量(启动需要配置mode，使用**`**yarn vite --mode test**`**启动项目，或者配置package.json中的script)**
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673523810198-81af254c-052e-45ac-a71f-19395e088e77.png#averageHue=%230e0d0c&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=103&id=u43f6a797&margin=%5Bobject%20Object%5D&name=image.png&originHeight=206&originWidth=624&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22435&status=done&style=none&taskId=u2beb4e3c-7d78-48b0-a4ba-5e65abe8ec5&title=&width=312)
> **.env.production: 生产环境需要用到的环境变量(默认情况下vite将我们的生产环境取名为production)**
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673516569569-47df4c17-1bde-426f-aab8-58fa04f793ed.png#averageHue=%232d313a&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=103&id=u810e69a8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=206&originWidth=700&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25915&status=done&style=none&taskId=u269ceed3-36a1-4a02-b939-4a642709593&title=&width=350)


当我们调用loadenv的时候, 他会做如下几件事:

1. 直接根据路径找到该路径下的`.env`文件， 并解析其中的环境变量 并放进一个对象里
2. 会将传进来的mode这个变量的值进行拼接:` **.env.development**`，并根据我们提供的目录去取对应的配置文件并进行解析, 并放进一个对象
3. 我们可以理解为 
```javascript
const baseEnvConfig = 读取.env的配置  
const modeEnvConfig = 读取env相关配置  
const lastEnvConfig = { ...baseEnvConfig, ...modeEnvConfig }
```
> **如果是客户端, vite会将对应的环境变量注入到**`**import.meta.env**`**里去**

> 在request.js中输出
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673523340151-441f0cca-574d-45ff-92b1-42cb0f795970.png#averageHue=%23060504&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=u39980dd7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=1248&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35108&status=done&style=none&taskId=u2adef5cf-2631-478f-887e-455c93b6972&title=&width=624)
> 并在index.js中引入启动项目，打开控制台发现：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673523418556-ec5d97c2-134f-480c-8264-7be5462d02a4.png#averageHue=%2325272b&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=119&id=u5ba76dc8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=238&originWidth=1118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=79285&status=done&style=none&taskId=u012c7534-adfe-4460-9569-5fa505dda17&title=&width=559)
> **该env对象中并没有我们配置的环境变量属性？？！!**
> **这是因为vite做了一个拦截, 他为了防止我们将隐私性的变量直接送进**`**import.meta.env**`**中, 所以他做了一层拦截, 如果你的环境变量不是以**`**VITE_**`**开头的, 他就不会帮你注入到客户端中去, 如果我们想要更改这个前缀, 可以去使用**`**envPrefix**`**配置**
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673523530127-a5390ce7-3212-4ff1-8fcc-05a01537dbc9.png#averageHue=%23040303&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=311&id=u23d2c248&margin=%5Bobject%20Object%5D&name=image.png&originHeight=622&originWidth=904&originalType=binary&ratio=1&rotation=0&showTitle=false&size=79216&status=done&style=none&taskId=ueeecfb28-09ff-4e26-8987-acc79f3ded2&title=&width=452)


> ## 补充一个小知识: 为什么vite.config.js可以书写成esmodule的形式?
> 这是因为vite他在读取这个vite.config.js的时候会率先node去解析文件语法, 如果发现你是ESmodule规范会直接将你的esmodule规范进行替换变成CommonJS规范

# Vite是怎么让浏览器识别.vue文件的？[原理篇]
## 首先区分这两个命令
`yarn add vite`
和
`yarn create vite my-vue-app --template vue`
> yarn create 实际上就是在安装create-vite脚手架 然后使用脚手架的指令构建项目

**我们现在执行一下**`**yarn create vite my-vue-app --template vue**`**该命令,**
**执行完毕后再执行**`**cd my-vue-app**`**和**`**yarn**`**(安装依赖)和**`**yarn dev**`**启动项目。**
> **我们打开控制面板查看网络请求部分，我们发现一个奇怪的请求**`**App.vue**`
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673525379500-c1dc5779-144d-4473-be85-378853a9932e.png#averageHue=%2324262a&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=651&id=u5603c4f9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1302&originWidth=1124&originalType=binary&ratio=1&rotation=0&showTitle=false&size=285373&status=done&style=none&taskId=u947bcdf1-a505-4c4f-96e1-5e5d4fa8e8f&title=&width=562)
> **点开发现是js文件，那么这个文件是怎么被浏览器解析的呢？浏览器是怎么认识**`**.vue**`**文件的呢？**

**我们来实现一套简单的Vite的开发服务器**

1. **解决我们刚刚的问题**
2. **对开发服务器的原理方面有一个基础简单的认识(使用yarn dev命令到底发生了什么事情)**
> 1. **首先我们创建一个vite-dev-server文件夹，先初始化工程**
> - 执行`yarn init -y`初始化工程
> - 安装koa`yarn add koa`，node端的一个框架(**Koa 是 Express 的升级版**)
> 2. 新建一个index.js导入koa
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673526605183-97b00100-90dd-4a11-8137-3a6feeef7e11.png#averageHue=%23030202&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=392&id=udd495ef3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=784&originWidth=1654&originalType=binary&ratio=1&rotation=0&showTitle=false&size=161119&status=done&style=none&taskId=u23d17f49-1e04-4580-b5f4-a03f3bddb3b&title=&width=827)
> - 执行`node index.js`运行该文件，访问127.0.0.1:5173，控制台输出
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673526782120-2f5d56b3-8336-4c64-b713-fcd3a8e53f5d.png#averageHue=%23161613&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=191&id=u5e70babd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=382&originWidth=1278&originalType=binary&ratio=1&rotation=0&showTitle=false&size=89888&status=done&style=none&taskId=u0d9e2bef-fa83-4b3c-a37f-6a678ea37c3&title=&width=639)
> 我们可以在package.json中配置脚本
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673526835785-e092f9f0-5031-4d98-906f-7dfee758685a.png#averageHue=%230a0807&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=149&id=uaaa59b08&margin=%5Bobject%20Object%5D&name=image.png&originHeight=298&originWidth=708&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30207&status=done&style=none&taskId=uba4887ef-15ce-4b29-8bed-513bcf4adce&title=&width=354)
> 就可以使用yarn dev启动项目了
> - 接着我们编写请求路径的处理代码：
> 

```javascript
const Koa = require('koa');//node只支持CommonJS,所以我们只可以使用require
const fs = require('fs');//fs是node内置的模块
const path = require('path');

const app = new Koa();// const vue = new Vue();

// 当请求来临以后会直接进入到use注册的回调函数中
app.use(async (ctx) => {//ctx上下文
    console.log("ctx", ctx.request, ctx.response)
    if (ctx.request.url === '/') {
        // 向根目录请求内容,我使用fs模块读取文件内容
        const indexContent =
            await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
        console.log(indexContent.toString())
        // 设置响应头的内容类型格式为html格式
        ctx.response.set("Content-Type", "text/html")
        // 设置响应体
        ctx.response.body = indexContent
    }
    if (ctx.request.url === '/main.js') {
        const mainContent =
            await fs.promises.readFile(path.resolve(__dirname, "./main.js"))
        console.log('mainJS', mainContent.toString())
        // 设置响应头的内容类型格式为js格式,让浏览器使用js的格式去解析
        ctx.response.set("Content-Type", "text/javascript")
        // 设置响应体
        ctx.response.body = mainContent
    }
    if (ctx.request.url === '/App.vue') {
        const mainVueContent =
            await fs.promises.readFile(path.resolve(__dirname, "./App.vue"))
        // 如果是Vue文件,会做一个字符串替换: 如果匹配到了<template>直接进行全部的字符串的替换

        // 设置响应类型,告诉浏览器即使看到的是.vue的文件,也使用JS的方式去解析!!所以这就是浏览器能够识别.vue文件中js代码的原因
        // 浏览器并不会看文件的后缀,在浏览器眼里,所有的文件都是字符串,我们只有设置了响应类型,浏览器才会使用该类型解析
        ctx.response.set("Content-Type", "text/javascript")
        // 设置响应体
        ctx.response.body = mainVueContent
    }

})
// 开启一个服务,端口号为5173
app.listen(5173, () => {
    console.log('vite dev server listen on 5173')
})
```
> 注意如果我们在上面的代码的不去设置响应类型，浏览器则会报错
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673529785985-b2452185-b70c-432d-8e05-e7ed1ae2da0f.png#averageHue=%2332191b&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=93&id=ueb17b8dd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=1118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27080&status=done&style=none&taskId=u1eb54b4a-b11a-48c5-bc94-17046b80170&title=&width=559)

**所以浏览器能够识别**`**.vue**`**的文件归根结底就是**
> **服务端设置响应类型,告诉浏览器即使看到的是.vue的文件,也使用JS的方式去解析!!所以这就是浏览器能够识别.vue文件中js代码的原因。**
> **而且浏览器并不会看文件的后缀,在浏览器眼里,所有的文件都是字符串,我们只有设置了响应类型,浏览器才会使用该类型解析。**
> **可以这样理解：浏览器就是一个瞎子，它不关注文件的后缀，只有我们通过响应类型告诉浏览器让它用什么类型进行解析该文件，它就会使用什么类型进行该文件的解析**
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673530630760-ee3db987-da2f-4c8c-8c93-607424d46ab0.png#averageHue=%233b4345&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=130&id=u771a3725&margin=%5Bobject%20Object%5D&name=image.png&originHeight=260&originWidth=1120&originalType=binary&ratio=1&rotation=0&showTitle=false&size=82066&status=done&style=none&taskId=u82e4fdb3-e8ef-4aec-9de9-166964acee8&title=&width=560)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673530648325-954c0d47-0aaf-4541-9056-f836a9b2690a.png#averageHue=%23262b30&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=325&id=u7b804fa4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=650&originWidth=1120&originalType=binary&ratio=1&rotation=0&showTitle=false&size=189302&status=done&style=none&taskId=u793d5ba1-9936-4857-832b-7bfa6e34b7a&title=&width=560)
> 注意虽然是`.vue`文件，但是文件里面的内容已经不是我们所写的原本的文件了，它是经过vue编译过后的js格式文件
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673525379500-c1dc5779-144d-4473-be85-378853a9932e.png#averageHue=%2324262a&clientId=uead2b537-05ea-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=651&id=aLnVb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1302&originWidth=1124&originalType=binary&ratio=1&rotation=0&showTitle=false&size=285373&status=done&style=none&taskId=u947bcdf1-a505-4c4f-96e1-5e5d4fa8e8f&title=&width=562)

# Vite中对css以及css模块化的处理
> Vite天生就支持对css文件的直接处理
> 1. vite读取到main.js中引用了index.css
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673584399175-08d52562-3038-4ff0-9eb2-4ad252b5a732.png#averageHue=%232a2e36&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=122&id=ub69e24e0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=598&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25226&status=done&style=none&taskId=ucf4bc17b-3aa3-4b4f-9a58-ee8d10c6b27&title=&width=299)
> 2. 直接去使用fs模块去读取index.css中的文件内容
> 3. 直接创建一个style标签，将index.css中文件的内容直接copy进style标签里
> 4. 将style标签插入到index.html的head中
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673584368912-4494516d-e6f6-4e91-8468-a76c35f27444.png#averageHue=%23f2f3f2&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=281&id=u13f13f21&margin=%5Bobject%20Object%5D&name=image.png&originHeight=562&originWidth=1320&originalType=binary&ratio=1&rotation=0&showTitle=false&size=235247&status=done&style=none&taskId=ua64123e4-87d8-48c2-83fd-cf3a2de6002&title=&width=660)
> 5. 将该css文件中的内容直接替换为js脚本(方便热更新或者css的模块化)，同时设置Content-Type为js 从而让浏览器以js脚本的形式来执行该css后缀的文件
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673584452045-4a95bd63-d67d-4918-9882-acc3fcce6317.png#averageHue=%23fcfaf5&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=222&id=uf045d1a1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=444&originWidth=1114&originalType=binary&ratio=1&rotation=0&showTitle=false&size=184948&status=done&style=none&taskId=u64235210-e954-4a36-83e7-ac95e387817&title=&width=557)

场景：

- 一个组件最外层元素的类名一般取名为：`.wrapper`
- 一个组件最内层元素的类名一般取名为：`.footer`
> 我们取了这个类名footer，，别人不知道然后也取了这个类名footer
> 组件A：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673585544290-30131369-fa09-4d02-93bd-88d4933f2f2b.png#averageHue=%23292f37&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=120&id=u971a22ab&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=1032&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69346&status=done&style=none&taskId=uae0e44d3-563b-44cd-8ee7-a46e6bfc606&title=&width=351)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673585552732-55251300-a7c7-4a78-b741-3dd22ac70cd1.png#averageHue=%232c3038&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=121&id=udfa92b0e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=796&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55116&status=done&style=none&taskId=u6a2a1523-6e96-416e-b103-d0ab2bbb3b6&title=&width=210)
> 组件B：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673585618969-a1cdc600-78ed-4b94-9614-bef168b46972.png#averageHue=%232a2f38&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=119&id=u49f4e15b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=1032&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71759&status=done&style=none&taskId=ua2f74348-9878-4ec1-82ef-ab9a5307db4&title=&width=349)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673585627097-1d7508b9-b6d4-4dc3-b2be-a0bb6c0a6b36.png#averageHue=%232c3038&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=126&id=u31cf3eb4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=730&originalType=binary&ratio=1&rotation=0&showTitle=false&size=53114&status=done&style=none&taskId=ufc82fd88-a2c5-4330-afb1-a0ace16446b&title=&width=200)
> main.js中引入，打开页面发现：后引入的把前面的样式覆盖掉了(因为类名冲突)，这就是协同开发时候很容易出现的问题
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673585717221-2caa6c69-2249-4763-9236-c0673b89cc8a.png#averageHue=%23fcf9f7&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=580&id=uf03203bb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1410&originWidth=1120&originalType=binary&ratio=1&rotation=0&showTitle=false&size=349800&status=done&style=none&taskId=uc2d4baa5-8392-454c-88be-0a3a40768a4&title=&width=461)

cssModule就是来解决这个问题的
## css module
> 基于上面的案例，我们只需要 
> 1. 首先把两个css的文件的名称修改一下：在`.css`前面加上`.module`
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673585970095-78d4dcac-6111-4455-98d0-8017a8a91664.png#averageHue=%23252931&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=110&id=u092f44d2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=514&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28057&status=done&style=none&taskId=u6dedc21e-f5cc-4176-b48f-6164df82fe6&title=&width=257)--->![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586002373-03af639a-7eff-4989-86ca-ab1f1d117ebb.png#averageHue=%23252a31&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=108&id=u42f62365&margin=%5Bobject%20Object%5D&name=image.png&originHeight=216&originWidth=522&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30645&status=done&style=none&taskId=u23cf5e02-2532-41d8-a4d2-d641f46b58d&title=&width=261)
> 2. 修改css在组件中的引入方式：
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586410349-c887210d-2357-4727-8565-2fec3e605001.png#averageHue=%23292d35&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=u025410fa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=1248&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35789&status=done&style=none&taskId=u346cb19a-cc31-4e5e-ad32-16ddc66098c&title=&width=624)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586423515-b75eac7f-1ae0-47a3-9531-1604a3c3a135.png#averageHue=%23292d35&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=ud6121a2d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=1248&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35663&status=done&style=none&taskId=u06d00750-6fa9-49af-a8f0-a0eeb1ee15e&title=&width=624)
> 3. 分别输出这两个对象：
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586491111-8126cead-3d38-410b-9d8a-d45a72bb2dc0.png#averageHue=%23fefefd&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=ub25f0ba4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=1124&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88844&status=done&style=none&taskId=uee590d2b-978f-489d-85f9-369aaef05d2&title=&width=562)
> 并且在页面head中也有这两个的style标签：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586540501-ccc5668f-a7bd-4b2c-aa41-ec558ed6bb3e.png#averageHue=%23fefefd&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=360&id=ub22110b9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=720&originWidth=1126&originalType=binary&ratio=1&rotation=0&showTitle=false&size=240152&status=done&style=none&taskId=u2af9857f-c368-4666-8e5f-5d5f7b047a8&title=&width=563)
> 4. 使用该对象中的footer属性
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586638989-cb357172-2fae-433c-bae2-24a351c9cc0e.png#averageHue=%23292d35&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=u311d028e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=924&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30693&status=done&style=none&taskId=u92c1b232-b499-4a3c-83c2-c3c8c6edb30&title=&width=462)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586653966-a42523ef-b250-4138-976b-87891d5cd829.png#averageHue=%232a2e36&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=u418a59f5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=990&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32872&status=done&style=none&taskId=uf806d9b0-276b-4269-a81b-f4d76f37266&title=&width=495)
> 5. 页面：
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586707401-8a3a3f63-1997-40bf-99c8-d51e4b36c106.png#averageHue=%23800080&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=416&id=uc7b47db2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=832&originWidth=272&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65893&status=done&style=none&taskId=u9b33e0fb-3788-4e37-b04d-dc1f47b74f7&title=&width=136)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673586724232-02c4ffaa-0886-4b70-8c27-8686db97f8fb.png#averageHue=%23fefefd&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=292&id=ud4fa5a8b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=584&originWidth=808&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115619&status=done&style=none&taskId=ufdaa2cfa-5255-4a1c-8c7c-e60b6f59aca&title=&width=404)


大概原理：
> 由于原理是基于nodeJS的，所以大概描述一下流程
> 1. 通过引入xxx.module.css，node会读取该文件，node发现这个文件是一个module.css(module是一种约定，表示需要开启css模块化)
> 2. 将我们的所有类名进行一定规则的替换(将`.footer`替换成`._footer_kz4a9_1`)
> 3. 同时创建一个映射对象`{footer:"_footer_kz4a9_1"}`
> 4. 将替换过后的内容塞进style标签里然后放入到head标签中
> 5. 将`xxx.module.css`内容全部替换为js脚本(方便热更新或者css的模块化)
> 6. 将创建的映射对象在脚本中进行默认导出
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673587892945-0be95ab7-2cb4-4086-a507-7f51c44827ee.png#averageHue=%23fdfcf7&clientId=uc84af25a-384d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=307&id=u23c1606d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=684&originWidth=1388&originalType=binary&ratio=1&rotation=0&showTitle=false&size=247059&status=done&style=none&taskId=u4965634c-2d7e-489b-90dd-55173757f01&title=&width=622)


## less(预处理器)
> Vite也可以对less进行解析，不过需要安装less预处理器。
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673588611124-d5e619f2-1944-4eb3-8d6f-4a3819d0ffc8.png#averageHue=%232a2e36&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=215&id=u0ab5ec65&margin=%5Bobject%20Object%5D&name=image.png&originHeight=838&originWidth=984&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109560&status=done&style=none&taskId=u38b512db-d57b-493d-aab2-d7f3e04559b&title=&width=253)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673588620501-a535d0f9-e573-4e57-9995-d938f2f68974.png#averageHue=%23292e37&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=222&id=ud36e916d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=730&originWidth=1308&originalType=binary&ratio=1&rotation=0&showTitle=false&size=167788&status=done&style=none&taskId=ub85e2a44-69bb-4a0c-b5ef-4872b186431&title=&width=397)
> 在main.js中引入后vite出现报错提示：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673588741584-93ee4663-9f48-4c2e-969c-e587f1460473.png#averageHue=%232b3640&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=80&id=uc5c7b240&margin=%5Bobject%20Object%5D&name=image.png&originHeight=160&originWidth=1468&originalType=binary&ratio=1&rotation=0&showTitle=false&size=108209&status=done&style=none&taskId=u35ee1e67-2279-4ceb-b5d4-f730484fe50&title=&width=734)
> 我们需要安装less预处理器：
> `yarn add less`
> 重新启动项目：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673588882102-6bcba90a-bba3-47da-a9cd-e4ad70918ec5.png#averageHue=%23caddf4&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=321&id=uc3ebd68c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=642&originWidth=2192&originalType=binary&ratio=1&rotation=0&showTitle=false&size=268917&status=done&style=none&taskId=uec409f3e-b66b-4947-a60b-5d6e4d7d801&title=&width=1096)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673588911035-bbfbfb51-2ea2-49aa-a7f6-cf8d3a71398a.png#averageHue=%23fefbfb&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=174&id=u3d466512&margin=%5Bobject%20Object%5D&name=image.png&originHeight=348&originWidth=1388&originalType=binary&ratio=1&rotation=0&showTitle=false&size=80071&status=done&style=none&taskId=u90240c94-9b80-4d71-aa67-e59b95b1f5e&title=&width=694)


# vite.config.js中css配置(modules篇)
> 在vite.config.js中我们通过css属性去控制整个vite对于css的处理行为
> - localsConvention：
> 
描述：
> 当我们xxx.module.css中写了例如`.footer-content`这种类名，
> 该配置`localsConvention`是用于控制在引入`xxx.module.css`的时候，
> 对象中的属性名称显示的形式(由于js中属性名不能直接调用带有`-`的属性)
> 值：
>    - 原始：
>       - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673589810596-9f4445de-af6e-4390-89a3-6aae527d503e.png#averageHue=%23fdf8f7&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=79&id=u21c752fc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=158&originWidth=1066&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29406&status=done&style=none&taskId=ub3648ab4-15d2-4798-a828-2ed3839038c&title=&width=533)
>    - camelCase：进行驼峰转换(保留原来的)
>       - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673589907101-080690e5-f7b3-4acb-9664-fdd3fc61ff6c.png#averageHue=%23fdf8f8&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=99&id=u33668681&margin=%5Bobject%20Object%5D&name=image.png&originHeight=198&originWidth=1384&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46686&status=done&style=none&taskId=u77d7f75b-d7f7-46c6-bc8e-3e32458bd62&title=&width=692)
>    - camelCaseOnly：驼峰(不保留原来的)
>       - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673589963738-f27d201d-f523-4313-aae3-1f4598014e53.png#averageHue=%23fefefd&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=71&id=ufaec97c3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=142&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=59134&status=done&style=none&taskId=ud852b118-a29b-428f-a2df-8075190fd22&title=&width=540)
>    - dashes
>       - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673590581733-7a9cd293-8551-4943-b27c-ecfff39a6ae2.png#averageHue=%23fdf7f7&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=96&id=u75dd1da9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=192&originWidth=1374&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46354&status=done&style=none&taskId=ue721c36b-920c-4c1a-b44d-7cd7ab76d29&title=&width=687)
>    - dashesOnly
>       - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673590616345-ee8c4c9f-379f-433d-b4d7-b00f2447ae7f.png#averageHue=%23fefefd&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=68&id=uab4e2c79&margin=%5Bobject%20Object%5D&name=image.png&originHeight=136&originWidth=1022&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58406&status=done&style=none&taskId=ude7d0f66-5241-4008-8071-68bd175fcfb&title=&width=511)
> - scopeBehaviour
> 
描述：
> 配置当前的模块化行为是模块化还是全局化(有hash后缀就是开启了模块化的一个标志，因为它可以保证产生不同的hash值使样式不会被覆盖)
> 值：
>    - 默认：local（样式类名有hash后缀，可以防止样式冲突）
>    - global：（样式类名没有hash后缀，会导致样式冲突）
> - generateScopedName：生成类名的规则
> 
描述：
> 修改xxx.moudle.css文件中的css类名最终生成的规则
> [https://github.com/webpack/loader-utils#interpolatename](https://github.com/webpack/loader-utils#interpolatename)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673589907101-080690e5-f7b3-4acb-9664-fdd3fc61ff6c.png#averageHue=%23fdf8f8&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=99&id=Eu3Ah&margin=%5Bobject%20Object%5D&name=image.png&originHeight=198&originWidth=1384&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46686&status=done&style=none&taskId=u77d7f75b-d7f7-46c6-bc8e-3e32458bd62&title=&width=692)
> 默认是：`_[local]_[hash:5]`。
> 我们修改该属性为`"[name]_[local]_[hash:5]"`结果如下
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673592119026-4485d313-2597-4563-a75a-07d043ccfcc8.png#averageHue=%23fefefd&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=83&id=ube30d09a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=1084&originalType=binary&ratio=1&rotation=0&showTitle=false&size=86826&status=done&style=none&taskId=ua8edadbd-2c68-408a-97e5-0378266acfa&title=&width=542)
> - hashPrefix：生成hash会根据你的类名去进行生成，如果你想要你生成的hash独特一些则可以配置该属性
> - globalModulePaths：代表不想参与css模块化的路径


# Vite配置文件中css配置(preprocessorOptions篇)
> 主要用于配置css预处理器的一些全局参数，
> 比如说我们编译less的时候使用的`npx lessc ComponentC.module.less`
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673594694128-6ed68289-7a4f-41cb-ac4a-009ab0897052.png#averageHue=%232a2e37&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=295&id=u18a88cf9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=946&originWidth=984&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130301&status=done&style=none&taskId=u3f9af5af-9085-409d-a900-e509a0faec3&title=&width=307)
> 如果执行上面的命令不加某个参数，则less只能计算括号内的，加上参数：
> `npx lessc ComponentC.module.less --math="always"`，则会计算所有的
> 其中后面加的`--math="always"`就是全局参数。

在vite的配置文件中也可以配置：
> 如果不进行配置，结果如下：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673594973799-c5c5e2f8-b711-494a-99f5-f0f4636da1ca.png#averageHue=%23fefdf9&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=87&id=u0ab6c567&margin=%5Bobject%20Object%5D&name=image.png&originHeight=174&originWidth=622&originalType=binary&ratio=1&rotation=0&showTitle=false&size=45403&status=done&style=none&taskId=u86748650-d7e9-4f29-ac6c-65a7b79c4ac&title=&width=311)
> 在vite.config.js中添加如下配置：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673595112005-e1d88d20-f105-4e82-82ac-2d42f77e1e4a.png#averageHue=%23292d36&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=278&id=u4cb31019&margin=%5Bobject%20Object%5D&name=image.png&originHeight=838&originWidth=1582&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130908&status=done&style=none&taskId=u5989c646-a8b1-4048-97bc-f7e8fda0e77&title=&width=525)
> 则`math:"always"`就会被作为编译的执行参数
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673595235813-50006803-3fe5-451b-80de-475ed4017ee0.png#averageHue=%23fdf7f7&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=89&id=u2740bad1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=178&originWidth=536&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23928&status=done&style=none&taskId=u235e34ad-a9c3-4f9a-b384-5ab16f9be31&title=&width=268)

## less的全局变量
> less是可以定义变量的，分为局部变量(独有的)和把变量单独写成一个less文件(公共的主题)然后分别导入。
> 但是我们每次需要用到的地方就要每次导入
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673595839885-3c22fb6e-f70c-47d5-b154-527302ea6e10.png#averageHue=%232a2e36&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=106&id=u77069729&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=664&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29407&status=done&style=none&taskId=u236d0330-8c3e-403e-8474-25f52dd88d1&title=&width=288)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673595846162-d1754546-60dc-42c4-bc6a-d1e444682462.png#averageHue=%232c3139&clientId=u0595b202-e3b2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=ua3642dec&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=826&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34475&status=done&style=none&taskId=uec172216-43dc-490c-a467-df8a6e9aa30&title=&width=321)
> 由于`@import`本身有一些性能问题，还有每次都需要写比较繁琐，我们就可以配置preprocessorOptions来方便开发和管理
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673596191573-247adc3f-149f-4333-9097-86a20a6a9cc9.png#averageHue=%232a2e36&clientId=ue771b802-8eb2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=338&id=ufa6b96ab&margin=%5Bobject%20Object%5D&name=image.png&originHeight=676&originWidth=1408&originalType=binary&ratio=1&rotation=0&showTitle=false&size=124780&status=done&style=none&taskId=u5e0b19da-3a1a-44c7-ba96-382bc115306&title=&width=704)
> 然后把全部的导入都可以删除；它就会去我们配置的全局变量中找该变量，如果全局变量中也没有则会报错：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673596377963-7e3e3ff1-5d5f-4ac5-956e-fa440053b9ab.png#averageHue=%23232423&clientId=ue771b802-8eb2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=457&id=u79546714&margin=%5Bobject%20Object%5D&name=image.png&originHeight=914&originWidth=1752&originalType=binary&ratio=1&rotation=0&showTitle=false&size=402324&status=done&style=none&taskId=u5ed5c686-4795-4979-bd0b-a398692e936&title=&width=876)


# Vite配置文件中css配置(devSourcemap篇)
> sourceMap
> 文件之间的索引：假设我们的文件被压缩或者编译过后，这个时候程序出错，它将不会产生正确的错误位置信息，如果设置了sourceMap，他就会有一个索引文件map。
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673597018913-3ab6afc6-5073-4c5c-acb9-a56d4328fc1e.png#averageHue=%232b2f37&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=95&id=u94de7eda&margin=%5Bobject%20Object%5D&name=image.png&originHeight=190&originWidth=984&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34835&status=done&style=none&taskId=u735fbf70-b721-4cdf-b988-b3098d84cc9&title=&width=492)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673597055577-b9ebd46e-b626-48d2-a32e-0e06e6de284f.png#averageHue=%23fefefd&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=301&id=uac85e340&margin=%5Bobject%20Object%5D&name=image.png&originHeight=602&originWidth=1118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147098&status=done&style=none&taskId=ub83a0001-f3e3-4994-be89-af1131b466f&title=&width=559)

# postcss
> vite天生对postcss有非常良好的支持
> postcss它的用途就是保证css执行起来万无一失！
> 我们写的css代码(怎么爽怎么写)-->postcss-->【去将语法编译(嵌套语法，函数，变量)成原生css】less，sass等预处理器都可以做-->再次对未来的高级css语法进行降级-->前缀补全-->浏览器客户端
> 与babel对比：
> 我们写的js代码(怎么爽怎么写)-->babel-->将最新的ts语法进行转换js语法-->做一次语法降级--交给浏览器客户端

比如我们使用css变量(css新的提案)的写法：(注意必须使用`--`开头)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673598082755-d6d6abc9-24c8-4369-bb07-1f10277cb23b.png#averageHue=%232a2e36&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=176&id=uc777bbb4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=752&originalType=binary&ratio=1&rotation=0&showTitle=false&size=37083&status=done&style=none&taskId=u8f4aa3b4-e5ef-42c3-aef7-bfb6724a440&title=&width=376)
在main.js中引入后，在想使用的地方使用`var(--xxx)`
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673598124750-a488c828-b0ed-427a-8a8a-98a529351eb3.png#averageHue=%232a2e36&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=230&id=u48411f37&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=1012&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55966&status=done&style=none&taskId=u3a9fde0f-f410-461a-b033-c56f321d777&title=&width=506)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673598223203-bd9189d7-614c-4b3c-81ab-192d3ebc7550.png#averageHue=%23fefafa&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=208&id=ua41b80c5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=416&originWidth=666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44676&status=done&style=none&taskId=ua3fa0174-dd7b-411e-9c6b-bbb2eb82548&title=&width=333)
> babel--->帮助我们让js执行起来万无一失
> 

```javascript
class App{	}//es6的写法
//经过babel的转换
function App(){		}//es3的写法
```
那么我们这样写了，浏览器的兼容性我们能考虑到吗？预处理器并不能帮我们解决这些问题：

1. 对未来css属性的一些使用降级问题
2. 前缀补全：Google：--webkit
## 使用postcss

1. 安装：`yarn add postcss-cli postcss -D`
> postcss-cli提供编译的一些命令，postcss做编译的工作

2. 书写描述文件
   - postcss.config.js并安装预处理环境
   - `yarn add postcss-preset-env -D`
```javascript
// 就类似全屋净水系统加插槽,加额外的功能
// 预设环境中是会包含很多的插件的
// 语法降级 --> postcss-low-level
// 编译插件 --> postcss-compiler
// ...
// 预设就是把这些必要的插件都给我们装上了
// 做语法编译 less语法,sass语法，但是由于官方维护的这些插件都停止维护了
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
    plugins: [
        // 对css高级语法降级的插件
        postcssPresetEnv()
    ]

}
```
> 目前来说 less和sass等一系列的预处理器postcss插件已经停止维护了(维护成本太高) less插件 你自己其使用less和sass编译完了，然后把编译结果给我
> **所以业内就产生了一个新的说法：postcss是后处理器**

使用`npx postcss index.css -o result.css`命令进行把index.css输出为result.css
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673600818604-99ed7f1c-f31b-4a75-9846-83f50a49344a.png#averageHue=%23292e36&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=172&id=u30f8c42d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=514&originWidth=1054&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55298&status=done&style=none&taskId=u208b78f1-5033-4da1-bd2e-e9fc0226af6&title=&width=352)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673600839340-a44e86eb-f33a-4456-98b6-63418232be03.png#averageHue=%232a2f37&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=204&id=u13acf828&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1054&originalType=binary&ratio=1&rotation=0&showTitle=false&size=66403&status=done&style=none&taskId=uaacc5f4a-afc1-4d94-929a-bb73f099b06&title=&width=378)
# Vite配置文件中css配置(postcss篇)
> 直接在**css.postcss**中进行配置，该属性直接配置的就是postcss的配置(或者创建一个postcss.config.js文件，vite会自动导入)
> 我们甚至都不需要安装postcss-cli和postcss，我们只需要安装一个`postcss-preset-env`的预设环境插件
> - postcss-preset-env：支持css变量和一些未来的css语法，自动补全(autoprefixer)
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673601897333-218af7dc-da29-4724-bb2c-4e3cef846b02.png#averageHue=%232a2e37&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=122&id=uf421fc37&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=1336&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55128&status=done&style=none&taskId=u9d816538-553b-4dc2-b940-2173b53ff0c&title=&width=668)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673601888620-04824d4f-d2de-42c3-ad08-5781fd7c07b4.png#averageHue=%232a2f38&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=149&id=ub3561bfa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=298&originWidth=876&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39031&status=done&style=none&taskId=uaca825d2-936b-4c75-9a24-a1418b04ece&title=&width=438)

我们尝试在less中写一个新的写法：
```less
// width的新的响应式的写法,最小100px,最大200px,100到200之间都是百分之30
width: clamp(100px, 30%, 200px);
```
启动后在页面声呈现的是：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673602011245-028e55b8-fb5d-4ec4-9856-a7f0c548bc57.png#averageHue=%23fefefd&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=93&id=u0c1ef0b4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=624&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55339&status=done&style=none&taskId=u17efac26-2d13-4b8d-b9e8-6e9e7dd4bd3&title=&width=312)被转换了max()。
因为vite内部会有一个主流浏览器的支持表。
演示自动补全：`user-select: none;`补全为了![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673602174010-dc93598d-3e64-43ca-87d5-af152bededfa.png#averageHue=%23c1d8ed&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=54&id=u62552f10&margin=%5Bobject%20Object%5D&name=image.png&originHeight=108&originWidth=416&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25196&status=done&style=none&taskId=u2a48d7b7-7a3b-4676-962b-ab5c7cf3f38&title=&width=208)
# 关于postcss没有编译全局css变量的问题
> 在开发中，发现postcss在处理全局的css变量的时候，并没有给我们新添加一个该变量固定的属性值，如图：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673603100632-f6df7749-123e-4fff-9a44-e11cfa084170.png#averageHue=%23fefefd&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=242&id=uabd604d0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=484&originWidth=724&originalType=binary&ratio=1&rotation=0&showTitle=false&size=98174&status=done&style=none&taskId=uf9520dc6-ff53-4b63-b6ab-346b262d1c7&title=&width=362)
> 我们把这个全局的变量写到和使用变量的地方同一个位置
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673603260862-8e14f795-09a7-4941-ad51-3bc668bc0252.png#averageHue=%23292d36&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=341&id=u8fb6c8ce&margin=%5Bobject%20Object%5D&name=image.png&originHeight=682&originWidth=2060&originalType=binary&ratio=1&rotation=0&showTitle=false&size=104587&status=done&style=none&taskId=u5867fdb3-91e3-4206-93b9-5c870830d01&title=&width=1030)
> 结果发现：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673603285355-58da349f-8d55-4870-83d9-ae3b88ff5fea.png#averageHue=%23fefbfb&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=246&id=udd27f9b2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=492&originWidth=1078&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67701&status=done&style=none&taskId=u0dd7214a-8a91-4fd3-8c9d-83929ad13d2&title=&width=539)被编译了。
> 这是因为postcss是编译完一个文件就不记得存在这个文件了，是没有记忆的。所以它在编译到需要var获取变量的时候在该文件获取不到！因此就出现了这个问题。
> 解决办法：
> 在postcssPresetEnv中添加配置对象：**importFrom**，就好比你现在让postcss去知道有一些变量它需要记下来。

```javascript
postcss: {
  plugins: [postcssPresetEnv({
    importFrom: path.resolve(__dirname, "./variable.css"),
  })]
}
```
但是启动后会出现警告：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673603637406-8ec10211-d737-4b01-9b3c-ebd1080dd3b4.png#averageHue=%23272c34&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=66&id=u179aecfc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=132&originWidth=1680&originalType=binary&ratio=1&rotation=0&showTitle=false&size=108096&status=done&style=none&taskId=ue021f0f6-4be9-4540-9161-622b25bead6&title=&width=840)
# 为什么我们在服务端处理路径的时候一定要使用path
> 我们正常写一个读取文件的js，不使用path模块
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673604451723-3ecdbeb6-c7cf-41fc-a3f2-0ac17cda5ae8.png#averageHue=%232a2f37&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=419&id=u0514a06d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=838&originWidth=1236&originalType=binary&ratio=1&rotation=0&showTitle=false&size=135820&status=done&style=none&taskId=u516870a4-ea3a-457b-a070-623282b5ccf&title=&width=618)
> 在该目录下执行`node main.js`成功读取文件
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673604488317-403d58b0-6f81-4f7a-be4e-4539529c4fb0.png#averageHue=%232a343d&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=65&id=uc5c264b3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=130&originWidth=630&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32436&status=done&style=none&taskId=u89931ce8-91e7-4e89-9d3f-2020c50f280&title=&width=315)
> 但是如果我们没有在当前目录下执行该命令，我们在外面一层执行命令：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673604536215-764b5a52-51c6-4a9a-9730-67be6b4089e6.png#averageHue=%232f343e&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=191&id=uf60adffa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=382&originWidth=1310&originalType=binary&ratio=1&rotation=0&showTitle=false&size=190647&status=done&style=none&taskId=u67308e2c-61b3-4a16-9590-79d4e018c05&title=&width=655)
> 则会出现找不到文件的报错。

这是因为在读取文件的时候，node的fs模块会拿到你在执行node命令的目录的路径，如果我们使用的是相对路径，node则以`process.cwd()`执行命令的目录作为根目录，去查找文件的相对路径的位置。所以文件会找不到。因此我们需要使用绝对路径
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673605284495-7534754c-f09f-4b29-b43f-6ac7d3cfe675.png#averageHue=%23292d36&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=446&id=u1b2b9e1e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=892&originWidth=3556&originalType=binary&ratio=1&rotation=0&showTitle=false&size=297842&status=done&style=none&taskId=u8b46cc49-68b3-46df-9c4b-cb9bb481d47&title=&width=1778)
> 那`__dirname`是怎么来的呢？为什么我们可以直接使用它？
> 是因为我们node端写的使用代码都会放到一个立即执行函数中，立即执行函数传递给我们了这些参数，所以我们可以直接使用。
> 验证：使用arguments获取函数的所有参数
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673605511328-a1cd1d33-c326-45c1-957f-9d61cdd58112.png#averageHue=%23282d36&clientId=u628220a4-52c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=842&id=u773cdbed&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1684&originWidth=1934&originalType=binary&ratio=1&rotation=0&showTitle=false&size=654236&status=done&style=none&taskId=u12be8db9-e195-4ad8-adb7-5b1a6569a04&title=&width=967)


# Vite对静态资源的处理以及别名的配置
> 什么是静态资源？
> 图片，视频资源，SVG资源......

Vite对静态资源基本上都是开箱即用的
> 静态资源的存放路径一般都是在`src/assets/`在js中使用可以直接引入使用
> `import xx from xxx`，引入的就是该图片从src的路径。


> 但是一旦我们在一个很深的层级中想要引入外部的资源或者组件的时候，我们就要非常麻烦的手动翻到上层目录。因此我们可以通过vite的配置文件来进行路径别名的配置：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673663552383-2e815ab7-016c-412e-b8e1-ae50984397ec.png#averageHue=%232a2e36&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=257&id=ua60ea470&margin=%5Bobject%20Object%5D&name=image.png&originHeight=514&originWidth=1420&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96194&status=done&style=none&taskId=u2efc9d5a-c145-4a80-80f4-b11a83de891&title=&width=710)
> 我们就可以很方便的使用别名直接访问路径

> 建议：我们引入资源的时候，比如引入lodash库，可以使用分别引入，不使用默认引入，即我们用到哪些东西就引入哪些东西，这样做的好处就是vite拥有tree shake : 打包工具会帮我们移除掉那些我们没有使用到的变量或者方法。如果我们使用默认引入，引入的就是一个对象，vite不可能去移除我们对象中的东西。建议使用什么就引入什么。

当我们通过import引入的文件是json文件的时候，vite还可以自动的把json转换为js对象，而且我们还可以直接通过分别导入的方式引入json中我们需要的属性。
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673664374599-b228b5d5-7a03-43a2-b035-37f0ba940a28.png#averageHue=%232d3139&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=230&id=ub244c907&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=2064&originalType=binary&ratio=1&rotation=0&showTitle=false&size=176961&status=done&style=none&taskId=u4050c970-8575-4994-84c9-b860713e362&title=&width=1032)


# resolve.alias原理
首先别名的配置：
```javascript
const path = require('path');
module.exports = {
  resolve: {
    alias: {
      // 使用path的原因就是防止启动服务的位置不是在本目录出现文件找不到
      "@": path.resolve(__dirname, "./src")
    }
  }
}
```
配置请求的处理：
```javascript
const Koa = require('koa');//node只支持CommonJS,所以我们只可以使用require
const fs = require('fs');//fs是node内置的模块
const path = require('path');
const viteConfig = require('./vite.config')
const aliasResolve = require('./aliasResolve.js');

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.request.url === '/') {
    const indexContent =
      await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
    ctx.response.set("Content-Type", "text/html")
    ctx.response.body = indexContent
  }
  if (ctx.request.url.endsWith('.js')) {
    // 读取请求的文件
    const mainContent =
      await fs.promises.readFile(path.resolve(__dirname, "." + ctx.request.url))
    // console.log(mainContent.toString())
    // 把文件中的路径别名替换为真实的路径
    const lastResult = aliasResolve(viteConfig.resolve.alias, mainContent.toString())
    ctx.response.body = lastResult
    ctx.response.set("Content-Type", "text/javascript")
  }
})
// 开启一个服务,端口号为5173
app.listen(5173, () => {
  console.log('vite dev server listen on 5173')
})
```
把别名进行字符串替换并返回替换后的内容：
```javascript
module.exports = function (aliasConf, content) {
  // es6的写法,把对象的key和value保存到一个数组中
  const entires = Object.entries(aliasConf)
  // console.log("entires", entires)
  /* entires[
        ['@', '/Users/humeng/Github/mycode/13.vite/04.vite-dev-server/src']
    ] */
  let lastContent = content
  entires.forEach(entire => {
    const [alias, path] = entire
    const srcIndex = path.indexOf('/src')
    const replacePath = path.slice(srcIndex, path.length)
    // console.log(alias, path, srcIndex, replacePath)
    // 替换@为/src
    lastContent = content.replace(alias, replacePath)
  })

  // console.log(lastContent)

  return lastContent

}
```
# vite对svg资源的处理
> vite对SVG资源依旧是开箱即用的

SVG是：scalable vector graphics 可伸缩矢量图形

1. SVG是不会失真的
2. 尺寸小

我们使用svg更多的是做图标
```javascript
import bili_url from '@assets/svgs/bili.svg?url'
// 引入的时候后面可以根参数
import bili_raw from '@assets/svgs/bili.svg?raw'
console.log(bili_url, bili_raw)

// 第一种使用svg的方式:以图片的形式加载,缺点不能修改图片颜色
/* const img = document.createElement('img')
img.src = bili

document.body.appendChild(img) */

// 第二种使用svg的方式
const div = document.createElement("div")
div.innerHTML = bili_raw
document.body.appendChild(div)
const svg = document.getElementsByTagName('svg')[0]
svg.onmouseenter = function () {
  this.style.color = "#6cf"
}
svg.onmouseleave = function () {
  this.style.color = "#000"
}


```
> 引入资源的后面可以加上参数
> `?url`引入的是url路径；
> `?raw`引入的是原文件

# vite静态资源生产环境的配置
在vite.config.js中可以添加如下配置，对静态资源打包后进行配置
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673673379222-cde8d33b-4592-41a8-99d2-e064e03ab298.png#averageHue=%232b2f37&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=446&id=u85dcea00&margin=%5Bobject%20Object%5D&name=image.png&originHeight=892&originWidth=1780&originalType=binary&ratio=1&rotation=0&showTitle=false&size=221369&status=done&style=none&taskId=u4eeb205b-ce46-44fe-a14d-af0ebe3131d&title=&width=890)
# Vite插件
插件是什么？
> vite会在生命周期的不同阶段中去调用不同的插件以达到不同的目的

[https://cn.vitejs.dev/plugins/](https://cn.vitejs.dev/plugins/)
目前vite支持的插件列表：
[https://github.com/vitejs/awesome-vite#plugins](https://github.com/vitejs/awesome-vite#plugins)
> 直接在插件列表中点击需要的插件，就可以看到对应的仓库和使用说明

## vite-aliases
### 使用
[https://github.com/subwaytime/vite-aliases](https://github.com/subwaytime/vite-aliases)
> 该插件可以帮助我们自动生成路径的别名：检测src下的所有文件夹(包括src)并帮助我们生成别名

安装该插件：
`yarn add -D vite-aliases`
然后我们自己配置的resolve.alias就可以删掉了，我们使用这个插件自动生成
引入插件
```javascript
// 引入别名自动配置
import { ViteAliases } from 'vite-aliases'
```
配置插件
```javascript
// 配置插件
plugins: [
  // 自动生成路径别名的插件
  ViteAliases()
],
```
> 2023-01-14：我发现项目启动不起来，会报错，具体原因github的issues
> [https://github.com/Subwaytime/vite-aliases/issues/51#issuecomment-1382673399](https://github.com/Subwaytime/vite-aliases/issues/51#issuecomment-1382673399)
> 可以把该插件的版本降低为0.9.2即可

### 手写vite-aliases插件


## vite-plugin-html
> 该插件用于配置打包后的html的内容
> 安装：`yarn add vite-plugin-html -D`
> 引入：`import { createHtmlPlugin } from 'vite-plugin-html'`
> 使用：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673680978474-8a45c23c-50f9-4244-b195-292e945be894.png#averageHue=%232a2f37&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=284&id=ud8b448a9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=734&originalType=binary&ratio=1&rotation=0&showTitle=false&size=59227&status=done&style=none&taskId=u57d1db8c-1793-4082-b4d6-0df527ecb6f&title=&width=367)


## vite-plugin-mock
> mock数据--模拟数据
> mock：[https://github.com/nuysoft/Mock/wiki](https://github.com/nuysoft/Mock/wiki)
> vite-plugin-mock：[https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md](https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md)
> 1. 首先安装两个插件：
>    1. `yarn add vite-plugin-mock mockjs -D`
> 2. 配置vite配置文件，使用插件：
>    1. 引入`import { viteMockServe } from 'vite-plugin-mock'`
>    2. 使用插件，具体配置查看上方网站
> 3. 模拟数据：
> 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673684037090-40897575-2414-40e5-87bf-8331a51df449.png#averageHue=%23292d35&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=716&id=ub304d213&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1432&originWidth=1066&originalType=binary&ratio=1&rotation=0&showTitle=false&size=194693&status=done&style=none&taskId=uf954439d-27b1-4a44-b32f-fb6a0b2d5cf&title=&width=533)
> 数据生成规则查看上方网站
> 4. 请求数据![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673684113401-8d8e04cd-ed2b-4e76-8281-1e879c7b4ef4.png#averageHue=%23292e36&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=203&id=uf47174f7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=1378&originalType=binary&ratio=1&rotation=0&showTitle=false&size=72313&status=done&style=none&taskId=ud5a7c437-c30e-4c22-95cd-f53aeb60fb5&title=&width=689)


# vite和ts的结合
> vite对于ts支持是非常好的，开箱即用。

但是我们写ts的时候，如果有某个地方不符合ts但是符合js的规范，ts文件内会出现语法警告，但是项目和页面都是正常的，没有提示。我们应该怎么把错误直接输出到控制台呢？
> 可以使用vite-plugin-checker插件

## vite-plugin-checker

1. 安装`yarn add vite-plugin-checker -D`
2. 编写vite配置文件使用插件：

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673685996266-9f7211f9-fdbd-45c4-b9e5-28c15695a4ab.png#averageHue=%23292d36&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=284&id=u974c366d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1122&originalType=binary&ratio=1&rotation=0&showTitle=false&size=80486&status=done&style=none&taskId=ufd73f68c-2257-4b05-9561-6d1a10d093b&title=&width=561)

3. 由于插件依赖typescript，所以我们还需要安装typescript。
4. 我们执行`tsc --init`初始化ts配置文件。
5. 启动项目即可。
6. 我们还可以在package.json文件中配置scripts的build命令

`"build": "tsc --noEmit && vite build"`；意思是执行yarn build的时候先执行
`tsc --noEmit`如果这个命令执行不成功则下面的命令会中断。
控制台：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673686165998-0c129ca0-064e-4d64-9d20-d6f439cf2439.png#averageHue=%232a313b&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=312&id=ue631581e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=624&originWidth=1172&originalType=binary&ratio=1&rotation=0&showTitle=false&size=98304&status=done&style=none&taskId=u03431d54-abe8-463f-b5a7-3e553139b65&title=&width=586)
页面：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673686197133-aeb86a58-23ea-4e19-9515-2687791dd659.png#averageHue=%232a323b&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=493&id=u1482b015&margin=%5Bobject%20Object%5D&name=image.png&originHeight=986&originWidth=1876&originalType=binary&ratio=1&rotation=0&showTitle=false&size=191923&status=done&style=none&taskId=ua0b44850-1f6f-4ad3-8e8c-d53bc7703bb&title=&width=938)
> 注意：如果报了非常多的错误，有关以node_module下面的，那么我们就需要检查刚刚使用`tsc --init`生成的`tsconfig.json`文件中是否配置了`"skipLibCheck": true`

## vite与ts结合如何使用import.meta.env.xx环境变量
> 我们在ts文件中使用import.meta.env.xx环境变量，如果没有配置，会出现下面的报错：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673692482653-c5cbd370-b625-4099-a8ba-70cc274e7708.png#averageHue=%232b313a&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=381&id=uf7d39f01&margin=%5Bobject%20Object%5D&name=image.png&originHeight=762&originWidth=1396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=273426&status=done&style=none&taskId=u53f91d99-744f-424f-bf58-d3fe7ee374d&title=&width=698)

这个时候我们需要进行一些配置，让ts知道我们有这个属性
[https://cn.vitejs.dev/guide/env-and-mode.html#env-files](https://cn.vitejs.dev/guide/env-and-mode.html#env-files)
> 默认情况下，Vite 在 [vite/client.d.ts](https://github.com/vitejs/vite/blob/main/packages/vite/client.d.ts) 中为 import.meta.env 提供了类型定义。随着在 .env[mode] 文件中自定义了越来越多的环境变量，你可能想要在代码中获取这些以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示。
> 要想做到这一点，你可以在 src 目录下创建一个 **env.d.ts **文件，接着按下面这样增加 ImportMetaEnv 的定义：
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1673692608390-5ae68936-3244-45a9-b33f-993eb192a90f.png#averageHue=%23282c34&clientId=ue689302d-4825-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=311&id=u0793f249&margin=%5Bobject%20Object%5D&name=image.png&originHeight=622&originWidth=970&originalType=binary&ratio=1&rotation=0&showTitle=false&size=84347&status=done&style=none&taskId=u97d238d7-4006-4cf4-9ff6-9c03950b4be&title=&width=485)
> 如果你的代码依赖于浏览器环境的类型，比如 [DOM](https://github.com/microsoft/TypeScript/blob/main/lib/lib.dom.d.ts) 和 [WebWorker](https://github.com/microsoft/TypeScript/blob/main/lib/lib.webworker.d.ts)，你可以在 tsconfig.json 中修改 [lib](https://www.typescriptlang.org/tsconfig#lib) 字段来获取类型支持。

```json
{
  "lib": ["WebWorker"]
}
```


# Vite跨域配置
> [https://cn.vitejs.dev/config/server-options.html#server-proxy](https://cn.vitejs.dev/config/server-options.html#server-proxy)

为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。任何请求路径以 key 值开头的请求将被代理到对应的目标。如果 key 值以 ^ 开头，将被识别为 RegExp。configure 选项可用于访问 proxy 实例。
请注意，如果使用了非相对的 [基础路径base](https://cn.vitejs.dev/config/shared-options.html#base)，则必须在每个 key 值前加上该 base。
使用 [http-proxy](https://github.com/http-party/node-http-proxy)。完整选项详见 [此处](https://github.com/http-party/node-http-proxy#options).
在某些情况下，你可能也想要配置底层的开发服务器。（例如添加自定义的中间件到内部的 [connect](https://github.com/senchalabs/connect) 应用中）为了实现这一点，你需要编写你自己的 [插件](https://cn.vitejs.dev/guide/using-plugins.html) 并使用 [configureServer](https://cn.vitejs.dev/guide/api-plugin.html#configureserver) 函数。
**示例：**
```javascript
export default defineConfig({
  server: {
    proxy: {
      // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
      '/foo': 'http://localhost:4567',
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        // 把 /api 替换为 空字符串
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ''),
      },
      // 使用 proxy 实例
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      },
      // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true,
      },
    },
  },
})

```
# 补充
## 为什么使用vue3在导入组件的时候必须带上.vue后缀了？
> 因为在vite的配置中，resolve.extensions默认是['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']已经没有默认.vue后缀了，至于为什么是因为它会影响IDE和类型支持。

[https://cn.vitejs.dev/config/shared-options.html#resolve-extensions](https://cn.vitejs.dev/config/shared-options.html#resolve-extensions)

# 配置文件参考
```javascript
// import最后都会被替换为commonJS规范的
import { defineConfig } from 'vite'
/* 插件 */
// 引入别名自动配置
import { ViteAliases } from 'vite-aliases'
// 引入创建html插件
import { createHtmlPlugin } from 'vite-plugin-html'
// 引入vite-plugin-mock插件
import { viteMockServe } from 'vite-plugin-mock'
// 引入postcss预处理环境
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');
// 基础配置
export default defineConfig({
    // 借助插件自动生成
    /* resolve: {
        // 配置路径别名,方便深层次的文件引用外部的资源
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets")
        }
    }, */
    // 依赖预构建
    optimizeDeps: {
        exclude: []
    },
    // 环境变量前缀
    envPrefix: "ENV_",
    // 环境变量文件路径,一般与配置文件平级
    envDir: "./",
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
                // 让postcss能够保留一些全局变量,可以提供后面的文件使用
                importFrom: path.resolve(__dirname, "./variable.css"),
            })]
        }
    },
    // 构建生产包的时候的一些策略
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
        ViteAliases(),
        // 配置生成的html文件
        createHtmlPlugin({
            inject: {
                data: {
                    title: "首页"
                },
            },
        }),
        // 开箱即用,自动寻找根目录的mock文件夹
        viteMockServe({
            // 配置mock的文件夹位置
            mockPath: "/src/mock"
        })
    ],
}
)


```
