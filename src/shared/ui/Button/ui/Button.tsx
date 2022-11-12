import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Button.module.scss';

export enum ButtonThemeEnum {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSizeEnum {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemeEnum;
    size?: ButtonSizeEnum;
    square?: boolean;
}

export const Button: React.FC<ButtonProps> = ( { className, children, size = ButtonSizeEnum.MEDIUM, theme, square, ...props } ) => (
    <button
        className={ classNames(
            classes.button,
            { [ classes.square ]: square },
            [
                className,
                classes[ theme ],
                classes[ size ]
            ] 
        ) }
        { ...props }>
        {children}
    </button>
);
