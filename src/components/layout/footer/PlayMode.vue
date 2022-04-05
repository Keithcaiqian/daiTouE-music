// 播放模式 单条循环 顺序播放 循环播放
<template>
    <IconPark 
        :icon="loopType===0?PlayOnce:loopType===1?LoopOnce:ShuffleOne" size="20" 
        :stroke-width="3"
    />   
</template>

<script setup lang="ts">
    import IconPark from '@/components/common/IconPark.vue'
    import { LoopOnce, ShuffleOne, PlayOnce } from "@icon-park/vue-next";
    defineProps<{
        loopType?: number,
    }>();

</script>