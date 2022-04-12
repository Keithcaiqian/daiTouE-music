export enum ThemeType {
    dark = 'dark',
    light = 'light',
    blue = 'blue',
}
interface ThemeValue {
    bgColor: string,
    bg_lightenColor: string,
    textColor: string,
    text_darkenColor: string,
}

export type Themes = Record<ThemeType,ThemeValue>;

export const themes:Themes = {
    [ThemeType.dark]: {
        bgColor: '#000',
        bg_lightenColor:'#1a1a1a',
        textColor:'#fff',
        text_darkenColor: '#b3b3b3'
    },
    [ThemeType.light]: {
        bgColor: '#ccc',
        bg_lightenColor:'#e6e6e6',
        textColor:'#333',
        text_darkenColor: '#666'
    },
    [ThemeType.blue]: {
        bgColor: '#409effba',
        bg_lightenColor:'#40abff9c',
        textColor:'#fff',
        text_darkenColor: '#999'
    },
}