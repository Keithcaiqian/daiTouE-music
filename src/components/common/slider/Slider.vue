<template>
    <div ref="slideDom" class="sliderBox" @mouseup="sliderBoxClick">
        <div class="slider"  
            @mouseup.stop="slideClick" 
            :style="style"
        >
            <div 
                :class="{drag: isMove}" 
                class="slider-dot-box" 
                @mouseup.stop 
                @mousedown.prevent="mousedown"
            >
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref, watchEffect } from 'vue'
    import { Direction } from './slider'
    
    const props = defineProps<{
        direct?: Direction,
        modelValue: number, //百分比
    }>();
    const emit = defineEmits(['update:modelValue']);
    const direct = props.direct || Direction.Up; //方向

    const slideDom = ref<HTMLElement>();
    let allDis:number = 0; //进度条总长度
    let isMove = ref<boolean>(false); // 是否开始移动
    let initDis:number;  // 初始移动时候鼠标的位置
    let startSlide:number; //初始移动的时候进度条的长度
    const useSlide = ref<number>(0); //进度条实际的长度
    let style = computed(() => {
        switch(direct){
            case Direction.Up : 
            case Direction.Down : 
                return {
                    height: useSlide.value + 'px'
                }
            case Direction.Left : 
            case Direction.Right : 
                return {
                    width: useSlide.value + 'px'
                }
        }
    }); //内联样式

    // 初始化
    const init = () => {
        const observer = new ResizeObserver(() => {
            switch(direct){
                case Direction.Up : 
                case Direction.Down : 
                    allDis = slideDom.value ?.offsetHeight || 0;
                    break;
                case Direction.Left : 
                case Direction.Right : 
                    allDis = slideDom.value ?.offsetWidth || 0;
                    break;
            }
            useSlide.value = props.modelValue / 100 * allDis;
            startSlide = props.modelValue / 100 * allDis;
        });
        observer.observe(slideDom.value as HTMLElement);
    }
    watchEffect(() => {
        useSlide.value = props.modelValue / 100 * allDis;
    })
    watchEffect(() => {
        switch(direct){
            case Direction.Up : 
            case Direction.Down : 
                allDis = slideDom.value ?.offsetHeight || 0;
                break;
            case Direction.Left : 
            case Direction.Right : 
                allDis = slideDom.value ?.offsetHeight || 0;
                break;
        }
    })
    // 浅色进度条区域点击
    const sliderBoxClick = (e:any) => {
        switch(direct){
            case Direction.Up : 
                useSlide.value = move(allDis - e.offsetY);
                break;
            case Direction.Down : 
                useSlide.value = move(e.offsetY);
                break;
            case Direction.Left : 
                useSlide.value = move(e.offsetX);
                break;
            case Direction.Right : 
                useSlide.value = move(allDis - e.offsetX);
                break;
        }
    }
    // 深色进度条区域点击
    const slideClick = (e:any) => {
        switch(direct){
            case Direction.Up : 
                useSlide.value = move(useSlide.value - e.offsetY);
                break;
            case Direction.Down : 
                useSlide.value = move(e.offsetY);
                break;
            case Direction.Left : 
                useSlide.value = move(e.offsetX);
                break;
            case Direction.Right : 
                useSlide.value = move(useSlide.value - e.offsetX);
                break;
        }
    }
    // 计算移动后的数值
    const move = (dis:number) : number => {
        dis = dis > allDis ? allDis : dis;
        dis = dis < 0 ? 0 : dis;
        dis = Math.round(dis)
        emit('update:modelValue',Math.round(dis / allDis * 100));
        return dis;
    }
    // 鼠标按下
    const mousedown = (e:any) => {
        switch(direct){
            case Direction.Up : 
            case Direction.Down : 
                initDis = e.clientY;
                break;
            case Direction.Left : 
            case Direction.Right : 
                initDis = e.clientX;
                break;
        }
        startSlide = useSlide.value;
        isMove.value = true;
        document.addEventListener('mousemove',mousemove,true);
        document.addEventListener('mouseup',mouseup,true);
    }
    // 鼠标移动
    const mousemove = (e:any) => {
        e.preventDefault();
        if(isMove){
            switch(direct){
                case Direction.Up : 
                    useSlide.value = move(initDis - e.clientY + startSlide);
                    break;
                case Direction.Down : 
                    useSlide.value = move(e.clientY - initDis + startSlide);
                    break;
                case Direction.Left : 
                    useSlide.value = move(e.clientX - initDis + startSlide);
                    break;
                case Direction.Right : 
                    useSlide.value = move(initDis - e.clientX + startSlide);
                    break;
            }
            // console.log(initDis,e.clientY,startSlide)
        }
    }
    // 鼠标抬起
    const mouseup = (e:any) => {
        e.preventDefault();
        isMove.value = false;
        document.removeEventListener('mousemove',mousemove,true);
        document.removeEventListener('mouseup',mouseup,true);
    }

    onMounted(init);
</script>
