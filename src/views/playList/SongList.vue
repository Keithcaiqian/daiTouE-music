<template>
    <div class="songList">
        <div class="songList-header">
            <div class="w-30">歌曲</div>
            <div class="w-1/4">歌手</div>
            <div class="w-1/4">专辑</div>
            <div class="w-1/5">时长</div>
        </div>
        <div class="songList-body">
            <template v-for="song in songs.slice(0,usePageSize * useCurPage)" :key="song.id">
                <SongListItem :song='song'/>
            </template>
        </div>
        <div class="more" v-if="isMore" @click="addMore">加载更多</div>
    </div>
</template>

<script setup lang="ts">
    import SongListItem from '@/components/common/SongListItem.vue';
    import { Song } from '@/models/song';
    import { computed, ref } from 'vue';

    const props = defineProps<{
        songs: Song[]
    }>();

    const usePageSize = ref(10); //每次加载10个
    const useCurPage = ref(1); //当前页数

    // 是否显示加载更多按钮
    const isMore = computed(() => {
        return usePageSize.value * useCurPage.value < props.songs.length
    })

    const addMore = () => {
        useCurPage.value += 1; 
    }
</script>

<style lang="less" scoped>
    .songList-header{
        display: flex;
        padding: 8px 0;
        font-size: 12px;
        color: @textDarken;
        .w-30{
            width: 30%;
        }
        .w-1\/4{
            width: 25%;
        }
        .w-1\/5{
            width: 20%;
        }
    }
    .more{
        color: @theme;
        text-align: center;
        padding: 20px 0;
    }
</style>