function animate(ele, target, callback) {
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        // 步长公式
        var step = (target - ele.offsetLeft) / 10
        // 左右判断
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (ele.offsetLeft === target) {
            clearInterval(ele.timer)
            // 回调函数写到定时器里面
            // 如果有回调函数
            /*  if (callback) {
                 // 调用函数
                 callback()
             } */
            //  如果没有callback则不看后面的 短路运算符
            callback && callback()
            return
        }
        ele.style.left = ele.offsetLeft + step + 'px'
    }, 16)
}