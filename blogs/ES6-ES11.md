# let变量声明
- 变量不能重复声明
- 块级作用域
- 不存在变量提升
- 不影响作用域链
```javascript
// 变量声明
let a;
let b, c, d;
let e = 100;
let f = 521, g = 'i love you', h = [];
// 1.变量不能重复声明 ncaught SyntaxError: Identifier 'star' has already been declared
// let star = '邓紫棋'
// let star = '刘德华'

// 2.块级作用域 全局，函数，eval
// if else while for
{
  let man = 'me';
}
// console.log(man);//man is not defined

// 3.不存在变量提升
console.log(aa);//undefined
var aa = 'hello'

// console.log(bb);//Cannot access 'bb' before initialization
let bb
console.log(bb);
bb = 'world'
console.log(bb);

// 4.不影响作用域链
{
  let school = '南京'
  function fn() {
    console.log(school);
  }
  fn();
}
```
## 案例
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      div {
        float: left;
        width: 100px;
        height: 100px;
        margin: 20px;
        border: 1px solid skyblue;
      }
    </style>
  </head>

  <body>
    <h1>点击框框切换颜色</h1>
    <hr>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>

    <script>
      let item = document.querySelectorAll('.item')

      for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function () {
          // this.style.background = 'pink'//正常写法
          item[i].style.background = 'pink'// 用var声明i 报错 原因如下
          console.log(i);
        })
      }
      // console.log(i);//3 当for里面的i用var定义的时候 在外侧打印 我们发现i是3 没有3这个元素 所以报错

      // 用let 如下
      /* {
            let i = 0
            item[i].addEventListener('click', function () {
                // this.style.background = 'pink'//正常写法
                item[i].style.background = 'pink'// 用var声明i 报错 原因如下
                console.log(i);
            })
        }
        {
            let i = 1
            item[i].addEventListener('click', function () {
                // this.style.background = 'pink'//正常写法
                item[i].style.background = 'pink'// 用var声明i 报错 原因如下
                console.log(i);
            })
        }
        {
            let i = 2
            item[i].addEventListener('click', function () {
                // this.style.background = 'pink'//正常写法
                item[i].style.background = 'pink'// 用var声明i 报错 原因如下
                console.log(i);
            })
        } */
    </script>
  </body>

</html>
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1669976231103-a1e349e0-3d5a-47f7-8d10-c853e1999ae9.png#averageHue=%23c7c8c7&clientId=u5a7ba30f-023f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=515&id=u1cbcd678&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1030&originWidth=2876&originalType=binary&ratio=1&rotation=0&showTitle=false&size=217109&status=done&style=none&taskId=u10920830-ec38-4e41-871b-2a73ee5cfd2&title=&width=1438)
# const常量

- 必须要赋初始值
- 一般使用大写字母
- 常量的值不能修改
- 块级作用域
- 对数组和对象的元素的修改 不算做对常量的修改 不会报错 因为常量指向的地址没有发生改变
```javascript
// 声明常量
const SCHOOL = 'AHSTU'
// 1.必须要赋初始值
// const A;
// 2.一般使用大写字母
// 3.常量的值不能修改
// SCHOOL = 'bb'
// 4.块级作用域
{
  const ME = 'red'
}
// console.log(ME);

// 5.对数组和对象的元素的修改 不算做对常量的修改 不会报错 因为常量指向的地址没有发生改变
const YEAR = ['春', '夏', '秋']
YEAR.push('冬')
console.log(YEAR);
```
# 解构赋值
```javascript
// 1.数组的解构 使用的比较少
const COLOR = ['red', 'blue', 'green']
let [red, blue, green] = COLOR
console.log(red);
console.log(blue);
console.log(green);
// 2.对象的解构
const zhao = {
  name: '赵本山',
  age: 50,
  show: function () {
    console.log('我可以演小品');
  }
}

/*  let { name, age, show } = zhao
         console.log(name);
         console.log(age);
         console.log(show);
         show() */

let { show } = zhao
show()
show()
show()

```
# 模板字符串
```javascript
// 1.声明 
// let str = `我也是字符串`
// console.log(str, typeof str);

// 2.内容可以直接出现换行符
let str = `<ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>`

// 3.变量拼接
let myname = 'red'
console.log(`我是${myname}`);
```
# 简化对象写法
```javascript
// ES6 允许在大括号里面 直接写入变量和函数 作为对象的属性和方法
// 这样书写更加简洁
let myname = 'red'
let age = 58
let school = 'andySchoow'
let change = function () {
  console.log('i can change');
}

const me = {
  myname,
  age,
  school,
  change,
  fn: function () {

  },
  // 可以这样写
  fun() {

  }
}

console.log(me);
```
# 箭头函数
```javascript
// 声明一个函数
/* let fn = function () {

        } */
/* let fn = ()=>{
            
        } */
let fn = (a, b) => {
  return a + b
}

// 调用函数
let result = fn(1, 2)
console.log(result);
// 1.this是静态的 this始终指向函数声明时所在的作用域下的 this的值
function getName() {
  console.log(this.name);
}
let getName2 = () => {
  console.log(this.name);
}

window.name = 'andy'
const SCHOOL = {
  name: '大肥羊'
}

// 直接调用
// getName()//this是window 所以结果是andy
// getName2()//函数声明在window的作用域下 所以结果也是andy

// 这个相当于使用SCHOOL调用getName函数
getName.call(SCHOOL)//普通函数的结果发生了改变 大肥羊 
getName2.call(SCHOOL)//箭头函数的结果不变 因为this是静态的 始终指向函数声明时所在的作用域下的this值

// 2.不能作为构造函数实例化对象
/* let Person = (name, age) => {
            this.name = name
            this.age = age
        } */
// let me = new Person('red', 20)//Person is not a constructor

// 3.不能使用arguments对象
let fn1 = () => {
  console.log(arguments);
}
// fn1()

// 4.箭头函数的简写
// 4.1省略小括号 当参数有且只有一个的时候 可以省略小括号
let add = a => {
  return a + a
}
console.log(add(9));
// 4.2省略花括号 当函数体只有一句 并且是return的时候 可以省略花括号并且去掉return
let pow = a => a * a
console.log(pow(9))

// 使用箭头函数的例子
const array = [4, 3, 2, 6, 77, 11, 1]
array.sort((a, b) => a - b)//数组排序中的比较函数
console.log(array);
```

## 案例
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      #ad {
        width: 200px;
        height: 200px;
        background-color: #91a;
      }
    </style>
  </head>

  <body>
    <div id="ad"></div>

    <script>
      // 案例一 点击div两秒后变为粉色
      let ad = document.querySelector('#ad')
      ad.addEventListener('click', function () {
        // 保存this的值
        // let _this = this
        // 定时器
        setTimeout(() => {
          // 这里的this有问题 不使用箭头函数this是window 使用箭头函数this则是在当前作用域下的this
          this.style.background = 'pink'
        }, 2000);
      })

      // 案例二 从数组中返回偶数元素
      const arr = [1, 6, 9, 10, 100, 25]
      /* const result = arr.filter(function (item) {
            return item % 2 === 0
        })
        console.log(result); */
      // 简化
      const result = arr.filter(item => item % 2 === 0)
      console.log(result);

      // 总结
      // 箭头函数适合与this无关的回调 定时器 数组的方法回调
      // 箭头函数不适合与this有关的回调 事件回调 对象的方法


    </script>

  </body>

</html>
```
# 函数参数的默认值
```javascript
// ES6允许给函数的参数符初始值
// 1.形参初始值 具有默认值的参数。一般位置要靠后
function add(a, b, c = 10) {
  return a + b + c
}
console.log(add(1, 2, 3));//6
console.log(add(1, 2));//13

// 2.与解构赋值结合
function connect({ host = '127.0.0.1', username, password, port = 3306 }) {
  console.log(host);
  console.log(username);
  console.log(password);
  console.log(port);
}

connect({
  // host: 'localhost',
  username: 'root',
  password: '123456',
  // port: 3306
})
```
# rest参数
```javascript
/* function date() {
            console.log(arguments);//伪数组
        } */
// date(1, 2, 3)

// rest参数
function date(...args) {
  console.log(args);
}
date(1, 2, 3)

// rest参数必须放到最后
function fn(a, b, ...args) {
  console.log(a);//1
  console.log(b);//2
  console.log(args);//[3,4,5,6]
}
fn(1, 2, 3, 4, 5, 6)
```
# 扩展运算符
```javascript
// [...]扩展运算符能将 数组 转换为逗号分割的 参数序列
// 声明一个数组 ...
const color = ['red', 'blue', 'green', 'pink']
// => 'red', 'blue', 'green', 'pink'

function fn() {
  console.log(arguments);
}
fn(...color)//相当于 fn('red', 'blue', 'green', 'pink'); 这样
```
## 应用
```javascript
// 1.数组的合并
const a_d = ['a', 'b', 'c', 'd']
const e_h = ['e', 'f', 'g', 'h']
// const a_h = a_d.concat(e_h)//es5
const a_h = [...a_d, ...e_h]//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log(a_h);

// 2.数组的克隆 如果有引用类型 拷贝的是地址 即浅拷贝
const rap = ['E', 'G', 'M']
const sing = [...rap]
console.log(sing);//['E', 'G', 'M']

// 3.将伪数组 转为真正的数组
const divs = document.querySelectorAll('div')
console.log(divs);

const divArr = [...divs]
console.log(divArr);
```
# Symbol
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1670038604566-03834b93-a196-490c-9c3b-6d0a58f70079.png#averageHue=%23f4f4f4&clientId=u7fbaa4c9-808e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=227&id=ue7f045f3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=454&originWidth=1146&originalType=binary&ratio=1&rotation=0&showTitle=false&size=191417&status=done&style=none&taskId=u25bc04ab-676f-4bb3-ab6d-2a029a9eeac&title=&width=573)
```javascript
// Symbol的值是唯一的 用来解决命名冲突的问题
// Symbol值不能与其它数据类型进行运算
// Symbol定义的对象属性不能使用 for...in 循环遍历 但是可以使用Reflect.ownKeys来获取对象的所有键名

// 1.创建一个Symbol
let s = Symbol()
console.log(s, typeof s);//Symbol() 'symbol'

let s2 = Symbol('张三')
let s3 = Symbol('张三')
console.log(s2);//Symbol(张三)
console.log(s3);//Symbol(张三)
console.log(s2 === s3);//false 因为Symbol是唯一的 虽然参数一样 但是 创建出来的唯一的编号不一样

// Symbol.for 方法
// 会根据给定的键来 从运行时的 symbol 注册表中找到对应的 symbol
// 如果找到了，则返回它，否则 新建一个与该键关联的 symbol并放入全局 symbol 注册表中

let s4 = Symbol.for('张三')
let s5 = Symbol.for('张三')
console.log(s5 === s4);//true

// 七种数据类型
// undefined
// string Symbol
// object
// null number
// boolean
```
```javascript
// 向对象中添加方法 up down 但是我们不知道这个对象中有没有这些方法
let game = {
  name: '俄罗斯方块',
  up() {
    console.log('我可以向上');
  },
  down() {
    console.log('我可以向下');
  }
}


game[Symbol('up')] = function () {
  console.log('我也可以上升');
}
game[Symbol('down')] = function () {
  console.log('我也可以下降');
}
console.log(game);


//
let games = {
  name: '王者荣耀',
  [Symbol('move')]: function () {
    console.log('我可以移动');
  },
  [Symbol('skill')]: function () {
    console.log('我可以使用技能');
  }
}
console.log(games);
```
```javascript
// Symbol.hasInstance
// 当对象 调用 instanceof 和Person比较数据类型的时候 会自动触发这个方法
class Person {
  // 当对象 调用 instanceof 和Person比较数据类型的时候 会自动触发这个方法
  static [Symbol.hasInstance](param) {
  console.log(param);
  console.log('我被用来检测类型了');
  return false
}
}

let o = {
  name: '我是o'
}
console.log(o instanceof Person);

let person = new Person()
console.log(person instanceof Person);

// Symbol.isConcatSpreadable
// 表示 该对象用于Array.prototype.concat()的时候是否可以展开
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
arr2[Symbol.isConcatSpreadable] = false//表示 该对象用于Array.prototype.concat()的时候是否可以展开
console.log(arr1.concat(arr2));//(4) [1, 2, 3, Array(3)]
console.log([...arr1, ...arr2]);//(6) [1, 2, 3, 4, 5, 6]
```
# 迭代器
Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
Iterator 的遍历过程是这样的。
（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
```javascript
// Symbol.iterator 迭代器接口
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']
// 使用for of遍历数组
/* for (let i of xiyou) {
            console.log(i);
        } */
console.log(xiyou);
let iterator = xiyou[Symbol.iterator]()
// 调用对象的next方法
console.log(iterator.next());//{value: '唐僧', done: false}
console.log(iterator.next());//{value: '孙悟空', done: false}
console.log(iterator.next());//{value: '猪八戒', done: false}
console.log(iterator.next());//{value: '沙僧', done: false}
console.log(iterator.next());//{value: undefined, done: true}
```
## 自定义迭代器遍历对象
```javascript
const myClass = {
  name: '一班',
  stus: [
    '小明',
    '小红',
    '小猪',
    '小张'
  ],
  [Symbol.iterator]: function () {
    // 索引变量
    let index = 0
    // 保存当前对象的this
    // let _this = this
    return {
      // 或者使用箭头函数 this就是在当前函数声明的作用域下的
      next: () => {
        if (index < this.stus.length) {
          const result = { value: this.stus[index], done: false }
          // 下标自增
          index++
          return result
        } else {
          // console.log(index);
          return { value: undefined, done: true }
        }
      }
    }
  }
  
}

// 遍历这个对象每次返回的结果是stus数组的成员 使用 for of
for (let i of myClass) {
  console.log(i);//myClass is not iterable 没有iterator这个接口
}

let iter = myClass[Symbol.iterator]()
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
```
# 生成器函数
```javascript
// 生成器其实是一个特殊的函数
// 异步编程 纯回调函数 node fs ajax
// 函数代码的分隔符
function* gen() {
  console.log(111);
  yield '第一块'
  console.log(222);
  yield '第二块'
  console.log(333);
  yield '第三块'
  console.log(444);
}

let iterator = gen()
// iterator.next()//111
// iterator.next()//222
// iterator.next()//333
// iterator.next()//444
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let v of gen()) {
  console.log(v);
}
```
```javascript
function* gen(arg) {
  console.log(arg);
  let one = yield 111;
  console.log(one);
  let two = yield 222;
  console.log(two);
  let three = yield 333;
  console.log(three);
}

let iterator = gen('AAA')
console.log(iterator.next());
console.log(iterator.next('BBB'));
console.log(iterator.next('CCC'));
console.log(iterator.next('DDD'));
// AAA
// { value: 111, done: false }
// BBB
// {value: 222, done: false}
// CCC
// { value: 333, done: false }
// DDD
// {value: undefined, done: true}
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1670044502069-685f0f5b-042f-4eac-8c66-a683314b571b.png#averageHue=%232a2e37&clientId=u7fbaa4c9-808e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=624&id=ue2a3483f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1248&originWidth=1172&originalType=binary&ratio=1&rotation=0&showTitle=false&size=248180&status=done&style=none&taskId=uc00695f8-7b12-4c71-9961-9cfff19cd39&title=&width=586)
```javascript
// 1s后输出111 然后 2s后输出222 然后 3s后输出333
// 回调地狱
/* setTimeout(() => {
            console.log(111);
            setTimeout(() => {
                console.log(222);
                setTimeout(() => {
                    console.log(333);

                }, 3000);
            }, 2000);
        }, 1000) */

function one() {
  setTimeout(() => {
    console.log(111);
    iterator.next()

  }, 1000);
}
function two() {
  setTimeout(() => {
    console.log(222);
    iterator.next()
  }, 2000);
}
function three() {
  setTimeout(() => {
    console.log(333);
    iterator.next()
  }, 3000);
}

function* gen() {
  yield one()
  yield two()
  yield three()
}

// 遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性的值。
// 再次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
let iterator = gen()
iterator.next()
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26314652/1670045453737-8505c0c4-168a-43c0-8ac4-a0926da8f941.png#averageHue=%23292e36&clientId=u7fbaa4c9-808e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=807&id=u2b504ac8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1614&originWidth=1750&originalType=binary&ratio=1&rotation=0&showTitle=false&size=263424&status=done&style=none&taskId=u7b9960eb-d30c-45f3-83f4-b8bd0082b6f&title=&width=875)
```javascript
function getUser() {
  setTimeout(() => {
    let data = '用户数据'
    iterator.next(data)//第二次调用next函数 并传入data数据 作为第一次yield的返回结果
  }, 1000);
}
function getOrder() {
  setTimeout(() => {
    let data = '订单数据'
    iterator.next(data)//第三次调用next函数 并传入data数据 作为第二次yield的返回结果
  }, 1000);
}
function getGoods() {
  setTimeout(() => {
    let data = '商品数据'
    iterator.next(data)//第二次调用next函数 并传入data数据 作为第一次yield的返回结果
  }, 1000);
}


function* gen() {
  let userData = yield getUser()
  console.log(userData);
  let orderData = yield getOrder()
  console.log(orderData);
  let goodsData = yield getGoods()
  console.log(goodsData);
  console.log('获取数据完毕');
}

let iterator = gen()
iterator.next()//第一次调用next函数会执行getUser函数
```
# Promise*
## Promise 的含义
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
Promise对象有以下两个特点。
（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。
有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。
Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
如果某些事件不断地反复发生，一般来说，使用 [Stream](https://nodejs.org/api/stream.html) 模式是比部署Promise更好的选择。

来源：[https://es6.ruanyifeng.com/#docs/promise](https://es6.ruanyifeng.com/#docs/promise)
## 基本语法
```javascript
// 实例化Promise对象
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // let data = '数据库中的用户数据'
    // resolve 成功
    // resolve(data)

    let err = '获取数据失败'
    // reject 失败
    reject(err)
  }, 1000);
})

p.then(function (value) {
  // 成功的回调
  console.log(value);
}, function (reason) {
  // 失败的回调
  console.error(reason);
})
```
## 使用Promise封装读取文件
```javascript
// 1.引入fs模块
const fs = require('fs')

// 2.调用方法读取文件
/* fs.readFile('./resource/木兰诗.md', (err, data) => {
    // 如果失败则抛出错误
    if (err) throw err
    // 如果没有出错 则输出内容
    console.log(data.toString());
}) */

// 使用Promise封装

const p = new Promise(function (resolve, reject) {
  fs.readFile('./resource/木兰诗.md', (err, data) => {
    // 如果读取失败 则调用reject 改变为Promise状态为onrejected
    if (err) reject(err)
    // 如果成功则调用resolve 改变为Promise状态为onfulfilled
    resolve(data)
  })
})

p.then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.log('读取失败');
})

```
## 使用Promise封装Ajax
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

    <script>

      const p = new Promise(function (resolve, reject) {
        // 1.创建对象
        const xhr = new XMLHttpRequest()

        // 2.初始化
        xhr.open('get', 'https://api.apiopen.top/api/sentences')

        // 3.发送请求
        xhr.send()

        // 4.绑定事件
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              // 请求成功
              // console.log(xhr.response);
              resolve(xhr.response)
            } else {
              // console.error(xhr.status);
              reject(xhr.status)
            }
          }
        }
      })

      p.then(function (value) {
        console.log(value);
      }, function (reason) {
        console.error(reason);
      })


    </script>

  </body>

</html>
```
## 使用Promise读取多个文件
```javascript
const fs = require('fs');

/* fs.readFile('./resource/1.md', (err, data1) => {
    fs.readFile('./resource/2.md', (err, data2) => {
        fs.readFile('./resource/3.md', (err, data3) => {
            let data = data1 + '\r\n' + data2 + '\r\n' + data3
            console.log(data.toString());
        })
    })
}) */

// 使用Promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resource/1.md', (err, data) => {
    resolve(data)
  })
})

p.then(value => {
  return new Promise((resovle, reject) => {
    fs.readFile('./resource/2.md', (err, data) => {
      resovle([value, data])
    })
  })
}).then(value => {
  return new Promise((resovle, reject) => {
    fs.readFile('./resource/3.md', (err, data) => {
      value.push(data)
      resovle(value)
    })
  })
}).then(value => {
  console.log(value.join('\r\n'));
})
```
# Set集合
```javascript
// 声明一个set
// let s = new Set();
let s = new Set([1, 2, 3, 4, 5, 1])
console.log(s);//Set(5) {1, 2, 3, 4, 5}

// 元素个数
console.log(s.size);
// 添加元素
s.add('6')
console.log(s);
// 删除元素
s.delete(1)
console.log(s);
// 检测
console.log(s.has('6'));
// 清空
// s.clear()
console.log(s);

// for of 遍历
for (let v of s) {
  console.log(v);
}
```
```javascript
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
let arr2 = [4, 5, 6, 5, 6]
// 1.数组去重
let result = [...new Set(arr)]
console.log(result);
// 2.交集
let result2 = [...new Set(arr)].filter(item => new Set(arr2).has(item))
console.log(result2);
// 3.并集
let union = [...new Set([...arr, ...arr2])]
console.log(union);
// 4.差集
let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
console.log(diff);
```
# Map集合
```javascript
// 声明Map
let map = new Map()
// 添加元素
map.set('name', 'red')
map.set('show', function () {
  console.log('ishow');
})
let key = {
  school: 'AHSTU'
}
map.set(key, ['北京', '上海', '广州'])
// 长度
console.log(map.size);
console.log(map);
// 删除
map.delete('name')
console.log(map);
// 获取
console.log(map.get('show'));
// 清空
// map.clear()
console.log(map);

// for of
for (let v of map) {
  console.log(v);
}
```
