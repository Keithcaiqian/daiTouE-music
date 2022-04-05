<template>
    <div class="progress">
        <div class="barBg"></div>
        <div class="bar">
            <div class="bar-dot"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .progress{
        width: 100%;
        position: relative;
        height: 10px;
        .barBg,
        .bar{
            width: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 2px;
        }
        .barBg{
            background-color: #999;
        }
        .bar{
            background-color: @theme;
            width: 50%;
            &-dot{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(50%,-50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: @theme;
                background-image: radial-gradient(@theme,#fff);
                cursor: pointer;
                transition: all .3s;
                opacity: 0;
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
</style>