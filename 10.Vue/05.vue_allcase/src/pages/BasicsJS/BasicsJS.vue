<template>
    <div class="basics-js">
        <div class="container">
            <div class="content">
                <h1>
                    简介¶
                </h1>
                在 Vue School 上观看免费视频课程
                <p>
                    Pinia 起始于 2019 年 11 月左右的一次实验，其目的是设计一个拥有组合式 API 的 Vue 状态管理库。从那时起，我们就倾向于同时支持 Vue 2 和 Vue
                    3，并且不强制要求开发者使用组合式
                    API，我们的初心至今没有改变。除了安装和 SSR 两章之外，其余章节中提到的 API 均支持 Vue 2 和 Vue 3。虽然本文档主要是面向 Vue 3 的用户，但在必要时会标注出 Vue
                    2
                    的内容，因此 Vue 2 和 Vue 3
                    的用户都可以阅读本文档。
                </p>

                <h2>
                    为什么你应该使用 Pinia？¶
                </h2>
                <p>

                    Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state =
                    reactive({})
                    来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：
                </p>

                <h2>

                    Devtools 支持
                </h2>
                <p>

                    追踪 actions、mutations 的时间线
                    在组件中展示它们所用到的 Store
                    让调试更容易的 Time travel
                </p>
                <h2>

                    热更新
                </h2>
                <p>

                    不必重载页面即可修改 Store
                    开发时可保持当前的 State
                    插件：可通过插件扩展 Pinia 功能
                </p>
                <h2>
                    为什么你应该使用 Pinia？¶
                </h2>
                <p>

                    Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state =
                    reactive({})
                    来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：
                </p>

                <h2>

                    Devtools 支持
                </h2>
                <p>

                    追踪 actions、mutations 的时间线
                    在组件中展示它们所用到的 Store
                    让调试更容易的 Time travel
                </p>
                <h2>

                    热更新
                </h2>
                <p>

                    不必重载页面即可修改 Store
                    开发时可保持当前的 State
                    插件：可通过插件扩展 Pinia 功能
                </p>
                <h2>
                    为什么你应该使用 Pinia？¶
                </h2>
                <p>

                    Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state =
                    reactive({})
                    来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：
                </p>

                <h2>

                    Devtools 支持
                </h2>
                <p>

                    追踪 actions、mutations 的时间线
                    在组件中展示它们所用到的 Store
                    让调试更容易的 Time travel
                </p>
                <h2>

                    热更新
                </h2>
                <p>

                    不必重载页面即可修改 Store
                    开发时可保持当前的 State
                    插件：可通过插件扩展 Pinia 功能
                </p>

            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.basics-js {

    .container {
        margin: 0 auto;
        padding: 0 1.5rem 4rem;
        max-width: 48rem;

        .content {
            h1 {
                margin: 20px 0;
            }

            h2 {
                margin: 16px 0;
            }
        }
    }
}
</style>