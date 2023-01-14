import bili_url from '@assets/svgs/bili.svg?url'
// 引入的时候后面可以根参数
import bili_raw from '@assets/svgs/bili.svg?raw'
// console.log(bili_url, bili_raw)

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

