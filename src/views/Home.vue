<template>
    <div class="home">
        <div class="home-left">
            <Menu />
            <div class="theme">
                <Cube />
            </div>
        </div>
        <div class="home-right">
            <header>
                <Header />
            </header>
            <section>
                <router-view></router-view>    
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
        <PlayList />
    </div>
</template>

<script setup lang="ts">
    import Menu from '@/components/layout/menu/Menu.vue'
    import Header from '@/components/layout/header/Header.vue'
    import Footer from '@/components/layout/footer/Footer.vue'
    import Cube from '@/components/Cube.vue'
    import PlayList from '@/components/layout/playList/PlayList.vue'
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        color: @text;
        &-left{
            width: 224px;
            overflow: hidden;
            background-color: @bg;
            .theme{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        &-right{
            flex: 1;
            overflow: hidden;
            background-color: @bgLighten;
            display: flex;
            flex-direction: column;
            min-width: 580px;
            header{
                width: 100%;
                height: 56px;
            }
            section{
                flex: 1;
                width: 100%;
                overflow: hidden;
            }
            footer{
                width: 100%;
                height: 70px;
            }
        }
    }
</style>