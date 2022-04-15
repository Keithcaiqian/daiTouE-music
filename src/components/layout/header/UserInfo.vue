<template>
    <div class="user-box">
        <img v-if="isLogin" class="avatar" src="" alt="">
        <span v-else class="avatarBg"></span>
        <span class="login-btn">{{ isLogin ? userName : '点击登录'}}</span>
    </div>
</template>

<script setup lang="ts">

interface userInfo {
    isLogin?: boolean,//是否登录
    avatar?: string, //头像
    userName?: string, //用户姓名
}

const props = defineProps<userInfo>()

</script>



<style lang="less" scoped>
    .user-box{
        display: flex;
        align-items: center;
        max-width: 100px;
        .avatar,
        .avatarBg{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        .avatarBg{
            background-color: #ccc;
        }
        .login-btn{
            font-size: 14px;
            margin-left: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: keep-all;
            cursor: default;
        }
    }
</style>