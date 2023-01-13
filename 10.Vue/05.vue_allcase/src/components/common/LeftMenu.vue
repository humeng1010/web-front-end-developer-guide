<template>
    <div class="menu">
        <p>
        <h1>
            <router-link to="/vue3-case/01.setup">
                01.初识setup
            </router-link>
        </h1>
        </p>
        <p>
        <h1>
            <router-link to="/vue3-case/02.setup-ref">
                02.setup-ref
            </router-link>
        </h1>
        </p>


    </div>
</template>

<script setup lang="ts">

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


    }
}
</style>