# React简介
## 什么是React?
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671180473951-472b8566-597d-4abc-b3c6-277085394225.png#averageHue=%232d3740&clientId=u8234d6eb-fb68-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=311&id=ud7f51938&margin=%5Bobject%20Object%5D&name=image.png&originHeight=622&originWidth=1194&originalType=binary&ratio=1&rotation=0&showTitle=false&size=121686&status=done&style=stroke&taskId=u9fc88ecf-9f86-4e34-bac4-b7b256403c7&title=&width=597)
用于构建用户界面的JavaScript库
React是一个将数据渲染为HTML视图的开源JavaScript库
## 谁开发的？
由国外的Facebook公司开发的，并且开源
## 为什么学？

1. 原生的JavaScript操作DOM繁琐、效率低（DOM-API操作UI）
2. 使用JavaScript直接操作DOM，浏览器会进行大量的重绘、重排
3. 原生的JavaScript没有组件化编码方案，代码复用率极低
## React的特点

1. 采用组件化模式、声明式编码，提高开发效率及组件的复用率
2. 在React Native中可以使用React语法进行移动端开发
3. 使用虚拟DOM+优秀的diffing算法，尽量减少与真实DOM的交互
## 学习React需要掌握的JavaScript基础知识

- 判断this指向
- class类
- ES6
- npm包管理器
- 原型与原型链
- 数组的常用方法
- 模块化
# React基本使用
## React相关js库
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671183375910-48459151-97b8-452e-a2d5-dcd22194dcb0.png#averageHue=%23fafafa&clientId=u8234d6eb-fb68-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=208&id=u57f458d8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=416&originWidth=1204&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61342&status=done&style=stroke&taskId=u7603db79-cc99-48c6-aa47-0678320190e&title=&width=602)
1. react.js：React核心库。
2. react-dom.js：提供操作DOM的react扩展库。
3. babel.min.js：解析JSX语法代码转为JS代码的库。
## React的使用
注意点：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671185427218-224542bb-dfa1-45e7-be92-259651fe6493.png#averageHue=%23040302&clientId=u8234d6eb-fb68-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=749&id=u840d73d1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1498&originWidth=1852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=307743&status=done&style=stroke&taskId=ua1ce3914-9428-46e9-9985-0756a99054f&title=&width=926)
## 创建虚拟DOM的两种方式
1. 纯JS方式(一般不用)
2. JSX方式
## 虚拟DOM与真实DOM
1. React提供了一些API来创建一种 “特别” 的一般js对象

- **const VDOM = React.createElement('xx',{id:'xx'},'xx')**
- 上面创建的就是一个简单的虚拟DOM对象

2. 虚拟DOM对象最终都会被React转换为真实的DOM
3. 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界。

## React JSX
1. 全称:  JavaScript XML
2. react定义的一种类似于XML的JS扩展语法: JS + XML本质是**React.createElement(component, props, ...children)**方法的语法糖
3. 作用: 用来简化创建虚拟DOM 
1) 写法：**var ele = <h1>Hello JSX!</h1>**
2) 注意1：它不是字符串, 也不是HTML/XML标签
3) 注意2：它最终产生的就是一个JS对象
4. 标签名任意: HTML标签或其它标签
5. 标签属性任意: HTML标签属性或其它
6. 基本语法规则
1) 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
2) 遇到以 { 开头的代码，以JS语法解析: 标签中的js表达式必须用{ }包含
7. babel.js的作用
1) 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
2) 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理

```html
jsx语法规则
1.定义虚拟DOM时，不要写引号。
2.标签中混入JS表达式要用{}
3.样式的类名指定不要用class，要用className
4.内联样式，要用style={{key:value}}的形式去写
5.只有一个根标签
6.标签必须闭合
7.标签首字母
	1.若小写字母开头，则将该标签转为html中同名的元素，若html中无该标签对应的同名元素，则报错
	2.若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错
```
## 渲染虚拟DOM(元素)
1. 语法:  **ReactDOM.render(virtualDOM, containerDOM)**
2. 作用: 将虚拟DOM元素渲染到页面中的真实容器DOM中显示
3. 参数说明
1) 参数一: 纯js或jsx创建的虚拟dom对象
2) 参数二: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div)
## 小练习
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        const data = ['Angular', 'React', 'Vue']
        const data2 = [
            {
                id: '001',
                name: 'Angular'
            },
            {
                id: '002',
                name: 'React'
            },
            {
                id: '003',
                name: 'Vue'
            }
        ]
        const VDOM = (
            <div>
                <h1>前端js框架列表</h1>
                <ul>
                    {
                        data.map((num, index) => {
                            return <li key={index}>{num}</li>
                        })
                    }
                </ul>
                <ul>
                    {
                        data2.map((item) => {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )


        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>


</body>


</html>
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671191681248-d0174740-1b23-42ca-afbe-4390a1f3c791.png#averageHue=%23a8aaa8&clientId=u8234d6eb-fb68-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=342&id=u02174681&margin=%5Bobject%20Object%5D&name=image.png&originHeight=684&originWidth=2878&originalType=binary&ratio=1&rotation=0&showTitle=false&size=242134&status=done&style=stroke&taskId=u7583e87f-3626-439e-bfb0-5f112f97b78&title=&width=1439)
## 模块与组件、模块化与组件化的理解
### 模块
1. 理解：向外提供特定功能的js程序, 一般就是一个js文件
2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
3. 作用：复用js, 简化js的编写, 提高js运行效率
### **组件**
1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
2. 为什么要用组件： 一个界面的功能更复杂
3. 作用：复用编码, 简化项目编码, 提高运行效率
### **模块化**
当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
### **组件化**
当应用是以多组件的方式实现, 这个应用就是一个组件化的应用
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671242567202-b40d5231-eeec-44f6-b003-1e9a2e6d6ad0.png#averageHue=%23a5d8b2&clientId=ubcafbbd4-fed6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=403&id=u69e04741&margin=%5Bobject%20Object%5D&name=image.png&originHeight=806&originWidth=1506&originalType=binary&ratio=1&rotation=0&showTitle=false&size=231785&status=done&style=stroke&taskId=u8f6cb056-60ee-43ea-a5ac-6af9f5f51d7&title=&width=753)
# React面向组件编程
## 函数式组件
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        // 1.创建函数式组件
        function MyComponent() {
            console.log(this);//此处的this是undefined，因为babel编译后开启了严格模式
            return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
        }
        // 2.渲染组价到页面
        ReactDOM.render(<MyComponent />, document.getElementById('test'))
        /*
            执行了ReactDOM.render(<MyComponent />,...后,发生了什么
                1.React解析组件标签，找到了MyComponent组件。
                2.发现组件是使用函数定义的，随后调用了该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
        */
    </script>


</body>


</html>
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671247805634-23cdcdf5-3f15-427d-a95a-1715cc853d04.png#averageHue=%23fdfdfc&clientId=ubcafbbd4-fed6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=875&id=u4c8b2a4f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1750&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=187031&status=done&style=stroke&taskId=u66567f49-e1a7-43cf-a0d5-069611accaa&title=&width=1440)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671247820488-d87d27fb-18e7-4137-960e-c637aadf6e6f.png#averageHue=%23fef7ed&clientId=ubcafbbd4-fed6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=875&id=u9ec7a45c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1750&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=403372&status=done&style=stroke&taskId=u06a78528-f375-4c9a-813a-aa3c1fe460d&title=&width=1440)
## 类式组件
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        // 1.定义类式组件
        class MyComponent2 extends React.Component {
            // render是放在MyComponent2的原型对象上，供实例使用
            render() {
                // render中的this是MyComponent2实例对象 <=> MyComponent2组件实例对象
                console.log(this);
                return (
                    <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
                )
            }


        }
        // 2.渲染组件到页面
        ReactDOM.render(<MyComponent2 />, document.getElementById('test'))
        /*
            执行了ReactDOM.render(<MyComponent2 />,...后，发生了什么？
                1.React解析组件标签，找到了MyComponent2组件
                2.发现组件是使用类定义的，随后new出啦该类的实例，并通过该实例调用原型上的render方法
                3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
        */
    </script>


</body>


</html>
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671247859598-956642b5-c2d2-4f70-a0a3-bc1112f93376.png#averageHue=%23fdfdfc&clientId=ubcafbbd4-fed6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=875&id=u643d87e2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1750&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=252211&status=done&style=stroke&taskId=ua823e509-818a-4490-b6bc-cfb8b760ddc&title=&width=1440)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671247870266-db1f278d-8bbe-4ad3-a593-4c398295e704.png#averageHue=%23fef7ed&clientId=ubcafbbd4-fed6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=875&id=u5036ddfa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1750&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=397167&status=done&style=stroke&taskId=ub9698302-102b-4f1b-9994-8fc7bc2f8c4&title=&width=1440)
### 注意
1. 组件名必须首字母大写
2. 虚拟DOM元素只能有一个根元素
3. 虚拟DOM元素必须有结束标签
### 渲染类组件标签的基本流程
1. React内部会创建组件实例对象
2. 调用render()得到虚拟DOM, 并解析为真实DOM
3. 插入到指定的页面元素内部
## 组件三大核心属性
### 1.state
_需求: 定义一个展示天气信息的组件_
_1. 默认展示天气炎热或凉爽_
_2. 点击文字切换天气_
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Weather extends React.Component {
            constructor(props) {
                super(props)
                this.state = { isHot: false, wind: '微风' }
                // 解决changeWeather中this指向问题
                this.changeWeather = this.changeWeather.bind(this)
            }
            render() {
                // console.log(this);
                const { isHot, wind } = this.state
                return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
            }
            changeWeather() {
                // changeWeather放在了类的原型对象上，供实例使用
                // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
                // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this是undefined
                // console.log(this);


                // 获取原来的isHot的值
                const { isHot } = this.state
                // 【注意】：状态（state）不可直接更改！(下面这行就是直接更改)，要借助一个内置的api去更改
                // this.state.isHot = !isHot //错误的写法
                // 【严重注意】：状态必须通过setState进行更新,更新是一种合并，不是替换
                this.setState({ isHot: !isHot })


                console.log(this.state.isHot);
            }


        }




        ReactDOM.render(<Weather />, document.getElementById('test'))
    </script>


</body>


</html>
```
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Weather extends React.Component {
            // 在类中直接使用赋值语句会把该变量添加到类的实例对象身上
            // 初始化状态
            state = { isHot: false, wind: '微风' }


            render() {
                const { isHot, wind } = this.state
                return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
            }
            // 自定义方法——要使用赋值语句的形式+箭头函数
            changeWeather = () => {
                const { isHot } = this.state
                this.setState({ isHot: !isHot })
            }
        }


        ReactDOM.render(<Weather />, document.getElementById('test'))
    </script>


</body>


</html>
```
#### 理解
1. state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)
2. 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)
#### 强烈注意
1. 组件中render方法中的this为组件实例对象
2. 组件自定义的方法中this为undefined，如何解决？
a) 强制绑定this: 通过函数对象的bind()
b) 箭头函数
3. 状态数据，不能直接修改或更新

### 2.props
_需求: 自定义用来显示一个人员信息的组件_
_1. 姓名必须指定，且为字符串类型；_
_2. 性别为字符串类型，如果性别没有指定，默认为男_
_3. 年龄为字符串类型，且为数字类型，默认值为18_
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test1"></div>
    <div id="test2"></div>
    <div id="test3"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        // 创建组件
        class Person extends React.Component {


            render() {
                console.log(this);
                const { name, age, gender } = this.props
                return (
                    <ul>
                        <li>姓名：{name}</li>
                        <li>性别：{gender}</li>
                        <li>年龄：{age + 1}</li>
                    </ul>
                )
            }
        }


        const p1 = {
            name: '老六',
            age: 18,
            gender: '男'
        }
        ReactDOM.render(<Person {...p1} speak={speak} />, document.getElementById('test1'))
        ReactDOM.render(<Person name="jack" age={19} speak={speak} />, document.getElementById('test2'))
        ReactDOM.render(<Person name="andy" age={22} gender="男" />, document.getElementById('test3'))
        function speak() {
            console.log('sss');
        }
    </script>


</body>


</html>
```
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>
    <div id="test1"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>
    <script src="../js/prop-types.js"></script>


    <script type="text/babel">
        class Person extends React.Component {
            static propTypes = {
                name: PropTypes.string.isRequired,
                age: PropTypes.number,
                gender: PropTypes.string
            }
            static defaultProps = {
                age: 0,
                gender: '未知'
            }
            render() {
                const { name, age, gender } = this.props
                return (
                    <ul>
                        <li>姓名：{name}</li>
                        <li>年龄：{age}</li>
                        <li>性别：{gender}</li>
                    </ul>
                )
            }
        }


        const p1 = {
            name: '张三',
            // age: 18,
            // gender: '男'
        }
        ReactDOM.render(<Person {...p1} />, document.getElementById('test'))
        ReactDOM.render(<Person name="李四" />, document.getElementById('test1'))
    </script>


</body>


</html>
```
#### 理解
1. 每个组件对象都会有props(properties的简写)属性
2. 组件标签的所有属性都保存在props中
#### 作用
1. 通过标签属性从组件外向组件内传递变化的数据
2. 注意: 组件内部不要修改props数据
#### 编码操作

1.  内部读取某个属性值`this.props.name`
2. 对props中的属性值进行类型限制和必要性限制
```javascript
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  gender: PropTypes.string
}
```

3. 扩展属性: 将对象的所有属性通过props传递

<**Person **{...**_person_**}/>

4. 默认属性值：
```javascript
Person.defaultProps = {
  age: 0,
  gender: '未知'
}
```
#### 思考props为什么可以直接传数组而对象需要使用...展开运算符
React 组件可以通过 props 属性接收外部传入的数据。当传入的数据是数组时，可以直接将数组作为 props 传入组件。但是，当传入的数据是对象时，必须使用扩展运算符（...）来将对象展开并作为 props 传入组件。
例如，以下代码可以将一个数组直接作为 props 传入组件：
```jsx
const arr = [1, 2, 3];

<MyComponent data={arr} />
```
而以下代码则将一个对象作为 props 传入组件：
使用扩展运算符（...）展开对象，可以将对象中的所有属性分别作为 props 传入组件。
这样做的原因是，当你直接将对象作为 props 传入组件时，React 会将整个对象作为一个单独的 prop 传入组件，而不是将对象中的每个属性作为单独的 prop 传入组件。使用扩展运算符（...）展开对象，可以将对象中的所有属性分别作为 props 传入组件，使得组件可以直接访问这些属性。
例如，以下代码中，如果不使用扩展运算符（...）展开对象，那么组件中就无法直接访问 obj.a、obj.b 和 obj.c 这三个属性，使用扩展运算符（...）展开对象的方法是，在对象前面加上三个点（...），然后将对象作为花括号的一部分。例如：
```jsx
const obj = { a: 1, b: 2, c: 3 }; 


<MyComponent {...obj} />
```
这样做的效果相当于：
```jsx
const obj = { a: 1, b: 2, c: 3 };

<MyComponent a={obj.a} b={obj.b} c={obj.c} />

```
使用扩展运算符（...）展开对象可以使代码更简洁，也方便对象的属性数量可能会发生变化的情况下使用。
注意，扩展运算符（...）不仅可以用于展开对象，还可以用于展开数组。例如，以下代码可以将数组 arr 中的所有元素展开并作为参数传入函数 foo：
```javascript
const arr = [1, 2, 3];

foo(...arr);

```
这样做的效果相当于：
```javascript
const arr = [1, 2, 3];

foo(arr[0], arr[1], arr[2]);

```
### 3.refs
_需求: 自定义组件, 功能说明如下:_
_1. 点击按钮, 提示第一个输入框中的值_
_2. 当第2个输入框失去焦点时, 提示这个输入框中的值_

#### 字符串形式的ref
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Demo extends React.Component {
            render() {
                return (
                    <div>
                        <input ref="input1" type="text" placeholder="点击按钮提示数据" />
                        <button onClick={this.showData} style={{ margin: 10 + 'px' }}>点我提示左侧的数据</button>
                        <input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
                    </div>
                )
            }
            showData = () => {
                // console.log(this);
                const { input1 } = this.refs
                alert(input1.value)
            }
            showData2 = () => {
                const { input2 } = this.refs
                alert(input2.value)
            }


        }
        ReactDOM.render(<Demo />, document.getElementById('test'))
    </script>


</body>


</html>
```
因为存在效率上的问题，所以不推荐使用

#### 回调形式的ref
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Demo extends React.Component {
            render() {
                // ref回调函数形式中的参数可以得到当前的节点对象 currentNode
                return (
                    <div>
                        <input ref={(currentNode) => { this.input1 = currentNode }} type="text" placeholder="点击按钮提示数据" />
                        <button onClick={this.showData} style={{ margin: 10 + 'px' }}>点我提示左侧的数据</button>
                        <input ref={c => this.input2 = c} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
                    </div>
                )
            }
            showData = () => {
                console.log(this);
                const { input1 } = this
                alert(input1.value)
            }
            showData2 = () => {
                const { input2 } = this
                alert(input2.value)
            }


        }
        ReactDOM.render(<Demo />, document.getElementById('test'))
    </script>


</body>


</html>
```
`<input ref={(currentNode) => { this.input1 = currentNode; console.log('@', currentNode); }} type="text" placeholder="点击按钮提示数据" />`
当页面数据更新时
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671280373974-64704995-e56c-4469-bba5-f3b6e0e06d9d.png#averageHue=%2324262a&clientId=u96f69785-78c2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=539&id=u098b22bb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1078&originWidth=1060&originalType=binary&ratio=1&rotation=0&showTitle=false&size=307100&status=done&style=stroke&taskId=u3fdab0e7-b31a-4808-a35c-ad2381281ab&title=&width=530)
这样写回存在回调函数执行多次的问题，页面初始化会执行一次，然后当页面更新的时候会执行回调函数两次，第一次把回调函数的参数设置为null，第二次再次调用回调函数并且参数就是当前节点对象。
解决办法使用类方法作为回调函数
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Demo extends React.Component {
            state = { isHot: true }
            render() {
                const { isHot } = this.state
                // ref回调函数形式中的参数可以得到当前的节点对象 currentNode
                return (
                    <div>
                        <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
                        {/*<input ref={(currentNode) => { this.input1 = currentNode; console.log('@', currentNode); }} type="text" placeholder="点击按钮提示数据" />*/}
                        <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据" />
                        <button onClick={this.showData} style={{ margin: 10 + 'px' }}>点我提示左侧的数据</button>
                        <button onClick={this.changeWeather}>点我切换天气</button>
                    </div>
                )
            }
            saveInput = (c) => {
                this.input1 = c
                console.log('@', c);
            }
            showData = () => {
                console.log(this);
                const { input1 } = this
                alert(input1.value)
            }
            changeWeather = () => {
                const { isHot } = this.state
                this.setState({ isHot: !isHot })
            }



        }
        ReactDOM.render(<Demo />, document.getElementById('test'))
    </script>


</body>


</html>
```
#### createRef
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Demo extends React.Component {
            /* 
             React.createRef函数调用后可以返回一个容器，该容器可以存储被ref所标识的节点
             */
            myRef = React.createRef()
            myRef2 = React.createRef()
            render() {
                // ref回调函数形式中的参数可以得到当前的节点对象 currentNode
                return (
                    <div>
                        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
      
                        <button onClick={this.showData} style={{ margin: 10 + 'px' }}>点我提示左侧的数据</button>
                        <input onBlur={this.showData2} ref={this.myRef2} type="text" placeholder="点击按钮提示数据" />
                    </div>
                )
            }
            showData = () => {
                // console.log(this.myRef);
                // const { input1 } = this.myRef
                alert(this.myRef.current.value)
            }
            showData2 = () => {
                alert(this.myRef2.current.value)
            }


        }
        ReactDOM.render(<Demo />, document.getElementById('test'))
    </script>


</body>


</html>
```
React.createRef函数调用后可以返回一个容器，该容器可以存储被ref所标识的节点
#### 综合练习
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671282486925-31984247-5088-4c72-8d32-eb741e61b90d.png#averageHue=%23f9f9f8&clientId=u720ac3ae-ca15-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=520&id=u7f988d2b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1040&originWidth=1560&originalType=binary&ratio=1&rotation=0&showTitle=false&size=209580&status=done&style=stroke&taskId=ueab8f18c-fc84-4cf0-aa6f-8aa8e94e7dd&title=&width=780)
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">


    </script>
    <script type='text/babel'>
        class Demo extends React.Component {
            // 在类中直接赋值会绑定到类的实例对象身上
            myRef = React.createRef()
            render() {
                return (
                    <div>
                        <div>
                            <h2>字符串形式的ref （弃用）</h2>
                            <input ref="input1" type="text" placeholder="请输入" />
                            <button onClick={this.showData1}>点击我弹出输入的信息</button>
                        </div>
                        <div>
                            <h2>回调函数形式的ref--1（最常用）</h2>
                            <input ref={c => this.input2 = c} type="text" placeholder="请输入" />
                            <button onClick={this.showData2}>点击我弹出输入的信息</button>
                        </div>
                        <div>
                            <h2>回调函数形式的ref--2</h2>
                            <input ref={this.saveInput3} type="text" placeholder="请输入" />
                            <button onClick={this.showData3}>点击我弹出输入的信息</button>
                        </div>
                        <div>
                            <h2>使用React.createRef函数创建容器</h2>
                            <input ref={this.myRef} type="text" placeholder="请输入" />
                            <button onClick={this.showData4}>点击我弹出输入的信息</button>
                        </div>
                    </div>
                )
            }
            showData1 = () => {
                // console.log(this.refs);
                const { input1 } = this.refs
                alert(input1.value)
            }
            showData2 = () => {
                const input2 = this.input2
                alert(input2.value)
            }
            saveInput3 = (c) => {
                this.input3 = c
            }
            showData3 = () => {
                console.log(this);
                const input3 = this.input3
                alert(input3.value)
            }
            showData4 = () => {
                console.log(this.myRef);
                alert(this.myRef.current.value)
            }
        }


        ReactDOM.render(<Demo />, document.getElementById('test'))
    </script>





</body>


</html>
```
## React的事件处理
1. 通过onXxx属性指定事件处理函数(注意大小写)
1) React使用的是自定义(合成)事件, 而不是使用的原生DOM事件——为了更好地兼容性
2) React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)——为了高效
2. 通过event.target得到发生事件的DOM元素对象——不要过渡的使用ref

## React收集表单数据
_需求: 定义一个包含表单的组件_
_输入用户名密码后, 点击登录提示输入信息_

### 非受控组件
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Login extends React.Component {
            render() {
                return (
                    <form action="" onSubmit={this.handleSubmit}>
                        用户名：<input type="text" ref={c => this.username = c} name="username" />
                        密码：<input type="password" ref={c => this.password = c} name="password" />
                        <button>提交</button>
                    </form>
                )
            }
            handleSubmit = (event) => {
                // 阻止表单的默认提交
                event.preventDefault();
                const { username, password } = this
                alert(`您输入的用户名是${username.value}，密码是${password.value}`)



            }
        }


        ReactDOM.render(<Login />, document.getElementById('test'))
    </script>


</body>


</html>
```
即在点击提交按钮的时候再去通过ref获取到最终的表单数据，在输入框每次变化的时候无法感知到数据的变化
### 受控组件
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/react.development.js"></script>
    <script src="../js/react-dom.development.js"></script>
    <script src="../js/babel.min.js"></script>


    <script type="text/babel">
        class Login extends React.Component {
            // 初始化状态
            state = {
                username: '',//用户名
                password: '',//密码
            }
            render() {
                return (
                    <form action="" onSubmit={this.handleSubmit}>
                        用户名：<input onChange={this.saveFormData('username')} value={this.state.username} type="text" name="username" />
                        密码：<input onChange={this.saveFormData('password')} type="password" name="password" />
                        <button>提交</button>
                    </form>
                )
            }
            handleSubmit = (event) => {
                // 阻止表单的默认提交
                event.preventDefault();
                const { username, password } = this.state
                alert(`您输入的用户名是${username}，密码是${password}`)
            }
            // 高阶函数和函数的柯里化实现统一接收和设置状态
            saveFormData = (dataType) => {
                console.log(dataType);
                return (e) => {
                    this.setState({ [dataType]: e.target.value })
                }
            }


        }


        ReactDOM.render(<Login />, document.getElementById('test'))
    </script>


</body>


</html>
```
给输入框绑定onChange事件监听输入框的变化，每次变化都去手动修改state中的值实现可以动态获取到输入框的数据(定义一个统一的函数可以使用高阶函数和函数的柯里化实现统一接收和设置状态)
或者不使用高阶函数和函数的柯里化
```jsx
class Login extends React.Component {
  // 初始化状态
  state = {
    username: 'root',//用户名
    password: '',//密码
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        用户名：<input onChange={e => this.saveFormData('username', e)} value={this.state.username} type="text" name="username" />
        密码：<input onChange={e => this.saveFormData('password', e)} type="password" name="password" />
        <button>提交</button>
      </form>
    )
  }
  handleSubmit = (event) => {
    // 阻止表单的默认提交
    event.preventDefault();
    const { username, password } = this.state
    alert(`您输入的用户名是${username}，密码是${password}`)
  }
  saveFormData = (dataType, e) => {
    this.setState({ [dataType]: e.target.value })
  }


}
```
## 组件的生命周期
### 组件的生命周期(旧)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671363390843-05e050f0-3fb5-4bd2-b835-14aed8ad16ac.png#averageHue=%23edefec&clientId=ud4e43576-8f8b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=654&id=u5ea5f955&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1308&originWidth=1668&originalType=binary&ratio=1&rotation=0&showTitle=false&size=445586&status=done&style=stroke&taskId=ue9fd3d43-184d-4ede-8bf0-c196ffc560e&title=&width=834)
生命周期的三个阶段（旧）
**1. 初始化阶段:** 由ReactDOM.render()触发---初次渲染
1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()// 组件挂载完毕的钩子=====》常用 页面一上来就做某些事情，例如：开启定时器，发送网络请求，消息订阅
**2. 更新阶段: **由组件内部this.setSate()或父组件重新render触发
1. shouldComponentUpdate()
2. componentWillUpdate()
3. render()
4. componentDidUpdate()
**3. 卸载组件: **由ReactDOM.unmountComponentAtNode()触发
1. componentWillUnmount()// 组件将要卸载的钩子=======》常用 一般做一些收尾的事情 清除定时器，取消订阅


### 组件的生命周期(新)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671363640859-b10be7cd-ac35-4c5f-ac1b-fff189edc8d0.png#averageHue=%23f5f4f1&clientId=ud4e43576-8f8b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=741&id=ud971a8d2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1482&originWidth=2138&originalType=binary&ratio=1&rotation=0&showTitle=false&size=291110&status=done&style=stroke&taskId=ub949f1e9-cfd7-400b-b375-35e1edb996f&title=&width=1069)
生命周期的三个阶段（新）
**1. 初始化阶段:** 由ReactDOM.render()触发---初次渲染
1. constructor()
**2. getDerivedStateFromProps **
3. render()
4. componentDidMount()
**2. 更新阶段: **由组件内部this.setSate()或父组件重新render触发
**1. getDerivedStateFromProps**
2. shouldComponentUpdate()
3. render()
**4. getSnapshotBeforeUpdate**
5. componentDidUpdate()
**3. 卸载组件: **由ReactDOM.unmountComponentAtNode()触发
1. componentWillUnmount()

### 重要的钩子
1. render：初始化渲染或更新渲染调用
2. componentDidMount：开启监听, 发送ajax请求
3. componentWillUnmount：做一些收尾工作, 如: 清理定时器

### 即将废弃的钩子
1. componentWillMount
2. componentWillReceiveProps
3. componentWillUpdate
现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

## 虚拟DOM与DOM Diffing算法
### 验证Diffing算法
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/17.0.1/react.development.js"></script>
    <script src="../js/17.0.1/react-dom.development.js"></script>
    <script src="../js/17.0.1/babel.min.js"></script>


    <script type="text/babel">
        class Time extends React.Component {
            state = {
                date: new Date()
            }
            componentDidMount() {
                setInterval(() => {
                    this.setState({
                        date: new Date()
                    })
                }, 1000);
            }
            render() {
                return (
                    <div>
                        <h1>hello</h1>
                        <input type="text" />
                        <span>
                            现在是：{this.state.date.toTimeString()}
                            <input type="text" />
                        </span>
                    </div>
                )
            }
        }


        ReactDOM.render(<Time />, document.getElementById('test'))
    </script>


</body>


</html>
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671376525223-ef908cf4-5b05-4820-8173-60a2d535cb18.png#averageHue=%23fcfcfc&clientId=u40c54baa-a6cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=306&id=u19455738&margin=%5Bobject%20Object%5D&name=image.png&originHeight=612&originWidth=1770&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39343&status=done&style=stroke&taskId=u6ff48d1f-3076-422f-97c5-969734b0f17&title=&width=885)
### key的作用
```html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div id="test"></div>


    <script src="../js/17.0.1/react.development.js"></script>
    <script src="../js/17.0.1/react-dom.development.js"></script>
    <script src="../js/17.0.1/babel.min.js"></script>


    <script type="text/babel">
        /*
            慢动作回放----使用index索引值作为key
    
                初始数据：
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                初始的虚拟DOM：
                        <li key=0>小张---18<input type="text"/></li>
                        <li key=1>小李---19<input type="text"/></li>
    
                更新后的数据：
                        {id:3,name:'小王',age:20},
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                更新数据后的虚拟DOM：
                        <li key=0>小王---20<input type="text"/></li>
                        <li key=1>小张---18<input type="text"/></li>
                        <li key=2>小李---19<input type="text"/></li>
    
        -----------------------------------------------------------------
    
        慢动作回放----使用id唯一标识作为key
    
                初始数据：
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                初始的虚拟DOM：
                        <li key=1>小张---18<input type="text"/></li>
                        <li key=2>小李---19<input type="text"/></li>
    
                更新后的数据：
                        {id:3,name:'小王',age:20},
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                更新数据后的虚拟DOM：
                        <li key=3>小王---20<input type="text"/></li>
                        <li key=1>小张---18<input type="text"/></li>
                        <li key=2>小李---19<input type="text"/></li>
    
    
         */
        class Person extends React.Component {
            state = {
                persons: [
                    { id: 1, name: '小张', age: 18 },
                    { id: 2, name: '小李', age: 19 },
                ]
            }
            add = () => {
                const { persons } = this.state
                const p = { id: persons.length + 1, name: '小王', age: 20 }
                this.setState({
                    persons: [p, ...persons]
                })
            }
            render() {
                return (
                    <div>
                        <h2>展示人员信息</h2>
                        <button onClick={this.add}>添加一个小王</button>
                        <h3>使用index索引值作为key</h3>
                        <ul>
                            {
                                this.state.persons.map((person, index) => {
                                    return <li key={index}>{person.name}-----{person.age} <input type="text" /></li>
                                })
                            }
                        </ul>
                        <hr />
                        <hr />
                        <h3>使用id(数据的唯一标识)值作为key</h3>


                        <ul>
                            {
                                this.state.persons.map((person, index) => {
                                    return <li key={person.id}>{person.name}-----{person.age} <input type="text" /></li>
                                })
                            }
                        </ul>
                    </div>
                )
            }
        }
        ReactDOM.render(<Person />, document.getElementById('test'))
    </script>


</body>


</html>
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671376656370-64ca807a-1c16-4fb4-935e-e566f4f8a220.png#averageHue=%23f9f9f9&clientId=u40c54baa-a6cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=440&id=u352b1e4e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=880&originWidth=1726&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71723&status=done&style=stroke&taskId=ud6f6559c-dfd5-4726-bf89-4b142b0da0b&title=&width=863)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671376712777-8c7df430-bb1b-4ac0-93be-c6ac76e4b6ff.png#averageHue=%23f9f9f9&clientId=u40c54baa-a6cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=502&id=ud7ce6e3c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1004&originWidth=1700&originalType=binary&ratio=1&rotation=0&showTitle=false&size=103345&status=done&style=stroke&taskId=u75a5e6f8-5970-4485-ba51-ca6fbce1c85&title=&width=850) 
经典面试题:
1). react/vue中的key有什么作用？（key的内部原理是什么？）
2). 为什么遍历列表时，key最好不要用index?
          
1. 虚拟DOM中key的作用：
1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。
2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
    		a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
(1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
(2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
    		b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
根据数据创建新的真实DOM，随后渲染到到页面

2. 用index作为key可能会引发的问题：
1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
2. 如果结构中还包含输入类的DOM：
会产生错误DOM更新 ==> 界面有问题。
3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
                        
3. 开发中如何选择key?:
1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
2.如果确定只是简单的展示数据，用index也是可以的。
       
上述代码：
慢动作回放----使用index索引值作为key
    
                初始数据：
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                初始的虚拟DOM：
                        <li key=0>小张---18<input type="text"/></li>
                        <li key=1>小李---19<input type="text"/></li>
    
                更新后的数据：
                        {id:3,name:'小王',age:20},
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                更新数据后的虚拟DOM：
                        <li key=0>小王---20<input type="text"/></li>
                        <li key=1>小张---18<input type="text"/></li>
                        <li key=2>小李---19<input type="text"/></li>
    
        -----------------------------------------------------------------
    
        慢动作回放----使用id唯一标识作为key
    
                初始数据：
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                初始的虚拟DOM：
                        <li key=1>小张---18<input type="text"/></li>
                        <li key=2>小李---19<input type="text"/></li>
    
                更新后的数据：
                        {id:3,name:'小王',age:20},
                        {id:1,name:'小张',age:18},
                        {id:2,name:'小李',age:19},
                更新数据后的虚拟DOM：
                        <li key=3>小王---20<input type="text"/></li>
                        <li key=1>小张---18<input type="text"/></li>
                        <li key=2>小李---19<input type="text"/></li>
    

# React应用(基于react脚手架)
## React脚手架
1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
1. 包含了所有需要的配置（语法检查、jsx编译、devServer…）
2. 下载好了所有相关的依赖
3. 可以直接运行一个简单效果
2. react提供了一个用于创建react项目的脚手架库: create-react-app
3. 项目的整体技术架构为:  react + webpack + es6 + eslint
4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化
## 创建项目并启动
**第一步**，全局安装：npm i -g create-react-app
**第二步**，切换到想创项目的目录，使用命令：create-react-app hello-react
**第三步**，进入项目文件夹：cd hello-react
**第四步**，启动项目：npm start
## react脚手架项目结构
public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		**index.html -------- 主页面**
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		**App.js --------- App组件**
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		**index.js ------- 入口文件**
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)

## 功能界面的组件化编码流程（通用）
拆分组件: 拆分界面,抽取组件
2. 实现静态组件: 使用组件实现静态页面效果
3. 实现动态组件
3.1 动态显示初始化数据
3.1.1 数据类型
3.1.2 数据名称
3.1.2 保存在哪个组件?
3.2 交互(从绑定事件监听开始)

## 组件的组合使用-TodoList 
_功能: 组件化实现此功能_
_1. 显示所有todo列表_
_2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本_
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671453190450-1b2cf0f4-7ef0-4359-af60-09bc26277b23.png#averageHue=%23cdc44b&clientId=ud2811a30-a607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=764&id=u6b99b5a6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1528&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=235262&status=done&style=stroke&taskId=ua99294c2-346a-47c9-a62c-b673efe2799&title=&width=1440)todoList案例相关知识点
		1.拆分组件、实现静态组件，注意：className、style的写法
		2.动态初始化列表，如何确定将数据放在哪个组件的state中？
					——某个组件使用：放在其自身的state中
					——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
		3.关于父子之间通信：
				1.【父组件】给【子组件】传递数据：通过props传递
				2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
		4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
		5.状态在哪里，操作状态的方法就在哪里
## React ajax
### react脚手架配置代理总结
#### 方法一
> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```
说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

#### 方法二

1.  第一步：创建代理配置文件 
```
在src下创建配置文件：src/setupProxy.js
```

2.  编写setupProxy.js配置具体代理规则： 
```javascript
// 现在需要这样写，内部使用了分别暴露，我们只需引入createProxyMiddleware
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}
```
说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

```jsx
import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(res => {
      console.log('成功', res.data);
    }).catch(err => {
      console.log('失败了', err);
    })
  }
  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(res => {
      console.log('成功', res.data);
    }).catch(err => {
      console.log('失败了', err);
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}
```

### react中使用axios
1. axios: 轻量级, 建议使用
1) 封装XmlHttpRequest对象的ajax
2)  promise风格
3) 可以用在浏览器端和node服务器端
文档：[https://axios-http.com/zh/docs/intro](https://axios-http.com/zh/docs/intro)

## 消息订阅-发布机制
1. 工具库: PubSubJS
2. 下载: npm install pubsub-js --save
3. 使用: 
1) import PubSub from 'pubsub-js' //引入
2) PubSub.subscribe('delete', function(data){ }); //订阅
3) PubSub.publish('delete', data) //发布消息
## react中使用fetch
### **文档**
1. [https://github.github.io/fetch/](https://github.github.io/fetch/)
2. [https://segmentfault.com/a/1190000003810652](https://segmentfault.com/a/1190000003810652)
### **特点**
1. fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
2. 老版本浏览器可能不支持
### 相关api
```javascript
// get
fetch(url).then(function(response) {
  return response.json()
}).then(function(data) {
  console.log(data)
}).catch(function(e) {
  console.log(e)
});

// post
fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
}).then(function(data) {
  console.log(data)
}).catch(function(e) {
  console.log(e)
})
```

## github搜索案例总结
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2.ES6小知识点：解构赋值+重命名
```javascript
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名
```
3.消息订阅与发布机制
1.先订阅，再发布（理解：有一种隔空对话的感觉）
2.适用于任意组件间通信
3.要在组件的componentWillUnmount中取消订阅
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671526410955-310539f7-62c8-4d41-987c-3aab80886cc0.png#averageHue=%232a2e37&clientId=u226a40d5-eff3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=875&id=ud6a88b95&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1750&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=758301&status=done&style=stroke&taskId=u646df461-ba7c-4dd1-be6e-f5ec49ef9ea&title=&width=1440)
4.fetch发送请求（关注分离的设计思想）
```javascript
try {
  const response= await fetch(`/api1/search/users2?q=${keyWord}`)
  const data = await response.json()
  console.log(data);
} catch (error) {
  console.log('请求出错',error);
}
```

## React 路由
`npm i react-router-dom@5`
### 路由的基本使用
		1.明确好界面中的导航区、展示区
		2.导航区的a标签改为Link标签
					`<Link to="/xxxxx">Demo</Link>`
		3.展示区写Route标签进行路径的匹配
					`<Route path='/xxxx' component={Demo}/>`
		4.<App>的最外侧包裹了一个`<BrowserRouter>`或`<HashRouter>`
### 路由组件与一般组件
		1.写法不同：
					一般组件：<Demo/>
					路由组件：<Route path="/demo" component={Demo}/>
		2.存放位置不同：
					一般组件：components
					路由组件：pages
		3.接收到的props不同：
					一般组件：写组件标签时传递了什么，就能收到什么
					路由组件：接收到三个固定的属性
```javascript
history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
location:
    pathname: "/about"
    search: ""
    state: undefined
match:
    params: {}
    path: "/about"
    url: "/about"
```
### NavLink与封装NavLink
		1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
### Switch的使用
		1.通常情况下，path和component是一一对应的关系。
		2.Switch可以提高路由匹配效率(单一匹配)。
### 解决多级路径刷新页面样式丢失的问题
		1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
		2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
		3.使用HashRouter
### 路由的严格匹配与模糊匹配
		1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
		2.开启严格匹配：`<Route exact={true} path="/about" component={About}/>`
		3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
### Redirect的使用
		1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
		2.具体编码：
					<Switch>
						<Route path="/about" component={About}/>
						<Route path="/home" component={Home}/>
						`<Redirect to="/about"/>`
					</Switch>
### 嵌套路由
		1.注册子路由时要写上父路由的path值
		2.路由的匹配是按照注册路由的顺序进行的
### 向路由组件传递参数		

- 路由组件传递params参数 
```jsx
      {/* 编写路由链接并且传递params参数的值 */}
      <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
      {/* 注册路由并且声明params的变量，注意是对应的关系 */}
      <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
                  
      // 从Detail路由组件上的this.props.match.params获取参数
			const { id, title } = this.props.match.params
```
 

-  路由组件传递search参数 
```jsx
{/* 编写路由链接并且传递search参数 */}
<Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
{/* 注册路由 注意 search参数无需声明接收 */}
<Route path="/home/message/detail" component={Detail}></Route>

// 获取search字符串
let { search } = this.props.location
// 第三方库 import qs from 'qs'
const res = qs.parse(search.slice(1))
```
 

-  路由组件传递state参数 
```jsx
{/* 编写路由链接并且传递state参数(注意这个state就是个属性，根组件的state没有任何关系) */}
<Link to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
{/* 注册路由 注意 state参数无需声明接收 */}
<Route path="/home/message/detail" component={Detail}></Route>

// 获取state参数
// 连续解构赋值获取 后面的或空对象是指如果没有了缓存和历史记录那么location对象上就没有state对象
// 则state对象为undefined 从undefined身上解构赋值取不到值 则会报错
const { id, title } = this.props.location.state || {}
// 备注：刷新也可以保留住参数
```
 
### 编程式路由导航
		借助this.prosp.history对象上的API对操作路由跳转、前进、后退
						-this.prosp.history.push()
						-this.prosp.history.replace()
						-this.prosp.history.goBack()
						-this.prosp.history.goForward()
						-this.prosp.history.go()
```jsx
// 编程式实现replace跳转+携带params参数
this.props.history.replace(`/home/message/detail/${id}/${title}`)
// replace跳转实现query参数
this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
// replace跳转实现state参数
this.props.history.replace(`/home/message/detail`, { id, title })

// 编程式实现push跳转+携带params参数
this.props.history.push(`/home/message/detail/${id}/${title}`)
// push跳转实现query参数
this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
// push跳转实现state参数
this.props.history.push(`/home/message/detail`, { id, title })

// 后退
this.props.history.goBack()
// 前进
this.props.history.goForward()
// 指定前进或者后退几步
this.props.history.go(-2)
```
### BrowserRouter与HashRouter的区别
		1.底层原理不一样：
					BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
					HashRouter使用的是URL的哈希值。
		2.path表现形式不一样
					BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
					HashRouter的路径包含#,例如：localhost:3000/#/demo/test
		3.刷新后对路由state参数的影响
					(1).BrowserRouter没有任何影响，因为state保存在history对象中。
					(2).HashRouter刷新后会导致路由state参数的丢失！！！
		4.备注：HashRouter可以用于解决一些路径错误相关的问题。

### withRouter
withRouter的使用(withRouter可以加工一般组件，让一般组件具备路由组件所持有的API。withRouter的返回值是一个新组件，只不过身上有路由组件特有的api)
```jsx
import React, { Component } from 'react'
// 引入withRouter
import { withRouter } from 'react-router-dom'

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forWard = () => {
        this.props.history.goForward()
    }

    render() {
        return (
            <div className="row">
            		<h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forWard}>前进</button>
            </div>
        )
    }
}
// withRouter可以加工一般组件，让一般组件具备路由组件所持有的API
// withRouter的返回值是一个新组件，只不过身上有路由组件特有的api
export default withRouter(Header)


```
## antd组件库的使用

- 首先安装 npm i antd
- 查阅文档[https://ant.design/components/overview-cn/](https://ant.design/components/overview-cn/)

## redux**状态管理**
![redux原理图.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671815866277-4d517791-ba01-4c97-aba6-5f17f069a6ca.png#averageHue=%23f8f4ee&clientId=u432b28b9-3f9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=360&id=u554f575c&margin=%5Bobject%20Object%5D&name=redux%E5%8E%9F%E7%90%86%E5%9B%BE.png&originHeight=720&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=119476&status=done&style=stroke&taskId=u7a8dbe3a-9d53-42ca-bc16-8c04f9885ef&title=&width=640)
### redux精简版
`npm i redux`
		(1).去除Count组件自身的状态
		(2).src下建立:
						-redux
							-store.js
							-count_reducer.js
	
		(3).store.js：
					1).引入redux中的createStore函数，创建一个store
					2).createStore调用时要传入一个为其服务的reducer
					3).记得暴露store对象
```javascript
/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store
 */
// 引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)
```
	
		(4).count_reducer.js：
					1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
					2).reducer有两个作用：初始化状态，加工状态
					3).reducer被第一次调用时，是store自动触发的，
									传递的preState是undefined,
									传递的action是:{type:'@@REDUX/INIT_a.2.b.4}
```javascript
/* 
    1.该文件是为了创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接收到两个参数，分别为：preState之前的状态，action动作对象
*/

// 初始化的值
const initState = 0
export default function countReducer(preState = initState, action) {
  // console.log(preState)
  // 从action对象中获取：type、data
  const { type, data } = action
  // 根据type决定如何加工数据
  switch (type) {
      // +
    case 'increment':
      return preState + data
      // -
    case 'decrement':
      return preState - data
      // 初始化
    default:
      return preState
  }

}
```
		(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
				备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
  
store.subscribe(() => {
	root.render(<App />)
})
```
### redux完整版
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671697929918-437abc59-0f5b-4b8a-96df-4c1a4d128122.png#averageHue=%23272c33&clientId=u912816a8-72fd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=198&id=ue82eb32e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=546&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73369&status=done&style=stroke&taskId=u04eb9671-02f4-452a-a267-97db29083bc&title=&width=273)
新增文件：
		1.count_action.js 专门用于创建action对象
```javascript
/* 
为count组件生成action对象
*/

import { INCREMENT, DECREMENT } from './constant'
export const createIncrementAction = (data) => ({ type: INCREMENT, data })

export const createDecrementAction = (data) => ({ type: DECREMENT, data })

```
		2.constant.js 放置容易写错的type值
```javascript
/* 
该模块是用于定义action对象中的type类型的常量值
*/
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```
### redux异步action版
(1).明确：延迟的动作不想交给组件自身，想交给action
(2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
(3).具体编码：
1).`npm i redux-thunk`，并配置在store中
```javascript
/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store
 */
// 引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

// 引入redux-thunk，用于支持异步action(即action是一个函数)
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))
```
2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
```javascript
/* 
为count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

//同步的action就是指action的值是一个对象 
export const createIncrementAction = (data) => ({ type: INCREMENT, data })

export const createDecrementAction = (data) => ({ type: DECREMENT, data })

// 异步action就是指action的值是一个函数，
// 然后我们引入redux-thunk中间件并且使用后，store就会帮我们调用这个函数
// 异步action中一般都会调用同步action

// 模拟一个场景，如果我们去饭店吃饭，点了饭没有说什么时候要(相当于action就是一个对象)，老板(store)就会直接让厨师(reducer)干活
// 如果老板这里有了VIP服务(store使用了thunk中间件)，那么老板(store)可以接收顾客的预约(action是一个函数)，
// 老板对这个预约计时(store会执行这个函数，等异步任务完成后，再通知厨师干活)
export const createIncrementAsyncAction = (data, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch({ type: INCREMENT, data })
      dispatch(createIncrementAction(data))
    }, delay);
  }
}
```
3).异步任务有结果后，分发一个同步的action去真正操作数据。
(4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。
## react-redux
### react-redux的基本使用
![react-redux模型图.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671815845037-5e1c7726-78a8-4dbb-ad0f-2c3ce50f762c.png#averageHue=%23f3f1f0&clientId=u432b28b9-3f9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=318&id=u2714c480&margin=%5Bobject%20Object%5D&name=react-redux%E6%A8%A1%E5%9E%8B%E5%9B%BE.png&originHeight=635&originWidth=1131&originalType=binary&ratio=1&rotation=0&showTitle=false&size=45184&status=done&style=stroke&taskId=u0ebeb155-f157-4bec-99e3-1c491d50feb&title=&width=565.5)
(1).明确两个概念：
1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
2).容器组件：负责和redux通信，将结果交给UI组件。
(2).如何创建一个容器组件————靠react-redux 的 connect函数
首先使用npm安装`npm i racte-redux`，再`import {connection} from 'react-redux'`
```javascript
connect(mapStateToProps,mapDispatchToProps)(UI组件)
							-mapStateToProps:映射状态，返回值是一个对象
							-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
```
(3).备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
(4).备注2：mapDispatchToProps，也可以是一个对象
### react-redux优化
`import { Provider } from 'react-redux'`
(1).容器组件和UI组件整合一个文件
(2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
(4).mapDispatchToProps也可以简单的写成一个对象
(5).一个组件要和redux“打交道”要经过哪几步？
(1).定义好UI组件---不暴露
(2).引入connect生成一个容器组件，并暴露，写法如下：
```javascript
connect(
  state => ({key:state}), //映射状态
  {key:xxxxxAction} //映射操作状态的方法
)(UI组件)
```
(3).在UI组件中通过this.props.xxxxxxx读取和操作状态
### react-redux数据共享版
`import { combineReducers } from 'redux'`
(1).定义一个Pserson组件，和Count组件通过redux共享数据。
(2).为Person组件编写：reducer、action，配置constant常量。
(3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的总状态是一个对象！！！
(4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。
### react-redux开发者工具的使用
(1).`npm i redux-devtools-extension -D`
(2).store中进行配置
```javascript
import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
```

### react-redux最终版
(1).所有变量名字要规范，尽量触发对象的简写形式。
(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671816345627-68fc6ca3-ea71-43c9-a42a-43dcf5a9861e.png#averageHue=%230a0908&clientId=u432b28b9-3f9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=372&id=u45ab0244&margin=%5Bobject%20Object%5D&name=image.png&originHeight=744&originWidth=490&originalType=binary&ratio=1&rotation=0&showTitle=false&size=49332&status=done&style=stroke&taskId=ub05885a3-23a2-49d8-a0e1-bec0f464c77&title=&width=245)
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import store from './redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
    <Provider store={store}>
        <App />
    </Provider>
)


```
```javascript
import React, { Component } from 'react'

/* 
引入的是容器组件
 */
import Count from './containers/Count'
import Person from './containers/Person'
export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}

```
```javascript
// 该文件专门用于暴露一个store对象，整个应用只有一个store
// 引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// 引入redux-thunk，用于支持异步action(即action是一个函数)
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入汇总之后的reducers
import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
```
```javascript
/* 
该模块是用于定义action对象中的type类型的常量值
*/
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export const ADD_PERSON = 'add_person'
```
```javascript
/* 
为count组件生成action对象
*/
import { INCREMENT, DECREMENT } from '../constant'

//同步的action就是指action的值是一个对象 
export const increment = data => ({ type: INCREMENT, data })

export const decrement = (data) => ({ type: DECREMENT, data })

// 异步action就是指action的值是一个函数，
// 然后我们引入redux-thunk中间件并且使用后，store就会帮我们调用这个函数
// 异步action中一般都会调用同步action

// 模拟一个场景，如果我们去饭店吃饭，点了饭没有说什么时候要(相当于action就是一个对象)，老板(store)就会直接让厨师(reducer)干活
// 如果老板这里有了VIP服务(store使用了thunk中间件)，那么老板(store)可以接收顾客的预约(action是一个函数)，
// 老板对这个预约计时(store会执行这个函数，等异步任务完成后，再通知厨师干活)
export const incrementAsync = (data, delay) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, delay);
    }
}
```
```javascript
import { ADD_PERSON } from '../constant'

export const addPerson = personObj => ({ type: ADD_PERSON, data: personObj })
```
```javascript
import { INCREMENT, DECREMENT } from '../constant'

const initState = 0
export default function countReducer(preState = initState, action) {
    // console.log(preState, action)
    const { type, data } = action

    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }

}
```
```javascript
import { ADD_PERSON } from '../constant'

const initState = [
    { id: '001', name: '张三', age: 22 },
    { id: '002', name: '张三', age: 22 },
    { id: '003', name: '张三', age: 22 },
]

export default function personReducer(preState = initState, action) {
    const { type, data } = action

    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]

        default:
            return preState
    }
}
```
```javascript
/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/

import { combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import person from './person'

// 汇总所有的reducer变为一个总的reducers
export default combineReducers({
    count,
    person
})
```
```jsx
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 引入create_action
import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/actions/count'

import React, { Component } from 'react'

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)


  }
  render() {
    return (
      <div>
        <h2>我是Count组件,Person组件中的人数为{this.props.persons.length}</h2>
        <h4>当前求和为:{this.props.count}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前是奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  // mapStateToProps
  state => ({ count: state.count, persons: state.person }),
  // mapDispatchToProps的简写方式——>直接写成对象 内部会自动调用dispatch，无序我们手动调用
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)

```
```jsx
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'

import { addPerson } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const { value: name } = this.nameNode
        const { value: age } = this.ageNode
        const personObj = { id: nanoid(), name, age }

        this.props.addPerson(personObj)

        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        const { person } = this.props
        return (
            <div>
                <h2>我是Person组件,Count组件总和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" name="name" placeholder='输入姓名' />
                <input ref={c => this.ageNode = c} type="text" name="age" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        person.map(person => <li key={person.id}>{person.name}---{person.age}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    // 参数一，函数，可以接收到state参数，从state中解构赋值出来person和count的状态
    // 并作为函数对象的key和value返回到PersonUI组件的props中
    ({ person, count }) => ({ person, count }),
    {
        addPerson
    }
)(Person)
```

# react扩展
## 1. setState

### setState更新状态的2种写法

```
	(1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
```

---

## 2. lazyLoad

### 路由组件的lazyLoad

```javascript
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```

---

## 3. Hooks

#### 1. React Hook/Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

#### 2. 三个常用的Hook

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

#### 3. State Hook

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

#### 4. Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount()
```

#### 5. Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```

---

## 4. Fragment

### 使用

```
<Fragment><Fragment>
<></>
```

### 作用

> 可以不用必须有一个真实的DOM根标签了


---

## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信


### 使用

```javascript
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 注意

```
在应用开发中一般不用context, 一般都用它的封装react插件
```

---

## 6. 组件优化

### Component的2个问题

> 1.  只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低 
> 2.  只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低 


### 效率高的做法

> 只有当组件的state或props数据发生改变时才重新render()


### 原因

> Component中的shouldComponentUpdate()总是返回true


### 解决

```
办法1: 
	重写shouldComponentUpdate()方法
	比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
办法2:  
	使用PureComponent
	PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
	注意: 
		只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
		不要直接修改state数据, 而是要产生新数据
项目中一般使用PureComponent来优化
```

---

## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

```
Vue中: 
	使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
React中:
	使用children props: 通过组件标签体传入结构
	使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性
```

### children props

```
<A>
  <B>xxxx</B>
</A>
{this.props.children}
问题: 如果B组件需要A组件内的数据, ==> 做不到
```

### render props

```
<A render={(data) => <C data={data}></C>}></A>
A组件: {this.props.render(内部state数据)}
C组件: 读取A组件传入的数据显示 {this.props.data}
```

---

## 8. 错误边界

#### 理解：

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面

#### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

##### 使用方式：

getDerivedStateFromError配合componentDidCatch

```javascript
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```

## 9. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

#### 几种通信方式：

```
	1.props：
		(1).children props
		(2).render props
	2.消息订阅-发布：
		pubs-sub、event等等
	3.集中式管理：
		redux、dva等等
	4.conText:
		生产者-消费者模式
```

#### 比较好的搭配方式：

```
	父子组件：props
	兄弟组件：消息订阅-发布、集中式管理
	祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)
```

# ReactRouter6
## `<Routes></Routes>`与`<Route/>`

1. V6版本移除了之前的`Switch`，引入了新的替代者`Routes`，使用方法如下图

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671950425855-66963b70-c4bf-4190-87de-bf1dc4fcd3ca.png#averageHue=%232a2f37&clientId=u0ce2e6e9-4f70-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=157&id=u11199a5a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=314&originWidth=1352&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71841&status=done&style=stroke&taskId=uc805c20d-a67b-42b4-877e-ab484fe1a83&title=&width=676)

2. Routes和Route要配合使用，Route必须要被Routes包裹否则报错
3. `Route`相当于一个if语句，如果路径的URL匹配，则展现出对应element属性中的组件
4. 当URL路径发生变化的时候，`Routes`会查看所有的子`Route`元素，找到最佳的匹配呈现组件
5. `<Route caseSensitive>`属性用于指定：匹配时是否区分大小写(默认为false)
6. `<Route>`也可以嵌套使用，且可以配合`useRoutes()`hook配置“路由表”，但需要通过`<Outlet/>`组件来渲染子路由
7. 示例代码：
   1. 不使用路由表
```jsx
<Routes>
  // path用于定义路径，element属性用于定义当前路径对应的组件
  <Route path='/about' element={<About />} />
  // 用于定义嵌套路由 home是一级路由，对应的路径 /home*/
  <Route path='home' element={<Home />} >
    // test1和test2是二级路由，对应的路径是/home/test1或/home/test2*/
    <Route path='test1' element={<Test1/>}></Route>
    <Route path='test2' element={<Test2/>}></Route>
  </Route>
  // Route也可以不写element属性，这时就是用于展示嵌套路由，对应的路径就是/users/xxx
  <Route path='users'>
    <Route path='xxx' element={<Demo/>} />
  </Route>
</Routes>
```
b. 使用路由表(推荐)
```jsx
import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const element = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail',
            element: <Detail />
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to={'/about'} />
  }
]
export default element
```
## NavLink的className的函数式写法

- 由于V6版本中的NavLink的activeClassName不能使用了，所以可以使用下面的方法

className可以写出一个函数，并且可以接收到一个对象，对象中含有isActive属性，可以判断出当前路由链接是否被点击了，可以手动指定类名和样式(默认的被点击会添加active类名)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671951783018-d4f36519-aa10-452f-8676-4fcf9e04ff54.png#averageHue=%23292e37&clientId=u0ce2e6e9-4f70-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=433&id=uf6a3137b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=866&originWidth=1862&originalType=binary&ratio=1&rotation=0&showTitle=false&size=290219&status=done&style=stroke&taskId=uef2265cd-9f66-413d-9ee2-bbfa704c292&title=&width=931)
## `<Navigate/>`导航标签*

1. 改标签用于替代之前的Redirect重定向标签，需要被渲染到页面上，才有机会执行跳转
2. 使用方法如下
```jsx
<Routes>
  <Route path='/about' element={<About />} />
  <Route path='/home' element={<Home />} />
  // 当访问 / 根路径的时候，则呈现element中的组件, 该组件是Navigate 并且有to属性并且指定了到about路径
  <Route path='/' element={<Navigate to={'/about'} />} />
</Routes>
```

3. 也可以在路由组件内使用更方便路由的跳转，需要注意的是一定要被渲染到页面上，我们后面可以使用

`useNavigate`这个hook实现更方便的编程式路由导航
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1671951046453-9b4c61f5-77dd-4800-a155-87a28b60405d.png#averageHue=%23292e36&clientId=u0ce2e6e9-4f70-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=377&id=u6887ffce&margin=%5Bobject%20Object%5D&name=image.png&originHeight=754&originWidth=1806&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134702&status=done&style=stroke&taskId=u9e8e5df1-ba4c-468d-9b76-412327aefd0&title=&width=903)
## `<Outlet/>`
这个标签类似于Vue中的`<route-view>`

1. 当`<Route>`产生嵌套时，渲染其对应的后续子路由
2. 实例代码
```jsx
// 路由表
import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const element = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail',
            element: <Detail />
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to={'/about'} />
  }
]
export default element


// 在App中使用useRoutes的hook生成路由表，并呈现在需要展现的地方
import React from 'react'

import { NavLink, useRoutes } from 'react-router-dom'
import Header from './components/Header'

import routes from './routes'

export default function App() {
  // 路由表
  const element = useRoutes(routes)

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={'list-group-item'} to={'/about'}>About</NavLink>
            <NavLink className={'list-group-item'} to={'/home'}>Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* useRoutes 使用路由表快速生成并且集中管理 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home.js
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to={'news'}>News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to={'message'}>Message</NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>

  )
}

```
## Hooks
### 1.useRoutes()
根据路由表创建嵌套路由，注意的是hooks只能在函数式组件内部使用
```javascript
import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import { useRoutes } from 'react-router-dom'

import React from 'react'

export default function Routes() {
  return useRoutes([
    {
      path: '/about',
      element: <About />,
        },
    {
      path: '/home',
      element: <Home />,
        children: [
          {
            path: 'news',
            element: <News />
          },
          {
            path: 'message',
            element: <Message />,
            children: [
              {
                path: 'detail',
                element: <Detail />
              }
            ]
          }
        ]
        },
    {
      path: '/',
      element: <Navigate to={'/about'} />
        }
  ])
}

```
```jsx
import React from 'react'

import { NavLink } from 'react-router-dom'
import Header from './components/Header'
// 直接引入创建完成的路由表返回的元素
import routes from './routes'

export default function App() {

  return (
    <div>
      {/* 路由链接 */}
      <NavLink className={'list-group-item'} to={'/about'}>About</NavLink>
      <NavLink className={'list-group-item'} to={'/home'}>Home</NavLink>
      {/* 使用路由表快速生成并且集中管理 */}
      {routes()}
    </div>
  )
}

```
### 2.useNavigate()*

1. 作用：返回一个函数用来实现编程式导航
```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }
  function forward() {
    navigate(1)
  }
  return (
    <div>
      <button className='btn btn-warning' onClick={back}>←back</button>
      <button className='btn btn-success' onClick={forward}>forward→</button>
    </div>
  )
}

```
### 3.useParams()

1. 作用：返回当前路由匹配的`params`参数，类似于route5中的`match.params`
2. 实例代码
```jsx
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  // 读取url中返回过来的params参数，注意编写路由表的时候需要配置 /:id/:title/:content
  const { id, title, content } = useParams()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}

```
### 4.useSearchParams()

1. 作用：用于读取和修改当前位置的URL中的查询字符串
2. 返回一个包含两个值的数组，内容分别为：当前的search参数、更新search的函数
3. 示例代码
```jsx
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  return (
    <ul>
      <li>
        <button className='btn btn-success' onClick={() => setSearch('id=008&title=哈哈&content='hello')}>点我更新收到的search参数</button>
      </li>
      <li>消息编号: {id}</li>
      <li>消息标题: {title}</li>
      <li>消息内容: {content}</li>
    </ul>
  )
}

```
### 5.useLoaction()

1. 作用：获取当前的location的信息，对应5.x版本中的组件的props中的location
### 6.useMatch()

1. 作用：获取当前的匹配的信息，对应5版本中组件的props中的match
### 7.useInRouterContext()
作用：如果组件在`<Router>`的上下文中呈现(即组件被`BrowserRouter`或者`HashRouter`包裹)，
则`useInRouterContext`构造返回true，否则返回false

### 8.useNavigationType()

1. 作用：返回当前的导航类型(用户是如何来到当前页面的)
2. 返回值：`POP`，`PUSH`，`REPLACE`
3. 备注：`POP`是指在浏览器中直接打开了这个路由组件(刷新页面)

### 9.useOutlet()

1. 作用：用来呈现当 当前组件中要渲染的嵌套路由被渲染时，就会返回该路由信息，否则为null
2. 示例代码
```jsx
const res = useOutlet()
console.log(res)
// 如果嵌套路由没有被挂载，则res为null
// 如果嵌套路由已经被挂载，则展示嵌套的路由对象
```

### 10.useResolvedPath()

1. 作用：给定一个URL的值，解析其中的: path、search、hash的值。



