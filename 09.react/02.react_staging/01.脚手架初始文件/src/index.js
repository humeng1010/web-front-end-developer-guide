import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 使用React.StrictMode检查我们App下的代码书写是否有不合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// 记录页面性能的
reportWebVitals();
