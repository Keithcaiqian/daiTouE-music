<template>
    <div class="footer">
        <PlayProgress />
        <div class="play-main">
            <PlaySong class="flex1"/>
            <PlayControll class="flex1"/>
            <PlayAction class="flex1"/>      
        </div>
    </div>
</template>

<script setup lang="ts">
    import PlayProgress from './PlayProgress.vue'
    import PlaySong from './PlaySong.vue'
    import PlayControll from './PlayControll.vue'
    import PlayAction from './PlayAction.vue'
</script>

<style lang="less" scoped>
    .footer{
        width: 100%;
        height: 70px;
        .flex1{
            width: 33.3333%;
        }
        .play-main{
            display: flex;
            align-items: center;
            height: 60px;
            padding: 0 20px;
            box-sizing: border-box;
        }
    }
</style>