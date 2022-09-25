import React, { useMemo, useState } from 'react';
import { LS_THEME_CONTEXT_KEY, ThemeContext, ThemeEnum } from './ThemeContext';

const defaultTheme = localStorage.getItem(LS_THEME_CONTEXT_KEY) as ThemeEnum || ThemeEnum.LIGHT;

const ThemeProvider: React.FC = ({ children }) => {
   // state
   const [ theme, setTheme ] = useState(defaultTheme);
   // memoize context value
   const defaultProps = useMemo(() => ({
      theme,
      setTheme,
   }), [ theme, setTheme ]);

   return (
      <ThemeContext.Provider value={defaultProps}>
         { children }
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;