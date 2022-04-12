<template>
    <div class="personalizedNewSong">
        <Title title='推荐新音乐'/>
        <div class="new-song">
            <div class="new-song-item md-3 sm-2" v-for="song in personalizedNewSong" :key="song.id">
                <SongCard 
                    :url='song.picUrl' 
                    :name='song.name' 
                    :singer='song.song.artists[0].name'
                    @click="playById(song.id)"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Title from '@/components/common/Title.vue'
    import SongCard from '@/components/common/SongCard.vue'
    import { onMounted, toRefs } from 'vue-demi'
    import { useMusicStore } from '@/store/music'
    import { usePlayerStore } from '@/store/player';

    const { personalizedNewSong } = toRefs(useMusicStore());
    const { getPersonalizedNewSong } = useMusicStore();

    // 播放音乐的action
    const { playById } = usePlayerStore();

    onMounted(async () => {
        await getPersonalizedNewSong();
    })

</script>

<style lang="less" scoped>
    .new-song{
        margin: 0 -8px;
        .new-song-item{
            padding: 0 8px 10px;
            box-sizing: border-box;
            display: inline-block;
        }
    }
</style>