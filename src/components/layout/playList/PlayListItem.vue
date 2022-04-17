<template>
    <div class="list-item" :class="{active: active}">
        <div class="list-item-left">
            <img :src="song.al?.picUrl" class="avatar">
        </div>
        <div class="list-item-center">
            <span class="song">{{ song.name }}</span>
            <span class="singer">{{ song.ar && song.ar[0] ? song.ar[0].name : '' }}</span>
        </div>
        <div class="list-item-right">{{ useFormatDuring(song.dt / 1000) }}</div>
    </div>
</template>

<script setup lang="ts">
    import { Song } from '@/models/song';
    import { useFormatDuring } from '@/utils/number'

    defineProps<{
        active: boolean,
        song: Song
    }>()
</script>


<style lang="less" scoped>
    .list-item{
        box-sizing: border-box;
        padding: 10px;
        height: 60px;
        display: flex;
        align-items: center;
        font-size: 12px;
        border-left: 2px solid transparent;
        &.active{
            border-left-color: @theme;
            color: @theme;
        }
        &:hover{
            background-color: @hover;
        }
        &-left{
            width: 40px;
            margin-right: 8px;
            .avatar{
                width: 40px;
                height: 40px;
            }
        }
        &-center{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        &-right{
            margin-left: 20px;
        }
    }
</style>