import { classNames } from 'shared/lib/utility/UtilityMethods';
// style
import classes from './Text.module.scss';

export enum TextThemeEnum {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
}

interface TextProps {
    className?: string;
    title?: string;
    content?: string;
    theme?: TextThemeEnum;
}

export const Text: React.FC<TextProps> = ( { className, title, content, theme = TextThemeEnum.INFO } ) => {
    return (
        <div
            className={ classNames(
                classes.text,
                {},
                [
                    className,
                    classes[ theme ]
                ] 
            ) }>
            {title ? <p className={ classes.title }>{title}</p> : null}
            {content ? <p className={ classes.content }>{content}</p> : null}
        </div>
    );
};
