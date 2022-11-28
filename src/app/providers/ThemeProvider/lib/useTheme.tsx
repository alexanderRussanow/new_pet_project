import { useContext } from 'react';
import { LS_THEME_CONTEXT_KEY, ThemeContext, ThemeEnum } from './ThemeContext';

interface UseThemeResult {
    theme: ThemeEnum;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    // destructuring theme enum
    const { LIGHT, DARK, VIOLET } = ThemeEnum;
    // context theme
    const { theme, setTheme } = useContext( ThemeContext );
    // toggle theme
    const toggleTheme = () => {
        let newTheme;

        switch ( theme ) {
            case LIGHT:
                newTheme = DARK;
                break;
            case DARK:
                newTheme = VIOLET;
                break;
            case VIOLET:
                newTheme = LIGHT;
                break;
            default:
                newTheme = LIGHT;
        }

        setTheme && setTheme( newTheme );
        localStorage.setItem(
            LS_THEME_CONTEXT_KEY,
            newTheme 
        );
    };

    return { theme: theme || ThemeEnum.LIGHT, toggleTheme };
};
