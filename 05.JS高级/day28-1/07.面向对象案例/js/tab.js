var that;
class Tab {
    constructor(id) {
        that = this
        // 获取元素
        this.main = document.querySelector(id)

        this.add = this.main.querySelector('.tabadd')
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        // section的父元素
        this.fsection = this.main.querySelector('.tabscon')
        this.init()

    }
    init() {
        this.updateNode()
        // init初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab

        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            // 注意是lis[i]调用的方法 则方法中的this指向的就是lis[i]
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            // 给span添加双击编辑事件 注意是ondblclick
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab

        }
    }
    // 获取所有的li 和 section  可以在添加后再重新调用方法
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    // 1.切换功能
    toggleTab() {
        that.clearClass()
        // console.log(this.index);
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'

    }
    // 清除所有li 和 section的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    // 2.添加功能
    addTab() {

        that.clearClass()
        let random = Math.random()
        // 1.创建li元素 和section元素
        let li = `<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`
        let section = `<section class="conactive">测试${random}</section>`
        // 2.把这两个元素追加到对应的父元素里面
        // 把使用字符串创建的元素追加到ul的指定的位置beforeend 末尾的前面
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)

        that.init()
    }
    // 3.删除功能
    removeTab(e) {
        // 阻止冒泡 防止触发li的切换
        e.stopPropagation();
        let index = this.parentNode.index
        console.log(index);
        // 根据索引号 删除对应的li 和section  remove()方法可以直接删除元素
        that.lis[index].remove()
        that.sections[index].remove()

        that.init()

        // 如果有li处于选定状态 就不执行下面的点击事件
        if (document.querySelector('.liactive')) return
        // 当我们删除了选定状态的li的时候 让前一个li处于选定状态
        index--
        // 解决一开始就删除第一个出现没有选定的状态
        index === -1 ? index = 0 : index = index
        // 手动调用点击事件 不需要鼠标触发
        // 短路运算符 当没有li的时候不点击
        that.lis[index] && that.lis[index].click()
    }
    // 4.编辑功能 双击后变为文本框 失去焦点后取掉文本框
    editTab() {
        let str = this.innerHTML
        // alert(11)
        this.innerHTML = `<input type="text" />`

        let input = this.children[0]
        input.value = str
        // 让文本框里面的文字处于选定状态
        input.select()

        // 当文本框失去焦点的时候 把文本框里面的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur()
            }
        }

    }
}

new Tab('#tab');