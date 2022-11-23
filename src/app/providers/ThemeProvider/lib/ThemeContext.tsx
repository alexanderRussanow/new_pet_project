import { createContext } from 'react';

export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme: ThemeEnum;
    setTheme: ( theme: ThemeEnum ) => void;
}

export const ThemeContext = createContext<ThemeContextProps>( {} as ThemeContextProps );

export const LS_THEME_CONTEXT_KEY = 'theme';
