import { ThemeType, themes } from './model';

const changeStyle = (obj: any) => {
    for(let key in obj){
        document
            .getElementsByTagName('body')[0]
            .style.setProperty(`--${key}`,obj[key]);
    }
}

export const setTheme = function(theme: ThemeType){
    localStorage.setItem('theme',ThemeType[theme]);
    changeStyle(themes[theme]);
}

export const initTheme = function(){
    const theme = localStorage.getItem('theme');
    if(theme && (theme in themes)){
        setTheme(theme as ThemeType);
    }
}