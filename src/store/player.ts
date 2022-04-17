import { songUrlApi, songDetailApi } from '@/request/api';
import { defineStore } from 'pinia';
import type { Song } from '@/models/song'
import { onMounted, onUnmounted, toRefs, watchEffect } from 'vue';
import { getRandom } from '@/utils/random'

interface STATE {
    audio: HTMLAudioElement,
    loopType: number, 
    playList: Song[],
    isPlay: boolean,
    id: number,
    song: Song,
    volume: number,
    isMute: boolean,
    currentTime: number,
    duration: number,
    showPlayList: boolean
}

export const usePlayerStore =  defineStore('player',{
    state: (): STATE => ({
        audio: new Audio(), //audio对象
        loopType:0,//播放模式 0为单曲循环 1为列表循环 2为随机播放
        playList: [] as Song[],//播放列表,
        isPlay: false, //是否正在播放
        id: 0, //播放的音乐的id
        song: {} as Song, //正在播放的歌曲详情
        volume: 40, //音量 
        isMute: false, //是否静音   
        currentTime: 0, //当前播放的时间
        duration: 0, //歌曲总时间
        showPlayList: false,//是否显示播放的列表
    }),
    getters:{
        playListCount: state => state.playList.length,
        curSongIndex: state => state.playList.findIndex(song => song.id === state.id),
        nextSong(state): Song {
            const { curSongIndex, playListCount } = this;
            if(curSongIndex === playListCount - 1){
                return state.playList[0];
            }else{
                return state.playList[curSongIndex + 1];
            }
        },
        prevSong(state): Song {
            const { curSongIndex, playListCount } = this;
            if(curSongIndex === 0){
                return state.playList[playListCount - 1];
            }else{
                return state.playList[curSongIndex - 1];
            }
        }
    },
    actions:{
        // 设置播放模式
        setPlayMode(mode: number){
            this.loopType = mode;
            localStorage.setItem('player-mode',this.loopType.toString());
        },
        // 切换播放模式
        togglePlayMode(){
            this.setPlayMode((this.loopType + 1) % 3);
        },
        // 存入播放列表
        pushList(replace: boolean, ...list: Song[]){
            if (replace) {
                this.playList = list;
            }else{
                list.forEach(song => {
                    if (!this.playList.find(s => s.id == song.id)) {
                        this.playList.push(song)
                    }
                })
            }
        },
        // 清空列表
        clearPlayList(){
            this.pause();
            this.playList = [];
            this.id = 0;
            this.song = {} as Song;
            this.currentTime = 0;
            this.duration = 0;
        },
        // 请求并播放音乐
        async playById(id:number,song?:Song){
            this.isPlay = false;
            const data = await songUrlApi(id); //请求链接
            const songDetail = song || await songDetailApi(id); //请求详情

            this.audio.src = data.url;
            this.audio.play().then(res => {
                this.id = id;
                this.song = songDetail;
                this.pushList(false,this.song);
            },err => {
                console.log(err)
            });          
        },
        // 播放音乐
        play(){
            if(this.id === 0) return;
            this.isPlay = false;
            this.audio.play().catch(err => {
                console.log(err)
            });

        },
        // 重新播放
        replay(){
            setTimeout(() => {
                this.currentTime = 0;
                this.play();
            }, 1000); 
        },
        // 播放下一曲
        nextPlay(){
            if(this.id === 0) return;
            if(this.loopType === 2){
                this.randomPlay();
            }else{
                this.playById(this.nextSong.id,this.nextSong);
            }
        },
        // 播放上一曲
        prevPlay(){
            if(this.id === 0) return;
            if(this.loopType === 2){
                this.randomPlay();
            }else{
                this.playById(this.prevSong.id,this.prevSong);
            }        
        },
        // 随机播放
        randomPlay(){
            if(this.id === 0) return;
            const song: Song = this.playList[getRandom(0,this.playListCount - 1)];
            this.playById(song.id,song);
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
            switch(this.loopType){
                case 0:
                    this.replay();
                    break;
                case 1:
                    this.nextPlay();
                    break;
                case 2:
                    this.randomPlay();
                    break;
            }
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
    // 获取默认音量
    const volume: number = localStorage.getItem('player-volume') ? Number(localStorage.getItem('player-volume')) : 40;
    // 获取播放模式
    const loopType: number = localStorage.getItem('player-mode') ? Number(localStorage.getItem('player-mode')) : 1;

    const { 
        audio, 
        onPlay, 
        onPause, 
        onEnded, 
        setVolume, 
        setPlayMode,
        getSongTime 
    } = usePlayerStore();

    setVolume(volume);
    setPlayMode(loopType);

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