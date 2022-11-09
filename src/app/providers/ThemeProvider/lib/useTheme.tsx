import { useContext } from 'react';
import { LS_THEME_CONTEXT_KEY, ThemeContext, ThemeEnum } from './ThemeContext';

interface UseThemeResult {
   theme: ThemeEnum;
   toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    // destructuring theme enum
    const { LIGHT, DARK } = ThemeEnum;
    // context theme
    const { theme, setTheme } = useContext( ThemeContext );
    // toggle theme
    const toggleTheme = () => {
        const newTheme = theme === LIGHT ? DARK : LIGHT;
        setTheme( newTheme );
        localStorage.setItem(
            LS_THEME_CONTEXT_KEY,
            newTheme 
        );
    };

    return { theme, toggleTheme };
};
