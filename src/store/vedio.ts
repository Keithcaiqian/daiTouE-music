import { ref } from 'vue'
import { defineStore } from 'pinia';
import type { PersonalizedMv } from '@/models/personalized';
import { personalizedMvApi } from '@/request/api';

export const useVedioStore = defineStore('vedio',()=>{
    const personalizedMv = ref<PersonalizedMv[]>([]); //获取推荐mv
    const getPersonalizedMvApi = async () => {
        if(personalizedMv.value.length > 0){
            return;
        }
        personalizedMv.value = await personalizedMvApi();
    }

    return {
        personalizedMv,
        getPersonalizedMvApi,
    }
})