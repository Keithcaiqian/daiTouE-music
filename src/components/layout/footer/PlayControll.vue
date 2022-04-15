<template>
    <div class="controll-box">
        <PlayMode class="btn hover-text"/>
        <IconPark :icon="GoStart" size="28" class="btn hover-text" />
        <IconPark :icon="isPlay?PauseOne:Play" size="45" theme="filled" class="btn play-btn"
              @click="togglePlay"/>
        <IconPark :icon="GoEnd" size="28" class="btn hover-text" />
        <div class="btn voice-box" 
            @mouseenter="volumeShow" 
            @mouseleave="volumeHide">
            <IconPark :icon="VolumeSmall" size="20" :stroke-width="3" class="hover-text" />
            <PlayVoiceSlider 
                v-show="useVolumeShow" 
                :style="{opacity: useVolumeOpacity}"
                class="voice-slider"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, toRefs } from 'vue'

    import IconPark from '@/components/common/IconPark.vue'
    import PlayMode from './PlayMode.vue'
    import PlayVoiceSlider from './PlayVoiceSlider.vue'

    import {Play, PauseOne, GoEnd, GoStart, VolumeSmall} from "@icon-park/vue-next";
    import { usePlayerStore } from '@/store/player';

    // 播放、暂停音乐的action
    const { isPlay, togglePlay } = toRefs(usePlayerStore());
    
    let timer:any = null; //计时器
    const useVolumeShow = ref(false);
    const useVolumeOpacity = ref(1); //透明度 ，加一点过度效果
    // 显示音量控制条
    const volumeShow = () => {
        clearTimeout(timer);
        useVolumeShow.value = true;
        useVolumeOpacity.value = 1;
    }
    // 延迟隐藏音量控制条
    const volumeHide = () => {
        useVolumeOpacity.value = 0;
        timer = setTimeout(() => {
            useVolumeShow.value = false;
        },500)
    }

</script>


<style lang="less" scoped>
    .controll-box{
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
            margin: 0 6px;
        }
        .play-btn{
            color: @theme;
            cursor: pointer;
        }
        .voice-box{
            position: relative;
            .voice-slider{
                position: absolute;
                left: 50%;
                bottom: 34px;
                transform: translateX(-50%);
                transition: all .5s;;
            }
        }
    }
</style>