<template>
    <div class="menu">
        <p>标题1</p>
        <p>标题2</p>
        <p>标题3</p>
        <p>标题4</p>
        <p>标题5</p>
        <p>标题6</p>
        <p>标题7</p>
        <p>标题8</p>
        <p>标题9</p>
        <p>标题10</p>
        <p>标题10</p>
        <p>标题10</p>
        <p>标题10</p>


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
        font-size: 30px;
        padding: 0.35rem 1.5rem 0.35rem 1.25rem;
        margin: 20px 0;
    }
}
</style>