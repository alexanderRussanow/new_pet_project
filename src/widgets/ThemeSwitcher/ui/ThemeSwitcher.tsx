import { ThemeEnum, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import DartIcon from '@/shared/assets/icons/iconDark.svg';
import LightIcon from '@/shared/assets/icons/iconLight.svg';
import { Button, ButtonThemeEnum } from '@/shared/ui/Button';
// styles
import classes from './ThemeSwitcher.module.scss';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo( ( { className } ) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ ButtonThemeEnum.CLEAR }
            className={ classNames(
                classes.themeSwitcher,
                {},
                [
                    className,
                    classes[ theme ]
                ] 
            ) }
            onClick={ toggleTheme }>
            {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DartIcon />}
        </Button>
    );
} );
