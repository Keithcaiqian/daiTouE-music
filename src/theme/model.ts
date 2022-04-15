export enum ThemeType {
    dark = 'dark',
    light = 'light',
    blue = 'blue',
    red = 'red',
    yellow = 'yellow',
    green = 'green',
}
interface ThemeValue {
    bgColor: string,
    bg_lightenColor: string,
    textColor: string,
    text_darkenColor: string,
    hover: string,
}

export type Themes = Record<ThemeType,ThemeValue>;

export const themes:Themes = {
    [ThemeType.dark]: {
        bgColor: '#000',
        bg_lightenColor:'#1a1a1a',
        textColor:'#fff',
        text_darkenColor: '#b3b3b3',
        hover: '#44403c',
    },
    [ThemeType.light]: {
        bgColor: '#ccc',
        bg_lightenColor:'#e6e6e6',
        textColor:'#333',
        text_darkenColor: '#666',
        hover: '#aeaea7',
    },
    [ThemeType.blue]: {
        bgColor: '#409eff',
        bg_lightenColor:'#40abff9c',
        textColor:'#fff',
        text_darkenColor: '#999',
        hover: '#95dae5',
    },
    [ThemeType.red]: {
        bgColor: '#c5605a',
        bg_lightenColor:'#ff440054',
        textColor:'#fff',
        text_darkenColor: '#999',
        hover: '#d16a6a',
    },
    [ThemeType.yellow]: {
        bgColor: '#dbdb70',
        bg_lightenColor:'#ffff0066',
        textColor:'#666',
        text_darkenColor: '#999',
        hover: '#dee051',
    },
    [ThemeType.green]: {
        bgColor: '#58d758',
        bg_lightenColor:'#52de52b3',
        textColor:'#fff',
        text_darkenColor: '#aaa',
        hover: '#2bc133',
    },
}