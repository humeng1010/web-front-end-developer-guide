// 注意这样引入Component并不是解构赋值!!!而是react中使用了多中暴露方式默认暴露和分别暴露;使用{}只能引入分别暴露的东西!!
import React, { Component } from 'react';

import Hello from './components/Hello';
import Welcome from './components/Welcome';
// 创建并暴露App
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
