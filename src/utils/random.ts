// 从指定范围获取随机数
export function getRandom(min:number,max:number){
    return Math.floor(Math.random() * (max - min)) + min; 
}