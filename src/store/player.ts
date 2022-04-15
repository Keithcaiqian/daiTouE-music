import { songUrlApi, songDetailApi } from '@/request/api';
import { defineStore } from 'pinia';
import type { Song } from '@/models/song'
import { onMounted, onUnmounted, toRefs, watchEffect } from 'vue';
import { watch } from 'vue';

interface STATE {
    audio: HTMLAudioElement,
    playList: Song[],
    isPlay: boolean,
    id: number,
    song: Song,
    volume: number,
    isMute: boolean,
    currentTime: number,
    duration: number,
}

export const usePlayerStore =  defineStore('player',{
    state: (): STATE => ({
        audio: new Audio(), //audio对象
        playList: [] as Song[],//播放列表,
        isPlay: false, //是否正在播放
        id: 0, //播放的音乐的id
        song: {} as Song, //正在播放的歌曲详情
        volume: 40, //音量 
        isMute: false, //是否静音   
        currentTime: 0, //当前播放的时间
        duration: 0, //歌曲总时间
    }),
    actions:{
        // 请求并播放音乐
        async playById(id:number){
            this.isPlay = false;
            const data = await songUrlApi(id); //请求链接
            const song = await songDetailApi(id); //请求详情

            this.audio.src = data.url;
            this.audio.play().then(res => {
                this.id = id;
                this.song = song;
            },err => {
                console.log(err)
            });          
        },
        // 存入播放列表
        pushList(replace: boolean, list: Song[]){
            if (replace) {
                this.playList = list;
            }else{
                list.forEach(song => {
                    if (!this.playList.some(s => s.id == song.id)) {
                        this.playList.push(song)
                    }
                })
            }
        },
        // 播放音乐
        play(){
            if(this.id === 0) return;
            this.isPlay = false;
            this.audio.play().catch(err => {
                console.log(err)
            });

        },
        //暂停音乐
        pause(){
            if(this.isPlay){
                this.audio.pause(); 
            }
        },
        // 监听播放
        onPlay(){
            this.isPlay = true;
            console.log('开始播放')
            setInterval(this.getSongTime,1000)
        },
        // 监听暂停
        onPause(){
            this.isPlay = false;
            console.log('暂停')
        },
        // 监听播放结束
        onEnded(){
            this.isPlay = false;
            console.log('结束')
        },
        // 切换播放状态
        togglePlay(){
            if(this.isPlay){
                this.pause(); 
            }else{
                this.play(); 
            }
        },
        // 获取歌曲详情
        async getSongDetail(){
            this.song = await songDetailApi(this.id);
        },
        // 设置音量
        setVolume(volume: number){
            volume = volume > 100 ? 100 : volume;
            volume = volume < 0 ? 0 : volume;
            this.volume = volume;
            this.audio.volume = volume / 100;
            localStorage.setItem('player-volume',volume.toString());
        },
        // 切换静音
        toggleMuted(){
            this.isMute = !this.isMute;
            this.audio.muted = this.isMute;
        },
        // 获取歌曲的时间
        getSongTime(){
            this.currentTime = this.audio.currentTime;
            this.duration = this.audio.duration || 0;
        },
        // 设置歌曲当前的时间
        setCurrentTime(time:number){
            this.audio.currentTime = time;
            this.currentTime = time
        }
    }
})

// 初始化音乐播放的一些设置
export function usePlayerStoreInit(){
    let timer:NodeJS.Timer;
    // 设置音量
    const volume: number = localStorage.getItem('player-volume') ? Number(localStorage.getItem('player-volume')) : 40;
    const { 
        audio, 
        onPlay, 
        onPause, 
        onEnded, 
        setVolume, 
        getSongTime 
    } = usePlayerStore();

    setVolume(volume);

    onMounted(() => {
        audio.onplay = onPlay;
        audio.onpause = onPause;
        audio.onended = onEnded;
        timer = setInterval(getSongTime,1000);
    }),
    onUnmounted(() => {
        audio.onplay = null;
        audio.onpause = null;
        audio.onended = null;
        clearInterval(timer);
    })
}