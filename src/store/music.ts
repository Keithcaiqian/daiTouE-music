import { ref } from 'vue'
import { defineStore } from 'pinia';
import type { Personalized, PersonalizedNewSong } from '@/models/personalized';
import { personalizedApi, personalizedNewSongApi } from '@/request/api';

export const useMusicStore = defineStore('music',()=>{
    const personalized = ref<Personalized[]>([]); //专属歌单
    const getPersonalized = async () => {
        if(personalized.value.length > 0){
            return;
        }
        personalized.value = await personalizedApi();
    }

    const personalizedNewSong = ref<PersonalizedNewSong[]>([]); //推荐新音乐
    const getPersonalizedNewSong = async () => {
        if(personalizedNewSong.value.length > 0){
            return;
        }
        personalizedNewSong.value = await personalizedNewSongApi();
    }

    return {
        personalized,
        getPersonalized,

        personalizedNewSong,
        getPersonalizedNewSong
    }
})