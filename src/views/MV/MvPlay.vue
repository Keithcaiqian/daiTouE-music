<template>
    <div class="MvPlay scrollbar commonContainer">
        <video class="video" :src="useUrl" autoplay controls></video>
    </div>
</template>

<script setup lang="ts">
    import { mvUrlApi } from "@/request/api";
    import { usePlayerStore } from "@/store/player";
    import { onUnmounted, ref } from "vue";
    import { onMounted } from "vue-demi";
    import { useRoute } from "vue-router";

    const route = useRoute();

    const id = Number(route.query.id); //mv的id
    const useUrl = ref<string>('');

    //如果正在播放音乐，则暂停音乐的播放，退出后继续播放
    const { isPlay, play, pause } = usePlayerStore(); 

    onMounted(async () => {
        const { url } = await mvUrlApi(id);
        useUrl.value = url;

        if(isPlay){
            pause();
        }
    })

    onUnmounted(() => {

        if(isPlay){
            setTimeout(() => {
                play();
            },1000)        
        }
    })
</script>


<style lang="less" scoped>
    .MvPlay{
        .video{
            width: 100%;
        }
    }
</style>