export default {
    // install可以接收到Vue构造函数这个参数
    install(Vue) {
        // 定义全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时(一上来)
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在的元素被插入到页面上
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析的时候
            update(element, binding) {
                element.value = binding.value
            }
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })
        // 给Vue原型对象上添加一个方法(vm和vc都可以使用了)
        Vue.prototype.hello = () => alert('你好呀')
    }
}