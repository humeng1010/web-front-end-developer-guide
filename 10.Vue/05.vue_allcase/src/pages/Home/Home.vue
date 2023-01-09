<template>
    <div class="home">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <!-- 使用fullpage的图片懒加载后,会从 public 文件夹下进行查找图片,注意修改路径 -->
                <img data-src="../src/assets/logo.png" alt="" style="width: 200px;height: 200px;">
                <h1 class="main-title">Pomelo</h1>
                <h4>这是一个可以帮助你学习前端的网站</h4>
                <div class="entry">
                    <router-link to="/basics" class="btn btn-primary">基础</router-link>
                    <router-link to="/basics-js" class="btn btn-primary">JS</router-link>
                </div>
            </div>
            <div class="section">Second section ...</div>
            <div class="section">Second section ...</div>
        </full-page>

    </div>
</template>

<script>
import { reactive, getCurrentInstance, onMounted, ref } from 'vue'
export default {
    name: "Home",
    components: {},
    setup() {
        const fullpage = ref(null)
        const instance = getCurrentInstance()
        // 由于 setup 执行的时机比组件挂载到页面上要早,所以需要等待组件被挂载完毕后获取
        onMounted(() => {
            console.log('第一种获取 ref 的方法', fullpage.value)
            console.log('第二种获取 ref 的方法', instance.ctx.$refs.fullpage)
        })
        const options = reactive({
            // 如果您在非开源项目中使用 fullPage，那么您应该使用购买 fullPage 商业许可证时提供的许可证密钥
            // 项目是开源的并且它与 GPLv3 许可证兼容，您可以使用该选项 gplv3-license
            licenseKey: 'gplv3-license',
            menu: '#menu',
            // 锚点
            anchors: ['page1', 'page2', 'page3'],
            // 颜色
            sectionsColor: ['#111827', '#111827', '#111827'],
            navigation: true
        })
        return {
            options,
            fullpage
        }
    }
}

</script>

<style lang="css" scoped>
.home {
    margin-top: 3.75rem;
    text-align: center;
}

.main-title {
    font-size: 3rem;
}

.entry {
    display: flex;
    justify-content: center;
}

.entry>.btn {
    margin: 1.25rem;
}
</style>