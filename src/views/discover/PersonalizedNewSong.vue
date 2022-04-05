<template>
    <div class="personalizedNewSong">
        <Title title='推荐新音乐'/>
        <div class="new-song">
            <div class="new-song-item md-3 sm-2" v-for="song in personalizedNewSong" :key="song.id">
                <SongCard :url='song.picUrl' :name='song.name' :singer='song.song.artists[0].name'/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Title from '@/components/common/Title.vue'
    import SongCard from '@/components/common/SongCard.vue'
    import { onMounted, toRefs } from 'vue-demi'
    import { useMusicStore } from '@/store/music'

    const { personalizedNewSong } = toRefs(useMusicStore());
    const { getPersonalizedNewSong } = useMusicStore();

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