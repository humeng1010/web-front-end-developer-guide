<template>
    <div class="nav-bar">
        <a href="/" class="logo">
            Pomelo
        </a>
        <div class="links">
            <div class="search">搜索🔍</div>
            <div class="nav-links">
                <div class="nav-item">
                    <router-link to="/basics" class="nav-link">
                        前端基础
                    </router-link>
                </div>
                <div class="nav-item">
                    <router-link to="/basics-js" class="nav-link">
                        JS基础
                    </router-link>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">
                        JS高级
                    </a>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">
                        React
                    </a>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">
                        Vue
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 3.75rem;
    padding: .6875rem 1.5rem;
    border-bottom: .0625rem solid rgba(84, 84, 88, .48);

    background-color: #111827;
}

.logo {
    font-size: 1.5rem;
    transition: color .5s;
}

.logo:hover {
    color: orange;
}

.links {
    display: flex;
    align-items: center;
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-links .nav-item {
    padding: .625rem 1.25rem;
}

.nav-link {
    display: block;
    height: 1.875rem;
    line-height: 1.875rem;
    font-weight: 500;
    border-bottom: .125rem solid transparent;
    transition: border .3s;
}

.nav-link:hover {
    border-bottom: .125rem solid orange;
}
</style>