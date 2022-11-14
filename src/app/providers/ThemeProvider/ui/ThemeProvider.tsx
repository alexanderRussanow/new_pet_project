import React, { useMemo, useState } from 'react';
import { LS_THEME_CONTEXT_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext';

const defaultTheme = ( localStorage.getItem( LS_THEME_CONTEXT_KEY ) as ThemeEnum ) || ThemeEnum.LIGHT;

interface ThemeProviderProps {
    initialTheme?: ThemeEnum;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ( { children, initialTheme } ) => {
    // state
    const [
        theme,
        setTheme
    ] = useState( initialTheme || defaultTheme );
    
    // memoize context value
    const defaultProps = useMemo(
        () => ( {
            theme,
            setTheme,
        } ),
        [
            theme,
            setTheme
        ]
    );

    return <ThemeContext.Provider value={ defaultProps }>{children}</ThemeContext.Provider>;
};
