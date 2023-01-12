import helloworld from './hello-world'
// 引入图片会被打包为资源路径
// http://127.0.0.1:5500/12.webpack/05.asset-modules/dist/c9201818dcc3e1f9c383.png
import imgsrc from './assets/logo.png'
import love from './assets/love.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/youzi.jpg'
import './style.css'
import './style.less'

helloworld()
console.log(imgsrc)

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width:600px;height:600px'
img2.src = love
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width:200px;height:200px;background:skyblue'
block.classList.add('block-bg')
block.textContent = exampleTxt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width:600px;height:600px;display:block'
img3.src = jpgMap
document.body.appendChild(img3)

document.body.classList.add('hello')