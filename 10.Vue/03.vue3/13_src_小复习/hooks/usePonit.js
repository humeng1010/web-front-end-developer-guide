import { onMounted, reactive, onBeforeUnmount } from "vue";

// hooks本质是一个函数,把 setup 中使用的组合 api 进行了封装
// 优点:复用代码,逻辑清晰
export default function () {
    const point = reactive({
        x: 0,
        y: 0
    })
    function savePoint(e) {
        point.x = e.pageX
        point.y = e.pageY
        console.log(e.pageX, e.pageY)
    }
    onMounted(() => {
        window.addEventListener('mousemove', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', savePoint)
    })
    return point

}