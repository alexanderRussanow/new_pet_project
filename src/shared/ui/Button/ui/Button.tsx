import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Button.module.scss';

export enum ButtonThemeEnum {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
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
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ( { className, children, size = ButtonSizeEnum.MEDIUM, theme, square, disabled, ...props } ) => (
    <button
        disabled={ disabled }
        className={ classNames(
            classes.button,
            { [ classes.square ]: square, [ classes.disabled ]: disabled },
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
