# React全家桶

推荐观看的视频地址：https://www.bilibili.com/video/BV1wy4y1D7JT

- 01 (第36天)
  
    - 01.hello_react

    - 02.虚拟DOM创建的两种方式

    - 03.jsx语法规则

    - 04.jsx小练习

- 02 (第37天)

    - 05.react中定义组件

    - 06.组件实例三大属性_state

    - 07.组件实例三大属性_props

    - 08.组件实例三大属性_refs

- 03 (第38天)

    - 09.React的事件处理

    - 10.react中收集表单数据

    - 11.组件的生命周期

- 04 (第39天)

    - 12.DOM的Diffing算法

    - 01.脚手架初始文件

    - 02.src_hello_react

    - 03_src_todoList

- 05 (第40天)

    - 04_src_配置代理(1.通过在package.json中添加proxy属性进行简单配置，或者在src下新建setupProxy.js文件并通过commonJS语法的require引入http-proxy-middleware中间件中的createProxyMiddleware函数进行详细配置,例如如下代码)

        - ```js
            const { createProxyMiddleware } = require('http-proxy-middleware');
            module.exports = function (app) {
            app.use(
                createProxyMiddleware('/api1', {
                    target: 'http://localhost:5000',
                    changeOrigin: true,
                    pathRewrite: { '^/api1': '' }
                })
            )}
            ```
    - 05_src_github搜索案例axios(使用axios发送请求获取数据)

    - 06_src_github搜索案例pubsub(使用消息订阅与发布实现任意组件之间的通信)
      
        - 首先需要使用npm下载pubsub-js第三方库`npm i pubsub-js`

        - 在需要订阅和发布的组件中引入库`import PubSub from 'pubsub-js'`

        - 在需要接收其他组件数据的组件中订阅消息，如下代码

            - ```jsx
                import React, { Component } from 'react'
                import PubSub from 'pubsub-js'
                export default class List extends Component {
                    state = {
                        items: [],
                        isFirst: true,//是否为第一次打开页面
                        isLoading: false,//是否处于加载中
                        err: '',//存储请求相关的错误信息
                    }
                    // 组件挂载完毕
                    componentDidMount() {
                        // 订阅消息
                        this.token = PubSub.subscribe('updateState', (_, data) => {
                            this.setState(data)
                        })
                    }
                    componentWillUnmount() {
                        PubSub.unsubscribe(this.token)
                    }
                    render() {
                        const { items, isFirst, isLoading, err } = this.state
                        return (
                            <div className="row">
                                ...
                            </div>
                        )
                    }
                }
              
                ```
            - 在需要传递数据的组件中发布消息，如下代码

                - ```jsx
                  import React, { Component } from 'react'
                  // import axios from 'axios'
                    import PubSub from 'pubsub-js'
                  
                  export default class Search extends Component {
                      search = async () => {
                          // 获取用户的输入，连续解构赋值+重命名
                          const { keyWordElement: { value: keyWord } } = this
                          if (!keyWord.trim()) return alert('请输入内容')
                        
                          // 发送请求前通知List更新状态
                          PubSub.publish('updateState', { isFirst: false, isLoading: true })
                          try {
                              const res = await fetch(`/api1/search/users2?q=${keyWord}`)
                              const data = await res.json()
                              
                              PubSub.publish('updateState', { isLoading: false, items: data.items })
                          } catch (error) {
                              console.log('请求出错', error);
                            
                              PubSub.publish('updateState', { isLoading: false, err: '出错了' })
                          }
                      }
                      
                      render() {
                          return (
                              <div>
                              	...
                            	</div>
                          )
                      }
                  }
                  
                  ```
      
    - 07_src_github搜索案例fetch(了解fetch技术也可以发送ajax请求)


​    