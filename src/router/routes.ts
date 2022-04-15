import { getAsyncPage } from "@/utils/index";
import { routerName } from './routerName'

const Discover = getAsyncPage("../views/discover/Discover.vue");
const Music = getAsyncPage("../views/music/Music.vue");
const Video = getAsyncPage("../views/video/Video.vue");
const Radio = getAsyncPage("../views/radio/Radio.vue");
const Like = getAsyncPage("../views/like/Like.vue");
const Local = getAsyncPage("../views/local/Local.vue");
const Download = getAsyncPage("../views/download/Download.vue");
const Recently = getAsyncPage("../views/recently/Recently.vue");
const MvPlay = getAsyncPage("../views/MV/MvPlay.vue");
const PlayList = getAsyncPage("../views/playList/PlayList.vue");

export default [
  {
    path:'/',
    redirect: {name:  routerName.discover},
  },
  { 
    path: "/discover",
    name: routerName.discover,
    component: Discover,
    meta:{
      menu: routerName.discover
    } 
  },
  { 
    path: "/music",
    name: routerName.music,
    component: Music,
    meta:{
      menu: routerName.music
    } 
  },
  { 
    path: "/video",
    name: routerName.video,
    component: Video,
    meta:{
      menu: routerName.video
    } 
  },
  { 
    path: "/radio",
    name: routerName.radio,
    component: Radio,
    meta:{
      menu: routerName.radio
    } 
  },
  { 
    path: "/like",
    name: routerName.like,
    component: Like,
    meta:{
      menu: routerName.like
    } 
  },
  { 
    path: "/local",
    name: routerName.local,
    component: Local,
    meta:{
      menu: routerName.local
    } 
  },
  { 
    path: "/download",
    name: routerName.download,
    component: Download,
    meta:{
      menu: routerName.download
    } 
  },
  { 
    path: "/recently",
    name: routerName.recently,
    component: Recently,
    meta:{
      menu: routerName.recently
    } 
  },
  { 
    path: "/mvPlay",
    name: routerName.mvPlay,
    component: MvPlay,
  },
  {
    path:'/playList',
    name:routerName.playList,
    component: PlayList
  }
];