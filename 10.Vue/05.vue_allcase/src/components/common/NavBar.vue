<template>
    <div class="nav-bar">
        <a href="/" class="logo">
            <img src="../../assets/logo.png" alt="logo">
            Pomelo
        </a>
        <div class="links">
            <div class="nav-links">
                <div class="nav-item">
                    <router-link to="/basics" class="nav-link" active-class="active">
                        前端基础
                    </router-link>
                </div>
                <div class="nav-item">
                    <router-link to="/basics-js" class="nav-link" active-class="active">
                        JS基础
                    </router-link>
                </div>
                <!-- <div class="nav-item">
                    <a href="#" class="nav-link">
                        React
                    </a>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">
                        Vue
                    </a>
                </div> -->
                <div class="nav-item">
                    <router-link to="/vue3-case/01.setup" class="nav-link" active-class="active">
                        Vue3案例
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="less" scoped>
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

    .logo {
        display: flex;
        font-size: 1.5rem;
        height: 3.125rem;
        align-items: center;
        transition: color .5s;

        img {
            height: 100%;
        }

        &:hover {
            color: orange;
        }
    }

    .links {
        display: flex;
        align-items: center;

        .nav-links {
            display: flex;
            align-items: center;

            .nav-item {
                padding: .625rem 1.25rem;

                .nav-link {
                    display: block;
                    height: 1.875rem;
                    line-height: 1.875rem;
                    font-weight: 500;
                    border-bottom: .125rem solid transparent;
                    transition: border .3s;

                    &:hover {
                        border-bottom: .125rem solid orange;
                    }
                }

                .active {
                    border-bottom: .125rem solid orange;
                }
            }
        }
    }
}
</style>