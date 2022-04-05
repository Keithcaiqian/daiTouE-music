<template>
    <div class="songCard">
        <img :src="url" class="img">
        <div class="card-right">
            <div class="name">{{ name }}</div>
            <div class="singer">{{ singer }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        url:string,
        name:string,
        singer:string
    }>()
</script>


<style lang="less" scoped>
    .songCard{
        width: 100%;
        display: flex;
        height: 48px;
        overflow: hidden;
        .img{
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            border-radius: 4px;
        }
        .card-right{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 8px;
            box-sizing: border-box;
            font-size: 12px;
            .name{
                word-break: break-all;
            }
            .singer{
                color: @textDarken;
                word-break: break-all;
            }
        }
    }
</style>