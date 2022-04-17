export const debounce = function(callback:Function,time: number) {
    let timer:any;
    return function() {
        clearTimeout(timer);
        const args = arguments; //利用闭包保存参数数组
        timer = setTimeout(() => {
            callback.apply(null,args);
        }, time);
    }
} 