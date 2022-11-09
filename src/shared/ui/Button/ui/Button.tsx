import { classNames } from 'shared/lib/UtilityMethods';
// styles
import classes from './Button.module.scss';

export enum ButtonThemeEnum {
   CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string
   theme?: ButtonThemeEnum
}

export const Button: React.FC<ButtonProps> = ( {
    className, children, theme, ...props
} ) => (
    <button
        className={ classNames(
            classes.button,
            {},
            [
                className,
                classes[ theme ]
            ] 
        ) }
        { ...props }>
        {children}
    </button>
);
