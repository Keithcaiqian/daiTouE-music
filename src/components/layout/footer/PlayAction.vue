<template>
    <div class="action-box">
        <div class="time btn">
            <span class="time-left">00:00</span>
            <span> / </span>
            <span class="time-right">00:00</span>
        </div>
        <IconPark :icon="TextMessage" size="18" :stroke-width="3" class="btn hover-text" title="歌词"/>
        <IconPark :icon="MusicList" size="18" :stroke-width="3" class="btn hover-text" title="播放列表"/>
    </div>
</template>

<script setup lang="ts">
    import IconPark from '@/components/common/IconPark.vue'
    import {MusicList, TextMessage} from '@icon-park/vue-next'

</script>


<style lang="less" scoped>
    .action-box{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .time{
            font-size: 12px;
        }
        .btn{
            margin: 0 6px;
        }
    }
</style>