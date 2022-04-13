<template>
    <div class="cube-box" @click="changeTheme" ref="cube">
        <div class="item">的</div>
        <div class="item">音</div>
        <div class="item">头</div>
        <div class="item">呆</div>
        <div class="item">鹅</div>
        <div class="item">乐</div>
    </div>
</template>

<script setup lang="ts">
import { ThemeType } from '@/theme/model'
import { setTheme } from '@/theme/index'
import { getRandom } from '@/utils/random';

const themeArr:ThemeType[] = [];
for (const item in ThemeType) {
    if (Object.prototype.hasOwnProperty.call(ThemeType, item)) {
        themeArr.push(item as ThemeType)
    }
}
const len = themeArr.length;

const changeTheme = () => {
    const index = getRandom(0, len);
    setTheme(themeArr[index]);
}


</script>

<style lang="less" scoped>
    .cube-box {
        position: relative;
        width: 80px;
        height: 80px;
        margin:50px;
        transform-style: preserve-3d;
        // transform: rotateX(10deg) rotateY(-15deg);
        animation: move 10s linear infinite;
        .item{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            box-sizing: border-box;
            border: 1px solid #fff;
            /* 前 */
            &:nth-of-type(1) {
                transform: translateZ(40px);
                // background: red;
            }
            /* 右 */
            &:nth-of-type(2) {
                transform: rotateY(90deg) translateZ(40px);
                // background: green;
            }
            /* 后 */
            &:nth-of-type(3) {
                transform: translateZ(-40px);
                // background: blue;
            }
            /* 左 */
            &:nth-of-type(4) {
                transform: rotateY(-90deg) translateZ(40px);
                // background: black;
            }
            /* 上 */
            &:nth-of-type(5) {
                transform: rotateX(90deg) translateZ(40px);
                // background: yellow;
            }
            /* 下 */
            &:nth-of-type(6) {
                transform: rotateX(-90deg) translateZ(40px);
                // background: white;
            }
            background-image: radial-gradient(#fff,rgba(255,255,255,0.1));
        }
    }

    @keyframes move{
        from {
            transform: rotate3d(1,1,1,0deg);
        }
        to {
            transform: rotate3d(1,1,1,360deg);
        }
    }
</style>