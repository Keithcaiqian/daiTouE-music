<template>
    <div class="playList scrollbar commonContainer">
        <Info :playlist="playlist" :playAll="() => playAll()"/>
        <div class="song-container">
            <el-tabs class="tabs" v-model="activeName">
                <el-tab-pane :label="`歌曲 ${songs.length}`" name="song">
                    <SongList :songs='songs'/>
                </el-tab-pane>
                <el-tab-pane label="评论" name="comments">评论</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import Info from './Info.vue'
    import SongList from './SongList.vue'

    import { onMounted, ref } from 'vue'
    import { playListDetailApi, playListTrackAllApi } from '@/request/api';
    import type { PlayListDetail } from '@/models/playlist';
    import type { Song } from '@/models/song';
    import { usePlayerStore } from '@/store/player';

    const { pushList, playById } = usePlayerStore();

    const activeName = ref('song')
    const playlist = ref<PlayListDetail>({} as PlayListDetail);
    const songs = ref<Song[]>([]);

    const playAll = () => {
        pushList(true,...songs.value)
        playById(songs.value[0].id);
    }

    const route = useRoute();
    
    onMounted(async () => {
        const id:number = Number(route.query.id);
        playlist.value = await playListDetailApi(id);

        songs.value = await playListTrackAllApi(id)
    })
</script>

<style lang="less" scoped>
    .playList{
        padding: 20px;
        .song-container{
            margin-top: 20px;
        }
        .tabs{
            /deep/.el-tabs__nav-wrap::after {
                height: 0;
            }
            /deep/.el-tabs__active-bar{
                background-color: @theme;
            }
            /deep/.el-tabs__item{
                color: @text;
                &.is-active{
                    color: @theme;
                }
                &:hover{
                    color: @theme;
                }
            }
        }
    }
</style>