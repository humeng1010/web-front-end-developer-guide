/**
 * 该文件中分别暴露的就是一个个的对象，对象中可以写组件的任意的options，例如data，methods，computed，mounted等等
 */
export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('组件挂载完毕')
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}