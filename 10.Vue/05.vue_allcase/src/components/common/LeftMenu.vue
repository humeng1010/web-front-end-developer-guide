<template>
    <div class="menu">
        <p>
        <h1>
            <RouterLink to="/vue3-case/01.setup" active-class="active">
                01.初识setup
            </RouterLink>
        </h1>
        </p>

        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                02.setup-ref
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/03.reactive" active-class="active">
                03.reactive
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/04.computed" active-class="active">
                04.computed
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                05.watch
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                06.watchEffect
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                07.Life cycle
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                08.hooks
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                08.hooks
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                08.hooks
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                08.hooks
            </RouterLink>
        </h1>
        </p>
        <p>
        <h1>
            <RouterLink to="/vue3-case/02.setup-ref" active-class="active">
                08.hooks
            </RouterLink>
        </h1>
        </p>



    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style lang="less" scoped>
.menu {
    position: fixed;
    top: 3.75rem;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    border-right: 0.0625rem solid rgba(84, 84, 88, 0.48);

    transition: all .3s;
    z-index: 9;

    p {
        padding: 0.35rem 1.5rem 0.35rem 1.25rem;
        margin: 20px 0;

        h1 {
            font-size: 1.625rem;
        }

        h2 {
            font-size: 1.5rem;
        }


        .active {
            transition: color .8s;
            color: orange;
        }


    }

}
</style>