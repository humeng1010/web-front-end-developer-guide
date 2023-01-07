import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    // 实现鼠标打点相关数据
    let point = reactive({
        x: 0,
        y: 0,
    });
    // 实现鼠标打点方法
    function savePoint(e) {
        point.x = e.pageX;
        point.y = e.pageY;
        // console.log(e.pageX, e.pageY);
    }
    // 实现鼠标打点的钩子
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });
    return point
}