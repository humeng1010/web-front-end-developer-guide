// 立即执行函数 并传递接收两个参数 window和document对象
(function flexible(window, document) {
    // 获取html根标签 用于设置font字体大小 因为rem单位就是相对html字体大小的单位
    var docEl = document.documentElement
    // 获取设备的物理像素比 mac电脑为2
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    // 设置body的字体大小
    function setBodyFontSize() {
        // 如果有body标签 则设置body字体大小为12*物理像素比 px
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        // 如果没有body就是页面还没有加载完毕 则等待内容加载完毕(DOMContentLoaded不包含图片等)再次调用这个函数
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    // 把设备划分为10等份
    function setRemUnit() {
        // 获取html的宽度 即浏览器内容的宽度 并除以 10
        var rem = docEl.clientWidth / 10
        // 设置html根标签的字体大小
        docEl.style.fontSize = rem + 'px'
    }

    // 先执行一次这个函数
    setRemUnit()

    // reset rem unit on page resize
    // 给window添加监听大小改变的事件 并执行设置rem单位的函数
    window.addEventListener('resize', setRemUnit)
    // 当页面显示出来的时候也执行这个函数 解决火狐浏览器的页面缓存问题
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    // 让移动端设备支持0.5px像素的设置
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))
