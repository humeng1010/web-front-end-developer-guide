## 初识Vue
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672740693202-ba48cbfe-d0fc-4dee-a674-5c956139aa6d.png#averageHue=%23fefefd&clientId=u040b3ad3-7607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=257&id=u8f5bb8e0&name=image.png&originHeight=514&originWidth=1734&originalType=binary&ratio=1&rotation=0&showTitle=false&size=144359&status=done&style=none&taskId=u5a66623f-583c-4708-a1d6-422e2cf3ba3&title=&width=867)

1. 首先引入vue.js
2. 创建容器
```html
<div id="root">
  <h1>Hello,{{name}}</h1>
</div>
```

3. 创建Vue实例
```html
<script>
  // 关闭生产提示
  Vue.config.productionTip = false
  // 创建Vue实例
  new Vue({
    el: '#root',//el用户指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
    data: { //data中用于存储数据，数据供el所指定的的容器使用，值暂时先写成对象
      name: 'VVVVue'
    }
  })
</script>
```
## Vue模板语法

1. 插值语法：`{{xxx}}`
2. 指令语法：`v-bind:href`、`v-bind:src`... 简写形式 `:href`、`:src`
## 数据绑定

- 数据绑定有单向数据绑定和双向数据绑定
```html
<div id="root">
  <!-- 普通写法 -->
  单向数据绑定：<input type="text" v-bind:value="school.name">
  <br>
  双向数据绑定：<input type="text" v-model:value="school.name">
  <br>
  <!-- 简写 -->
  单向数据绑定：<input type="text" :value="school.name">
  <br>
  双向数据绑定：<input type="text" v-model="school.name">
  <br>
</div>

<script>
  Vue.config.productionTip = false
  new Vue({
    el: '#root',
    data() {
      return {
        school: {
          name: '尚硅谷'
        }
      }
    },
  })
</script>
```
> 使用v-bind可以把数据从data中单向流到页面中展示；
> 使用v-model可以双向的获取数据并展示数据到页面

## el与data的两种写法

- el可以写为配置项的形式
```html
<script>
  new Vue({
    el: '#root',
  })
</script>
```

- el也可以写为下面形式
```html
<script>
  const vm = new Vue({
    // ...
  })
  vm.$mount('#root')// 第二种写法
</script>
```

- data可以写成对象写法和函数写法，推荐使用函数的写法返回对象
## MVVM模型
MVVM模型：
    1.M 模型 ：data中的数据
    2.V 视图 ：模板代码
    3.VM 视图模型 ：Vue实例
观察发现：
    1.data中的所有属性最终都出现在了vm身上
    2. vm身上所有属性和Vue原型身上的所有属性 在vue模板中都可以使用
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672741452322-3b80e319-7c41-45cb-a22c-632c63ca053e.png#averageHue=%232a2f37&clientId=u040b3ad3-7607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=533&id=u117cc0f2&name=image.png&originHeight=1066&originWidth=1008&originalType=binary&ratio=1&rotation=0&showTitle=false&size=131592&status=done&style=none&taskId=ub5da4a4c-62e7-43fe-bc4f-3d11ce3687f&title=&width=504)
## 数据代理
### 回顾Object.defineProperty方法
```html
<script>
  let number = 18
  let person = {
    name: '张三',
    sex: '男'
  }
  Object.defineProperty(person, 'age', {
    get() {
      // 当有人读取person的age属性的时候，getter就会被调用
      console.log('有人读取age属性了')
      return number
    },
    set(value) {
      // 当有人修改person的age属性的时候，setter就会调用，且会受到具体的值
      console.log('有人修改了age属性，且值是', value)
      number = value
    }

  })
  /* Object.defineProperty(person, 'age', {
            value: 18,
            enumerable: true, // 控制属性是否可以枚举 默认值 false
            writable: true, // 控制属性是否可以被修改 默认值 false
            configurable: true, // 控制属性是否可以被删除 默认值 false
        }) */
  console.log(person)
</script>
```
> 该方法可以给一个对象添加属性，并且拥有该属性的权限控制，并且第三参数配置项中可以配置getter和setter函数，并且当有人读取该参数的时候就会调用get该方法，有人修改该参数的时候就会调用set该方法并接收到修改的值。
> 即上面的代码可以让person中的age属性代理number变量，age改变number也会改变，获取age也就是获取number，这就是数据代理

### Vue中的数据代理
> 创建Vue实例对象的时候传入的data配置项，Vue会经过数据劫持监视数据的改变并绑定到Vue的实例对象的
> `_data`上，并且会再把`_data`进行数据代理绑定对应的数据到Vue实例身上，方便程序员在模板上的使用。
> 所以数据代理就是`_data`中的数据到Vue实例身上数据的过程

```html
<div id="root">
  <h2>学校名称：{{name}}</h2>
  <h2>学校地址：{{address}}</h2>
</div>


<script>
  Vue.config.productionTip = false


  const vm = new Vue({
    el: '#root',
    data() {
      // 在这个地方写的data会被Vue中的_data = data()并且做了数据劫持，之后又通过数据代理把_data中的数据添加到vm实例身上，方便程序员使用
      return {
        name: '尚硅谷',
        address: '北京',
      }
    },
  })
</script>
```

## 事件处理
### 基本使用

1. 给需要绑定(点击)事件的标签添加`v-on:click="demo"`属性，当该元素被点击的时候就会执行后面的js表达式调用demo函数，或者使用指令的简写方式`@click`进行事件绑定。
2. 在调用事件的回调函数的时候，默认回调函数中可以接收到event事件对象，当然也可以手动传递参数，当我们需要参数和event同时都要的时候，就需要使用`$event`关键字进行传递再传递其他参数，并且按照顺序接收即可
```html
<button @click="showInfo1">点我提示信息(不传递参数)</button>
<button @click="showInfo2(66,$event)">点我提示信息(传递参数)</button>
<script>
  const vm = new Vue({
    el: '#root',
    data(){
      return {
        name:'vue'
      }
    },
    methods: {
      showInfo1(event) {
        console.log(this)//此处的this是vm
        alert(this.name)
      },
      showInfo2(number, event) {
        console.log(number, event)
        alert(number)
      }
    },
  })
</script>
```
### 事件修饰符
Vue中的事件修饰符：
    1.prevent:阻止默认事件(常用)
    2.stop:阻止事件冒泡(常用)
    3.once:事件只触发一次(常用)
    4.capture:使用事件的捕获模式
    5.self:只有event.target是当前操作元素的时候才触发事件
    6.passive:事件的默认行为立即执行，无需等待事件回调执行完毕
### 键盘事件
1.Vue中常用的按键别名
    回车=>enter
    删除=>delete
    退出=>esc
    空格=>space
    换行=>Tab
    上=>up
    下=>down
    左=>left
    右=>right
```html
<div id="root">
  <h2>欢迎来到{{name}}学习</h2>
  <input type="text" placeholder="按下回车提示输入" @keyup.enter="showInfo">
</div>


<script>
  new Vue({
    el: '#root',
    data() {
      return {
        name: '尚硅谷'
      }
    },
    methods: {
      showInfo(e) {
        console.log(e.target.value)
      }
    },
  })
</script>
```
## 计算属性computed
> 因为Vue建议在插值语法中的表达式尽量精简，推荐可以直接使用vm实例身上的data属性，而不是自己再次对属性进行操作，所以推出了计算属性，顾名思义对属性(data)进行计算后得到新属性称为computed

下面是一个计算属性实现的根据性和名计算全名的效果
```html
<div id="root">
  姓: <input type="text" v-model="firstName">
  <br>
  名: <input type="text" v-model="lastName">
  <br>
  全名：<span>{{fullName}}</span>
</div>

<script>
  Vue.config.productionTip = false
  const vm = new Vue({
    el: '#root',
    data() {
      return {
        firstName: '张',
        lastName: '三'
      }
    },
    computed: {
      fullName: {
        // 当有人读取fullName的时候，get就会被调用，且返回值就会作为fullName的值
        // get什么时候调用？
        //  1.初次读取fullName的时候 2.所依赖的数据发生变化时
        get() {
          return this.firstName + '-' + this.lastName
        },
        // set什么时候调用？
        //  当fullName被修改时
        set(value) {
          console.log('set', value)
          const name = value.split('-')
          this.firstName = name[0]
          this.lastName = name[1]
        }
      }
    }
  })
  console.log(vm)
</script>
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672747604212-544143d6-9407-4748-ad6b-f320c381044a.png#averageHue=%23f8f8f7&clientId=u040b3ad3-7607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=108&id=u2a13af65&name=image.png&originHeight=216&originWidth=616&originalType=binary&ratio=1&rotation=0&showTitle=false&size=19218&status=done&style=none&taskId=u02c1f4c0-e679-4cad-a453-e7f51870203&title=&width=308)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672747640638-2064467f-660e-4528-a094-76714c26524d.png#averageHue=%2326292e&clientId=u040b3ad3-7607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=236&id=ue82c1ece&name=image.png&originHeight=472&originWidth=852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=136270&status=done&style=none&taskId=u8191eb35-6689-4b27-a35f-293329b4a94&title=&width=426)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672747653977-cb459528-74b5-410f-8df2-9e8eb5517802.png#averageHue=%230c1117&clientId=u040b3ad3-7607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=132&id=u314b4bff&name=image.png&originHeight=264&originWidth=570&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17492&status=done&style=none&taskId=u4341b32d-5fa3-46ca-aef7-04dab752f5f&title=&width=285)
> 计算属性还可以进行简写，前提是该计算属性不需要修改的时候，即只有getter

```html
<div id="root">
  姓: <input type="text" v-model="firstName">
  <br>
  名: <input type="text" v-model="lastName">
  <br>
  全名：<span>{{fullName}}</span>
</div>


<script>
  Vue.config.productionTip = false
  const vm = new Vue({
    el: '#root',
    data() {
      return {
        firstName: '张',
        lastName: '三'
      }
    },
    computed: {
      /* fullName: {
                    get() {
                        return this.firstName + '-' + this.lastName
                    },
                } */
      // 简写 不需要修改的时候，只有get
      fullName() {
        console.log('get被调用了')
        return this.firstName + '-' + this.lastName
      }
    }
  })
</script>
```
> 计算属性相对于方法的好处：计算属性拥有缓存技术，在页面上多次展示只会被调用一次，效率高。
> 计算属性的getter什么时候被调用：1.初次读取的时候 2.当所依赖的数据发生变化的时候


## 侦听属性
### 基本用法
> 侦听属性的变化，当该属性发生变化的时候会自动调用hanlder方法

```html
<div id="root">
  <h2>今天天气很{{info}}</h2>
  <button @click="changeWeather">切换</button>
</div>


<script>
  Vue.config.productionTip = false
  const vm = new Vue({
    el: '#root',
    data() {
      return {
        isHot: true
      }
    },
    watch: {
      /* isHot: {
				// 初始化时让handler立即执行一下
				immediate: true,
				// handler什么时候调用？当isHot函数发生改变时
				handler(newValue, oldValue) {
					console.log('isHot被修改了', newValue, oldValue)
				}
			} */
    },
    methods: {
      changeWeather() {
        this.isHot = !this.isHot
      }
    },
    computed: {
      info() {
        return this.isHot ? '炎热' : '凉爽'
      }
    }
  })
  // 后续添加监测
  vm.$watch('isHot', {
    immediate: true,
    handler(newValue, oldValue) {
      console.log('isHot被修改了', newValue, oldValue)
    }
  })
</script>
```
> 并且侦听属性有两种注册方式，如上代码：使用配置项或者使用实例调用$watch方法

### 深度监视
> 当侦听的属性是一个多级的对象结构或者数组的时候，Vue为了保证效率并没有默认开启深度监视，没有开启深度监视会只监视该对象的地址是否改变而不会监测对象的内容是否改变；只需要添加一个`deep:true`配置项即可开启深度监视。

```html
<div id="root">
  <h2>今天天气很{{info}}</h2>
  <button @click="changeWeather">切换</button>
  <hr>
  <h3>a的值是：{{numbers.a}}</h3>
  <button @click="numbers.a++">点我让a+1</button>
  <hr>
  <h3>b的值是：{{numbers.b}}</h3>
  <button @click="numbers.b++">点我让b+1</button>
</div>


<script>
  Vue.config.productionTip = false
  const vm = new Vue({
    el: '#root',
    data() {
      return {
        isHot: true,
        numbers: {
          a: 1,
          b: 1
        }
      }
    },
    watch: {
      isHot: {
        // 初始化时让handler立即执行一下
        immediate: true,
        // handler什么时候调用？当isHot函数发生改变时
        handler(newValue, oldValue) {
          console.log('isHot被修改了', newValue, oldValue)
        }
      },
      // 监视多级结构中某个属性的变化
      'numbers.a': {
        handler() {
          console.log('a被修改了')
        }
      },
      // 监视整个numbers中所有的属性
      numbers: {
        // 开启深度监视
        deep: true,
        handler() {
          console.log('numbers改变了')
        }
      }
    },
    methods: {
      changeWeather() {
        this.isHot = !this.isHot
      }
    },
    computed: {
      info() {
        return this.isHot ? '炎热' : '凉爽'
      }
    }
  })


</script>
```
> 简写形式

```javascript
const vm = new Vue({
  el: '#root',
  data() {
    return {
      isHot: true,
    }
  },
  watch: {
    // 简写形式,当我们不需要immediate和deep
    isHot(newValue, oldValue) {
      console.log('isHot被修改了', newValue, oldValue)
    }
  },
})
```
## 绑定样式
> 通过Vue可以动态对样式进行绑定，`:class="xxx"`，xxx可以是字符串，数组，对象；
> 字符串写法，适用于：样式的类名不确定需要动态指定
> 数组写法，适用于：绑定的样式个数不确定，名字也不确定
> 对象写法，适用于：样式的个数和类名确定，但是要动态决定使用

```vue
<template>
  <div id="root">
    <!-- 绑定class样式：字符串写法，适用于：样式的类名不确定需要动态指定 -->
    <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
    <!-- 绑定class样式：数组写法，适用于：绑定的样式个数不确定，名字也不确定 -->
    <div class="basic" :class="classArr">{{name}}</div>
    <!-- 绑定class样式：对象写法，适用于：样式的个数和类名确定，但是要动态决定使用 -->
    <div class="basic" :class="classObj">{{name}}</div>
    <!-- 绑定style样式：对象写法 -->
    <div class="basic" :style="styleObj">{{name}}</div>
  </div>
</template>
<script>
  new Vue({
    el: '#root',
    data() {
      return {
        name: 'Vue',
        mood: 'normal',
        classArr: ['it1', 'it2', 'it3'],
        classObj: {
          it1: true,
          it2: true,
          it3: true
        },
        styleObj: { fontSize: '40px' }
      }
    },
    methods: {
      changeMood() {
        const arr = ['happy', 'sad', 'normal']
        const index = Math.floor(Math.random() * 3)
        this.mood = arr[index]
      }
    },
  })
</script>

<style>
  .basic {
    width: 400px;
    height: 200px;
    border: 1px solid #000;
  }

  .normal {
    background-color: skyblue;
  }

  .happy {
    background-color: pink;
  }

  .sad {
    background-color: green;
  }

  .it1 {
    font-size: 20px;
  }

  .it2 {
    border: 10px solid orange;
  }

  .it3 {
    border-radius: 10px;
  }
</style>
```
## 条件渲染v-show,v-if
> 通过指令v-show操作元素显示或隐藏的原理是控制元素的display是none或者block进行的。适用于频繁需要进行显示隐藏的元素

> 通过指令v-if操作元素显示或隐藏是通过是否对节点渲染到页面上进行的。适用于不需要进行频繁展示的元素。

```html
<div id="root">
  <h2>当前n的值为:{{n}}</h2>
  <button @click="n++">点我加1</button>
  <!-- 使用v-show做条件渲染 -->
  <!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
  <!-- <h2 v-show="1===3">欢迎来到{{name}}</h2> -->


  <!-- 使用v-if做条件渲染 -->
  <!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
  <!-- <h2 v-if="1===3">欢迎来到{{name}}</h2> -->


  <!-- v-else和v-else-if -->
  <!-- <div v-if="n===1">Angular</div>
  <div v-else-if="n===2">React</div>
  <div v-else-if="n===3">Vue</div>
  <div v-else>hh</div> -->


  <!-- v-if与template配合使用 -->
  <template v-if="n===1">
    <h2>你好</h2>
    <h2>南京</h2>
  </template>
</div>

<script>
  new Vue({
    el: '#root',
    data() {
      return {
        n: 0,
        name: '尚硅谷'
      }
    },
  })
</script>
```

## 列表渲染
> v-for的使用进行列表渲染
> v-for="(person,index) in persons"

```html
<div id="root">
  <ul>
    <li v-for="person in persons" :key="person.id">
      {{person.name}}-{{person.age}}
    </li>
  </ul>
</div>

<script>
  new Vue({
    el: '#root',
    data() {
      return {
        persons: [
          { id: '001', name: '张三', age: 20 },
          { id: '002', name: '李四', age: 21 },
          { id: '003', name: '王五', age: 22 },
        ]
      }
    },
  })
</script>
```
## key的原理
面试题：react、vue中的key有什么作用？（key的内部原理）
		
1. 虚拟DOM中key的作用：
key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
						
2.对比规则：
(1).旧虚拟DOM中找到了与新虚拟DOM相同的key：
①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
(2).旧虚拟DOM中未找到与新虚拟DOM相同的key创建新的真实DOM，随后渲染到到页面。
								
3. 用index作为key可能会引发的问题：
1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
2. 如果结构中还包含输入类的DOM：
会产生错误DOM更新 ==> 界面有问题。

4. 开发中如何选择key?:
1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
## Vue监测数据改变的原理
> 对象

```html
<div id="root">
  <h2>学校名称:{{name}}</h2>
  <h2>学校地址:{{address}}</h2>
</div>


<script>
  const vm = new Vue({
    el: '#root',
    data() {
      return {
        name: "尚硅谷",
        address: "北京",
        student: {
          name: 'tom',
          age: {
            rAge: 29,
            sAge: 18
          },
          friends: [
            { name: 'jarry', age: 35 },
            { name: 'tonny', age: 39 },
          ]
        }
      }
    },
  })
</script>
```
> 模拟一个数据监测

```html
<script>
  let data = {
    name: '尚硅谷',
    address: '北京',
    a: {
      b: 1
    }
  }
  const obs = new Observer(data)
  console.log(obs)


  let vm = {}
  vm._data = data = obs


  function Observer(obj) {
    const keys = Object.keys(obj)
    keys.forEach(k => {
      Object.defineProperty(this, k, {
        get() {
          return obj[k]
        },
        set(val) {
          console.log(`${k}被修改了，我要去解析模板，生成虚拟DOM进行diff比较...`)
          obj[k] = val
        }
      })
    })
  }
</script>
```
> Vue.set()的使用：添加一个响应式的数据

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如this.myObject.newProperty = 'hi')
注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。

> 数组,数组通过下标直接修改不是响应式的，因为数组中的每一个元素不具有响应式的getter和setter，而可以通过Vue进行包装过的会改变数组的api对数组进行修改从而引起响应式的变化，或者使用Vue.set()或者vm.$set()方法修改数组

```html
<div id="root">
  <h1>学生信息</h1>
  <button @click="student.age++">年龄+1岁</button>
  <button @click="addGender">添加性别属性，默认男</button>
  <button @click="addFriend">在列表首位添加一位朋友</button>
  <button @click="updateName">修改第一位朋友的名字为张三</button>
  <button @click="addHobby">添加一个爱好</button>
  <button @click="updateHobby">修改第一个爱好为开车</button>

  <h2>学生姓名:{{student.name}}</h2>
  <h2>学生年龄:{{student.age}}</h2>
  <h2 v-if="student.gender">学生性别:{{student.gender}}</h2>
  <h2>爱好</h2>
  <ul>
    <li v-for="(h,index) in student.hobby" :key="index">
      {{h}}
    </li>
  </ul>
  <h2>朋友们</h2>
  <ul>
    <li v-for="(f,index) in student.friends">
      {{f.name}}--{{f.age}}
    </li>
  </ul>

</div>

<script>
  const vm = new Vue({
    el: '#root',
    data() {
      return {
        student: {
          name: 'tom',
          age: 18,
          hobby: ['抽烟', '喝酒', '烫头'],
          friends: [
            { name: 'jarry', age: 35 },
            { name: 'tony', age: 39 },
          ]
        }
      }
    },
    methods: {
      addGender() {
        this.$set(this.student, 'gender', '男')
      },
      addFriend() {
        this.student.friends.unshift({ name: '李四', age: 22 })
      },
      updateName() {
        this.student.friends[0].name = '张三'
      },
      addHobby() {
        this.student.hobby.push('学习')
      },
      updateHobby() {
        this.student.hobby.splice(0, 1, '开车')
        // this.$set(this.student.hobby, 0, '开车')
      }
    },

  })
</script>
```
## 收集表单数据
```html
<!-- 
v-model的三个修饰符
1. lazy：失去焦点再收集数据
2. number： 输入的字符串转为有效数字
3. trim： 去除输入的首位空格
-->
<div id="root">
  <form @submit.prevent="demo">
    <label for="account">账户：</label>
    <input type="text" id="account" v-model.trim="userInfo.account">
    <br>
    密码： <input type="password" v-model="userInfo.password">
    <br>
    年龄：<input type="number" v-model.number="userInfo.age">
    <br>
    性别：
    <input type="radio" name="gender" v-model="userInfo.gender" value="male">男
    <input type="radio" name="gender" v-model="userInfo.gender" value="female">女
    <br>
    爱好：
    学习<input type="checkbox" v-model="userInfo.hobby" value="study">
    打游戏<input type="checkbox" v-model="userInfo.hobby" value="play">
    吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
    <br>
    所属校区：
    <select v-model="userInfo.city">
      <option value="">请选择</option>
      <option value="beijing">北京</option>
      <option value="shanghai">上海</option>
      <option value="nanjing">南京</option>
    </select>
    <br>
    其他信息：
    <textarea v-model.lazy="userInfo.other"></textarea>
    <br>
    <input type="checkbox" v-model="userInfo.agree">
    阅读并接受<a href="http://www.baidu.com">《用户协议》</a>
    <button>提交</button>
  </form>
</div>


<script>
  new Vue({
    el: '#root',
    data() {
      return {
        userInfo: {
          account: '',
          password: '',
          age: 18,
          gender: 'male',
          hobby: [],
          city: 'nanjing',
          other: '',
          agree: true
        },
      }
    },
    methods: {
      demo() {
        console.log(JSON.stringify(this.userInfo))
      }
    },
  })
</script>
```
> v-model的三个修饰符
> 1. lazy：失去焦点再收集数据
> 2. number： 输入的字符串转为有效数字
> 3. trim： 去除输入的首位空格

## 过滤器
> 通过管道符使用某个定义好的过滤器(filter),过滤器函数可以接收一个默认参数：上一个表达式的值

```html
<div id="root">
  <h2>显示格式化后的时间</h2>
  <h3>现在是:{{time}}</h3>
  <h3>计算属性格式化:{{fmtTime}}</h3>
  <h3>methods格式化:{{getFmtTime()}}</h3>
  <h3>过滤器实现:{{time | timeFormater}}</h3>
  <!-- 传参 -->
  <h3>过滤器实现:{{time | timeFormater('YYYY-MM-DD')}}</h3>
  <!-- 多个过滤器传参 -->
  <h3>过滤器实现:{{time | timeFormater('YYYY-MM-DD') | mySlice}}</h3>
</div>
<script>
  Vue.filter('mySlice', function (value) {
    return value.slice(0, 4)
  })
  new Vue({
    el: '#root',
    data() {
      return {
        time: Date.now()
      }
    },
    computed: {
      fmtTime() {
        return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    methods: {
      getFmtTime() {
        return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    // 局部过滤器
    filters: {
      timeFormater(val, str = 'YYYY-MM-DD HH:mm:ss') {
        return dayjs(val).format(str)
      },
      mySlice(val) {
        return val.slice(0, 4)
      }
    }
  })
</script>
```
## 内置指令
### v-text
> 向其所在的节点中渲染文本内容，且不会解析html标签，并且替换掉原本的内容

### v-html
> 与v-text相似，区别是可以解析html标签，但是会有安全性的问题

### v-cloak
> v-cloak指令可以解决当用户网速慢的时候，防止未经Vue解析的模板显示在页面上,vue实例创建完毕并接管容器的时候，会删掉该属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      /* 含有这个属性的标签都隐藏，当经过Vue解析后会自动去掉该属性 */
      [v-cloak] {
        display: none;
      }
    </style>
  </head>


  <body>
    <div id="root">
      <h2 v-cloak>{{name}}</h2>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      setTimeout(() => {
        new Vue({
          el: '#root',
          data() {
            return {
              name: '尚硅谷'
            }
          },
        })
      }, 3000);
    </script>
  </body>


</html>
```
### v-once
> v-once所在的节点在初次动态渲染后，就视为静态的了

```html
<div id="root">
  <h2 v-once>初始化的n值是：{{n}}</h2>
  <h2>当前的n值是：{{n}}</h2>
  <button @click="n++">点我n+1</button>
</div>

<script>
  new Vue({
    el: '#root',
    data() {
      return {
        n: 1
      }
    },
  })
</script>
```
### v-pre
> v-pre:
> 1. 跳过所在的节点的编译过程
> 2. 他可以跳过当前的节点，可以给没有使用指令语法和插值语法的节点使用，加快编译

```html
<div id="root">
  <!-- 不需要读取动态数据 -->
  <h2 v-pre>Vue</h2>
  <h2>当前的n值是：{{n}}</h2>
  <button @click="n++">点我n+1</button>
</div>


<script>
  new Vue({
    el: '#root',
    data() {
      return {
        n: 1
      }
    },
  })
</script>
```
## 自定义指令
> 1. 在创建Vue实例的配置项中使用`directives`属性进行配置自定义指令，自定义指令有两种写法，简写(函数式写法)和对象式写法(完整写法)。
>    1. 函数式写法，在函数中可以接收到两个参数，分别是element和binding，之后可以进行DOM操作完成需要的操作
>    2. 例如自定义一个 v-big的指令，和v-text类似，但是会把绑定的数值放大10倍

```javascript
new Vue({
  el: '#root',
  data() {
    return {
      n: 1
    }
  },
  // 局部自定义指令
  directives: {
    // big函数什么时候调用？
    // 1. 指令与元素成功绑定的时候
    // 2. 指令所在的模板被重新解析的时候
    big(element, binding) {
      console.log(this)//注意此处的this是window
      element.innerText = binding.value * 10
    },

  }
})
```
> big函数会在指令与元素绑定的时候和指令所在的模板被重新解析的时候调用

> 完整的对象写法，并且使用全局指令

```javascript
// 全局指令
Vue.directive('fbind', {
  // 当指令与元素成功绑定时,已经绑定好了，还未放入页面
  bind(element, binding) {
    // console.log('bind')
    element.value = binding.value
  },
  // 指令所在的元素被插入页面时
  inserted(element, binding) {
    // console.log('inserted')
    element.focus()
  },
  // 指令所在的模板被重新解析时
  update(element, binding) {
    // console.log('update')
    element.value = binding.value
  }
})
```
## 生命周期
![生命周期.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672759606013-f62d4326-2885-45d1-8c5e-f57684fd50f7.png#averageHue=%23fbf9f8&clientId=ube3ba9dd-942e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=946&id=u9a243df8&name=%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png&originHeight=1892&originWidth=1469&originalType=binary&ratio=1&rotation=0&showTitle=false&size=373744&status=done&style=none&taskId=u5a04cd50-7669-487f-8939-c587d3c0892&title=&width=734.5)

生命周期：
1. 又名：生命周期回调函数，生命周期函数，生命周期钩子
2. 是什么：Vue在关键时刻为我们调用的一些特殊名称的函数
3. 生命周期名称不可更改，但函数具体内容是程序员根据需求可以进行编写的
4. 生命周期函数的this指向的是vm或者组件实例对象

常用的生命周期钩子：
1. mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等
2. beforeDestroy： 清除定时器、解绑自定义事件、取消订阅等
## 组件
### 非单文件组件
> 传统方式编写用于

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672763260029-8d198dfb-bf58-455d-baa7-2ef4e6c47ea7.png#averageHue=%235c5647&clientId=ube3ba9dd-942e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=643&id=uc6fd3e45&name=image.png&originHeight=1286&originWidth=2320&originalType=binary&ratio=1&rotation=0&showTitle=false&size=786277&status=done&style=none&taskId=ub70f20d5-31b3-4264-acbd-97c5083d060&title=&width=1160)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672763380241-a648ac53-4cbd-46d0-a79f-22a9aa623816.png#averageHue=%23ddd82f&clientId=ube3ba9dd-942e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=661&id=uf3e63875&name=image.png&originHeight=1322&originWidth=2262&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1095830&status=done&style=none&taskId=uebfaa66a-00d4-4a65-9c98-8cb06e99bdc&title=&width=1131)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672763471024-623bec0f-b40b-44da-a80a-fc4db11ffeb3.png#averageHue=%23c2c1c1&clientId=ube3ba9dd-942e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=539&id=ub6eaec45&name=image.png&originHeight=1078&originWidth=2116&originalType=binary&ratio=1&rotation=0&showTitle=false&size=364747&status=done&style=none&taskId=ufd98f015-bd0d-473f-a813-edc1fb53910&title=&width=1058)
### VueComponent
关于VueComponent：
    1. school组件的本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的
    2. 我们只需要写<school></school>,Vue解析的时候会帮我们创建school组件的实例对象
        即Vue帮我们执行的：new VueComponent(options)
    3. 特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent!!!
    4. 关于this的指向：
        1. 组件配置中：
            data函数，methods中的函数，watch中的函数，computed中的函数 他们的this均是		 		  【VueComponent实例对象】
        2. new Vue(options)配置中：
            data函数，methods中的函数，watch中的函数，computed中的函数 他们的this均是【Vue实例对象】
    5. VueComponent的实例对象，以后简称vc(也可以称为：组件实例对象)
        Vue的实例对象，以后简称vm
### VueComponent的原型对象的隐式原型对象指向Vue的原型对象
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672811200672-d677899f-78b4-47be-9ede-2383089a6cb2.png#averageHue=%2355514b&clientId=ube3ba9dd-942e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=705&id=u41f15867&name=image.png&originHeight=1410&originWidth=2314&originalType=binary&ratio=1&rotation=0&showTitle=false&size=932908&status=done&style=none&taskId=ubce004dc-085e-4547-b51b-21ae4ca2c67&title=&width=1157)
> 为了使组件实例对象能够访问到Vue原型对象上的方法和属性

### 单文件组件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672812899847-71728450-3f2e-4cd9-bd66-d45a3e5b8827.png#averageHue=%2325282f&clientId=ube3ba9dd-942e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=114&id=uab71e833&name=image.png&originHeight=228&originWidth=406&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16220&status=done&style=none&taskId=ua60c9e9b-9b5b-4190-ab2a-4f4dd9ec63d&title=&width=203)
```vue
<template>
  <div>
    <School />
    <Student />
  </div>
</template>


<script>
  // 引入组件
  import School from "./School.vue";
  import Student from "./Student.vue";
  export default {
    name: "App",
    //   注册组件
    components: {
      School,
      Student,
    },
  };
</script>
```
## 脚手架文件结构

```
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

## 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别： 
   1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
   2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：[https://cli.vuejs.org/zh](https://cli.vuejs.org/zh)

## ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式： 
   1. 打标识：`<h1 ref="xxx">.....</h1>` 或 `<School ref="xxx"></School>`
   2. 获取：`this.$refs.xxx`

## props配置项

1.  功能：让组件接收外部传过来的数据 
2.  传递数据：`<Demo name="xxx"/>` 
3.  接收数据： 
   1.  第一种方式（只接收）：`props:['name']` 
   2.  第二种方式（限制类型）：`props:{name:String}` 
   3.  第三种方式（限制类型、限制必要性、指定默认值）： 
```javascript
props:{
	name:{
	type:String, //类型
	required:true, //必要性
	default:'老王' //默认值
	}
}
```
 
> 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。


## mixin(混入)

1.  功能：可以把多个组件共用的配置提取成一个混入对象 
2.  使用方式：
第一步定义混合： 
```
{
    data(){....},
    methods:{....}
    ....
}
```

第二步使用混入：
	全局混入：`Vue.mixin(xxx)`
	局部混入：`mixins:['xxx']` 

## 插件

1.  功能：用于增强Vue 
2.  本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。 
3.  定义插件： 
```javascript
对象.install = function (Vue, options) {
    // 1. 添加全局过滤器
    Vue.filter(....)

    // 2. 添加全局指令
    Vue.directive(....)

    // 3. 配置全局混入(合)
    Vue.mixin(....)

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {...}
    Vue.prototype.$myProperty = xxxx
}
```
 

4.  使用插件：`Vue.use()` 

## scoped样式

1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`

## 总结TodoList案例

1.  组件化编码流程：
	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
			1).一个组件在用：放在组件自身即可。
			2). 一些组件在用：放在他们共同的父组件上（状态提升）。
	(3).实现交互：从绑定事件开始。 
2.  props适用于：
	(1).父组件 ==> 子组件 通信
	(2).子组件 ==> 父组件 通信（要求父先给子一个函数） 
3.  使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！ 
4.  props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。 

## webStorage

1.  存储内容大小一般支持5MB左右（不同浏览器可能还不一样） 
2.  浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。 
3.  相关API： 
   1.  `xxxxxStorage.setItem('key', 'value');`
该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。 
   2.  `xxxxxStorage.getItem('person');`
		该方法接受一个键名作为参数，返回键名对应的值。 
   3.  `xxxxxStorage.removeItem('key');`
		该方法接受一个键名作为参数，并把该键名从存储中删除。 
   4.  `xxxxxStorage.clear()`
		该方法会清空存储中的所有数据。 
4.  备注： 
   1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
   2. LocalStorage存储的内容，需要手动清除才会消失。
   3. `xxxxxStorage.getItem(xxx)`如果xxx对应的value获取不到，那么getItem的返回值是null。
   4. `JSON.parse(null)`的结果依然是null。

## 组件的自定义事件

1.  一种组件间通信的方式，适用于：**子组件 ===> 父组件** 
2.  使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。 
3.  绑定自定义事件： 
   1.  第一种方式，在父组件中：`<Demo @atguigu="test"/>`  或 `<Demo v-on:atguigu="test"/>` 
   2.  第二种方式，在父组件中： 
```javascript
<Demo ref="demo"/>
......
mounted(){
   this.$refs.xxx.$on('atguigu',this.test)
}
```
 

   3.  若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。 
4.  触发自定义事件：`this.$emit('atguigu',数据)` 
5.  解绑自定义事件`this.$off('atguigu')` 
6.  组件上也可以绑定原生DOM事件，需要使用`native`修饰符。 
7.  注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！ 

## 全局事件总线（GlobalEventBus）

1.  一种组件间通信的方式，适用于任意组件间通信。 
2.  安装全局事件总线： 
```javascript
new Vue({
	......
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
    ......
})
```
 

3.  使用事件总线： 
   1.  接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。 
```javascript
methods(){
  demo(data){......}
}
......
mounted() {
  this.$bus.$on('xxxx',this.demo)
}
```
 

   2.  提供数据：`this.$bus.$emit('xxxx',数据)` 
4.  最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。 

## 消息订阅与发布（pubsub）

1.  一种组件间通信的方式，适用于任意组件间通信。 
2.  使用步骤： 
   1.  安装pubsub：`npm i pubsub-js` 
   2.  引入: `import pubsub from 'pubsub-js'` 
   3.  接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。 
```javascript
methods(){
  demo(data){......}
}
......
mounted() {
  this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
}
```
 

   4.  提供数据：`pubsub.publish('xxx',数据)` 
   5.  最好在beforeDestroy钩子中，用`PubSub.unsubscribe(pid)`去取消订阅。 
   6.  在Vue2中推荐使用全局事件总线 

## nextTick

1. 语法：`this.$nextTick(回调函数)`
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue封装的过度与动画

1.  作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。 
2.  图示：
![](https://raw.githubusercontent.com/redyouzi/images-for-blog/main/img02/202207191305370.png#crop=0&crop=0&crop=1&crop=1&id=RWXhn&originHeight=600&originWidth=1200&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) 
3.  写法： 
   1.  准备好样式： 
      - 元素进入的样式： 
         1. v-enter：进入的起点
         2. v-enter-active：进入过程中
         3. v-enter-to：进入的终点
      - 元素离开的样式： 
         1. v-leave：离开的起点
         2. v-leave-active：离开过程中
         3. v-leave-to：离开的终点
   2.  使用`<transition>`包裹要过度的元素，并配置name属性： 
```vue
<transition name="hello">
	<h1 v-show="isShow">你好啊！</h1>
</transition>
```
 

   3.  备注：若有多个元素需要过度，则需要使用：`<transition-group>`，且每个元素都要指定`key`值。 

## vue脚手架配置代理-解决Cors

### 方法一

```
在vue.config.js中添加如下配置：
```

```javascript
devServer:{
  proxy:"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

### 方法二

```
编写vue.config.js配置具体代理规则：
```

```javascript
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

## 插槽

1.  作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 **父组件 ===> 子组件** 。 
2.  分类：默认插槽、具名插槽、作用域插槽 
3.  使用方式： 
   1.  默认插槽： 
```vue
父组件中：
        <Category>
           <div>html结构1</div>
        </Category>
子组件中：
        <template>
            <div>
               <!-- 定义插槽 -->
               <slot>插槽默认内容...</slot>
            </div>
        </template>
```
 

   2.  具名插槽： 
```vue
父组件中：
        <Category>
            <template slot="center">
              <div>html结构1</div>
            </template>

            <template v-slot:footer>
               <div>html结构2</div>
            </template>
        </Category>
子组件中：
        <template>
            <div>
               <!-- 定义插槽 -->
               <slot name="center">插槽默认内容...</slot>
               <slot name="footer">插槽默认内容...</slot>
            </div>
        </template>
```
 

   3.  作用域插槽： 
      1.  理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定） 
      2.  具体编码： 
```vue
父组件中：
		<Category>
			<template scope="scopeData">
				<!-- 生成的是ul列表 -->
				<ul>
					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category>
			<template slot-scope="scopeData">
				<!-- 生成的是h4标题 -->
				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
			</template>
		</Category>
子组件中：
        <template>
            <div>
                <slot :games="games"></slot>
            </div>
        </template>
		
        <script>
            export default {
                name:'Category',
                props:['title'],
                //数据在子组件自身
                data() {
                    return {
                        games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                    }
                },
            }
        </script>
```
 **在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除**
> **v-slot把slot具名插槽和slot-scope作用域插槽合并了，如果我们想把内容插入center的具名插槽中，可以使用v-slot:center的写法，如果在插入的同时需要获取定义插槽时的props数据：data，就可以使用v-slot:center="{data:{games}}"的写法，简写形式：把v-slot:替换为#：#center="{data:{games}}",但是必须写插槽的名称，没有名称的插槽默认是default：#default="{data}"**

**合并前：**
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672933416702-83cee186-4d0e-4651-b92c-b2e7f7cc0c4f.png#averageHue=%23050403&clientId=u4b660c71-9f29-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=297&id=u21c74c78&name=image.png&originHeight=594&originWidth=1536&originalType=binary&ratio=1&rotation=0&showTitle=false&size=105195&status=done&style=none&taskId=u39926a25-2e68-476e-aff1-4acc75a450e&title=&width=768)
**合并后：**
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672933737662-d70c0dbf-393a-4497-81a9-36d0035cadde.png#averageHue=%23040303&clientId=u4b660c71-9f29-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=296&id=uf7d05276&name=image.png&originHeight=592&originWidth=1536&originalType=binary&ratio=1&rotation=0&showTitle=false&size=103776&status=done&style=none&taskId=u6ef598d6-5d3a-4d01-aaca-20b160c7082&title=&width=768)
**简写：**
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672933774235-90ee0464-cdde-4b16-8763-3d5525b0a839.png#averageHue=%23020202&clientId=u4b660c71-9f29-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=292&id=u6af19634&name=image.png&originHeight=584&originWidth=1516&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90437&status=done&style=none&taskId=u5ac182f8-df70-4810-b45d-c6f91750c45&title=&width=758)
## Vuex

![](https://cdn.staticaly.com/gh/redyouzi/images-for-blog@main/img01/vuex.792i56b2zqo0.png#crop=0&crop=0&crop=1&crop=1&id=A2N7C&originHeight=1412&originWidth=1800&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 1.概念

```
	在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
	安装:
	npm i vuex@3   (vue2使用vuex3,vue3使用vuex4)
```

### 2.何时使用？

```
	多个组件需要共享数据时
```

### 3.搭建vuex环境
> 注意：必须在创建store之前，使用Vuex插件，否则报错如下：

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672970773803-5190bd6f-a554-4cdc-b2e0-3f90376fb6d5.png#averageHue=%23fde9e8&clientId=uf0b918ee-63c7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=160&id=u72a08ca5&name=image.png&originHeight=320&originWidth=1162&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75350&status=done&style=none&taskId=u469d0348-2b47-44d4-a41b-562f7fc6817&title=&width=581)
> 即在store中的index.js文件下在创建store之前调用`Vue.use(Vuex)`


1.  创建文件：`src/store/index.js` 
```javascript
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
//Vue使用Vuex插件必须写在Vuex创建store之前 所以写在index.js中 而不写在main.js中 因为import存在提升的问题且js是单线程
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {
  xxx(context,value){
 //执行业务逻辑。。。   context对象中还有dispatch可以再进行业务逻辑处理 还有state进行数据判断 还有commit进行提交到mutations
    context.commit("XXX",value);
  }
}
//准备mutations对象——修改state中的数据
const mutations = {
  XXX(state,value){
 //修改state的数据   
    state.xx=value;
  }
}
//准备state对象——保存具体的数据
const state = {
  xx:xx,
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state
})
```
 

2.  在`main.js`中创建vm时传入`store`配置项 
```javascript
......
//引入store
import store from './store'
......

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
  // 给vm和vc身上绑定$store
	store,
})
```
 

### 4.基本使用

1.  初始化数据、配置`actions`、配置`mutations`，操作文件`store.js` 
```javascript
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引用Vuex
Vue.use(Vuex)

const actions = {
    //响应组件中加的动作
	add(context,value){
		// console.log('actions中的jia被调用了',miniStore,value)
		context.commit('ADD',value)
	},
}

const mutations = {
    //执行加
	ADD(state,value){
		// console.log('mutations中的JIA被调用了',state,value)
		state.sum += value
	}
}

//初始化数据
const state = {
   sum:0
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})
```
 

2.  组件中读取vuex中的数据：`$store.state.sum` 
3.  组件中修改vuex中的数据：`$store.dispatch('action中的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)` 
> 备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`

 

### 5.getters的使用(可进行逻辑复用)

1.  概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。 
2.  在`store.js`中追加`getters`配置 
```javascript
......

const getters = {
	bigSum(state){
		return state.sum * 10
	}
}

//创建并暴露store
export default new Vuex.Store({
	......
	getters
})
```
 

3.  组件中读取数据：`$store.getters.bigSum` 

### 6.四个map方法的使用

1.  **mapState方法：**用于帮助我们映射`state`中的数据为计算属性 
```javascript
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
     ...mapState({sum:'sum',school:'school',subject:'subject'}),
         
    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```
 

2.  **mapGetters方法：**用于帮助我们映射`getters`中的数据为计算属性 
```javascript
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```
 

3.  **mapActions方法：**用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数 
```javascript
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```
 

4.  **mapMutations方法：**用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数 
```javascript
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```
 

> 备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。


### 7.模块化+命名空间

1.  目的：让代码更好维护，让多种数据分类更加明确。 
2.  修改`store.js` 
```javascript
const countAbout = {
  namespaced:true,//开启命名空间
  state:{x:1},
  mutations: { ... },
  actions: { ... },
  getters: {
    bigSum(state){
       return state.sum * 10
    }
  }
}

const personAbout = {
  namespaced:true,//开启命名空间
  state:{ ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
```
 

3.  开启命名空间后，组件中读取state数据： 
```javascript
//方式一：自己直接读取
this.$store.state.personAbout.list
//方式二：借助mapState读取：
...mapState('countAbout',['sum','school','subject']),
```
 

4.  开启命名空间后，组件中读取getters数据： 
```javascript
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取：
...mapGetters('countAbout',['bigSum'])
```
 

5.  开启命名空间后，组件中调用dispatch 
```javascript
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions：
...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
```
 

6.  开启命名空间后，组件中调用commit 
```javascript
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations：
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
```
 

## 路由

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。

### 1.基本使用

1.  安装vue-router，命令：`npm i vue-router@3`(vue2安装3、vue3安装4) 
2.  应用插件：`Vue.use(VueRouter)` 
3.  编写router配置项:`src/router/index.js` 
```javascript
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由 组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露router实例对象，去管理一组一组的路由规则
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})

//暴露router
//export default router
```
 

4.  实现切换（active-class可配置高亮样式） 
```vue
<router-link active-class="active" to="/about">About</router-link>
```
 

5.  指定展示位置 
```vue
<router-view></router-view>
```
 

### 2.几个注意点

1. 路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的`$route`属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的`$router`属性获取到。

### 3.多级路由（多级路由）

1.  配置路由规则，使用children配置项： 
```javascript
routes:[
	{
		path:'/about',
		component:About,
	},
	{
		path:'/home',
		component:Home,
		children:[ //通过children配置子级路由
			{
        // 二级路由的path要么写全，要么只写news 不用加/ 因为默认是/news
				path:'news', //此处一定不要写：/news
				component:News
			},
			{
				path:'message',//此处一定不要写：/message
				component:Message
			}
		]
	}
]
```
 

2.  跳转（要写完整路径）： 
```vue
<router-link to="/home/news">News</router-link>
```
 

### 4.路由的query参数

1.  传递参数 
```vue
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">跳转</router-link>
				
<!-- 跳转并携带query参数，to的对象写法 -->
<router-link 
	:to="{
		path:'/home/message/detail',
		query:{
		   id:m.id,
       title:m.title,
		}
	}"
>跳转</router-link>
```
 

2.  接收参数： 
```javascript
$route.query.id
$route.query.title
```
 

### 5.命名路由

1.  作用：可以简化路由的跳转。 
2.  如何使用 
   1.  给路由命名： 
```javascript
{
	path:'/demo',
	component:Demo,
	children:[
		{
			path:'test',
			component:Test,
			children:[
				{
                      name:'hello' //给路由命名
					path:'welcome',
					component:Hello,
				}
			]
		}
	]
}
```
 

   2.  简化跳转： 
```vue
<!--简化前，需要写完整的路径 -->
<router-link to="/demo/test/welcome">跳转</router-link>

<!--简化后，直接通过名字跳转 -->
<router-link :to="{name:'hello'}">跳转</router-link>

<!--简化写法配合传递参数 -->
<router-link 
	:to="{
		name:'hello',
		query:{
		   id:666,
            title:'你好'
		}
	}"
>跳转</router-link>
```
 

### 6.路由的params参数

1.  配置路由，声明接收params参数 
```javascript
{
	path:'/home',
	component:Home,
	children:[
		{
			path:'news',
			component:News
		},
		{
			component:Message,
			children:[
				{
					name:'xiangqing',
					path:'detail/:id/:title', //使用占位符声明接收params参数
					component:Detail
				}
			]
		}
	]
}
```
 

2.  传递参数 
```vue
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="`/home/message/detail/${m.id}/${m.title}`">跳转</router-link>
				
<!-- 跳转并携带params参数，to的对象写法 -->
<router-link 
	:to="{
		name:'xiangqing',
		params:{
		   id:m.id,
            title:m.title
		}
	}"
>跳转</router-link>
```
  

3.  接收参数： 
```javascript
$route.params.id
$route.params.title
```
 

### 7.路由的props配置

```
作用：让路由组件更方便的收到参数
```

```javascript
{
	name:'xiangqing',
	path:'detail',
	component:Detail,

	//props的第一种写法，值为对象，该对象中所有的key和value都会以props传递给Detail组件
	// props:{a:900}

	//props的第二种写法(接收不了query)，值为布尔值，如果为true，则会将该路由收到的params参数，以props的形式传给Detail组件
	// props:true
	
	//props的第三种写法，值为函数，该函数的返回值会以props的形式传给Detail组件
  //目的让路由接收参数的时候直接使用props接收，不需要使用$router.query[params].xxx这么繁琐的方式
	props($route){
		return {
			id:$route.query.id,
			title:$route.query.title,
      a:"a",
      b:"b",
		}
	}
}
```

### 8.`<router-link>`的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为`push`和`replace`，`push`是追加历史记录，`replace`是替换当前记录。路由跳转时候默认为`push`
3. 如何开启`replace`模式：`<router-link replace .......>News</router-link>`

### 9.编程式路由导航

1.  作用：不借助`<router-link>`实现路由跳转，让路由跳转更加灵活 
2.  具体编码： 
```javascript
methods: {
    pushShow(m) {
      this.$router.push({
        path: "/home/message/detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        path: "/home/message/detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
this.$router.forward() //前进
this.$router.back() //后退
this.$router.go() //可前进也可后退
// 后退两步
this.$router.go(-2);
```

#### 注意，控制台报错问题的解决
> 当同一个导航被多次编程式调用的时候，会导致控制台出现`避免冗余导航到当前位置`报错

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672993858529-60e3ac0d-bd48-4c61-9202-c023bc25dca9.png#averageHue=%23faf0ef&clientId=u9ce88803-afae-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=328&id=udd162b1c&name=image.png&originHeight=656&originWidth=2240&originalType=binary&ratio=1&rotation=0&showTitle=false&size=290647&status=done&style=none&taskId=ue5d0d17e-e094-4b7a-9a58-4ef385560d8&title=&width=1120)
> 解决思路：VueRouter原型对象上的push和replace方法返回的是Promise对象，我们可以通过原型对象修改这两个方法，捕获错误信息不输出到控制台直接返回

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26314652/1672994053768-af42bf32-7498-4a34-b3f6-88ab5b68416d.png#averageHue=%232d313a&clientId=u9ce88803-afae-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=339&id=u806f8fef&name=image.png&originHeight=678&originWidth=1482&originalType=binary&ratio=1&rotation=0&showTitle=false&size=189312&status=done&style=none&taskId=u8cd364ea-bc57-4641-b445-de993ec7701&title=&width=741)
```javascript
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(loaction) {
  return originalPush.call(this, loaction).catch(err => err)
}
// replace方法同理
```

### tag属性

- 类型: string
- 默认值: "a"有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
```vue
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>
```
### 10.缓存路由组件

1.  作用：让不展示的路由组件保持挂载，不被销毁。 
2.  具体编码： 
```vue
<!-- 缓存多个 <keep-alive :include="['News','Message']"> -->
<keep-alive include="News"> 
    <router-view></router-view>
</keep-alive>
```
 

### 11.两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字： 
   1. `activated`路由组件被激活时触发。
   2. `deactivated`路由组件失活时触发。

### 12.路由守卫

1.  作用：对路由进行权限控制 
2.  分类：全局守卫、独享守卫、组件内守卫 
3.  全局守卫: 
```javascript
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to,from,next)=>{
	console.log('beforeEach',to,from)
	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
			next() //放行
		}else{
			alert('暂无权限查看')
			// next({name:'guanyu'})
		}
	}else{
		next() //放行
	}
})

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
	console.log('afterEach',to,from)
	if(to.meta.title){ 
		document.title = to.meta.title //修改网页的title
	}else{
		document.title = 'vue_test'
	}
})
```
 

4.  独享守卫: 
```javascript
beforeEnter(to,from,next){
	console.log('beforeEnter',to,from)
	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
		if(localStorage.getItem('school') === 'atguigu'){
			next()
		}else{
			alert('暂无权限查看')
			// next({name:'guanyu'})
		}
	}else{
		next()
	}
}
```
 

5.  组件内守卫： 
```javascript
//进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {
},
//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {
}
```
 

### 13.路由器的两种工作模式

1.  对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。 
2.  hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。 
3.  hash模式： 
   1. 地址中永远带着#号，不美观 。
   2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
   3. 兼容性较好。
4.  history模式： 
   1. 地址干净，美观 。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。

## 引入ElementUI

快速上手:[https://element.eleme.cn/#/zh-CN/component/quickstart](https://element.eleme.cn/#/zh-CN/component/quickstart)

注意:按需引入中

```javascript
presets: [
		//原先的presets配置项改为了
    ["@babel/preset-env", { "modules": false }],
  ],
```

components.js地址https://github.com/ElemeFE/element/blob/master/components.json
