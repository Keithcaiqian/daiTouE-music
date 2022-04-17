// 播放模式 单条循环 顺序播放 循环播放
<template>
    <IconPark 
        :icon="loopType===0?PlayOnce:loopType===1?LoopOnce:ShuffleOne" size="20" 
        :title="useTitle"
        :stroke-width="3"
        @click="togglePlayMode"
    />   
</template>

<script setup lang="ts">
    import IconPark from '@/components/common/IconPark.vue'
    import { usePlayerStore } from '@/store/player';
    import { LoopOnce, ShuffleOne, PlayOnce } from "@icon-park/vue-next";
    import { computed, toRefs } from 'vue-demi';

    const { loopType } = toRefs(usePlayerStore())
    const { togglePlayMode } = usePlayerStore();

    const useTitle = computed(() => {
        switch(loopType.value){
            case 0:
                return '单曲循环';
            case 1:
                return '列表循环';
            case 2:
                return '随机播放';
        }
    })

</script>